import { useState, useEffect } from 'react';

export const usePerformance = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);

  // System hints
  const prefersReduced = typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

    // Enhanced low-end device detection with FPS probe
    const checkLowEndDevice = () => {
      const dm = (navigator as any).deviceMemory ?? 4; // 0.5,1,2,4,8 (Chrome)
      const cores = navigator.hardwareConcurrency ?? 4;

      let isLowEnd = dm <= 2 || cores <= 4;

      // Runtime FPS probe (~1s)
      let frames = 0;
      let raf = 0;
      const start = performance.now();

      const tick = () => {
        frames++;
        if (performance.now() - start < 1000) {
          raf = requestAnimationFrame(tick);
        } else {
          if (frames < 45) { // <45 fps → degrade effects
            isLowEnd = true;
          }
          setIsLowEndDevice(isLowEnd);

          // Apply low-end class to document
          if (isLowEnd) {
            document.documentElement.classList.add('low-end');
          }
        }
      };

      raf = requestAnimationFrame(tick);

      // Cleanup function
      return () => cancelAnimationFrame(raf);
    };

    checkLowEndDevice();

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

  const shouldReduceAnimations = prefersReduced || isLowEndDevice;
  const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  // Enhanced mobile detection for better performance decisions
  const isMobileDevice = typeof window !== 'undefined' && (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    window.innerWidth <= 768
  );

  return {
    isMobile,
    prefersReducedMotion,
    isLowEndDevice,
    shouldReduceAnimations,
    isTouch,
    prefersReduced,
    isMobileDevice
  };
};
