// Mock data for Customer Hub

// Account Executive Data
export const mockAccountExecutive = {
  id: "ae-1",
  name: "Sarah Chen",
  title: "Enterprise Account Executive",
  photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
  email: "sarah@lovable.dev",
  phone: "+1 (555) 123-4567",
  calendlyUrl: "https://calendly.com/sarah-lovable",
  linkedInUrl: "https://linkedin.com/in/sarahchen",
  bio: "Sarah has 8+ years helping enterprise teams transform their development workflows. She's passionate about enabling teams to ship faster with AI.",
};

// Welcome Video Data
export const mockWelcomeVideo = {
  videoUrl: "",
  presenter: "gtm" as const,
  personalizationPoints: {
    prospectName: "John",
    companyName: "Acme Corp",
    industry: "Technology",
    customMessages: ["Tailored for your engineering team"],
  },
  thumbnailUrl: "/images/video-thumbnail.jpg",
  duration: "2:30",
};

// Usage Dashboard Data
export const usageStats = {
  accounts: 12,
  projectsBuilt: 47,
  activeUsers: 23,
  deployments: 156,
  linesOfCode: "1.2M",
  lastUpdated: new Date().toISOString(),
};

export const usageTrends = [
  { month: "Jan", projects: 5, deployments: 12, users: 8 },
  { month: "Feb", projects: 8, deployments: 24, users: 12 },
  { month: "Mar", projects: 12, deployments: 38, users: 15 },
  { month: "Apr", projects: 18, deployments: 52, users: 18 },
  { month: "May", projects: 28, deployments: 89, users: 20 },
  { month: "Jun", projects: 47, deployments: 156, users: 23 },
];

// Sales Process Data
export const dealStages = [
  {
    id: "discovery",
    name: "Discovery",
    description: "Initial exploration and needs assessment",
    status: "completed" as const,
    completedDate: "Dec 5, 2024",
    agendaItems: [
      "Understand current development workflow",
      "Identify pain points and bottlenecks",
      "Discuss team structure and capabilities",
    ],
    milestones: ["Initial call completed", "Requirements gathered", "Use cases identified"],
    resources: [
      { title: "Discovery Summary", url: "#" },
      { title: "Requirements Doc", url: "#" },
    ],
  },
  {
    id: "demo",
    name: "Product Demo",
    description: "Live demonstration of Lovable capabilities",
    status: "current" as const,
    agendaItems: [
      "Show end-to-end project creation",
      "Demonstrate AI-powered development",
      "Review enterprise security features",
      "Q&A session",
    ],
    milestones: ["Live demo scheduled", "Custom demo prepared", "Team attendees confirmed"],
  },
  {
    id: "evaluation",
    name: "Technical Evaluation",
    description: "Hands-on trial and technical deep-dive",
    status: "upcoming" as const,
    agendaItems: [
      "Pilot project setup",
      "Integration assessment",
      "Security review",
    ],
    milestones: ["POC environment", "Integration testing", "Security audit"],
  },
  {
    id: "negotiation",
    name: "Negotiation",
    description: "Pricing and contract discussions",
    status: "upcoming" as const,
    agendaItems: [
      "Pricing proposal",
      "Contract terms",
      "Implementation timeline",
    ],
  },
  {
    id: "closed",
    name: "Closed Won",
    description: "Deal closed and onboarding begins",
    status: "upcoming" as const,
    agendaItems: [
      "Kickoff meeting",
      "Team onboarding",
      "Success metrics",
    ],
  },
];

