# Landing Page PRD

## Overview

The landing page serves as the central hub for the Customer Hub application. It welcomes prospects with a personalized greeting and provides navigation to all 8 hub sections through an interactive card grid.

## Engagement Goals

**Primary THINK:** Impact, Future
**Primary FEEL:** Inspired, Trust

### Goal Implementation

| Goal | How to Achieve |
|------|----------------|
| **Impact** | Personalized video shows strategic value; AE section establishes partnership |
| **Future** | HeyGen video demonstrates AI innovation; hub itself is "the future of sales" |
| **Inspired** | Personalized welcome creates "wow" moment; see what's possible with AI |
| **Trust** | Direct AE contact; professional, polished experience; transparent about personalization |

### Key Messaging
- Hero: "Welcome to your personalized enterprise experience"
- Video: Show AI capabilities that feel magical yet achievable
- AE Card: "Your dedicated partner" framing, not "salesperson"
- Progress: "Your journey to faster development starts here"

## Design Constraints

⚠️ **DO NOT MODIFY:**
- Existing hero section styling
- Card component styles
- Animation configurations
- Color scheme and design tokens
- Video player component

## Features

### 1. Personalized Hero Section

**Current:** Generic hero with company branding
**Updated:** Dynamic greeting using CustomerContext

```tsx
// Example usage
const { companyName, contactName } = useCustomer();
// "Welcome, {contactName} from {companyName}"
```

### 2. Hub Section Cards Grid

Replace current feature cards with 8 hub section cards:

| Card | Title | Icon | Route | Description |
|------|-------|------|-------|-------------|
| 1 | Watch Demo | Play | /demo | See Lovable in action |
| 2 | Usage Dashboard | BarChart3 | /usage | Your project metrics |
| 3 | Sales Process | GitBranch | /process | Deal timeline & next steps |
| 4 | AI Research | Brain | /research | Company-specific insights |
| 5 | Social Proof | Users | /social | Companies like you |
| 6 | Action Items | CheckSquare | /actions | Pre-call checklist |
| 7 | FAQ & Chat | MessageCircle | /faq | Questions answered |
| 8 | Earn Swag | Gift | /swag | Redeem your rewards |

### 3. HeyGen Personalized Welcome Video

**NEW FEATURE:** AI-generated personalized welcome video using HeyGen

```typescript
interface WelcomeVideo {
  videoUrl: string;
  presenter: 'gtm' | 'anton'; // GTM team member or Anton
  personalizationPoints: {
    prospectName: string;
    companyName: string;
    industry: string;
    customMessages?: string[];
  };
  thumbnailUrl: string;
  duration: string;
}
```

Personalization points to include in video:
- Prospect's name and company
- Industry-specific messaging
- Current Lovable usage across their organization (if any)
- Tailored value proposition

Display:
- Video thumbnail with play button
- "Personalized for {companyName}" badge
- Presenter info (name, role)
- Video duration indicator

### 4. Account Executive (AE) Information Section

Display assigned AE details prominently:

```typescript
interface AccountExecutive {
  id: string;
  name: string;
  title: string;
  photoUrl: string;
  email: string;
  phone?: string;
  calendlyUrl: string;
  linkedInUrl?: string;
  bio: string;
}
```

Card displays:
- AE photo (avatar)
- Name and title
- "Your dedicated account executive" label
- Quick contact buttons (Email, Call, Book meeting)
- LinkedIn link
- Brief bio/intro

### 5. Progress Indicator

Show overall engagement progress in hero section:
- Sections visited
- Actions completed
- Points earned

## Component Structure

```
src/pages/Home.tsx
├── Hero Section
│   ├── Personalized Greeting
│   ├── Progress Badge
│   └── Video Player
├── Hub Cards Grid
│   └── HubCard (x8)
└── Footer CTA
```

## Mock Data Required

```typescript
// src/data/customer.ts
export const mockCustomer = {
  companyName: "Acme Corp",
  contactName: "John",
  industry: "Technology",
  dealStage: "evaluation",
  // ...
};

// src/data/ae.ts
export const mockAccountExecutive = {
  id: 'ae-1',
  name: 'Sarah Chen',
  title: 'Enterprise Account Executive',
  photoUrl: '/images/ae/sarah.jpg',
  email: 'sarah@lovable.dev',
  phone: '+1 (555) 123-4567',
  calendlyUrl: 'https://calendly.com/sarah-lovable',
  linkedInUrl: 'https://linkedin.com/in/sarahchen',
  bio: 'Sarah has 8+ years helping enterprise teams transform their development workflows.'
};

// src/data/welcomeVideo.ts
export const mockWelcomeVideo = {
  videoUrl: '/videos/welcome-personalized.mp4',
  presenter: 'gtm',
  personalizationPoints: {
    prospectName: 'John',
    companyName: 'Acme Corp',
    industry: 'Technology',
    customMessages: ['Tailored for your engineering team']
  },
  thumbnailUrl: '/images/video-thumbnail.jpg',
  duration: '2:30'
};
```

## Navigation

Each HubCard should:
1. Navigate to respective route on click
2. Show visited state if section was previously accessed
3. Display locked state if prerequisites not met (optional)

## Responsive Behavior

- Desktop: 4-column grid
- Tablet: 2-column grid
- Mobile: 1-column stack

## Dependencies

- CustomerContext for personalization
- ProgressContext for visited states
- RewardsContext for points display
