# GTM Sales Process PRD

## Overview

The Sales Process page (`/process`) displays the deal timeline, current stage, and pre-call preparation content. It helps prospects understand where they are in the sales journey and what to expect next.

## Engagement Goals

**Primary THINK:** Future
**Primary FEEL:** Trust, Future-proof

### Goal Implementation

| Goal | How to Achieve |
|------|----------------|
| **Future** | Show partnership journey, not transaction; emphasize long-term relationship |
| **Trust** | Transparency in process; no surprises; clear expectations |
| **Future-proof** | Demonstrate Lovable's commitment to enterprise; show what success looks like |
| **Enabled** | Clear next steps at each stage; preparation materials readily available |

### Key Messaging
- Header: "Your partnership journey"
- Current Stage: "Here's what to expect and how to prepare"
- Next Steps: "We're in this together - here's how we'll proceed"
- Agenda: "A collaborative conversation, not a sales pitch"

### Trust-Building Elements
- Complete transparency on timeline and process
- Show what Lovable will deliver at each stage
- Highlight customer success support post-sale
- No hidden steps or surprise requirements

## Design Constraints

⚠️ **DO NOT MODIFY:**
- Card component styles
- Animation configurations
- Color scheme and design tokens
- Typography scales

## Features

### 1. Deal Stage Timeline

Horizontal/vertical timeline showing all stages:

| Stage | Label | Description |
|-------|-------|-------------|
| discovery | Discovery | Initial exploration |
| evaluation | Evaluation | Technical deep-dive |
| proposal | Proposal | Pricing & terms |
| negotiation | Negotiation | Final discussions |
| closed | Closed Won | Welcome aboard! |

### 2. Timeline Component

```typescript
interface TimelineProps {
  stages: Stage[];
  currentStage: string;
  onStageClick?: (stage: string) => void;
}

interface Stage {
  id: string;
  label: string;
  description: string;
  completedDate?: string;
  content: StageContent;
}
```

Visual specs:
- Completed stages: filled circle, checkmark
- Current stage: highlighted, pulsing animation
- Future stages: outlined, muted

### 3. Stage Content Section

Dynamic content based on current stage:

**Discovery Stage:**
- Introduction to Lovable
- Key capabilities overview
- Initial use cases discussion

**Evaluation Stage:**
- Technical requirements gathering
- POC/trial setup
- Integration discussions

**Proposal Stage:**
- Pricing tiers
- Contract terms
- Implementation timeline

**Negotiation Stage:**
- Final terms review
- Legal review items
- Sign-off process

### 4. Pre-Connect Call Agenda

For upcoming calls, show agenda items:

```typescript
interface AgendaItem {
  id: string;
  title: string;
  duration: string; // "5 min", "10 min"
  description: string;
  presenter: 'prospect' | 'lovable';
}
```

Display:
- Numbered list
- Time allocation
- Who's presenting
- Expandable details

### 5. Expandable Step Details

Each stage card can expand to show:
- Detailed description
- Key milestones
- Required actions
- Resources/links

## Component Structure

```
src/pages/SalesProcess.tsx
├── HubLayout
│   ├── Page Header
│   ├── Timeline
│   │   └── TimelineStage (x5)
│   ├── Current Stage Content
│   │   ├── Stage Title
│   │   ├── Stage Description
│   │   └── Action Items
│   └── Pre-Call Agenda
│       └── AgendaItem (xN)
```

## Mock Data

```typescript
// src/data/stages.ts
export const mockStages = [
  {
    id: 'discovery',
    label: 'Discovery',
    description: 'Initial exploration of Lovable capabilities',
    completedDate: '2024-01-15',
    content: { /* stage-specific content */ }
  },
  // ... other stages
];

export const mockAgenda = [
  {
    id: '1',
    title: 'Introductions',
    duration: '5 min',
    description: 'Team introductions and role overview',
    presenter: 'both'
  },
  // ... other items
];
```

## Animations

1. **Timeline entry:** Staggered fade-in for stages
2. **Current stage:** Subtle pulse animation
3. **Expand/collapse:** Smooth height transition
4. **Stage transition:** Slide animation when changing

## Integration

- Read `dealStage` from CustomerContext
- Update ProgressContext when viewing stage details
- Award points via RewardsContext for engagement

## Responsive Behavior

- Desktop: Horizontal timeline, content to the right
- Tablet: Horizontal timeline, content below
- Mobile: Vertical timeline, content inline