// Pre-Call Agenda Data
export const mockAgenda = [
  {
    id: "1",
    title: "Introductions",
    duration: "5 min",
    description: "Team introductions and role overview",
    presenter: "both" as const,
    details: [
      "Brief introductions from both teams",
      "Overview of attendee roles and responsibilities",
      "Set expectations for the call",
    ],
  },
  {
    id: "2",
    title: "Your Challenges",
    duration: "10 min",
    description: "Deep dive into your current pain points",
    presenter: "prospect" as const,
    details: [
      "Walk us through your current development process",
      "Where are the biggest bottlenecks?",
      "What have you tried before?",
    ],
  },
  {
    id: "3",
    title: "Live Demo",
    duration: "20 min",
    description: "See Lovable build a real application",
    presenter: "lovable" as const,
    details: [
      "End-to-end project creation",
      "AI-powered feature development",
      "Real-time collaboration features",
      "Deployment and hosting walkthrough",
    ],
  },
  {
    id: "4",
    title: "Enterprise Features",
    duration: "10 min",
    description: "Security, compliance, and admin controls",
    presenter: "lovable" as const,
    details: [
      "SSO and authentication options",
      "Role-based access control",
      "Audit logs and compliance",
      "Data residency options",
    ],
  },
  {
    id: "5",
    title: "Q&A",
    duration: "10 min",
    description: "Open discussion and next steps",
    presenter: "both" as const,
    details: [
      "Address any questions or concerns",
      "Discuss potential pilot project",
      "Align on next steps and timeline",
    ],
  },
];

// AI Research Insights Data
export const mockResearch = {
  strategy: {
    summary: "Acme Corp is positioning itself as a technology leader with strong investments in AI-powered productivity tools. Recent initiatives suggest a focus on developer enablement and reducing time-to-market for internal products.",
    aiInitiatives: [
      "ML-powered internal recommendation systems",
      "Automated testing and CI/CD pipelines",
      "AI-assisted code review processes",
      "Natural language interfaces for internal tools"
    ],
    technologyFocus: [
      "Cloud-native architecture",
      "Microservices migration",
      "Real-time data processing",
      "Mobile-first development"
    ],
    marketPosition: "Mid-market enterprise with ambitions to compete with larger players through technology differentiation",
    competitiveAdvantages: [
      "Strong engineering culture",
      "Rapid iteration capability",
      "Customer-centric product development"
    ]
  },
  painPoints: [
    {
      id: "pp-1",
      category: "engineering" as const,
      title: "Slow Development Cycles",
      description: "Engineering velocity mentioned as key challenge in recent leadership communications. Average feature delivery time exceeds industry benchmarks by 40%.",
      source: "Q3 2024 Earnings Call",
      relevanceScore: 92
    },
    {
      id: "pp-2",
      category: "product" as const,
      title: "Prototyping Bottlenecks",
      description: "Product teams waiting 2-3 weeks for engineering resources to validate concepts. Opportunity cost of delayed validation estimated at $200K/quarter.",
      source: "Job Postings Analysis",
      relevanceScore: 87
    },
    {
      id: "pp-3",
      category: "cost" as const,
      title: "Rising Development Costs",
      description: "Engineering headcount grew 45% YoY while output metrics show only 20% improvement. Cost per feature has increased significantly.",
      source: "Industry Analysis",
      relevanceScore: 78
    },
    {
      id: "pp-4",
      category: "operations" as const,
      title: "Tool Fragmentation",
      description: "Multiple teams using different tools for similar purposes. Lack of standardization creating inefficiencies and security blind spots.",
      source: "LinkedIn Posts",
      relevanceScore: 71
    }
  ],
  questions: [
    {
      id: "q-1",
      question: "How are you currently handling rapid prototyping needs?",
      context: "Based on job postings for frontend developers emphasizing 'quick iteration' skills",
      category: "technical" as const
    },
    {
      id: "q-2",
      question: "What's your current dev cycle time from idea to production?",
      context: "Industry benchmarks suggest 2-4 weeks for your company size; understanding your baseline helps quantify Lovable's impact",
      category: "technical" as const
    },
    {
      id: "q-3",
      question: "Who owns the decision for adopting new development tools?",
      context: "Understanding the buying committee structure helps tailor our proposal",
      category: "business" as const
    },
    {
      id: "q-4",
      question: "How do non-technical stakeholders currently participate in product development?",
      context: "Lovable enables PMs and designers to build directly; understanding current workflows highlights value",
      category: "adoption" as const
    },
    {
      id: "q-5",
      question: "What security and compliance requirements must new tools meet?",
      context: "Enterprise customers often have SOC2, SSO, and audit log requirements",
      category: "business" as const
    },
    {
      id: "q-6",
      question: "Are there specific use cases where you've struggled to get engineering resources?",
      context: "Internal tools and dashboards are common examples where Lovable excels",
      category: "adoption" as const
    }
  ],
  metadata: {
    generatedAt: "2024-12-10T14:30:00Z",
    sources: [
      {
        type: "earnings_call" as const,
        title: "Q3 2024 Earnings Call Transcript",
        url: "https://example.com/earnings-q3-2024",
        date: "2024-10-15",
        excerpt: "CEO emphasized engineering velocity as a top strategic priority for the coming year..."
      },
      {
        type: "job_posting" as const,
        title: "Senior Frontend Engineer - Rapid Prototyping",
        url: "https://careers.acmecorp.com/senior-frontend",
        date: "2024-12-01"
      },
      {
        type: "job_posting" as const,
        title: "Staff Engineer - Developer Productivity",
        url: "https://careers.acmecorp.com/staff-devprod",
        date: "2024-11-28"
      },
      {
        type: "press_release" as const,
        title: "Acme Corp Announces AI Development Initiative",
        url: "https://acmecorp.com/press/ai-initiative",
        date: "2024-09-20",
        excerpt: "Investing $10M in AI-powered internal tools over the next 18 months..."
      },
      {
        type: "linkedin" as const,
        title: "CTO Post on Engineering Culture",
        url: "https://linkedin.com/posts/cto-acme",
        date: "2024-11-15"
      },
      {
        type: "news" as const,
        title: "Acme Corp Named Top Workplace for Engineers",
        url: "https://technews.com/acme-workplace",
        date: "2024-08-10"
      }
    ],
    methodology: "AI analysis combining public company filings, job posting patterns, press releases, social media activity, and industry benchmarks. Cross-referenced with similar company profiles to identify common pain points.",
    confidenceScore: 82
  }
};

