# Customer Hub - Overview PRD

## Project Overview

The Customer Hub is a personalized, interactive portal designed for Enterprise sales prospects. It serves as a central destination where potential customers can explore Lovable's capabilities, track their engagement, and prepare for sales conversations.

## Goals

1. Provide a personalized experience for each prospect
2. Showcase Lovable's capabilities through interactive demos
3. Streamline the pre-sales process with actionable content
4. Gamify the experience to increase engagement
5. Enable self-service research and discovery

---

## Engagement Goals Framework

> **CRITICAL:** Every page and interaction must be designed to achieve these emotional and cognitive outcomes. Reference this framework when building each feature.

### THINK Goals (Cognitive Outcomes)

| Goal | Key Message | Implementation Guidance |
|------|-------------|------------------------|
| **Speed** | "If we adopt this, we move faster than any competitor." | Show time-to-value metrics, deployment speeds, comparison to traditional dev cycles. Use animated counters, before/after timelines. |
| **Impact** | "This gives me strategic leverage." | Demonstrate how engineers focus on core systems, business teams build safely, IT keeps control. Show role-based value propositions. |
| **Unlock** | "This solves my biggest constraints." | Address backlogs, talent shortages, slow internal tools directly. Connect pain points to Lovable solutions with specific examples. |
| **Future** | "This is the new operating model for software." | Position Lovable as a platform, not a tool. Show AI operationalization across the enterprise. Emphasize long-term vision. |

### FEEL Goals (Emotional Outcomes)

| Goal | Desired Emotion | Implementation Guidance |
|------|-----------------|------------------------|
| **FOMO** | "I need to act now." | Show similar companies adopting, usage across their own org in silos, AI-matched social proof with urgency messaging. |
| **Inspired** | "AI finally becomes something I can operationalize." | Interactive demos, personalized use cases, show the art of the possible with their specific context. |
| **Enabled** | "I can see how Lovable helps me today." | Clear next steps, low-friction actions, immediate value demonstrations, actionable tasks. |
| **Future-proof** | "I'm betting on the right partner." | Roadmap hints, platform stability, enterprise-grade features, long-term partnership positioning. |
| **Trust** | "I have the controls to manage each risk." | Security transparency, compliance info, role-based access, governance features. |

### Goal-to-Page Mapping

| Page | Primary THINK | Primary FEEL | Secondary Goals |
|------|---------------|--------------|-----------------|
| **Landing** | Impact, Future | Inspired, Trust | All (entry point) |
| **Usage Dashboard** | Speed, Unlock | FOMO, Enabled | Impact |
| **Sales Process** | Future | Trust, Future-proof | Enabled |
| **AI Research** | Impact, Unlock | Inspired, Trust | Speed |
| **Social Proof** | Speed | FOMO, Future-proof | Trust |
| **Action Items** | Unlock | Enabled | Speed |
| **FAQ & Chat** | All | Trust, Enabled | Future-proof |
| **Swag** | - | Inspired, Enabled | FOMO |
| **Demo Ideas** | Impact, Unlock | Inspired, Enabled | Speed |

### Implementation Principles

1. **Lead with outcomes, not features** - Every section should answer "So what?" for the prospect
2. **Personalize relentlessly** - Use CustomerContext to make every data point feel tailored
3. **Create urgency without pressure** - FOMO through information, not manipulation
4. **Build confidence progressively** - Each interaction should increase trust
5. **Enable immediate action** - Low-friction next steps throughout
6. **Demonstrate, don't describe** - Show Lovable's capabilities by using them in the hub itself

## Target User Persona

- **Role:** Enterprise decision-maker (CTO, VP Engineering, Head of Product)
- **Company Size:** 500+ employees
- **Pain Points:** Slow development cycles, high engineering costs, difficulty scaling
- **Goals:** Evaluate Lovable for enterprise adoption

## Information Architecture

```
/                   → Landing Page (Hub Overview)
/usage              → Usage Dashboard
/process            → GTM Sales Process
/research           → AI Research Insights
/social             → Social Proof
/actions            → Action Items
/faq                → FAQ with AI Chatbot
/swag               → Swag Redemption
```

## Global Context Providers

### CustomerContext
```typescript
interface CustomerContext {
  companyName: string;
  industry: string;
  dealStage: 'discovery' | 'evaluation' | 'proposal' | 'negotiation' | 'closed';
  contactName: string;
  contactEmail: string;
  companySize: string;
  profile: {
    techStack: string[];
    painPoints: string[];
    interests: string[];
  };
}
```

### RewardsContext
```typescript
interface RewardsContext {
  points: number;
  level: number;
  achievements: Achievement[];
  unlockedSwag: SwagItem[];
  addPoints: (amount: number, reason: string) => void;
  checkAchievement: (id: string) => boolean;
}
```

### ProgressContext
```typescript
interface ProgressContext {
  visitedSections: string[];
  completedActions: string[];
  overallProgress: number;
  markVisited: (section: string) => void;
  markCompleted: (action: string) => void;
}
```

## HubLayout Wrapper

All hub pages will use a consistent HubLayout wrapper that includes:
- Navigation header with back button
- Page title and description
- Progress indicator
- Consistent padding and max-width
- Footer with navigation to other sections

## Mock Data Structure

All mock data will be stored in `src/data/` folder:
- `customer.ts` - Customer profile and company data
- `metrics.ts` - Usage dashboard metrics
- `stages.ts` - Sales process stages and content
- `companies.ts` - Similar companies for social proof
- `tasks.ts` - Action items and checklist
- `faq.ts` - FAQ questions and answers
- `swag.ts` - Swag catalog items

## Technology Stack

- React + TypeScript + Vite
- Tailwind CSS with existing design tokens
- Framer Motion for animations
- shadcn/ui components
- lucide-react icons
- react-router-dom for routing
- sonner for toast notifications
- Recharts for charts (already installed)
- Lovable AI for AI features (Lovable Cloud)
