import { useState, useEffect } from 'react';

export const usePerformance = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  // System hints
  const prefersReduced = typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    // Enhanced mobile detection
    const checkMobile = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isMobileView = width <= 768 || height <= 768;
      setIsMobile(isMobileView);
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
      const connection = (navigator as any).connection;
      const isSlowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');

      let isLowEnd = dm <= 2 || cores <= 4 || isSlowConnection;

      // Runtime FPS probe (~1s) - only on non-mobile devices
      if (!isMobile && !isMobileDevice) {
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
      } else {
        // On mobile, assume low-end for better performance
        setIsLowEndDevice(true);
        document.documentElement.classList.add('low-end');
      }
    };

    // Enhanced mobile device detection
    const checkMobileDevice = () => {
      const userAgent = navigator.userAgent;
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isMobileViewport = window.innerWidth <= 768;
      
      const isMobile = isMobileUA || isTouchDevice || isMobileViewport;
      setIsMobileDevice(isMobile);
      
      // Apply mobile optimization classes
      if (isMobile) {
        document.documentElement.classList.add('mobile-optimized');
        document.documentElement.classList.add('low-end'); // Treat mobile as low-end for performance
      }
    };

    // Run all checks
    checkMobileDevice();
    checkMobile();
    checkReducedMotion();
    checkLowEndDevice();

    // Event listeners
    window.addEventListener('resize', checkMobile);
    window.addEventListener('orientationchange', checkMobile);
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', checkReducedMotion);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('orientationchange', checkMobile);
      mediaQuery.removeEventListener('change', checkReducedMotion);
    };
  }, [isMobile, isMobileDevice]);

  const shouldReduceAnimations = prefersReduced || isLowEndDevice || isMobileDevice;
  const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

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