// Social Proof Data
export const mockMatchedCompanies = [
  {
    id: "tc-1",
    name: "TechFlow Inc",
    logo: "/images/logos/stripe.svg",
    industry: "SaaS",
    companySize: "500-1000",
    matchScore: 94,
    matchReasons: [
      "Same industry vertical",
      "Similar engineering team size",
      "Shared tech stack (React, TypeScript)"
    ],
    testimonial: {
      quote: "Lovable transformed how we build internal tools. What used to take our team weeks now takes days.",
      author: "Sarah Chen",
      role: "VP Engineering"
    }
  },
  {
    id: "tc-2",
    name: "DataDriven Co",
    logo: "/images/logos/google.svg",
    industry: "Analytics",
    companySize: "200-500",
    matchScore: 89,
    matchReasons: [
      "Data-focused organization",
      "Similar growth stage",
      "Enterprise security requirements"
    ],
    testimonial: {
      quote: "Our non-technical PMs now ship features independently. It's been a game-changer for velocity.",
      author: "Mike Johnson",
      role: "VP Engineering"
    }
  },
  {
    id: "tc-3",
    name: "ScaleUp Labs",
    logo: "/images/logos/shopify.svg",
    industry: "E-commerce",
    companySize: "100-200",
    matchScore: 87,
    matchReasons: [
      "Rapid scaling needs",
      "Customer-facing applications",
      "Multi-team collaboration"
    ],
    testimonial: {
      quote: "10x faster from idea to MVP. We've shipped more in 3 months than the previous year.",
      author: "Emily Davis",
      role: "Founder & CEO"
    }
  },
  {
    id: "tc-4",
    name: "Nexus Financial",
    logo: "/images/logos/linkedin.svg",
    industry: "FinTech",
    companySize: "500-1000",
    matchScore: 82,
    matchReasons: [
      "Compliance-focused",
      "Enterprise governance needs",
      "Internal tooling priorities"
    ],
    testimonial: {
      quote: "The security and compliance features gave us confidence to move fast without sacrificing governance.",
      author: "David Park",
      role: "CTO"
    }
  }
];

