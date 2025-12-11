import React from "react";
import { motion } from "framer-motion";

interface Category {
  id: string;
  label: string;
  count: number;
}

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeCategory === category.id
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground bg-[#F7F4ED] border border-[#D8D6CF]"
          }`}
        >
          {activeCategory === category.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-primary rounded-full"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10 flex items-center gap-2">
            {category.label}
            <span
              className={`text-xs px-1.5 py-0.5 rounded-full ${
                activeCategory === category.id
                  ? "bg-primary-foreground/20"
                  : "bg-muted"
              }`}
            >
              {category.count}
            </span>
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
