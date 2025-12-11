// Pricing constants and calculation utilities

export const PRICING = {
  platformFee: {
    min: 30000,
    max: 120000,
    default: 50000,
    notches: [30000, 60000, 90000, 120000],
  },
  creditTiers: [
    { commitment: 1000000, rate: 0.35, label: "$1M Commitment" },
    { commitment: 500000, rate: 0.40, label: "$500K Commitment" },
    { commitment: 300000, rate: 0.50, label: "$300K Commitment" },
    { commitment: 100000, rate: 0.60, label: "$100K Commitment" },
    { commitment: 10000, rate: 0.70, label: "$10K Commitment" },
    { commitment: 0, rate: 0.80, label: "Pay as you go" },
  ],
  userCredits: {
    standard: 50,
    power: 100,
    normal: 50,
    casual: 10,
  },
  perUserPricing: {
    monthlyRate: 120,
    minimumUsers: 30,
  },
} as const;

export type CommitmentTier = 0 | 10000 | 100000 | 300000 | 500000 | 1000000;

export interface UserBreakdown {
  power: number;
  normal: number;
  casual: number;
}

export interface CustomCredits {
  standard?: number;
  power?: number;
  normal?: number;
  casual?: number;
}

export function calculateMonthlyCredits(
  users: number,
  mode: "simple" | "advanced",
  breakdown?: UserBreakdown,
  customCredits?: CustomCredits
): number {
  const standardRate = customCredits?.standard ?? PRICING.userCredits.standard;
  const powerRate = customCredits?.power ?? PRICING.userCredits.power;
  const normalRate = customCredits?.normal ?? PRICING.userCredits.normal;
  const casualRate = customCredits?.casual ?? PRICING.userCredits.casual;

  if (mode === "simple") {
    return users * standardRate;
  }

  if (!breakdown) return 0;

  return (
    breakdown.power * powerRate +
    breakdown.normal * normalRate +
    breakdown.casual * casualRate
  );
}

export function calculateAnnualCredits(monthlyCredits: number): number {
  return monthlyCredits * 12;
}

export function getCreditRate(commitment: CommitmentTier): { rate: number; tier: string } {
  for (const tier of PRICING.creditTiers) {
    if (commitment >= tier.commitment) {
      return { rate: tier.rate, tier: tier.label };
    }
  }
  return { rate: 0.80, tier: "Pay as you go" };
}

export function calculateAnnualCreditCost(annualCredits: number, commitment: CommitmentTier): number {
  const { rate } = getCreditRate(commitment);
  return annualCredits * rate;
}

export function calculateEffectiveCreditCost(
  annualCredits: number,
  commitment: CommitmentTier
): { effectiveCost: number; projectedUsage: number; usesFullCommitment: boolean } {
  const { rate } = getCreditRate(commitment);
  const projectedUsage = annualCredits * rate;
  const effectiveCost = Math.max(commitment, projectedUsage);
  return {
    effectiveCost,
    projectedUsage,
    usesFullCommitment: commitment > projectedUsage,
  };
}

export function calculateSavings(annualCredits: number, commitment: CommitmentTier): number {
  const payAsYouGoCost = annualCredits * 0.80; // Base rate
  const { effectiveCost } = calculateEffectiveCreditCost(annualCredits, commitment);
  return Math.max(0, payAsYouGoCost - effectiveCost);
}

export interface TierAnalysis {
  commitment: CommitmentTier;
  label: string;
  rate: number;
  effectiveCost: number;
  savings: number;
  isOptimal: boolean;
}

export interface OptimalCommitmentResult {
  optimalTier: CommitmentTier;
  optimalLabel: string;
  optimalCost: number;
  currentSavingsIfSwitched: number;
  allTiers: TierAnalysis[];
}

