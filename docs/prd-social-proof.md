# Social Proof PRD

## Overview

The Social Proof page (`/social`) displays AI-matched similar companies, case study previews, and testimonials. It helps prospects see how companies like theirs are succeeding with Lovable.

## Engagement Goals

**Primary THINK:** Speed
**Primary FEEL:** FOMO, Future-proof

### Goal Implementation

| Goal | How to Achieve |
|------|----------------|
| **Speed** | Case study metrics showing time-to-value; "X went from idea to production in Y days" |
| **FOMO** | "X similar companies chose Lovable this quarter"; AI-matched urgency |
| **Future-proof** | Show diverse successful implementations; prove platform stability |
| **Trust** | Real company names, real metrics, verifiable results |

### Key Messaging
- Header: "Companies like yours are already winning with Lovable"
- AI Match: "Curated specifically for {companyName}'s profile"
- FOMO: "{X} similar companies adopted Lovable this quarter"
- Case Studies: "From evaluation to production in weeks, not months"

### FOMO Amplification
- Dynamic counter: "X companies similar to you chose Lovable this quarter"
- Match percentages: "94% similar to {top match company}"
- Competitor awareness: "Your industry peers are already building"
- AI transparency: "This was matched using your profile to maximize relevance"

### Trust Through Proof
- Real company names and logos
- Specific, verifiable metrics
- Named individuals with titles
- Links to full case studies

## Design Constraints

⚠️ **DO NOT MODIFY:**
- Existing social proof component styles
- Card component styles
- Animation configurations
- Color scheme and design tokens

## Features

### 1. AI-Matched Companies Display

Show companies matched based on prospect's profile:

```typescript
interface MatchedCompany {
  id: string;
  name: string;
  logo: string;
  industry: string;
  companySize: string;
  matchScore: number; // 0-100
  matchReasons: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  caseStudy?: {
    title: string;
    summary: string;
    metrics: Metric[];
  };
}
```

### 2. Company Profile Cards

Each matched company card shows:
- Company logo
- Company name
- Industry badge
- Match score percentage
- "AI-matched for you" badge
- Key match reasons

### 3. "Companies Like You" Section

Prominent section highlighting similarities:
- Industry match
- Company size similarity
- Tech stack overlap
- Use case alignment

Visual: Side-by-side comparison layout

### 4. AI-Matched Badge & FOMO Messaging

**ENHANCED:** Make it obvious this was AI-generated to create FOMO

```tsx
<Badge variant="ai-matched">
  <Sparkles className="h-3 w-3" />
  AI-matched for {companyName}
</Badge>
```

Styling:
- Gradient background
- Sparkle icon
- Subtle glow effect
- Pulsing animation

FOMO messaging elements:
- "Curated specifically for {companyName}'s AI strategy"
- "These companies share your challenges"
- "{X} similar companies chose Lovable this quarter"
- "Based on your profile, you're most similar to [top match]"
- Dynamic match percentage: "94% similar to TechFlow Inc"

Transparency callout:
```tsx
<div className="ai-generated-callout">
  <Brain className="h-4 w-4" />
  <span>This social proof was AI-matched based on your company profile, industry, and tech stack</span>
</div>
```

### 5. Case Study Previews

For companies with case studies:
- Preview card with key metrics
- "Read full story" link
- Metrics highlights (e.g., "50% faster deployment")

```typescript
interface CaseStudyPreview {
  companyId: string;
  title: string;
  summary: string;
  metrics: {
    label: string;
    value: string;
    improvement: string;
  }[];
  image?: string;
}
```

### 6. Testimonial Carousel

Rotating testimonials from matched companies:
- Quote text
- Author photo
- Author name & role
- Company logo
- Auto-rotate with pause on hover

## Component Structure

```
src/pages/SocialProof.tsx
├── HubLayout
│   ├── Page Header
│   │   ├── Title: "Companies Like You"
│   │   └── Subtitle: "See how similar companies succeed with Lovable"
│   ├── Match Summary
│   │   └── "Based on your profile, we found X similar companies"
│   ├── Matched Companies Grid
│   │   └── CompanyCard (xN)
│   ├── Featured Case Study
│   │   └── CaseStudyCard
│   └── Testimonials Section
│       └── TestimonialCarousel
```

## Mock Data

```typescript
// src/data/companies.ts
export const mockMatchedCompanies = [
  {
    id: '1',
    name: 'TechFlow Inc',
    logo: '/logos/techflow.svg',
    industry: 'SaaS',
    companySize: '500-1000',
    matchScore: 94,
    matchReasons: [
      'Same industry vertical',
      'Similar engineering team size',
      'Shared tech stack (React, TypeScript)'
    ],
    testimonial: {
      quote: "Lovable transformed how we build internal tools...",
      author: "Sarah Chen",
      role: "VP Engineering"
    }
  },
  // ... more companies
];

export const mockCaseStudies = [
  {
    companyId: '1',
    title: 'How TechFlow cut development time by 60%',
    summary: 'From idea to production in days instead of months...',
    metrics: [
      { label: 'Development Time', value: '60%', improvement: 'faster' },
      { label: 'Cost Savings', value: '$500K', improvement: 'annually' }
    ]
  },
  // ...
];
```

## Animations

1. **Page entry:** BlurFade on all sections
2. **Company cards:** Staggered reveal
3. **Match score:** Animated counter
4. **Testimonials:** Fade transition between quotes
5. **Hover states:** Subtle lift on cards

## Integration

- CustomerContext for profile matching
- ProgressContext for tracking views
- RewardsContext for engagement points

## Responsive Behavior

- Desktop: 3-column company grid, side-by-side case study
- Tablet: 2-column grid
- Mobile: Single column, stacked layout

## Filtering (Optional Enhancement)

- Filter by industry
- Filter by company size
- Sort by match score
