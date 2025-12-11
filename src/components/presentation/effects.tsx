import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useEffect, useRef, ReactNode } from 'react';

// Typewriter Text Effect
interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  onComplete?: () => void;
  showCursor?: boolean;
}

export const TypewriterText = ({
  text,
  delay = 0,
  speed = 40,
  className = '',
  onComplete,
  showCursor = true,
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;
    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
      onComplete?.();
    }
  }, [displayedText, text, speed, hasStarted, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && !isComplete && (
        <motion.span
          className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        />
      )}
    </span>
  );
};

// Particle Effect
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

interface ParticleEffectProps {
  count?: number;
  className?: string;
}

export const ParticleEffect = ({ count = 30, className = '' }: ParticleEffectProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 3,
      opacity: Math.random() * 0.3 + 0.1,
    }));
    setParticles(newParticles);
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, particle.opacity, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

// Animated Gradient Background (using deck tokens)
export const AnimatedGradientBackground = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        className="absolute w-[400px] h-[400px] -top-[100px] -left-[100px]"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(220 85% 70% / 0.3) 0%, hsl(270 70% 65% / 0.15) 40%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{
          x: ['0%', '10%', '-5%', '8%', '0%'],
          y: ['0%', '8%', '-5%', '5%', '0%'],
          scale: [1, 1.15, 0.95, 1.1, 1],
          opacity: [0.5, 0.7, 0.4, 0.6, 0.5],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] -top-[50px] -right-[80px]"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(0 84% 60% / 0.25) 0%, hsl(25 90% 65% / 0.12) 40%, transparent 70%)',
          filter: 'blur(45px)',
        }}
        animate={{
          x: ['0%', '-12%', '5%', '-8%', '0%'],
          y: ['0%', '10%', '-5%', '6%', '0%'],
          scale: [1, 0.9, 1.2, 0.95, 1],
          opacity: [0.4, 0.6, 0.35, 0.55, 0.4],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
      <motion.div
        className="absolute w-[380px] h-[380px] -bottom-[120px] right-[5%]"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(330 80% 65% / 0.25) 0%, hsl(280 70% 60% / 0.1) 40%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{
          x: ['0%', '-8%', '6%', '-4%', '0%'],
          y: ['0%', '-10%', '5%', '-8%', '0%'],
          scale: [1, 1.12, 0.9, 1.08, 1],
          opacity: [0.35, 0.55, 0.3, 0.5, 0.35],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
    </div>
  );
};

// Slot Machine Counter
interface SlotMachineCounterProps {
  value: number;
  delay?: number;
  suffix?: string;
  className?: string;
}

export const SlotMachineCounter = ({
  value,
  delay = 0,
  suffix = '',
  className = '',
}: SlotMachineCounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsAnimating(true);
      let current = 0;
      const increment = value / 30;
      const interval = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(interval);
          setIsAnimating(false);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, 50);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(startTimer);
  }, [value, delay]);

  const digits = String(displayValue).split('');

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className="inline-flex overflow-hidden">
        <AnimatePresence mode="popLayout">
          {digits.map((digit, index) => (
            <motion.span
              key={`${index}-${digit}`}
              initial={{ y: isAnimating ? 20 : 0, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="inline-block"
            >
              {digit}
            </motion.span>
          ))}
        </AnimatePresence>
      </span>
      <motion.span
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: delay + 1.5, type: 'spring' }}
      >
        {suffix}
      </motion.span>
    </span>
  );
};

// Tilt Card
interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
}

export const TiltCard = ({ children, className = '', tiltAmount = 8 }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(y, [0, 1], [tiltAmount, -tiltAmount]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-tiltAmount, tiltAmount]), springConfig);
  const scale = useSpring(1, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseEnter = () => scale.set(1.02);
  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
    scale.set(1);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX, rotateY, scale, transformStyle: 'preserve-3d', perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
};
