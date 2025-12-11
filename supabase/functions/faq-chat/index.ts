import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Comprehensive Lovable knowledge base grounded in docs.lovable.dev
const LOVABLE_KNOWLEDGE_BASE = `
# Lovable Documentation Knowledge Base

## What is Lovable?
Lovable is an AI-powered full-stack web application builder. You describe what you want, and Lovable creates beautiful, functional React applications instantly. No coding required for most use cases.

## Core Features

### AI-Powered Development
- Describe features in natural language
- Lovable generates production-ready React + TypeScript code
- Real-time preview as code is generated
- Visual Edits feature for free visual tweaks without using credits

### Technology Stack
- React 18 with TypeScript
- Vite for fast builds
- Tailwind CSS for styling
- Shadcn/UI components
- Framer Motion for animations

### Lovable Cloud
Lovable Cloud is the integrated backend service that provides:
- **Database**: PostgreSQL database with automatic schema generation
- **Authentication**: Built-in auth with email/password, phone, and Google sign-in
- **Storage**: File storage for images, documents, etc.
- **Edge Functions**: Serverless functions for custom backend logic
- **Secrets Management**: Secure storage for API keys

### Lovable AI
Lovable AI is a gateway service for integrating AI capabilities into your apps:
- Supports Google Gemini and OpenAI GPT-5 models
- Pre-configured API key (LOVABLE_API_KEY)
- Usage-based pricing with free monthly allocation
- Default model: google/gemini-2.5-flash

## GitHub Integration
- Sync projects to GitHub repositories
- All code is yours to own and deploy anywhere
- Two-way sync for external editing

## Enterprise Features
- **SSO/SAML**: Single sign-on integration
- **Role-based Access Control**: Granular permissions
- **Audit Logs**: Comprehensive activity tracking
- **SOC 2 Type II**: Certified security compliance
- **Custom Domains**: Connect your own domain
- **Priority Support**: Dedicated account management

## Pricing Plans
- **Free**: 5 daily credits (30/month cap)
- **Pro**: Starting at 100 credits/month
- **Business**: Team features, SSO, granular roles
- **Enterprise**: Custom pricing, contact sales

## Common Questions

### How do credits work?
- Chat mode: 1 credit per message
- Agent mode: Variable based on complexity
- Visual Edits: Free (no credits)
- "Try to fix" messages: Free

### Can non-technical users use Lovable?
Absolutely! Lovable is designed for everyone - product managers, designers, and business users can build without coding knowledge.

### What's the typical ROI?
Enterprise customers see 60-80% reduction in development time and 3-5x faster time-to-market.

### Data Security
- All code is yours to own and export
- SOC 2 Type II certified
- Data encryption at rest and in transit
- GDPR compliant
- Option for data residency requirements

### Deployment
- One-click publishing to Lovable-hosted domains
- Custom domain support (paid plans)
- Frontend changes require "Update" click
- Backend changes deploy automatically

### Self-Hosting
Self-hosting is supported but requires manual setup. See docs for guide.

## Customer Hub Specific Information

This Customer Hub is a personalized portal for enterprise prospects that includes:
- Usage Dashboard: Track your organization's Lovable usage
- Sales Process: View your deal timeline and next steps
- AI Research: Company-specific insights powered by AI
- Social Proof: Success stories from similar companies
- Action Items: Pre-call preparation checklist
- FAQ & Chat: AI-powered support (you're using it now!)
- Swag Redemption: Earn and redeem points for merchandise

Your Account Executive is available to help with any questions not covered here.
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, context } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are Lovable's AI support assistant, helping enterprise prospects evaluate Lovable for their organization.

${LOVABLE_KNOWLEDGE_BASE}

## Your Behavior Guidelines:
1. Be helpful, professional, and concise
2. Ground ALL answers in the knowledge base above - never make up features or pricing
3. If you don't know something, say so and suggest contacting the Account Executive
4. When discussing security/compliance, be thorough and accurate
5. Highlight relevant enterprise features when appropriate
6. If the prospect mentions their company (${context?.companyName || 'their company'}), personalize responses
7. Suggest relevant Customer Hub sections when applicable
8. Never oversell or make claims not supported by the documentation
9. For detailed technical questions, suggest scheduling time with the AE

Current context:
- Company: ${context?.companyName || 'Not specified'}
- Industry: ${context?.industry || 'Not specified'}
- Deal Stage: ${context?.dealStage || 'Not specified'}

Remember: You're helping an enterprise prospect make an informed decision. Be honest, helpful, and professional.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI usage limit reached. Please contact support." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "AI service temporarily unavailable" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("FAQ chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
