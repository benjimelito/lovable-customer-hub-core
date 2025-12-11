# Action Items PRD

## Overview

The Action Items page (`/actions`) provides a task checklist for pre-call preparation. It gamifies the onboarding process by tracking completion and integrating with the rewards system.

## Engagement Goals

**Primary THINK:** Unlock
**Primary FEEL:** Enabled

### Goal Implementation

| Goal | How to Achieve |
|------|----------------|
| **Unlock** | Each task removes a constraint: design system = brand consistency, data = realistic demos |
| **Enabled** | Clear, actionable tasks with time estimates; low friction completion |
| **Speed** | Tasks prepare for faster, more productive calls; "15 min now saves hours later" |
| **Impact** | High-value tasks (design system, data) show enterprise-grade preparation |

### Key Messaging
- Header: "Prepare for a transformative conversation"
- Subtext: "Complete these tasks to maximize the value of your demo call"
- Task Cards: "X minutes now = Y hours saved later"
- Progress: "You're X% ready for your call"

### Enablement Principles
- Every task has clear time estimate
- No task takes more than 20 minutes
- Dependencies are clearly marked
- Completion is rewarded immediately (points, progress)

### Unlock Messaging per Task
- Design System: "Unlock brand-consistent outputs from day one"
- Data Sources: "Unlock realistic demos with your actual data"
- SSO: "Unlock enterprise security for your team"
- Demo Ideas: "Unlock a personalized demo that addresses YOUR challenges"

## Design Constraints

⚠️ **DO NOT MODIFY:**
- Card component styles
- Checkbox component styles
- Animation configurations
- Color scheme and design tokens

## Features

### 1. Task Checklist

Categorized tasks for prospect preparation:

```typescript
interface Task {
  id: string;
  category: 'setup' | 'integration' | 'team' | 'content';
  title: string;
  description: string;
  points: number;
  completed: boolean;
  completedAt?: string;
  link?: string;
  priority: 'required' | 'recommended' | 'optional';
}
```

### 2. Task Categories

| Category | Label | Tasks |
|----------|-------|-------|
| setup | Getting Started | Design system upload, Account configuration |
| integration | Integrations | Data integrations, API connections |
| team | Team Setup | Enterprise account, Team invitations |
| content | Content | Review documentation, Watch demo |
| preparation | Call Preparation | Pre-call checklist, Demo ideas |

### 3. High-Value Action Items (Specific)

**NEW:** Critical pre-call actions for enterprise prospects:

| Task | Category | Priority | Points | Description |
|------|----------|----------|--------|-------------|
| Upload Design System | setup | required | 50 | Import your Figma/design tokens into Lovable |
| Connect Data Sources | integration | required | 40 | Set up integrations with your existing databases |
| Configure SSO | team | required | 30 | Set up Single Sign-On for your organization |
| Invite Technical Lead | team | recommended | 20 | Add your tech lead for the call |
| Submit Demo Ideas | preparation | recommended | 25 | Share 1-3 use cases for the AI demo |
| Review Security Docs | content | required | 15 | Review enterprise security & compliance info |

```typescript
interface HighValueTask extends Task {
  requiresUpload?: boolean;
  uploadType?: 'design-system' | 'data-schema' | 'api-spec';
  externalUrl?: string; // Link to external tool (e.g., Figma)
  estimatedTime?: string; // "5 min", "15 min"
}
```

### 3. Task List Component

```typescript
interface TaskListProps {
  tasks: Task[];
  onTaskToggle: (taskId: string) => void;
  category?: string;
}
```

Each task shows:
- Checkbox
- Title
- Description (expandable)
- Points value
- Priority badge
- Link button (if applicable)
- Completion timestamp

### 4. Checkbox Completion Tracking

- Persist completion state in localStorage
- Sync with ProgressContext
- Award points via RewardsContext
- Show toast on completion

### 5. Progress Indicator

Overall progress section:
- Circular progress ring
- "X of Y tasks completed"
- Points earned display
- Category breakdown

