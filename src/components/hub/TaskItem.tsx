import React from "react";
import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Clock, Gift } from "lucide-react";

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

interface TaskItemProps {
  task: Task;
  onToggle: (taskId: string) => void;
  index: number;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, index }) => {
  const priorityStyles = {
    required: "bg-rose-100 text-rose-700 border-rose-200",
    recommended: "bg-amber-100 text-amber-700 border-amber-200",
    optional: "bg-slate-100 text-slate-600 border-slate-200",
  };

  const completedBadgeStyle = "bg-emerald-100 text-emerald-700 border-emerald-200";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`group relative bg-[#F7F4ED] dark:bg-card border border-[#D8D6CF] dark:border-border rounded-2xl p-5 transition-all duration-300 hover:shadow-md ${
        task.completed ? "bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200/50 dark:border-emerald-800/30" : ""
      }`}
    >
      <div className="flex items-start gap-4">
        {/* Checkbox */}
        <div className="pt-1">
          <Checkbox
            id={task.id}
            checked={task.completed}
            onCheckedChange={() => onToggle(task.id)}
            className={`h-5 w-5 border-2 transition-colors ${
              task.completed 
                ? "border-emerald-500 bg-emerald-500 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500" 
                : "border-[#D8D6CF] data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            }`}
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3
              className={`font-medium leading-tight transition-colors ${
                task.completed ? "text-emerald-700 dark:text-emerald-400" : "text-foreground"
              }`}
            >
              {task.title}
            </h3>
            <Badge
              variant="outline"
              className={`shrink-0 text-xs ${task.completed ? completedBadgeStyle : priorityStyles[task.priority]}`}
            >
              {task.completed ? "✓ completed" : task.priority}
            </Badge>
          </div>

          <p className={`text-sm mb-3 leading-relaxed ${task.completed ? "text-emerald-600/70 dark:text-emerald-400/70" : "text-muted-foreground"}`}>
            {task.description}
          </p>

          {/* Unlock message */}
          {task.unlockMessage && !task.completed && (
            <div className="flex items-center gap-2 text-xs text-primary mb-3">
              <Gift className="w-3.5 h-3.5" />
              <span>{task.unlockMessage}</span>
            </div>
          )}

          {/* Meta row */}
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-3">
              {task.estimatedTime && (
                <div className={`flex items-center gap-1.5 text-xs ${task.completed ? "text-emerald-600/60 dark:text-emerald-400/60" : "text-muted-foreground"}`}>
                  <Clock className="w-3.5 h-3.5" />
                  <span>{task.estimatedTime}</span>
                </div>
              )}
              <div className="flex items-center gap-1.5">
                <span className={`text-xs font-medium ${task.completed ? "text-emerald-600 dark:text-emerald-400" : "text-primary"}`}>
                  +{task.points} pts
                </span>
              </div>
            </div>

            {(task.link || task.externalUrl) && !task.completed && (
              <Button
                variant="ghost"
                size="sm"
                className="h-7 px-2 text-xs text-muted-foreground hover:text-foreground"
                asChild
              >
                <a
                  href={task.externalUrl || task.link}
                  target={task.externalUrl ? "_blank" : undefined}
                  rel={task.externalUrl ? "noopener noreferrer" : undefined}
                >
                  {task.externalUrl ? "Open" : "Go"}
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </Button>
            )}
          </div>

          {/* Completed timestamp */}
          {task.completed && task.completedAt && (
            <p className="text-xs text-emerald-600/60 dark:text-emerald-400/60 mt-2">
              Completed {new Date(task.completedAt).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TaskItem;
