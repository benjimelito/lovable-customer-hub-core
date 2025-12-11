import React, { useEffect, useState } from "react";
import { useRewards } from "@/contexts/RewardsContext";
import { CheckCircle2, Coins } from "lucide-react";

const TOTAL_TASKS = 8;
const TASKS_STORAGE_KEY = "customer-hub-tasks";

const ProgressBadge: React.FC = () => {
  const { points } = useRewards();
  const [completedTasks, setCompletedTasks] = useState(0);
  
  // Sync with localStorage for completed tasks - read from correct key
  useEffect(() => {
    const updateCompletedTasks = () => {
      const saved = localStorage.getItem(TASKS_STORAGE_KEY);
      if (saved) {
        try {
          const tasksState = JSON.parse(saved);
          // Count completed tasks from the object format { taskId: { completed: true } }
          const completed = Object.values(tasksState).filter(
            (task: any) => task.completed === true
          ).length;
          setCompletedTasks(completed);
        } catch {
          setCompletedTasks(0);
        }
      } else {
        setCompletedTasks(0);
      }
    };
    
    updateCompletedTasks();
    
    // Listen for storage changes (cross-tab)
    window.addEventListener("storage", updateCompletedTasks);
    
    // Poll for same-tab updates
    const interval = setInterval(updateCompletedTasks, 500);
    
    return () => {
      window.removeEventListener("storage", updateCompletedTasks);
      clearInterval(interval);
    };
  }, []);
  
  // Progress based on tasks completed (not points)
  const tasksProgress = Math.round((completedTasks / TOTAL_TASKS) * 100);
  
  return (
    <div className="inline-flex items-center gap-1 p-1.5 bg-[#F7F4ED] dark:bg-card border border-[#D8D6CF] dark:border-border rounded-full shadow-sm">
      {/* Progress Ring - based on tasks completed */}
      <div className="flex items-center gap-2 px-3 py-1.5 bg-background dark:bg-background/50 rounded-full">
        <div className="relative w-9 h-9">
          <svg className="w-9 h-9 -rotate-90" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-[#D8D6CF] dark:text-border"
            />
            <circle
              cx="18"
              cy="18"
              r="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray={`${tasksProgress * 0.94} 94`}
              strokeLinecap="round"
              className="text-primary transition-all duration-500"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-foreground">
            {tasksProgress}%
          </span>
        </div>
      </div>

      {/* Tasks Completed */}
      <div className="flex items-center gap-2 px-3 py-1.5">
        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
        <div className="flex items-center gap-1">
          <span className="text-sm font-semibold text-foreground">{completedTasks}/{TOTAL_TASKS}</span>
          <span className="text-xs text-muted-foreground hidden sm:inline">Tasks</span>
        </div>
      </div>

      {/* Points */}
      <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full">
        <Coins className="w-4 h-4 text-primary" />
        <div className="flex items-center gap-1">
          <span className="text-sm font-semibold text-primary">{points}</span>
          <span className="text-xs text-muted-foreground hidden sm:inline">pts</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBadge;
