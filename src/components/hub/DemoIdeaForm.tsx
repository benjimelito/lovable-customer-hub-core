import React from "react";
import { X, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export interface DemoIdeaSubmission {
  id: string;
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  expectedOutcome: string;
  additionalContext?: string;
}

interface DemoIdeaFormProps {
  idea: DemoIdeaSubmission;
  index: number;
  onChange: (id: string, updates: Partial<DemoIdeaSubmission>) => void;
  onRemove: (id: string) => void;
  canRemove: boolean;
  errors?: Record<string, string>;
}

const DemoIdeaForm: React.FC<DemoIdeaFormProps> = ({
  idea,
  index,
  onChange,
  onRemove,
  canRemove,
  errors = {},
}) => {
  return (
    <div className="bg-[#F7F4ED] dark:bg-card border border-[#D8D6CF] dark:border-border rounded-2xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-medium text-foreground">Idea {index + 1}</h4>
        {canRemove && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onRemove(idea.id)}
            className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      <div className="space-y-4">
        {/* Title */}
        <div>
          <Label htmlFor={`title-${idea.id}`} className="text-sm font-medium">
            Idea Title <span className="text-destructive">*</span>
          </Label>
          <Input
            id={`title-${idea.id}`}
            value={idea.title}
            onChange={(e) => onChange(idea.id, { title: e.target.value })}
            placeholder="e.g., Customer Feedback Dashboard"
            className="mt-1.5"
            maxLength={100}
          />
          {errors.title && (
            <p className="text-xs text-destructive mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.title}
            </p>
          )}
          <p className="text-xs text-muted-foreground mt-1 text-right">
            {idea.title.length}/100
          </p>
        </div>

        {/* Description */}
        <div>
          <Label htmlFor={`desc-${idea.id}`} className="text-sm font-medium">
            Description <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id={`desc-${idea.id}`}
            value={idea.description}
            onChange={(e) => onChange(idea.id, { description: e.target.value })}
            placeholder="Describe what you'd like to see built..."
            className="mt-1.5 min-h-[80px]"
            maxLength={500}
          />
          {errors.description && (
            <p className="text-xs text-destructive mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.description}
            </p>
          )}
          <p className="text-xs text-muted-foreground mt-1 text-right">
            {idea.description.length}/500
          </p>
        </div>

        {/* Priority & Expected Outcome */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label className="text-sm font-medium">Priority</Label>
            <Select
              value={idea.priority}
              onValueChange={(value: "high" | "medium" | "low") =>
                onChange(idea.id, { priority: value })
              }
            >
              <SelectTrigger className="mt-1.5">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high">High Priority</SelectItem>
                <SelectItem value="medium">Medium Priority</SelectItem>
                <SelectItem value="low">Low Priority</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor={`outcome-${idea.id}`} className="text-sm font-medium">
              Expected Outcome
            </Label>
            <Input
              id={`outcome-${idea.id}`}
              value={idea.expectedOutcome}
              onChange={(e) => onChange(idea.id, { expectedOutcome: e.target.value })}
              placeholder="What does success look like?"
              className="mt-1.5"
            />
          </div>
        </div>

        {/* Additional Context */}
        <div>
          <Label htmlFor={`context-${idea.id}`} className="text-sm font-medium">
            Additional Context <span className="text-muted-foreground">(optional)</span>
          </Label>
          <Textarea
            id={`context-${idea.id}`}
            value={idea.additionalContext || ""}
            onChange={(e) => onChange(idea.id, { additionalContext: e.target.value })}
            placeholder="Any specific requirements, integrations, or constraints..."
            className="mt-1.5 min-h-[60px]"
          />
        </div>
      </div>
    </div>
  );
};

export default DemoIdeaForm;
