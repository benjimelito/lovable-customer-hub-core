# Usage Dashboard PRD

## Overview

The Usage Dashboard (`/usage`) displays project statistics and account metrics with animated counters and trend visualizations. It showcases the value Lovable has delivered to the prospect's organization.

## Engagement Goals

**Primary THINK:** Speed, Unlock
**Primary FEEL:** FOMO, Enabled

### Goal Implementation

| Goal | How to Achieve |
|------|----------------|
| **Speed** | Animated metrics showing velocity; trend charts demonstrating acceleration |
| **Unlock** | Reveal existing org usage they didn't know about; show what's possible at scale |
| **FOMO** | "Usage happens in silos without support" - they're already behind; competitors are ahead |
| **Enabled** | Clear path to consolidate and amplify existing usage |

### Key Messaging
- Header: "Your organization is already building with Lovable"
- Subtext: "But without enterprise support, governance, or visibility"
- Internal Discovery: "X projects across Y departments - imagine what's possible with coordination"
- CTA: "Unify your Lovable usage under enterprise governance"

### FOMO Triggers
- Show departments they didn't know were using Lovable
- Highlight "unsupported" usage creating shadow IT risk
- Display potential ARR consolidation opportunity
- "Without enterprise: siloed. With enterprise: strategic."

## Design Constraints

⚠️ **DO NOT MODIFY:**
- Card component styles
- Animation configurations
- Color scheme and design tokens
- Typography scales

## Features

### 1. Animated Stat Counters

Display key metrics with count-up animations:

| Metric | Label | Mock Value | Format |
|--------|-------|------------|--------|
| accounts | Team Accounts | 12 | number |
| projects | Projects Built | 47 | number |
| activeUsers | Active Users | 89 | number |
| deployments | Deployments | 234 | number |
| codeGenerated | Code Generated | 1.2M | abbreviated |

### 2. AnimatedCounter Component

```typescript
interface AnimatedCounterProps {
  value: number;
  duration?: number;
  format?: 'number' | 'abbreviated' | 'percentage';
  prefix?: string;
  suffix?: string;
}
```

Animation specs:
- Duration: 2 seconds
- Easing: easeOut
- Trigger: on viewport entry
- Decimals: 0 for counts, 1 for percentages

### 3. Stats Cards Grid

Each stat displayed in a card with:
- Icon (top left)
- Metric value (large, animated)
- Label (below value)
- Trend indicator (optional, +/- percentage)

Layout: 5 cards in responsive grid

### 4. Internal Usage Discovery Section

**NEW FEATURE:** Show Lovable usage across the prospect's organization

```typescript
interface OrganizationUsage {
  corporateDomain: string;
  workspaces: {
    free: number;
    paid: number;
    total: number;
  };
  totalUsers: number;
  estimatedARR: number;
  departments: DepartmentUsage[];
}

interface DepartmentUsage {
  name: string; // "Engineering", "Product", "Marketing", etc.
  workspaceCount: number;
  userCount: number;
  topProjects: ProjectPreview[];
}

interface ProjectPreview {
  id: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  createdBy: string;
  department: string;
  remixable: boolean;
  remixUrl?: string;
}
```

Display:
- Summary card: "X workspaces | Y users | $Z ARR" from your organization
- Free vs paid workspace breakdown
- Department breakdown with user counts
- "Lovable usage across {companyName} happens in silos, without support" messaging

### 5. Top Projects by Department

Grid of top projects being created across the organization:

Features:
- Project thumbnail/preview
- Project name and creator
- Department badge
- "Remix this project" button
- Category tags

Interaction:
- Click to preview project details
- Remix button opens Lovable with project template
- Filter by department

### 6. Trend Charts Section

Using Recharts (already installed):

**Chart 1: Projects Over Time**
- Line chart
- Last 6 months
- Show growth trajectory

**Chart 2: Deployment Frequency**
- Bar chart
- Weekly breakdown
- Last 4 weeks

**Chart 3: User Adoption**
- Area chart
- Daily active users
- Last 30 days

## Component Structure

```
src/pages/UsageDashboard.tsx
├── HubLayout
│   ├── Page Header
│   │   ├── Title: "Usage Dashboard"
│   │   └── Subtitle: "Your Lovable metrics at a glance"
│   ├── Stats Cards Grid
│   │   └── StatCard (x5)
│   │       └── AnimatedCounter
│   └── Charts Section
│       ├── ProjectsChart
│       ├── DeploymentsChart
│       └── UsersChart
```

## Mock Data

```typescript
// src/data/metrics.ts
export const mockMetrics = {
  accounts: 12,
  projects: 47,
  activeUsers: 89,
  deployments: 234,
  codeGenerated: 1200000,
  trends: {
    projects: [/* monthly data */],
    deployments: [/* weekly data */],
    users: [/* daily data */],
  }
};

// src/data/organizationUsage.ts
export const mockOrganizationUsage = {
  corporateDomain: 'acmecorp.com',
  workspaces: {
    free: 8,
    paid: 4,
    total: 12
  },
  totalUsers: 89,
  estimatedARR: 4800,
  departments: [
    {
      name: 'Engineering',
      workspaceCount: 5,
      userCount: 45,
      topProjects: [
        {
          id: 'proj-1',
          name: 'Internal Dashboard',
          description: 'Team metrics and OKR tracking',
          thumbnailUrl: '/projects/dashboard.png',
          createdBy: 'Mike S.',
          department: 'Engineering',
          remixable: true,
          remixUrl: 'https://lovable.dev/remix/proj-1'
        },
        // ... more projects
      ]
    },
    {
      name: 'Product',
      workspaceCount: 3,
      userCount: 22,
      topProjects: [/* ... */]
    },
    {
      name: 'Marketing',
      workspaceCount: 2,
      userCount: 12,
      topProjects: [/* ... */]
    },
    {
      name: 'Operations',
      workspaceCount: 2,
      userCount: 10,
      topProjects: [/* ... */]
    }
  ]
};
```

## Animations

1. **Page entry:** BlurFade on all elements
2. **Counter animation:** Triggered when card enters viewport
3. **Chart animation:** Lines/bars animate on load

## Loading States

- Skeleton cards while "loading" metrics
- Simulate 500ms delay for realism

## Responsive Behavior

- Desktop: 5-column stats grid, charts side by side
- Tablet: 3-column stats, charts stacked
- Mobile: 2-column stats, charts full width
