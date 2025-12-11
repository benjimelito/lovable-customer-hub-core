# Demo Page PRD - Enterprise Quote Generator

## Overview

The Demo page (`/demo`) serves a dual purpose:
1. **Showcase Lovable's capabilities** - Demonstrate what can be built with Lovable
2. **Interactive Enterprise Quote Generator** - A fully functional pricing calculator that prospects can use

This is a "meta" demo - the tool itself is a demonstration of Lovable's power while providing real value to enterprise prospects evaluating pricing.

## Engagement Goals

**Primary THINK:** Impact, Future
**Primary FEEL:** Inspired, Enabled

### Goal Implementation

| Goal | How to Achieve |
|------|----------------|
| **Impact** | Show that THIS calculator was built in Lovable - "We built this quote tool in 2 hours" |
| **Future** | "Imagine what your team could build" - this is a preview of their capabilities |
| **Inspired** | Beautiful, interactive UI that feels enterprise-grade |
| **Enabled** | Self-serve pricing exploration without needing a sales call |

### Key Messaging
- Header: "See what you can build with Lovable"
- Subheader: "This Enterprise Quote Generator was built entirely in Lovable - your team could build tools like this too"
- CTA: "Get Your Custom Quote" / "Share with Team"

## Design Constraints

⚠️ **DO NOT MODIFY:**
- Existing Card component styles
- Animation configurations
- Color scheme and design tokens

## Feature Requirements

### 1. Demo Introduction Section

Display before the calculator:
- Video thumbnail/player showing Lovable in action
- "Built with Lovable" badge
- Time to build indicator ("Built in ~2 hours")
- Brief explanation of what the tool does

### 2. Enterprise Quote Generator

#### 2.1 Company Context Card
- Company name (pre-filled from CustomerContext)
- Company logo (fetched via domain)
- Industry badge
- Contact info summary

#### 2.2 Usage Estimator

**Simple Mode** (Default):
- Single slider: Total users (30 - 100,000)
- Display: Credits per user (50/month default)
- Show: Total monthly credits, annual credits

**Advanced Mode** (Toggle):
- Three sliders for user types:
  - Power Users (100 credits/month) - Heavy builders
  - Normal Users (50 credits/month) - Regular users
  - Casual Users (10 credits/month) - Light users
- User count breakdown visualization
- Total credits calculation

#### 2.3 Commitment Tier Selector

Radio group with all tiers:
```
○ $1M Commitment → $0.35/credit (Best Rate)
○ $500K Commitment → $0.40/credit
○ $300K Commitment → $0.50/credit
○ $100K Commitment → $0.60/credit
○ $10K Commitment → $0.70/credit
● Pay-as-you-go → $0.80/credit (No commitment)
```

Features:
- Highlight "Recommended" tier based on usage
- Show potential savings if not on optimal tier
- Tooltip explaining commitment model

#### 2.4 Platform Fee Selector

- Slider: $30K - $120K annual platform fee
- Notches at $30K, $60K, $90K, $120K
- Tooltip: "Platform fee includes SSO, support, SLA"

#### 2.5 Pricing Model Toggle

Option to compare:
- Credit-based pricing (default)
- Per-user pricing ($120/user/month, 30 user minimum)

### 3. Quote Summary Card

Display calculated results:

```
┌────────────────────────────────────────┐
│  Your Annual Quote                     │
│  ─────────────────────                 │
│  Platform Fee:          $50,000        │
│  Credit Cost:           $36,000        │
│  ─────────────────────                 │
│  Total Annual:          $86,000        │
│  Monthly Equivalent:    $7,167         │
│  Cost per User:         $71.67         │
│                                        │
│  ✓ Saving $12,000 vs pay-as-you-go    │
│  💡 Switch to $100K tier to save $4K   │
└────────────────────────────────────────┘
```

### 4. Cost Breakdown Section

Expandable/accordion showing:
- Formula used for calculation
- Credit calculation breakdown
- Comparison to pay-as-you-go rate
- Whether commitment floor applies

### 5. ROI Calculator (Optional Section)

Three ROI scenarios:
1. **Prototype Development**: $15K traditional vs Lovable cost
2. **Sales Dashboard**: Revenue impact from 0.2% close rate increase
3. **Presentations**: $300/presentation traditional vs Lovable

### 6. Quote Actions

- **Copy Quote Link**: Shareable URL with all params encoded
- **Download PDF** (future): Generate PDF quote
- **Share with Team**: Copy link with message
- **Book Call**: Link to AE's Calendly

## Component Structure

