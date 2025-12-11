# Customer Hub - Implementation Tasks

> **Reference PRDs:** All tasks reference their corresponding PRD files in `/docs/`

> **⚠️ ENGAGEMENT GOALS:** Before implementing each phase, review the Engagement Goals section in the corresponding PRD. Every feature should be designed to trigger the specified THINK and FEEL outcomes. See `prd-customer-hub-overview.md` for the master framework.

---

## Engagement Goals Quick Reference

| Page       | THINK          | FEEL                | Key Question to Ask                                         |
| ---------- | -------------- | ------------------- | ----------------------------------------------------------- |
| Landing    | Impact, Future | Inspired, Trust     | "Does this make them feel like they're seeing the future?"  |
| Usage      | Speed, Unlock  | FOMO, Enabled       | "Does this create urgency by revealing hidden usage?"       |
| Process    | Future         | Trust, Future-proof | "Does this feel like partnership, not a transaction?"       |
| Research   | Impact, Unlock | Inspired, Trust     | "Does this demonstrate AI capability while building trust?" |
| Social     | Speed          | FOMO, Future-proof  | "Does this make them feel like they're falling behind?"     |
| Actions    | Unlock         | Enabled             | "Is every task clearly removing a constraint?"              |
| FAQ        | All            | Trust, Enabled      | "Does this remove objections and build confidence?"         |
| Swag       | -              | Inspired, Enabled   | "Does this feel like a gift, not a gimmick?"                |
| Demo Ideas | Impact, Unlock | Inspired, Enabled   | "Does this make them excited about what's possible?"        |

## Phase 0: Foundation Setup ✅ COMPLETED

**PRD Reference:** `prd-customer-hub-overview.md`

- [x] Create `src/data/` folder for mock data files
- [x] Create `src/data/customer.ts` with mock customer data (consolidated in mockData.ts)
- [x] Create `src/data/metrics.ts` with mock usage metrics (consolidated in mockData.ts)
- [x] Create `src/data/stages.ts` with mock sales stages (consolidated in mockData.ts)
- [x] Create `src/data/companies.ts` with mock matched companies (consolidated in mockData.ts)
- [x] Create `src/data/tasks.ts` with mock action items (consolidated in mockData.ts)
- [x] Create `src/data/faq.ts` with mock FAQ content (consolidated in mockData.ts)
- [x] Create `src/data/swag.ts` with mock swag catalog (consolidated in mockData.ts)
- [x] Create `src/contexts/CustomerContext.tsx`
- [x] Create `src/contexts/RewardsContext.tsx`
- [x] Create `src/contexts/ProgressContext.tsx`
- [x] Create `src/components/hub/HubLayout.tsx` wrapper component
- [x] Update `src/App.tsx` with all new routes
- [x] Wrap App with context providers

---

## Phase 1: Landing Page Transformation ✅ COMPLETED

**PRD Reference:** `prd-landing-page.md`

- [x] Create `src/components/hub/HubCard.tsx` component
- [x] Update `src/pages/Home.tsx` hero with dynamic company name (created CustomerHubHome.tsx)
- [x] Replace feature cards with 8 hub section cards
- [x] Add navigation links to each hub section
- [x] Add progress indicator to hero section (ProgressBadge component)
- [x] Test responsive layout (4-col → 2-col → 1-col)

### Phase 1.5: Landing Page Enhancements ✅ COMPLETED

**PRD Reference:** `prd-landing-page.md` (updated)

- [x] Create `src/components/hub/AEInfoCard.tsx` (Account Executive card)
- [x] Add AE information section with contact buttons
- [x] Add mock data for AE (in mockData.ts)
- [x] Add "Book a call" Calendly integration (link)

---

## Phase 2: Usage Dashboard (/usage) ✅ COMPLETED

**PRD Reference:** `prd-usage-dashboard.md`

### Core Features

- [x] Create `src/pages/UsageDashboard.tsx`
- [x] Create `src/components/hub/AnimatedCounter.tsx`
- [x] Create `src/components/hub/UsageStatCard.tsx`
- [x] Create `src/components/hub/TrendChart.tsx` using Recharts
- [x] Build stats cards grid (5 metrics)
- [x] Add trend charts section (3 charts)
- [x] Add loading skeleton states
- [x] Wrap with HubLayout
- [x] Test responsive behavior

### Internal Usage Discovery

- [x] Create `src/components/hub/OrganizationUsage.tsx`
- [x] Create `src/components/hub/DepartmentBreakdown.tsx`
- [x] Create `src/components/hub/TopProjectsGrid.tsx`
- [x] Create `src/components/hub/ProjectPreviewCard.tsx`
- [x] Add organization usage summary card (workspaces, users, ARR)
- [x] Add department breakdown visualization
- [x] Add top projects by department grid
- [x] Add "Remix this project" functionality
- [x] Add mock data for organization usage