export function findOptimalCommitment(annualCredits: number, currentCommitment?: CommitmentTier): OptimalCommitmentResult {
  const payAsYouGoCost = annualCredits * 0.80;
  
  const allTiers: TierAnalysis[] = PRICING.creditTiers.map((tier) => {
    const projectedUsage = annualCredits * tier.rate;
    const effectiveCost = Math.max(tier.commitment, projectedUsage);
    const savings = payAsYouGoCost - effectiveCost;
    
    return {
      commitment: tier.commitment as CommitmentTier,
      label: tier.label,
      rate: tier.rate,
      effectiveCost,
      savings,
      isOptimal: false,
    };
  });
  
  // Find the tier with the lowest effective cost
  let optimalIndex = 0;
  let minCost = allTiers[0].effectiveCost;
  
  for (let i = 1; i < allTiers.length; i++) {
    if (allTiers[i].effectiveCost < minCost) {
      minCost = allTiers[i].effectiveCost;
      optimalIndex = i;
    }
  }
  
  allTiers[optimalIndex].isOptimal = true;
  
  // Calculate how much the user would save by switching from current to optimal
  let currentSavingsIfSwitched = 0;
  if (currentCommitment !== undefined) {
    const currentTier = allTiers.find(t => t.commitment === currentCommitment);
    if (currentTier && !currentTier.isOptimal) {
      currentSavingsIfSwitched = currentTier.effectiveCost - minCost;
    }
  }
  
  return {
    optimalTier: allTiers[optimalIndex].commitment,
    optimalLabel: allTiers[optimalIndex].label,
    optimalCost: minCost,
    currentSavingsIfSwitched,
    allTiers,
  };
}

