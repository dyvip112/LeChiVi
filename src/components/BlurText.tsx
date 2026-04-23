import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  direction?: 'top' | 'bottom';
  animateBy?: 'word' | 'char';
}

export const BlurText = ({ 
  text, 
  delay = 0, 
  className = "", 
  direction = 'bottom',
  animateBy = 'word'
}: BlurTextProps) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const segments = animateBy === 'char' ? Array.from(text) : text.split(" ");

  return (
    <div ref={containerRef} className={`flex flex-wrap ${className}`}>
      {segments.map((segment, index) => (
        <motion.span
          key={index}
          initial={{ 
            filter: 'blur(10px)', 
            opacity: 0, 
            y: direction === 'bottom' ? 40 : -40 
          }}
          animate={isInView ? { 
            filter: 'blur(0px)', 
            opacity: 1, 
            y: 0 
          } : {}}
          transition={{
            duration: 0.8,
            delay: delay + index * (animateBy === 'char' ? 0.06 : 0.1),
            ease: [0.22, 1, 0.36, 1]
          }}
          className={animateBy === 'char' ? "inline-block" : "mr-[0.25em] inline-block"}
        >
          {segment === ' ' ? '\u00A0' : segment}
        </motion.span>
      ))}
    </div>
  );
};
