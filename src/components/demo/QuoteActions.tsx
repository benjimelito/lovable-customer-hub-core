import React, { useState } from "react";
import { Copy, Share2, Calendar, Check, Link2, FileDown, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { toast } from "sonner";
import { QuoteParams, encodeQuoteParams, formatCurrency, formatNumber, UserBreakdown } from "@/lib/pricing";
import { useCustomer } from "@/contexts/CustomerContext";
import { mockAccountExecutive } from "@/data/mockData";

interface PDFData {
  companyName: string;
  totalUsers: number;
  annualCredits: number;
  monthlyCredits: number;
  platformFee: number;
  creditCost: number;
  totalAnnual: number;
  monthlyEquivalent: number;
  costPerUser: number;
  savings: number;
  tierLabel: string;
  tierRate: number;
  enablePerUser: boolean;
  mode: "simple" | "advanced";
  breakdown?: UserBreakdown;
}

interface QuoteActionsProps {
  quoteParams: QuoteParams;
  totalAnnual: number;
  pdfData: PDFData;
}

const QuoteActions: React.FC<QuoteActionsProps> = ({ quoteParams, totalAnnual, pdfData }) => {
  const [copied, setCopied] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const { profile } = useCustomer();

  const getQuoteUrl = () => {
    const encoded = encodeQuoteParams(quoteParams);
    return `${window.location.origin}/demo?${encoded}`;
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(getQuoteUrl());
      setCopied(true);
      toast.success("Quote link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy link");
    }
  };

  const handleShare = async () => {
    const shareText = `Check out this Lovable Enterprise quote for ${profile.companyName}:\n\nTotal Annual: ${formatCurrency(totalAnnual)}\n\n${getQuoteUrl()}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Lovable Enterprise Quote - ${profile.companyName}`,
          text: shareText,
          url: getQuoteUrl(),
        });
      } catch (err) {
        await navigator.clipboard.writeText(shareText);
        toast.success("Quote details copied to clipboard!");
      }
    } else {
      await navigator.clipboard.writeText(shareText);
      toast.success("Quote details copied to clipboard!");
    }
  };

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    
    try {
      const today = new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      
      const quoteNumber = `LQ-${Date.now().toString(36).toUpperCase()}`;
      
      const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Lovable Enterprise Quote - ${pdfData.companyName}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      color: #1a1a1a;
      line-height: 1.5;
      padding: 40px;
      max-width: 800px;
      margin: 0 auto;
    }
    .header { 
      display: flex; 
      justify-content: space-between; 
      align-items: flex-start;
      margin-bottom: 40px;
      padding-bottom: 20px;
      border-bottom: 2px solid #e5e5e5;
    }
    .logo { font-size: 28px; font-weight: 700; color: #7c3aed; }
    .quote-info { text-align: right; }
    .quote-number { font-size: 14px; color: #666; }
    .quote-date { font-size: 14px; color: #666; margin-top: 4px; }
    .company-section { margin-bottom: 32px; }
    .company-name { font-size: 24px; font-weight: 600; margin-bottom: 8px; }
    .company-details { font-size: 14px; color: #666; }
    .section { margin-bottom: 32px; }
    .section-title { 
      font-size: 16px; 
      font-weight: 600; 
      color: #444;
      margin-bottom: 16px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .summary-card {
      background: #f9fafb;
      border: 1px solid #e5e5e5;
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 24px;
    }
    .summary-row {
      display: flex;
      justify-content: space-between;
      padding: 12px 0;
      border-bottom: 1px solid #e5e5e5;
    }
    .summary-row:last-child { border-bottom: none; }
    .summary-label { color: #666; }
    .summary-value { font-weight: 600; }
    .total-row {
      background: #7c3aed;
      color: white;
      margin: -24px;
      margin-top: 16px;
      padding: 20px 24px;
      border-radius: 0 0 12px 12px;
      display: flex;
      justify-content: space-between;
    }
    .total-label { font-size: 18px; font-weight: 600; }
    .total-value { font-size: 24px; font-weight: 700; }
    .breakdown-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .breakdown-item {
      background: #f9fafb;
      border: 1px solid #e5e5e5;
      border-radius: 8px;
      padding: 16px;
    }
    .breakdown-label { font-size: 12px; color: #666; margin-bottom: 4px; }
    .breakdown-value { font-size: 18px; font-weight: 600; }
    .savings-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #dcfce7;
      color: #166534;
      padding: 8px 16px;
      border-radius: 8px;
      font-weight: 500;
      margin-top: 16px;
    }
    .tier-info {
      background: #fef3c7;
      border: 1px solid #fcd34d;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 24px;
    }
    .tier-label { font-weight: 600; color: #92400e; }
    .tier-rate { color: #b45309; }
    .footer {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #e5e5e5;
      font-size: 12px;
      color: #666;
    }
    .ae-section {
      background: #f3f4f6;
      border-radius: 8px;
      padding: 16px;
      margin-top: 24px;
    }
    .ae-name { font-weight: 600; }
    .ae-contact { font-size: 14px; color: #666; margin-top: 4px; }
    @media print {
      body { padding: 20px; }
      .summary-card { break-inside: avoid; }
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo">💜 Lovable</div>
    <div class="quote-info">
      <div class="quote-number">Quote: ${quoteNumber}</div>
      <div class="quote-date">${today}</div>
    </div>
  </div>

  <div class="company-section">
    <div class="company-name">${pdfData.companyName}</div>
    <div class="company-details">Enterprise Quote Proposal</div>
  </div>

  <div class="section">
    <div class="section-title">Usage Summary</div>
    <div class="breakdown-grid">
      <div class="breakdown-item">
        <div class="breakdown-label">Total Users</div>
        <div class="breakdown-value">${formatNumber(pdfData.totalUsers)}</div>
      </div>
      <div class="breakdown-item">
        <div class="breakdown-label">Annual Credits</div>
        <div class="breakdown-value">${formatNumber(pdfData.annualCredits)}</div>
      </div>
      <div class="breakdown-item">
        <div class="breakdown-label">Monthly Credits</div>
        <div class="breakdown-value">${formatNumber(pdfData.monthlyCredits)}</div>
      </div>
      <div class="breakdown-item">
        <div class="breakdown-label">Pricing Mode</div>
        <div class="breakdown-value">${pdfData.enablePerUser ? 'Per-User' : 'Credit-Based'}</div>
      </div>
    </div>
    ${pdfData.mode === 'advanced' && pdfData.breakdown ? `
    <div style="margin-top: 16px;">
      <div class="breakdown-grid" style="grid-template-columns: 1fr 1fr 1fr;">
        <div class="breakdown-item">
          <div class="breakdown-label">Power Users</div>
          <div class="breakdown-value">${pdfData.breakdown.power}</div>
        </div>
        <div class="breakdown-item">
          <div class="breakdown-label">Normal Users</div>
          <div class="breakdown-value">${pdfData.breakdown.normal}</div>
        </div>
        <div class="breakdown-item">
          <div class="breakdown-label">Casual Users</div>
          <div class="breakdown-value">${pdfData.breakdown.casual}</div>
        </div>
      </div>
    </div>
    ` : ''}
  </div>

  <div class="section">
    <div class="section-title">Pricing Details</div>
    <div class="tier-info">
      <span class="tier-label">${pdfData.tierLabel}</span>
      <span class="tier-rate"> — $${pdfData.tierRate.toFixed(2)} per credit</span>
    </div>
    <div class="summary-card">
      ${!pdfData.enablePerUser ? `
      <div class="summary-row">
        <span class="summary-label">Platform Fee (Annual)</span>
        <span class="summary-value">${formatCurrency(pdfData.platformFee)}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Credit Cost (Annual)</span>
        <span class="summary-value">${formatCurrency(pdfData.creditCost)}</span>
      </div>
      ` : ''}
      <div class="summary-row">
        <span class="summary-label">Monthly Equivalent</span>
        <span class="summary-value">${formatCurrency(pdfData.monthlyEquivalent)}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Cost per User (Monthly)</span>
        <span class="summary-value">${formatCurrency(Math.round(pdfData.costPerUser * 100) / 100)}</span>
      </div>
      <div class="total-row">
        <span class="total-label">Total Annual Investment</span>
        <span class="total-value">${formatCurrency(pdfData.totalAnnual)}</span>
      </div>
    </div>
    ${pdfData.savings > 0 ? `
    <div class="savings-badge">
      ✓ Saving ${formatCurrency(pdfData.savings)} compared to pay-as-you-go pricing
    </div>
    ` : ''}
  </div>

  <div class="ae-section">
    <div class="ae-name">Your Account Executive: ${mockAccountExecutive.name}</div>
    <div class="ae-contact">${mockAccountExecutive.email} • ${mockAccountExecutive.phone}</div>
  </div>

  <div class="footer">
    <p>This quote is valid for 30 days from the date of issue.</p>
    <p style="margin-top: 8px;">Generated at lovable.dev • Quote ID: ${quoteNumber}</p>
  </div>
</body>
</html>`;

      // Create a blob and open in new window for printing
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      
      const printWindow = window.open(url, '_blank');
      if (printWindow) {
        printWindow.onload = () => {
          setTimeout(() => {
            printWindow.print();
            URL.revokeObjectURL(url);
          }, 250);
        };
      }
      
      toast.success("PDF quote opened for download!");
    } catch (error) {
      console.error('PDF generation failed:', error);
      toast.error("Failed to generate PDF");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const handleBookCall = () => {
    window.open(mockAccountExecutive.calendlyUrl, "_blank");
  };

  return (
    <BlurFade delay={0.55}>
      <div className="bg-[#F7F4ED] dark:bg-card border border-[#D8D6CF] dark:border-border rounded-3xl p-6">
        <h3 className="text-xl font-medium text-foreground mb-4">Next Steps</h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Button
            variant="outline"
            className="w-full h-auto py-4 flex flex-col items-center gap-2 bg-background/50 hover:bg-background border-border/50"
            onClick={handleCopyLink}
          >
            {copied ? (
              <Check className="w-5 h-5 text-[#2B8A4B]" />
            ) : (
              <Link2 className="w-5 h-5 text-muted-foreground" />
            )}
            <span className="text-sm font-medium">
              {copied ? "Copied!" : "Copy Link"}
            </span>
          </Button>

          <Button
            variant="outline"
            className="w-full h-auto py-4 flex flex-col items-center gap-2 bg-background/50 hover:bg-background border-border/50"
            onClick={handleDownloadPDF}
            disabled={isGeneratingPDF}
          >
            {isGeneratingPDF ? (
              <Loader2 className="w-5 h-5 text-muted-foreground animate-spin" />
            ) : (
              <FileDown className="w-5 h-5 text-muted-foreground" />
            )}
            <span className="text-sm font-medium">
              {isGeneratingPDF ? "Generating..." : "Download PDF"}
            </span>
          </Button>

          <Button
            variant="outline"
            className="w-full h-auto py-4 flex flex-col items-center gap-2 bg-background/50 hover:bg-background border-border/50"
            onClick={handleShare}
          >
            <Share2 className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm font-medium">Share</span>
          </Button>

          <Button
            className="w-full h-auto py-4 flex flex-col items-center gap-2"
            onClick={handleBookCall}
          >
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-medium">Book Call</span>
          </Button>
        </div>

        <p className="mt-4 text-xs text-muted-foreground text-center">
          Your dedicated Account Executive: <span className="font-medium text-foreground">{mockAccountExecutive.name}</span>
        </p>
      </div>
    </BlurFade>
  );
};

export default QuoteActions;