```
src/pages/DemoPage.tsx
├── HubLayout
│   ├── Demo Introduction
│   │   ├── Video/Thumbnail
│   │   ├── "Built with Lovable" Badge
│   │   └── Description
│   ├── Quote Generator
│   │   ├── CompanyContextCard
│   │   ├── UsageEstimator
│   │   │   ├── ModeToggle (Simple/Advanced)
│   │   │   ├── UserSlider OR UserBreakdownSliders
│   │   │   └── CreditsSummary
│   │   ├── CommitmentSelector
│   │   │   ├── TierRadioGroup
│   │   │   └── OptimalTierIndicator
│   │   ├── PlatformFeeSlider
│   │   └── PricingModelToggle
│   ├── QuoteSummaryCard
│   │   ├── CostBreakdown
│   │   ├── SavingsIndicator
│   │   └── OptimalTierSuggestion
│   ├── ROICalculator (collapsible)
│   │   ├── PrototypeROI
│   │   ├── DashboardROI
│   │   └── PresentationROI
│   └── QuoteActions
│       ├── CopyLinkButton
│       ├── ShareButton
│       └── BookCallButton
```

## Component Files to Create

| Component | File | Description |
|-----------|------|-------------|
| DemoPage | `src/pages/DemoPage.tsx` | Main page container |
| UsageEstimator | `src/components/demo/UsageEstimator.tsx` | User count sliders |
| CommitmentSelector | `src/components/demo/CommitmentSelector.tsx` | Tier radio group |
| PlatformFeeSlider | `src/components/demo/PlatformFeeSlider.tsx` | Platform fee input |
| QuoteSummary | `src/components/demo/QuoteSummary.tsx` | Results card |
| CostBreakdown | `src/components/demo/CostBreakdown.tsx` | Detailed breakdown |
| ROICalculator | `src/components/demo/ROICalculator.tsx` | ROI scenarios |
| QuoteActions | `src/components/demo/QuoteActions.tsx` | Action buttons |
| DemoIntro | `src/components/demo/DemoIntro.tsx` | Video + context |

## URL Parameter Schema

Quote parameters encoded in URL for sharing:

```
/demo?company=AcmeCorp&domain=acme.com&platformFee=50000&mode=simple&users=100&commitment=100000
```

Full parameter list:
- `company`: Company name
- `domain`: Company domain (for logo)
- `logoUrl`: Direct logo URL (optional)
- `platformFee`: Annual platform fee
- `mode`: "simple" | "advanced"
- `users`: Total users (simple mode)
- `power`, `normal`, `casual`: User breakdown (advanced)
- `commitment`: 0 | 10000 | 100000 | 300000 | 500000 | 1000000
- `perUser`: "1" to enable per-user pricing
- `stdCr`, `pwrCr`, `nrmCr`, `cslCr`: Custom credit rates

## Pricing Logic Reference

See `src/lib/pricing.ts` for all calculation functions:

- `calculateMonthlyCredits()` - Credits based on user count/breakdown
- `calculateAnnualCredits()` - Monthly × 12
- `getCreditRate()` - Rate based on commitment tier
- `calculateEffectiveCreditCost()` - MAX(commitment, projected usage)
- `findOptimalCommitment()` - Find best tier for usage
- `calculateSavings()` - Savings vs pay-as-you-go
- `calculatePerUserPricing()` - Alternative pricing model
- `encodeQuoteParams()` / `decodeQuoteParams()` - URL encoding

## Integration Points

1. **CustomerContext**: Pre-fill company name, industry
2. **RewardsContext**: Award points for generating quote
3. **ProgressContext**: Track demo completion
4. **Mock AE Data**: Link to AE for follow-up

## Responsive Behavior

- Desktop: Two-column layout (inputs left, summary right)
- Tablet: Stacked with sticky summary
- Mobile: Full-width stacked, summary at bottom

## Animations

1. **Page entry**: BlurFade on sections
2. **Slider interaction**: Smooth value updates
3. **Summary card**: Animate number changes (AnimatedCounter)
4. **Tier selection**: Highlight animation
5. **Savings indicator**: Pulse when showing savings

## Test Cases

| Scenario | Inputs | Expected |
|----------|--------|----------|
| Simple 100 users, no commitment | users=100, commitment=0 | $48,000 credits |
| Simple 100 users, $100K commitment | users=100, commitment=100000 | $100,000 (floor applies) |
| Advanced mixed users | power=10, normal=50, casual=40 | 48,000 credits/year |
| Per-user minimum | users=20 | 30×$120×12 = $43,200 |
| Optimal tier suggestion | users=500 | Suggest $100K tier |

## Success Metrics

- Time on page > 3 minutes
- Quote link copied (tracked)
- Calendar booking from demo page
- Quote parameters in URL (indicates sharing)

## Phase Implementation

### Phase 1: Core Calculator
- DemoPage with basic layout
- UsageEstimator (simple mode only)
- CommitmentSelector
- QuoteSummary

### Phase 2: Advanced Features
- Advanced mode with user breakdown
- Platform fee slider
- Per-user pricing toggle
- Cost breakdown accordion

### Phase 3: Polish
- ROI calculator
- URL param encoding/decoding
- Share functionality
- Animations and transitions

### Phase 4: Integration
- Pre-fill from CustomerContext
- Points/rewards integration
- Analytics tracking