export const mockCaseStudies = [
  {
    id: "thinkify",
    company: "Thinkify",
    logo: "/images/logos/github.svg",
    title: "From Concept to Launch in 2 Weeks",
    summary: "How Thinkify built their entire customer portal using Lovable, cutting development time by 80% and reducing costs by half.",
    industry: "EdTech",
    metrics: [
      { label: "Time to Launch", value: "2 weeks", improvement: "vs 3 months planned" },
      { label: "Cost Reduction", value: "50%", improvement: "development costs" },
      { label: "Iteration Speed", value: "3x", improvement: "faster feature releases" }
    ],
    quote: "We went from a 6-person engineering backlog to shipping weekly releases with a 2-person team.",
    author: "James Liu",
    role: "Head of Product"
  },
  {
    id: "finova",
    company: "Finova",
    logo: "/images/logos/stripe.svg",
    title: "Enterprise Dashboard Transformation",
    summary: "Finova replaced their legacy dashboard with a modern, AI-powered solution that increased user engagement by 40%.",
    industry: "FinTech",
    metrics: [
      { label: "Development Speed", value: "90%", improvement: "faster than legacy" },
      { label: "Migration", value: "Zero", improvement: "downtime" },
      { label: "User Engagement", value: "40%", improvement: "increase" }
    ],
    quote: "Our stakeholders can now make dashboard changes themselves. Engineering focuses on core product.",
    author: "Rachel Torres",
    role: "Director of Engineering"
  }
];

export const mockTestimonials = [
  {
    id: "t-1",
    quote: "The speed at which we can now iterate is incredible. What used to be a 2-week sprint is now a 2-day experiment.",
    author: "Marcus Webb",
    role: "VP Product",
    company: "Velocity Systems",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: "t-2",
    quote: "Lovable bridged the gap between our technical and non-technical teams. Everyone can contribute now.",
    author: "Jennifer Kim",
    role: "CEO",
    company: "Bright Analytics",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: "t-3",
    quote: "We replaced 3 contractors with Lovable and shipped faster. The ROI was immediate and substantial.",
    author: "Alex Thompson",
    role: "CTO",
    company: "CloudScale",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  }
];

// Action Items Data
export const actionItems = [
  {
    id: "design_system",
    category: "Setup",
    title: "Review Design System",
    description: "Explore our component library and customization options",
    points: 25,
    completed: false,
  },
  {
    id: "data_integrations",
    category: "Setup",
    title: "Set Up Data Integrations",
    description: "Connect your existing tools and data sources",
    points: 50,
    completed: false,
  },
  {
    id: "enterprise_account",
    category: "Account",
    title: "Create Enterprise Account",
    description: "Set up your enterprise workspace with SSO",
    points: 75,
    completed: false,
  },
  {
    id: "team_invitations",
    category: "Account",
    title: "Send Team Invitations",
    description: "Invite your team members to collaborate",
    points: 25,
    completed: false,
  },
  {
    id: "watch_demo",
    category: "Learning",
    title: "Watch Product Demo",
    description: "Complete the interactive product walkthrough",
    points: 30,
    completed: false,
  },
  {
    id: "schedule_call",
    category: "Next Steps",
    title: "Schedule Discovery Call",
    description: "Book a call with your dedicated success manager",
    points: 50,
    completed: false,
  },
];

// FAQ Data
export const faqItems = [
  {
    question: "How does Lovable work with our existing codebase?",
    answer: "Lovable syncs directly with your GitHub repository. You can start with existing projects or create new ones. All code is yours to own, export, and deploy anywhere.",
  },
  {
    question: "What security certifications does Lovable have?",
    answer: "Lovable is SOC 2 Type II certified with enterprise-grade security. We support SSO/SAML, role-based access control, and provide comprehensive audit logs.",
  },
  {
    question: "Can non-technical team members use Lovable?",
    answer: "Absolutely! Lovable is designed for everyone. Product managers, designers, and business users can build and iterate without coding knowledge.",
  },
  {
    question: "What's the typical ROI for enterprise customers?",
    answer: "Our enterprise customers typically see 60-80% reduction in development time and 3-5x faster time-to-market for new features.",
  },
  {
    question: "How does pricing work for enterprise?",
    answer: "Enterprise pricing is based on seats and usage. Contact our sales team for a custom quote tailored to your organization's needs.",
  },
  {
    question: "What support is included with enterprise plans?",
    answer: "Enterprise plans include dedicated support, priority response times, custom onboarding, training sessions, and direct access to our product team.",
  },
];