```typescript
interface ProgressIndicatorProps {
  completed: number;
  total: number;
  points: number;
  maxPoints: number;
}
```

### 6. Category Tabs/Filters

- All tasks view
- Filter by category
- Filter by priority
- Show/hide completed

## Component Structure

```
src/pages/ActionItems.tsx
├── HubLayout
│   ├── Page Header
│   │   ├── Title: "Action Items"
│   │   └── Subtitle: "Complete these tasks before your call"
│   ├── Progress Section
│   │   ├── ProgressRing
│   │   ├── Stats Summary
│   │   └── Points Display
│   ├── Category Tabs
│   │   └── Tab (x4)
│   └── Task List
│       └── TaskItem (xN)
```

## Mock Data

```typescript
// src/data/tasks.ts
export const mockTasks: Task[] = [
  // HIGH-VALUE ENTERPRISE TASKS
  {
    id: '1',
    category: 'setup',
    title: 'Upload Your Design System',
    description: 'Import your Figma tokens or design system into your Enterprise Lovable account',
    points: 50,
    completed: false,
    priority: 'required',
    link: '/settings/design-system',
    requiresUpload: true,
    uploadType: 'design-system',
    externalUrl: 'https://figma.com',
    estimatedTime: '15 min'
  },
  {
    id: '2',
    category: 'integration',
    title: 'Connect Your Data Sources',
    description: 'Set up integrations with your existing databases and APIs for the demo',
    points: 40,
    completed: false,
    priority: 'required',
    link: '/settings/integrations',
    requiresUpload: true,
    uploadType: 'data-schema',
    estimatedTime: '20 min'
  },
  {
    id: '3',
    category: 'team',
    title: 'Configure Enterprise SSO',
    description: 'Set up Single Sign-On for secure team access',
    points: 30,
    completed: false,
    priority: 'required',
    link: '/settings/sso',
    estimatedTime: '10 min'
  },
  {
    id: '4',
    category: 'team',
    title: 'Invite Your Technical Lead',
    description: 'Add your tech lead or architect to participate in the demo call',
    points: 20,
    completed: false,
    priority: 'recommended',
    link: '/settings/team',
    estimatedTime: '2 min'
  },
  {
    id: '5',
    category: 'preparation',
    title: 'Submit Demo Ideas',
    description: 'Share 1-3 use cases you\'d like us to demo with AI',
    points: 25,
    completed: false,
    priority: 'recommended',
    link: '/demo-ideas',
    estimatedTime: '10 min'
  },
  {
    id: '6',
    category: 'content',
    title: 'Review Security & Compliance',
    description: 'Review our enterprise security documentation and compliance certifications',
    points: 15,
    completed: false,
    priority: 'required',
    link: '/security',
    estimatedTime: '5 min'
  },
  {
    id: '7',
    category: 'content',
    title: 'Watch Product Demo Video',
    description: 'See Lovable in action with a personalized demo',
    points: 15,
    completed: false,
    priority: 'required',
    link: '/demo',
    estimatedTime: '3 min'
  },
  // ... more tasks
];
```

## Rewards Integration

On task completion:
1. Update task state
2. Call `addPoints(task.points, task.title)`
3. Check for achievements:
   - "First Task" - Complete first task
   - "Quick Start" - Complete all setup tasks
   - "Team Player" - Complete all team tasks
   - "Overachiever" - Complete all tasks

## Persistence

```typescript
// localStorage structure
{
  "customer-hub-tasks": {
    "1": { completed: true, completedAt: "2024-01-20T10:30:00Z" },
    "2": { completed: false },
    // ...
  }
}
```

## Animations

1. **Page entry:** BlurFade on sections
2. **Task completion:** Checkmark animation
3. **Progress ring:** Animated fill
4. **Points earned:** Counter animation
5. **Category switch:** Fade transition

## Responsive Behavior

- Desktop: Full task list with side progress
- Tablet: Stacked layout
- Mobile: Compact cards, progress at top