---

## Phase 3: GTM Sales Process (/process) ✅ COMPLETED

**PRD Reference:** `prd-gtm-sales-process.md`

- [x] Create `src/pages/SalesProcess.tsx`
- [x] Create `src/components/hub/Timeline.tsx`
- [x] Create `src/components/hub/TimelineStage.tsx`
- [x] Create `src/components/hub/StageContent.tsx`
- [x] Create `src/components/hub/AgendaItem.tsx`
- [x] Create `src/components/hub/PreCallAgenda.tsx`
- [x] Add current stage highlighting with pulse animation
- [x] Add expandable step details (Collapsible)
- [x] Add pre-call agenda section
- [x] Connect to CustomerContext for deal stage
- [x] Test responsive behavior (vertical timeline on all sizes)

---

## Phase 4: AI Research Insights (/research) ✅ COMPLETED

**PRD Reference:** `prd-ai-research-insights.md`

### Core Features

- [x] Create `src/pages/ResearchInsights.tsx`
- [x] Create `src/components/hub/StrategyCard.tsx`
- [x] Create `src/components/hub/PainPointCard.tsx`
- [x] Create `src/components/hub/QuestionCard.tsx`
- [x] Add mock data for research (enhanced in mockData.ts)
- [x] Test responsive behavior

### Research Transparency

- [x] Create `src/components/hub/ResearchSourcesList.tsx`
- [x] Create `src/components/hub/ConfidenceIndicator.tsx`
- [x] Add "How this was generated" expandable section
- [x] Add source citations with links (earnings calls, job postings, etc.)
- [x] Add methodology explanation
- [x] Add confidence score display
- [x] Add "last generated" timestamp
- [x] Add mock data for research metadata

### Deferred (Requires Lovable Cloud)

- [ ] Enable Lovable Cloud (if not already enabled)
- [ ] Create `supabase/functions/generate-research/index.ts`
- [ ] Add AI generation with loading states
- [ ] Add regenerate functionality with actual AI
- [ ] Add localStorage caching

---

## Phase 5: Social Proof (/social) ✅ COMPLETED

**PRD Reference:** `prd-social-proof.md`

### Core Features

- [x] Create `src/pages/SocialProof.tsx`
- [x] Create `src/components/hub/CompanyCard.tsx`
- [x] Create `src/components/hub/AIMatchedBadge.tsx`
- [x] Create `src/components/hub/CaseStudyCard.tsx`
- [x] Create `src/components/hub/TestimonialCarousel.tsx`
- [x] Build "Companies like you" section
- [x] Add match score display with animated counter
- [x] Add case study previews with metrics
- [x] Test responsive behavior

### FOMO Messaging

- [x] Add AI-generated transparency callout
- [x] Add dynamic FOMO messaging ("X similar companies chose Lovable this quarter")
- [x] Add personalized badge with company name
- [x] Add pulsing animation on AI-matched badge


---

## Phase 6: Action Items (/actions) ✅ COMPLETED

**PRD Reference:** `prd-action-items.md`

### Core Features

- [x] Create `src/pages/ActionItems.tsx`
- [x] Create `src/components/hub/TaskItem.tsx`
- [x] Create `src/components/hub/TaskList.tsx`
- [x] Create `src/components/hub/ProgressRing.tsx`
- [x] Create `src/components/hub/CategoryTabs.tsx`
- [x] Implement checkbox completion with localStorage
- [x] Add progress indicator section
- [x] Integrate with RewardsContext for points
- [x] Add category filtering
- [x] Add completion animations
- [x] Test responsive behavior

### High-Value Enterprise Tasks (NEW)

- [x] Add "Upload Design System" task with Figma link
- [x] Add "Connect Data Sources" task with upload flow
- [x] Add "Configure SSO" task
- [x] Add "Submit Demo Ideas" task (links to /demo-ideas)
- [x] Add time estimates to task cards
- [x] Add external URL support for tasks

---

## Phase 7: FAQ with AI Chatbot (/faq) ✅ COMPLETED

**PRD Reference:** `prd-faq-chatbot.md`

