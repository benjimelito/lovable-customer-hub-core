import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface Achievement {
  id: string;
  name: string;
  description: string;
  earnedAt?: Date;
  icon: string;
}

interface Unlock {
  id: string;
  name: string;
  type: "swag" | "feature" | "content";
  unlockedAt?: Date;
  redeemed: boolean;
}

interface RewardsContextType {
  points: number;
  maxPoints: number;
  achievements: Achievement[];
  unlocks: Unlock[];
  addPoints: (amount: number) => void;
  removePoints: (amount: number) => void;
  setPoints: (amount: number) => void;
  earnAchievement: (achievementId: string) => void;
  unlockReward: (unlockId: string) => void;
  redeemUnlock: (unlockId: string) => void;
  getTotalPoints: () => number;
  getUnredeemedUnlocks: () => Unlock[];
}

const defaultAchievements: Achievement[] = [
  { id: "first_visit", name: "First Steps", description: "Visited the Customer Hub", icon: "🎯" },
  { id: "video_watched", name: "Visual Learner", description: "Watched the product demo", icon: "🎬" },
  { id: "faq_explorer", name: "Curious Mind", description: "Explored 5 FAQ questions", icon: "❓" },
  { id: "action_master", name: "Action Taker", description: "Completed all action items", icon: "✅" },
  { id: "research_reviewed", name: "Deep Diver", description: "Reviewed AI research insights", icon: "🔍" },
];

const defaultUnlocks: Unlock[] = [
  { id: "tshirt", name: "Lovable T-Shirt", type: "swag", redeemed: false },
  { id: "stickers", name: "Sticker Pack", type: "swag", redeemed: false },
  { id: "hoodie", name: "Premium Hoodie", type: "swag", redeemed: false },
  { id: "early_access", name: "Early Access Features", type: "feature", redeemed: false },
  { id: "case_study", name: "Exclusive Case Studies", type: "content", redeemed: false },
];

// Total points available from action items (matches ActionItems.tsx tasks)
const MAX_POINTS = 210;

const POINTS_STORAGE_KEY = "customer-hub-points";
const TASKS_STORAGE_KEY = "customer-hub-tasks";

// Task points mapping - must match ActionItems.tsx
const TASK_POINTS: Record<string, number> = {
  design_system: 50,
  data_integrations: 40,
  sso_config: 30,
  invite_tech_lead: 20,
  demo_ideas: 25,
  security_docs: 15,
  watch_demo: 15,
  invite_stakeholders: 15,
};

// Calculate points from completed tasks
const calculatePointsFromTasks = (): number => {
  const saved = localStorage.getItem(TASKS_STORAGE_KEY);
  if (saved) {
    try {
      const tasksState = JSON.parse(saved);
      return Object.entries(tasksState).reduce((sum, [taskId, task]: [string, any]) => {
        if (task.completed && TASK_POINTS[taskId]) {
          return sum + TASK_POINTS[taskId];
        }
        return sum;
      }, 0);
    } catch {
      return 0;
    }
  }
  return 0;
};

const RewardsContext = createContext<RewardsContextType | undefined>(undefined);

export const RewardsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize points from completed tasks for consistency
  const [points, setPoints] = useState(() => {
    return calculatePointsFromTasks();
  });
  const [achievements, setAchievements] = useState<Achievement[]>(defaultAchievements);
  const [unlocks, setUnlocks] = useState<Unlock[]>(defaultUnlocks);

  // Persist points to localStorage
  useEffect(() => {
    localStorage.setItem(POINTS_STORAGE_KEY, points.toString());
  }, [points]);

  const addPoints = (amount: number) => {
    setPoints((prev) => Math.min(prev + amount, MAX_POINTS));
  };

  const removePoints = (amount: number) => {
    setPoints((prev) => Math.max(prev - amount, 0));
  };

  const setPointsValue = (amount: number) => {
    setPoints(Math.max(0, Math.min(amount, MAX_POINTS)));
  };

  const earnAchievement = (achievementId: string) => {
    setAchievements((prev) =>
      prev.map((a) =>
        a.id === achievementId && !a.earnedAt
          ? { ...a, earnedAt: new Date() }
          : a
      )
    );
    addPoints(50); // Award points for achievement
  };

  const unlockReward = (unlockId: string) => {
    setUnlocks((prev) =>
      prev.map((u) =>
        u.id === unlockId && !u.unlockedAt
          ? { ...u, unlockedAt: new Date() }
          : u
      )
    );
  };

  const redeemUnlock = (unlockId: string) => {
    setUnlocks((prev) =>
      prev.map((u) =>
        u.id === unlockId ? { ...u, redeemed: true } : u
      )
    );
  };

  const getTotalPoints = () => points;

  const getUnredeemedUnlocks = () => unlocks.filter((u) => u.unlockedAt && !u.redeemed);

  return (
    <RewardsContext.Provider
      value={{
        points,
        maxPoints: MAX_POINTS,
        achievements,
        unlocks,
        addPoints,
        removePoints,
        setPoints: setPointsValue,
        earnAchievement,
        unlockReward,
        redeemUnlock,
        getTotalPoints,
        getUnredeemedUnlocks,
      }}
    >
      {children}
    </RewardsContext.Provider>
  );
};

export const useRewards = () => {
  const context = useContext(RewardsContext);
  if (!context) {
    throw new Error("useRewards must be used within a RewardsProvider");
  }
  return context;
};

export default RewardsContext;
