import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Brain, PenLine } from "lucide-react";

interface TypingIndicatorProps {
  phase?: "thinking" | "responding";
}

const TypingIndicator: React.FC<TypingIndicatorProps> = ({ phase = "thinking" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-3"
    >
      <Avatar className="h-8 w-8 shrink-0">
        <AvatarImage src="/images/lovable-logo-text-light.svg" alt="Lovable" />
        <AvatarFallback className="bg-primary text-primary-foreground text-xs">
          L
        </AvatarFallback>
      </Avatar>

      <div className="bg-[#F7F4ED] dark:bg-card border border-[#D8D6CF] dark:border-border rounded-2xl rounded-tl-md px-4 py-3">
        <div className="flex items-center gap-2">
          {phase === "thinking" ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Brain className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-sm text-muted-foreground">Thinking...</span>
            </>
          ) : (
            <>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                <PenLine className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-sm text-muted-foreground">Writing response...</span>
            </>
          )}
        </div>
        {phase === "thinking" && (
          <div className="flex items-center gap-1 mt-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-primary/50"
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TypingIndicator;
