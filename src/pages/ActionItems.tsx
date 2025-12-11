import React, { useState, useEffect } from "react";
import HubLayout from "@/components/hub/HubLayout";
import TaskList from "@/components/hub/TaskList";
import ProgressRing from "@/components/hub/ProgressRing";
import CategoryTabs from "@/components/hub/CategoryTabs";
import { BlurFade } from "@/components/ui/blur-fade";
import { useRewards } from "@/contexts/RewardsContext";
import { useProgress } from "@/contexts/ProgressContext";
import { useCustomer } from "@/contexts/CustomerContext";
import { toast } from "sonner";
import { Target, Clock, CheckCircle2, Coins } from "lucide-react";

interface Task {
  id: string;
  category: string;
  title: string;
  description: string;
  points: number;
  completed: boolean;
  completedAt?: string;
  link?: string;
  priority: "required" | "recommended" | "optional";
  estimatedTime?: string;
  externalUrl?: string;
  unlockMessage?: string;
}

const initialTasks: Task[] = [
  {
    id: "design_system",
    category: "setup",
    title: "Upload Your Design System",
    description: "Import your Figma tokens or design system into your Enterprise Lovable account for brand-consistent outputs.",
    points: 50,
    completed: false,
    priority: "required",
    link: "/settings/design-system",
    estimatedTime: "15 min",
    externalUrl: "https://figma.com",
    unlockMessage: "Unlock brand-consistent outputs from day one",
  },
  {
    id: "data_integrations",
    category: "integration",
    title: "Connect Your Data Sources",
    description: "Set up integrations with your existing databases and APIs for realistic demos with your actual data.",
    points: 40,
    completed: false,
    priority: "required",
    link: "/settings/integrations",
    estimatedTime: "20 min",
    unlockMessage: "Unlock realistic demos with your actual data",
  },
  {
    id: "sso_config",
    category: "team",
    title: "Configure Enterprise SSO",
    description: "Set up Single Sign-On for secure team access and compliance requirements.",
    points: 30,
    completed: false,
    priority: "required",
    link: "/settings/sso",
    estimatedTime: "10 min",
    unlockMessage: "Unlock enterprise security for your team",
  },
  {
    id: "invite_tech_lead",
    category: "team",
    title: "Invite Your Technical Lead",
    description: "Add your tech lead or architect to participate in the demo call for technical validation.",
    points: 20,
    completed: false,
    priority: "recommended",
    link: "/settings/team",
    estimatedTime: "2 min",
  },
  {
    id: "demo_ideas",
    category: "preparation",
    title: "Submit Demo Ideas",
    description: "Share 1-3 use cases you'd like us to demo with AI to make the call most valuable for you.",
    points: 25,
    completed: false,
    priority: "recommended",
    link: "/demo-ideas",
    estimatedTime: "10 min",
    unlockMessage: "Unlock a personalized demo that addresses YOUR challenges",
  },
  {
    id: "security_docs",
    category: "content",
    title: "Review Security & Compliance",
    description: "Review our enterprise security documentation and compliance certifications (SOC2, GDPR).",
    points: 15,
    completed: false,
    priority: "required",
    link: "/security",
    estimatedTime: "5 min",
  },
  {
    id: "watch_demo",
    category: "content",
    title: "Watch Product Demo Video",
    description: "See Lovable in action with a 3-minute overview of key enterprise features.",
    points: 15,
    completed: false,
    priority: "required",
    link: "/demo",
    estimatedTime: "3 min",
  },
  {
    id: "invite_stakeholders",
    category: "team",
    title: "Identify Key Stakeholders",
    description: "List the decision-makers and influencers who should be involved in the evaluation.",
    points: 15,
    completed: false,
    priority: "optional",
    estimatedTime: "5 min",
  },
];

const STORAGE_KEY = "customer-hub-tasks";

