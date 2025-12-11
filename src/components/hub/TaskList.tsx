import React from "react";
import TaskItem from "./TaskItem";

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

interface TaskListProps {
  tasks: Task[];
  onTaskToggle: (taskId: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskToggle }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No tasks in this category</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task, index) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onTaskToggle}
          index={index}
        />
      ))}
    </div>
  );
};

export default TaskList;
