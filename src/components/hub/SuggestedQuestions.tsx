import React from "react";
import { motion } from "framer-motion";

interface SuggestedQuestionsProps {
  questions: string[];
  onSelect: (question: string) => void;
  disabled?: boolean;
}

const SuggestedQuestions: React.FC<SuggestedQuestionsProps> = ({
  questions,
  onSelect,
  disabled = false,
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {questions.map((question, index) => (
        <motion.button
          key={question}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => onSelect(question)}
          disabled={disabled}
          className="px-3 py-1.5 text-xs rounded-full bg-[#F7F4ED] border border-[#D8D6CF] text-foreground hover:bg-[#ECEAE4] hover:border-primary/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {question}
        </motion.button>
      ))}
    </div>
  );
};

export default SuggestedQuestions;
