import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoRotate?: boolean;
  rotateInterval?: number;
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
  autoRotate = true,
  rotateInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!autoRotate || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, rotateInterval);

    return () => clearInterval(interval);
  }, [autoRotate, isPaused, rotateInterval, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div 
      className="p-8 bg-[#F7F4ED] rounded-3xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Quote Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-12 h-12 rounded-full bg-[#D4E0F9] flex items-center justify-center">
          <Quote className="w-6 h-6 text-[#4A7AE8]" />
        </div>
      </div>

      {/* Quote */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <p className="text-xl md:text-2xl text-foreground leading-relaxed transition-opacity duration-300">
          "{currentTestimonial.quote}"
        </p>
      </div>

      {/* Author */}
      <div className="flex flex-col items-center gap-3 mb-8">
        {currentTestimonial.avatar && (
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#ECEAE4]">
            <img 
              src={currentTestimonial.avatar} 
              alt={currentTestimonial.author}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="text-center">
          <p className="text-sm font-medium text-foreground">{currentTestimonial.author}</p>
          <p className="text-sm text-muted-foreground">
            {currentTestimonial.role}, {currentTestimonial.company}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full bg-background/50 hover:bg-background transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex 
                  ? "bg-[#4A7AE8] w-6" 
                  : "bg-[#ECEAE4] hover:bg-[#D4E0F9]"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="p-2 rounded-full bg-background/50 hover:bg-background transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