export function calculatePerUserPricing(users: number): {
  annual: number;
  monthly: number;
  meetsMinimum: boolean;
} {
  const effectiveUsers = Math.max(users, PRICING.perUserPricing.minimumUsers);
  const monthly = effectiveUsers * PRICING.perUserPricing.monthlyRate;
  return {
    annual: monthly * 12,
    monthly,
    meetsMinimum: users >= PRICING.perUserPricing.minimumUsers,
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-US").format(num);
}

export interface QuoteParams {
  company: string;
  domain?: string;
  logoUrl?: string;
  platformFee: number;
  mode: "simple" | "advanced";
  users?: number;
  powerUsers?: number;
  normalUsers?: number;
  casualUsers?: number;
  enablePerUser?: boolean;
  commitment?: CommitmentTier;
  // Custom credit rates
  standardCredits?: number;
  powerCredits?: number;
  normalCredits?: number;
  casualCredits?: number;
}

export function encodeQuoteParams(params: QuoteParams): string {
  const searchParams = new URLSearchParams();
  searchParams.set("company", params.company);
  if (params.domain) searchParams.set("domain", params.domain);
  if (params.logoUrl) searchParams.set("logoUrl", params.logoUrl);
  searchParams.set("platformFee", params.platformFee.toString());
  searchParams.set("mode", params.mode);

  if (params.mode === "simple" && params.users !== undefined) {
    searchParams.set("users", params.users.toString());
  } else if (params.mode === "advanced") {
    if (params.powerUsers !== undefined) searchParams.set("power", params.powerUsers.toString());
    if (params.normalUsers !== undefined) searchParams.set("normal", params.normalUsers.toString());
    if (params.casualUsers !== undefined) searchParams.set("casual", params.casualUsers.toString());
  }

  if (params.enablePerUser) {
    searchParams.set("perUser", "1");
  }

  if (params.commitment !== undefined) {
    searchParams.set("commitment", params.commitment.toString());
  }

  // Custom credit rates - only encode if different from defaults
  if (params.standardCredits !== undefined && params.standardCredits !== PRICING.userCredits.standard) {
    searchParams.set("stdCr", params.standardCredits.toString());
  }
  if (params.powerCredits !== undefined && params.powerCredits !== PRICING.userCredits.power) {
    searchParams.set("pwrCr", params.powerCredits.toString());
  }
  if (params.normalCredits !== undefined && params.normalCredits !== PRICING.userCredits.normal) {
    searchParams.set("nrmCr", params.normalCredits.toString());
  }
  if (params.casualCredits !== undefined && params.casualCredits !== PRICING.userCredits.casual) {
    searchParams.set("cslCr", params.casualCredits.toString());
  }

  return searchParams.toString();
}

export function decodeQuoteParams(search: string): QuoteParams {
  const params = new URLSearchParams(search);

  return {
    company: params.get("company") || "Your Company",
    domain: params.get("domain") || undefined,
    logoUrl: params.get("logoUrl") || undefined,
    platformFee: parseInt(params.get("platformFee") || PRICING.platformFee.default.toString(), 10),
    mode: (params.get("mode") as "simple" | "advanced") || "simple",
    users: parseInt(params.get("users") || "100", 10),
    powerUsers: parseInt(params.get("power") || "10", 10),
    normalUsers: parseInt(params.get("normal") || "50", 10),
    casualUsers: parseInt(params.get("casual") || "40", 10),
    enablePerUser: params.get("perUser") === "1",
    commitment: (parseInt(params.get("commitment") || "0", 10) as CommitmentTier) || 0,
    // Custom credit rates - use defaults if not specified
    standardCredits: params.has("stdCr") ? parseInt(params.get("stdCr")!, 10) : PRICING.userCredits.standard,
    powerCredits: params.has("pwrCr") ? parseInt(params.get("pwrCr")!, 10) : PRICING.userCredits.power,
    normalCredits: params.has("nrmCr") ? parseInt(params.get("nrmCr")!, 10) : PRICING.userCredits.normal,
    casualCredits: params.has("cslCr") ? parseInt(params.get("cslCr")!, 10) : PRICING.userCredits.casual,
  };
}

export function getLogoUrl(domain?: string, logoUrl?: string): string | null {
  if (logoUrl) return logoUrl;
  if (domain) return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
  return null;
}

// ROI Calculation Constants and Functions
export const ROI_SCENARIOS = {
  prototype: {
    name: "Prototype Development",
    traditionalCost: 15000, // Conservative freelancer/small agency cost
    monthlyCredits: 100,
    description: "Building one working prototype per month",
  },
  dashboard: {
    name: "Sales Productivity Dashboard",
    closeRateIncrease: 0.002, // 0.2%
    revenueBySize: {
      small: 2000000,       // $2M - conservative small business
      midMarket: 20000000,  // $20M - conservative mid-market
      enterprise: 100000000, // $100M - conservative enterprise
    },
    monthlyCredits: 50,
    description: "Internal tool improving sales close rate by 0.2%",
  },
  presentation: {
    name: "Sales/Marketing Presentation",
    traditionalCost: 300, // Designer time + coordination
    monthlyCredits: 15,
    description: "Professional presentation in minutes vs hours",
  },
} as const;

export type CompanySize = 'small' | 'midMarket' | 'enterprise';

export interface ROIResult {
  traditionalCost: number;
  lovableCost: number;
  savings: number;
  roiMultiple: number;
}

export interface DashboardROIResult {
  revenueImpact: number;
  lovableCost: number;
  roiMultiple: number;
}

export function calculatePrototypeROI(creditRate: number = 0.60): ROIResult {
  const traditionalCost = 12 * ROI_SCENARIOS.prototype.traditionalCost;
  const lovableCost = ROI_SCENARIOS.prototype.monthlyCredits * 12 * creditRate;
  const savings = traditionalCost - lovableCost;
  const roiMultiple = Math.round(traditionalCost / lovableCost);
  return { traditionalCost, lovableCost, savings, roiMultiple };
}

export function calculateDashboardROI(companySize: CompanySize, creditRate: number = 0.60): DashboardROIResult {
  const revenue = ROI_SCENARIOS.dashboard.revenueBySize[companySize];
  const revenueImpact = revenue * ROI_SCENARIOS.dashboard.closeRateIncrease;
  const lovableCost = ROI_SCENARIOS.dashboard.monthlyCredits * 12 * creditRate;
  const roiMultiple = Math.round(revenueImpact / lovableCost);
  return { revenueImpact, lovableCost, roiMultiple };
}

export function calculatePresentationROI(creditRate: number = 0.60): ROIResult {
  const traditionalCost = 12 * ROI_SCENARIOS.presentation.traditionalCost;
  const lovableCost = ROI_SCENARIOS.presentation.monthlyCredits * 12 * creditRate;
  const savings = traditionalCost - lovableCost;
  const roiMultiple = Math.round(traditionalCost / lovableCost);
  return { traditionalCost, lovableCost, savings, roiMultiple };
}