const ActionItems: React.FC = () => {
  const { addPoints, removePoints, setPoints, maxPoints } = useRewards();
  const { completeFeature } = useProgress();
  const { profile } = useCustomer();
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const savedTasks = JSON.parse(saved);
      return initialTasks.map((task) => ({
        ...task,
        completed: savedTasks[task.id]?.completed || false,
        completedAt: savedTasks[task.id]?.completedAt,
      }));
    }
    return initialTasks;
  });

  const [activeCategory, setActiveCategory] = useState("all");

  // Save to localStorage
  useEffect(() => {
    const taskState = tasks.reduce((acc, task) => {
      acc[task.id] = { completed: task.completed, completedAt: task.completedAt };
      return acc;
    }, {} as Record<string, { completed: boolean; completedAt?: string }>);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(taskState));
  }, [tasks]);

  // Sync points with task completion state on mount
  useEffect(() => {
    const completedPoints = tasks.filter(t => t.completed).reduce((sum, t) => sum + t.points, 0);
    setPoints(completedPoints);
  }, []);

  const handleTaskToggle = (taskId: string) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === taskId) {
          const newCompleted = !task.completed;
          if (newCompleted) {
            addPoints(task.points);
            completeFeature(taskId);
            toast.success(`+${task.points} points!`, {
              description: `Completed: ${task.title}`,
            });
          } else {
            removePoints(task.points);
            toast.info(`-${task.points} points`, {
              description: `Uncompleted: ${task.title}`,
            });
          }
          return {
            ...task,
            completed: newCompleted,
            completedAt: newCompleted ? new Date().toISOString() : undefined,
          };
        }
        return task;
      })
    );
  };

  const categories = [
    { id: "all", label: "All Tasks", count: tasks.length },
    { id: "setup", label: "Getting Started", count: tasks.filter((t) => t.category === "setup").length },
    { id: "integration", label: "Integrations", count: tasks.filter((t) => t.category === "integration").length },
    { id: "team", label: "Team Setup", count: tasks.filter((t) => t.category === "team").length },
    { id: "content", label: "Content", count: tasks.filter((t) => t.category === "content").length },
    { id: "preparation", label: "Call Prep", count: tasks.filter((t) => t.category === "preparation").length },
  ];

  const filteredTasks =
    activeCategory === "all"
      ? tasks
      : tasks.filter((task) => task.category === activeCategory);

  const completedCount = tasks.filter((t) => t.completed).length;
  const totalPoints = tasks.reduce((sum, t) => sum + t.points, 0);
  const earnedPoints = tasks.filter((t) => t.completed).reduce((sum, t) => sum + t.points, 0);
  const progress = (completedCount / tasks.length) * 100;

  const totalTime = tasks
    .filter((t) => !t.completed && t.estimatedTime)
    .reduce((sum, t) => {
      const minutes = parseInt(t.estimatedTime || "0");
      return sum + minutes;
    }, 0);

  return (
    <HubLayout sectionId="actions" showBackground={false}>
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-background rounded-3xl">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-16 space-y-12">
          {/* Header */}
          <BlurFade delay={0.1}>
            <div className="max-w-2xl">
              <h1 className="text-[36px] md:text-[48px] font-semibold leading-[110%] tracking-[-0.03em] text-foreground">
                Action Items
              </h1>
              <p className="text-lg text-muted-foreground mt-4">
                Prepare for a transformative conversation. Complete these tasks to maximize the value of your demo call with {profile.companyName}.
              </p>
            </div>
          </BlurFade>

          {/* Progress Section */}
          <BlurFade delay={0.2}>
            <div className="bg-[#F7F4ED] dark:bg-card border border-[#D8D6CF] dark:border-border rounded-3xl p-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Progress Ring */}
                <ProgressRing progress={progress} size={120} />

                {/* Stats Grid */}
                <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-muted-foreground">Completed</span>
                    </div>
                    <p className="text-2xl font-semibold text-foreground">
                      {completedCount}/{tasks.length}
                    </p>
                  </div>

                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                      <Coins className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Points</span>
                    </div>
                    <p className="text-2xl font-semibold text-foreground">
                      {earnedPoints}/{totalPoints}
                    </p>
                  </div>

                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                      <Clock className="w-4 h-4 text-amber-600" />
                      <span className="text-sm text-muted-foreground">Time Left</span>
                    </div>
                    <p className="text-2xl font-semibold text-foreground">
                      {totalTime} min
                    </p>
                  </div>

                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                      <Target className="w-4 h-4 text-rose-600" />
                      <span className="text-sm text-muted-foreground">Required</span>
                    </div>
                    <p className="text-2xl font-semibold text-foreground">
                      {tasks.filter((t) => t.priority === "required" && !t.completed).length}
                    </p>
                  </div>
                </div>
              </div>

              {/* Motivational message */}
              <div className="mt-4 pt-4 border-t border-[#D8D6CF] dark:border-border">
                <p className="text-sm text-muted-foreground text-center md:text-left">
                  {progress === 100
                    ? "🎉 You're fully prepared for your call!"
                    : progress >= 50
                    ? "Great progress! You're more than halfway there."
                    : "15 minutes now saves hours later. Let's get started!"}
                </p>
              </div>
            </div>
          </BlurFade>

          {/* Category Tabs */}
          <BlurFade delay={0.3}>
            <CategoryTabs
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </BlurFade>


          {/* Task List */}
          <BlurFade delay={0.4}>
            <TaskList tasks={filteredTasks} onTaskToggle={handleTaskToggle} />
          </BlurFade>
        </div>
      </section>
    </HubLayout>
  );
};

export default ActionItems;
