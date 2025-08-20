import { useState, useEffect } from 'react';

export const usePerformance = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check for reduced motion preference
    const checkReducedMotion = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
    };

    // Check for low-end device (basic heuristic)
    const checkLowEndDevice = () => {
      const connection = (navigator as any).connection;
      const isSlowConnection = connection && (
        connection.effectiveType === 'slow-2g' || 
        connection.effectiveType === '2g' ||
        connection.effectiveType === '3g'
      );
      
      const isLowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;
      const isLowCores = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
      
      setIsLowEndDevice(isSlowConnection || isLowMemory || isLowCores || false);
    };

    checkMobile();
    checkReducedMotion();
    checkLowEndDevice();

    window.addEventListener('resize', checkMobile);
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', checkReducedMotion);

    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaQuery.removeEventListener('change', checkReducedMotion);
    };
  }, []);

  return {
    isMobile,
    prefersReducedMotion,
    isLowEndDevice,
    shouldReduceAnimations: prefersReducedMotion || isLowEndDevice || isMobile
  };
};
