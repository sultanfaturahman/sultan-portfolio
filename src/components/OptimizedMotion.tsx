import React from 'react';
import { m, HTMLMotionProps } from 'framer-motion';

// Lightweight fade-up animation component
export const FadeUp: React.FC<HTMLMotionProps<"div"> & {
  delay?: number;
}> = ({ children, delay = 0, className = '', ...rest }) => (
  <m.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ 
      once: true, 
      margin: "0px 0px -10% 0px" // Trigger animation when element is 90% visible
    }}
    transition={{ 
      duration: 0.28, 
      ease: "easeOut",
      delay 
    }}
    className={`gpu-optimized ${className}`}
    {...rest}
  >
    {children}
  </m.div>
);

// Lightweight fade-in animation
export const FadeIn: React.FC<HTMLMotionProps<"div"> & {
  delay?: number;
}> = ({ children, delay = 0, className = '', ...rest }) => (
  <m.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    transition={{ 
      duration: 0.24, 
      ease: "easeOut",
      delay 
    }}
    className={`gpu-optimized ${className}`}
    {...rest}
  >
    {children}
  </m.div>
);

// Scale animation for cards/buttons
export const ScaleIn: React.FC<HTMLMotionProps<"div"> & {
  delay?: number;
}> = ({ children, delay = 0, className = '', ...rest }) => (
  <m.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    transition={{ 
      duration: 0.32, 
      ease: "easeOut",
      delay 
    }}
    className={`gpu-optimized ${className}`}
    {...rest}
  >
    {children}
  </m.div>
);

// Stagger container for multiple elements
export const StaggerContainer: React.FC<HTMLMotionProps<"div"> & {
  staggerDelay?: number;
}> = ({ children, staggerDelay = 0.1, className = '', ...rest }) => (
  <m.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: staggerDelay
        }
      }
    }}
    className={className}
    {...rest}
  >
    {children}
  </m.div>
);

// Stagger item
export const StaggerItem: React.FC<HTMLMotionProps<"div">> = ({ children, className = '', ...rest }) => (
  <m.div
    variants={{
      hidden: { opacity: 0, y: 12 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.24, ease: "easeOut" }
      }
    }}
    className={`gpu-optimized ${className}`}
    {...rest}
  >
    {children}
  </m.div>
);
