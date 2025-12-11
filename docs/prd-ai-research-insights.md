# AI Research Insights PRD

## Overview

The AI Research Insights page (`/research`) provides AI-generated company-specific analysis, pain points identification, and pre-call research questions. This page leverages Lovable AI (Lovable Cloud) for dynamic content generation.

## Engagement Goals

**Primary THINK:** Impact, Unlock
**Primary FEEL:** Inspired, Trust

### Goal Implementation

| Goal | How to Achieve |
|------|----------------|
| **Impact** | Show strategic understanding of their business; AI demonstrates "we get you" |
| **Unlock** | Identify pain points they might not have articulated; connect dots they missed |
| **Inspired** | AI research quality demonstrates Lovable's AI capabilities; "imagine this for your tools" |
| **Trust** | Full transparency on sources and methodology; confidence scores show honesty |

### Key Messaging
- Header: "We've done our homework"
- Subtext: "AI-powered insights tailored to {companyName}'s strategic priorities"
- Pain Points: "Challenges we've identified that Lovable can address"
- Questions: "Let's discuss what matters most to you"

### Inspiration Triggers
- Quality of AI research demonstrates product capabilities
- "This is what AI can do for YOUR research and analysis"
- Show methodology to prove sophistication
- Regenerate feature shows real-time AI power

### Trust Elements
- Source citations with links
- Confidence scores (don't overclaim)
- "Last updated" timestamp
- Methodology transparency

## Design Constraints

⚠️ **DO NOT MODIFY:**
- Card component styles
- Animation configurations
- Color scheme and design tokens
- Typography scales

## Features

### 1. Company AI Strategy Section

Display AI-analyzed information about the prospect's company:

```typescript
interface CompanyStrategy {
  summary: string;
  aiInitiatives: string[];
  technologyFocus: string[];
  marketPosition: string;
  competitiveAdvantages: string[];
}
```

Content sections:
- Executive summary
- Current AI initiatives
- Technology focus areas
- Market positioning

### 2. Pain Points Analysis

AI-identified pain points from public sources:

```typescript
interface PainPoint {
  id: string;
  category: 'engineering' | 'product' | 'operations' | 'cost';
  title: string;
  description: string;
  source: string; // "Earnings call Q3 2024", "Job postings", etc.
  relevanceScore: number; // 0-100
}
```

Display:
- Card per pain point
- Category badge
- Source citation
- Relevance indicator

### 3. Pre-Call Research Questions

Suggested questions for the sales call:

```typescript
interface ResearchQuestion {
  id: string;
  question: string;
  context: string;
  category: 'technical' | 'business' | 'adoption';
}
```

Features:
- Grouped by category
- Copy to clipboard button
- Expand for context

### 4. Research Transparency Section

**NEW FEATURE:** Show how the AI research was generated

```typescript
interface ResearchMetadata {
  generatedAt: string;
  sources: ResearchSource[];
  methodology: string;
  confidenceScore: number; // 0-100
}

interface ResearchSource {
  type: 'earnings_call' | 'job_posting' | 'press_release' | 'news' | 'linkedin' | 'website';
  title: string;
  url?: string;
  date: string;
  excerpt?: string;
}
```

Display:
- "How this research was generated" expandable section
- List of sources with links
- Methodology explanation
- Confidence score indicator
- Last updated timestamp
- "Regenerate with latest data" button

Source types to cite:
- Recent earnings calls (with quarter/year)
- Job postings (role types being hired)
- Press releases
- News articles
- LinkedIn company page
- Company website/blog

### 4. AI Generation Integration

**Using Lovable AI (Lovable Cloud):**

Edge function: `supabase/functions/generate-research/index.ts`

```typescript
// Request
{
  companyName: string;
  industry: string;
  additionalContext?: string;
}

// Response
{
  strategy: CompanyStrategy;
  painPoints: PainPoint[];
  questions: ResearchQuestion[];
}
```

### 5. Loading States

During AI generation:
- Skeleton cards
- "Analyzing {companyName}..." message
- Progress indicator
- Estimated time remaining

### 6. Refresh/Regenerate

- "Regenerate" button to get fresh insights
- Confirm dialog before regenerating
- Show "Last generated: {timestamp}"
- Cache results in localStorage

## Component Structure

```
src/pages/ResearchInsights.tsx
├── HubLayout
│   ├── Page Header
│   │   ├── Title
│   │   ├── Last Updated
│   │   └── Regenerate Button
│   ├── Company Strategy Section
│   │   ├── Summary Card
│   │   └── Initiatives Grid
│   ├── Pain Points Section
│   │   └── PainPointCard (xN)
│   └── Research Questions Section
│       └── QuestionCard (xN)
```

## Mock Data (Fallback)

```typescript
// src/data/research.ts
export const mockResearch = {
  strategy: {
    summary: "Acme Corp is a technology leader...",
    aiInitiatives: ["ML-powered recommendations", "Automated testing"],
    // ...
  },
  painPoints: [
    {
      id: '1',
      category: 'engineering',
      title: 'Slow development cycles',
      description: 'Engineering velocity mentioned as key challenge...',
      source: 'Q3 2024 Earnings Call',
      relevanceScore: 85
    },
    // ...
  ],
  questions: [
    {
      id: '1',
      question: 'How are you currently handling rapid prototyping?',
      context: 'Based on job postings for frontend developers...',
      category: 'technical'
    },
    // ...
  ],
  metadata: {
    generatedAt: '2024-01-20T10:30:00Z',
    sources: [
      {
        type: 'earnings_call',
        title: 'Q3 2024 Earnings Call Transcript',
        url: 'https://example.com/earnings',
        date: '2024-10-15',
        excerpt: 'CEO mentioned engineering velocity as top priority...'
      },
      {
        type: 'job_posting',
        title: 'Senior Frontend Engineer posting',
        url: 'https://careers.acmecorp.com/job-123',
        date: '2024-01-10'
      },
      {
        type: 'press_release',
        title: 'Acme Corp Announces AI Strategy',
        url: 'https://acmecorp.com/news/ai-strategy',
        date: '2024-09-20'
      }
    ],
    methodology: 'AI analysis of public company data, job postings, and news sources',
    confidenceScore: 82
  }
};
```

## Error Handling

- Network error: Show cached data with warning
- API error: Fall back to mock data
- Rate limit: Show retry timer
- Empty response: Show "No insights available" state

## Animations

1. **Page load:** BlurFade on sections
2. **Generation:** Typing effect for summary
3. **Cards:** Staggered entry animation
4. **Regenerate:** Fade out old, fade in new

## Integration

- CustomerContext for company info
- ProgressContext for tracking engagement
- RewardsContext for points on first view

## Responsive Behavior

- Desktop: 3-column pain points grid
- Tablet: 2-column grid
- Mobile: Single column stack
