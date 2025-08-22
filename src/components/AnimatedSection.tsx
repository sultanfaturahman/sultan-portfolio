import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { usePerformance } from '../hooks/usePerformance';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  duration?: number;
  stagger?: number;
}

// Hook to detect touch devices
const useIsTouchDevice = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  return isTouchDevice;
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
  stagger = 0
}) => {
  const isTouchDevice = useIsTouchDevice();
  const { shouldReduceAnimations, isMobileDevice } = usePerformance();

  // Enhanced mobile optimization
  const isMobileOptimized = shouldReduceAnimations || isMobileDevice || isTouchDevice;

  const getInitialState = () => {
    // Significantly reduce motion intensity on mobile and low-end devices
    const intensity = isMobileOptimized ? 0.1 : 0.3;
    
    // On mobile, use minimal animations
    if (isMobileOptimized) {
      return { opacity: 0 };
    }
    
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 30 * intensity };
      case 'down':
        return { opacity: 0, y: -30 * intensity };
      case 'left':
        return { opacity: 0, x: -30 * intensity };
      case 'right':
        return { opacity: 0, x: 30 * intensity };
      case 'scale':
        return { opacity: 0, scale: 0.9 };
      case 'fade':
        return { opacity: 0 };
      default:
        return { opacity: 0, y: 30 * intensity };
    }
  };

  const getAnimateState = () => {
    // On mobile, just fade in
    if (isMobileOptimized) {
      return { opacity: 1 };
    }
    
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 };
      case 'scale':
        return { opacity: 1, scale: 1 };
      case 'fade':
        return { opacity: 1 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  // Mobile-optimized transition settings
  const getTransitionSettings = () => {
    if (isMobileOptimized) {
      return {
        duration: 0.2,
        delay: delay * 0.3, // Reduce delay on mobile
        ease: "easeOut" as const
      };
    }
    
    return {
      duration: shouldReduceAnimations ? 0.3 : 0.6,
      delay: shouldReduceAnimations ? delay * 0.7 : delay,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      staggerChildren: shouldReduceAnimations ? stagger * 0.7 : stagger
    };
  };

  return (
    <motion.div
      className={`${className} ${isMobileOptimized ? 'mobile-optimized' : ''}`}
      initial={getInitialState()}
      whileInView={getAnimateState()}
      viewport={{ 
        once: true, 
        margin: isMobileOptimized ? "0px 0px -2% 0px" : "0px 0px -5% 0px", 
        amount: isMobileOptimized ? 0.1 : 0.2 
      }}
      transition={getTransitionSettings()}
    >
      {children}
    </motion.div>
  );
};

// Komponen untuk animasi stagger pada children - Mobile optimized
export const StaggerContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}> = ({ children, className = '', staggerDelay = 0.1 }) => {
  const { shouldReduceAnimations, isMobileDevice } = usePerformance();
  const isMobileOptimized = shouldReduceAnimations || isMobileDevice;
  
  // Reduce stagger delay on mobile
  const optimizedStaggerDelay = isMobileOptimized ? staggerDelay * 0.3 : staggerDelay;
  
  return (
    <motion.div
      className={`${className} ${isMobileOptimized ? 'mobile-optimized' : ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true, 
        margin: isMobileOptimized ? "-20px" : "-50px" 
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: optimizedStaggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
}> = ({ children, className = '', direction = 'up' }) => {
  const { shouldReduceAnimations, isMobileDevice } = usePerformance();
  const isMobileOptimized = shouldReduceAnimations || isMobileDevice;
  
  const getVariants = () => {
    // On mobile, use minimal animations
    if (isMobileOptimized) {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      };
    }
    
    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0 }
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0 }
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: 30 },
          visible: { opacity: 1, x: 0 }
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 }
        };
      default:
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        };
    }
  };

  return (
    <motion.div
      className={`${className} ${isMobileOptimized ? 'mobile-optimized' : ''}`}
      variants={getVariants()}
      transition={{
        duration: isMobileOptimized ? 0.2 : 0.5,
        ease: isMobileOptimized ? "easeOut" : [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