// Organization Usage Data
export const mockOrganizationUsage = {
  corporateDomain: "acmecorp.com",
  workspaces: {
    free: 8,
    paid: 4,
    total: 12,
  },
  totalUsers: 89,
  estimatedARR: 4800,
  departments: [
    {
      name: "Engineering",
      workspaceCount: 5,
      userCount: 45,
    },
    {
      name: "Product",
      workspaceCount: 3,
      userCount: 22,
    },
    {
      name: "Marketing",
      workspaceCount: 2,
      userCount: 12,
    },
    {
      name: "Operations",
      workspaceCount: 2,
      userCount: 10,
    },
  ],
  topProjects: [
    {
      id: "proj-1",
      name: "Internal Dashboard",
      description: "Team metrics and OKR tracking dashboard for the engineering team",
      thumbnailUrl: "/src/assets/projects/internal-dashboard.png",
      createdBy: "Mike S.",
      department: "Engineering",
      remixable: true,
      remixUrl: "https://lovable.dev/remix/proj-1",
    },
    {
      id: "proj-2",
      name: "Customer Portal",
      description: "Self-service portal for enterprise customers",
      thumbnailUrl: "/src/assets/projects/customer-portal.png",
      createdBy: "Sarah L.",
      department: "Product",
      remixable: true,
      remixUrl: "https://lovable.dev/remix/proj-2",
    },
    {
      id: "proj-3",
      name: "Campaign Builder",
      description: "Marketing automation and campaign management tool",
      thumbnailUrl: "/src/assets/projects/campaign-builder.png",
      createdBy: "Alex T.",
      department: "Marketing",
      remixable: true,
      remixUrl: "https://lovable.dev/remix/proj-3",
    },
    {
      id: "proj-4",
      name: "Inventory Tracker",
      description: "Real-time inventory management system",
      thumbnailUrl: "/src/assets/projects/inventory-tracker.png",
      createdBy: "Jamie R.",
      department: "Operations",
      remixable: false,
    },
    {
      id: "proj-5",
      name: "API Documentation",
      description: "Interactive API docs for internal services",
      thumbnailUrl: "/src/assets/projects/api-documentation.png",
      createdBy: "Chris K.",
      department: "Engineering",
      remixable: true,
      remixUrl: "https://lovable.dev/remix/proj-5",
    },
    {
      id: "proj-6",
      name: "Feedback Hub",
      description: "Customer feedback collection and analysis tool",
      thumbnailUrl: "/src/assets/projects/feedback-hub.png",
      createdBy: "Jordan M.",
      department: "Product",
      remixable: true,
      remixUrl: "https://lovable.dev/remix/proj-6",
    },
  ],
};

// Swag Catalog Data
export const swagCatalog = [
  {
    id: "tshirt",
    name: "Lovable T-Shirt",
    description: "Premium cotton t-shirt with Lovable branding",
    pointsCost: 100,
    image: "/placeholder.svg",
    available: true,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "stickers",
    name: "Sticker Pack",
    description: "Set of 5 high-quality vinyl stickers",
    pointsCost: 50,
    image: "/placeholder.svg",
    available: true,
  },
  {
    id: "hoodie",
    name: "Premium Hoodie",
    description: "Cozy hoodie with embroidered logo",
    pointsCost: 250,
    image: "/placeholder.svg",
    available: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "notebook",
    name: "Developer Notebook",
    description: "Hardcover notebook with dot grid pages",
    pointsCost: 75,
    image: "/placeholder.svg",
    available: true,
  },
  {
    id: "bottle",
    name: "Water Bottle",
    description: "Insulated stainless steel bottle",
    pointsCost: 125,
    image: "/placeholder.svg",
    available: false,
  },
];
