"use client";

import { debounce } from "lodash";
import { ReactNode, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
}
export const StickyNavWrapper = ({ children, className }: Props) => {
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);
  const hideBackground = isScrolledToTop;

  useEffect(() => {
    setIsScrolledToTop(window.scrollY < 80);

    const debouncedHandleScroll = debounce(() => {
      setIsScrolledToTop(window.scrollY < 80);
    }, 5);

    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
      debouncedHandleScroll.cancel();
    };
  }, []);

  return (
    <nav
      className={cn(
        `sticky top-0 z-50 flex w-full flex-col items-center justify-between border-b border-transparent transition-all duration-200 ease-out`,
        className,
        {
          // Theme-based styling when scrolled
          "border-muted/25 bg-background/75 backdrop-blur-xl": !hideBackground,
        },
      )}
    >

      <div className="container-home flex h-16 w-full items-center justify-center">
        {children}
      </div>
    </nav>
  );
};