- [x] Create `src/pages/FAQPage.tsx`
- [x] Create `src/components/hub/FAQAccordion.tsx`
- [x] Create `src/components/hub/ChatBot.tsx`
- [x] Create `src/components/hub/MessageBubble.tsx`
- [x] Create `src/components/hub/TypingIndicator.tsx`
- [x] Create `src/components/hub/SuggestedQuestions.tsx`
- [x] Create `supabase/functions/faq-chat/index.ts`
- [x] Build message list with scroll
- [x] Add typing indicator
- [x] Add suggested questions feature
- [x] Add error handling and fallbacks
- [x] Test responsive behavior (side-by-side → tabbed)

---

## Phase 8: Swag Redemption (/swag) ✅ COMPLETED

**PRD Reference:** `prd-swag-redemption.md`

### Core Features

- [x] Create `src/pages/SwagRedemption.tsx`
- [x] Create `src/components/hub/SwagCard.tsx`
- [x] Create `src/components/hub/PointsBalance.tsx`
- [x] Create `src/components/hub/RedemptionModal.tsx`
- [x] Build swag catalog grid with 8 items
- [x] Add category filters (all, accessories, apparel, tech, limited)
- [x] Build redemption flow with shipping form
- [x] Add confirmation animation
- [x] Integrate with RewardsContext (points deduction)
- [x] Add insufficient points states with lock overlay
- [x] Add localStorage persistence for redeemed items
- [x] Test responsive behavior (4-col → 2-col → 1-col)

### Proactive Reward Notifications (Deferred)

- [ ] Create `src/components/hub/RewardToast.tsx`
- [ ] Add first-login reward notification ("Welcome! Claim your free gift")
- [ ] Add milestone notifications (100 points, etc.)
- [ ] Add task completion reward notifications
- [ ] Add notification persistence (localStorage)
- [ ] Integrate with Sonner toast system

---

## Phase 8.5: Demo Page - Enterprise Quote Generator (/demo) ✅ COMPLETED

**PRD Reference:** `prd-demo-page.md`
**Pricing Logic:** `src/lib/pricing.ts`

### Purpose
Dual-purpose demo page that:
1. Showcases what can be built with Lovable (meta-demo)
2. Provides interactive enterprise pricing calculator

### Phase 8.5.1: Core Calculator ✅
- [x] Create `src/pages/DemoPage.tsx`
- [x] Create `src/components/demo/DemoIntro.tsx` (video + "built with Lovable" badge)
- [x] Create `src/components/demo/UsageEstimator.tsx` (simple mode slider)
- [x] Create `src/components/demo/CommitmentSelector.tsx` (tier radio group)
- [x] Create `src/components/demo/QuoteSummary.tsx` (results card with AnimatedCounter)
- [x] Wire up pricing calculations from `src/lib/pricing.ts`
- [x] Add CustomerContext integration for company name

### Phase 8.5.2: Advanced Features ✅
- [x] Add advanced mode with user breakdown sliders
- [x] Create `src/components/demo/PlatformFeeSlider.tsx`
- [x] Add per-user pricing toggle
- [x] Create `src/components/demo/CostBreakdown.tsx` (expandable details)
- [x] Add optimal tier recommendation indicator
- [x] Add savings display

### Phase 8.5.3: Polish & Actions ✅
- [x] Create `src/components/demo/ROICalculator.tsx` (3 scenarios)
- [x] Create `src/components/demo/QuoteActions.tsx` (copy link, share, book call)
- [x] Implement URL param encoding/decoding for shareable quotes
- [x] Add animations (number transitions, tier selection)
- [x] Integrate with RewardsContext (points for generating quote)
- [x] Test responsive behavior (two-column → stacked)
- [x] Add PDF download feature for enterprise quotes
- [x] Fix AnimatedCounter to update on value changes (ROI calculator)

### Test Cases
| Scenario | Expected |
|----------|----------|
| 100 users, no commitment | $48,000 credits |
| 100 users, $100K commitment | $100,000 (floor) |
| Advanced: 10 power + 50 normal + 40 casual | 48,000 credits/year |
| Per-user with 20 users | $43,200 (30 min) |

---

## Phase 8.6: AI Demo Ideas (/demo-ideas) ✅ COMPLETED

**PRD Reference:** `prd-demo-ideas.md`

- [x] Create `src/pages/DemoIdeas.tsx`
- [x] Create `src/components/hub/UseCaseCard.tsx` (renamed from UseCaseSuggestionCard)
- [x] Create `src/components/hub/DemoIdeaForm.tsx`
- [x] Create `src/components/hub/IdeasSummary.tsx`
- [x] Create `supabase/functions/generate-use-cases/index.ts`
- [x] Build AI-generated suggestions grid
- [x] Build custom idea submission form (1-3 ideas)
- [x] Add idea validation (min 1, max 3)
- [x] Add submission confirmation flow
- [x] Integrate with RewardsContext for points
- [x] Add mock data fallback for use case suggestions
- [x] Test responsive behavior
- [x] Add regenerate suggestions button
- [x] Add back link to Demo page
- [x] Add Demo Ideas card to homepage hub grid
- [x] Add "Have your own idea?" CTA on Demo page linking to Demo Ideas

---

## Phase 9: Integration & Polish

**PRD Reference:** `prd-customer-hub-overview.md`

- [ ] Connect all contexts across pages
- [ ] Implement gamification points system fully
- [ ] Add achievement unlocks
- [ ] Test all navigation flows
- [ ] Verify mobile responsiveness on all pages
- [ ] Add toast notifications for all actions
- [ ] Test context persistence (localStorage)
- [ ] Performance optimization
- [ ] Final cross-browser testing
- [ ] Documentation update

---

## Design System & Component Mapping

### Critical Design Tokens (DO NOT CHANGE)

```
Cards:
  - Background: bg-[#F7F4ED] or bg-[#FCFBF8]
  - Border: border-[#D8D6CF] or border-[#ECEAE4]
  - Radius: rounded-3xl (24px)
  - Padding: p-6

Typography:
  - Page heading: text-[48px] font-semibold leading-[110%] tracking-[-0.03em]
  - Card heading: text-2xl font-medium leading-[110%] tracking-[-0.01em]
  - Body text: text-base leading-[22px] tracking-[-0.01em]
  - Muted text: text-muted-foreground

Icons:
  - Container: w-12 h-12 rounded-[9.6px]
  - With colored bg + border (e.g., bg-[#D4E0F9] border-[#9CAEFF])

Animations:
  - BlurFade for scroll reveal
  - transition-all duration-500 for state changes
  - hover:-translate-y-1 for card hover
```

### Component Mapping by Phase

| Phase                               | Reuse from `/showcase`                                          | Reuse from `/ui`                                |
| ----------------------------------- | --------------------------------------------------------------- | ----------------------------------------------- |
| **Phase 1.5: Landing Enhancements** | `FeatureShowcaseCard`                                           | `Avatar`, `Button`, `BlurFade`                  |
| **Phase 2: Usage Dashboard**        | `StatCard`, `FeatureShowcaseCard`, `SectionHeader`              | `BlurFade`, `Skeleton`                          |
| **Phase 3: Sales Process**          | `ExpandingCardsSection` pattern, `UseCaseCard` icon box pattern | `BlurFade`, `Collapsible`                       |
| **Phase 4: AI Research**            | `UseCaseCard`, `FeatureShowcaseCard`                            | `BlurFade`, `Skeleton`, `Button`, `Collapsible` |
| **Phase 5: Social Proof**           | `TestimonialCard` ✅, `UseCaseCard`, `ContentCarousel` pattern  | `BlurFade`, `Avatar`, `Badge`                   |
| **Phase 6: Action Items**           | `UseCaseCard` pattern                                           | `Checkbox`, `Progress`, `Tabs`, `Badge`         |
| **Phase 7: FAQ & Chatbot**          | `FAQSection` ✅ (direct reuse)                                  | `Accordion`, `ScrollArea`, `Input`              |
| **Phase 8: Swag Redemption**        | `FeatureShowcaseCard`                                           | `Dialog`, `Form`, `Button`, `Badge`             |
| **Phase 8.5: Demo Ideas**           | `UseCaseCard`, `FeatureShowcaseCard`                            | `Form`, `Checkbox`, `Badge`, `Textarea`         |

### Showcase Components Reference

Located in `src/components/showcase/`:

- **StatCard** - Large number display with description
- **UseCaseCard** - Icon box + title + description pattern
- **TestimonialCard** - Quote with avatar and attribution
- **FAQSection** - Split layout with accordion
- **FeatureShowcaseCard** - Image/gradient header + content + link
- **ContentCarousel** - Auto-rotating slides with navigation
- **ExpandingCardsSection** - Horizontal expanding cards with pagination
- **SectionHeader** - Page section title + subtitle

---

## Notes

### Implementation Order Rationale

1. **Phase 0** must be complete before any other phase
2. **Phase 1** provides navigation to all other pages
3. **Phases 2-3** are simpler, build momentum
4. **Phases 4 & 7** require Lovable Cloud (AI features)
5. **Phase 6 & 8** depend on RewardsContext working
6. **Phase 9** is final integration

### Design Constraint Reminder

⚠️ **DO NOT MODIFY** existing UI elements, colors, animations, or component styles. Focus ONLY on functionality.

### Mock Data Approach

All data is mock/configurable. No real APIs. Data files in `src/data/` can be easily swapped for real API calls later.
