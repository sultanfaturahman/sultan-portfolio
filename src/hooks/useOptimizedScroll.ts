import { useEffect, useRef, useCallback } from 'react';
import { usePerformance } from './usePerformance';

export const useOptimizedScroll = (callback: (scrollY: number) => void, throttleMs: number = 16) => {
  const { isMobileDevice } = usePerformance();
  const ticking = useRef(false);
  const lastScrollY = useRef(0);
  
  // Optimize throttle for mobile devices
  const optimizedThrottleMs = isMobileDevice ? Math.max(throttleMs * 2, 32) : throttleMs;

  const updateScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Only update if scroll position actually changed
    if (Math.abs(currentScrollY - lastScrollY.current) > 1) {
      callback(currentScrollY);
      lastScrollY.current = currentScrollY;
    }
    
    ticking.current = false;
  }, [callback]);

  const onScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(updateScroll);
      ticking.current = true;
    }
  }, [updateScroll]);

  useEffect(() => {
    // Use passive listener for better performance on mobile
    const options: AddEventListenerOptions = { passive: true };
    
    window.addEventListener('scroll', onScroll, options);
    
    return () => {
      window.removeEventListener('scroll', onScroll, options);
    };
  }, [onScroll]);

  return lastScrollY.current;
};

// Hook untuk smooth scroll yang dioptimalkan untuk mobile
export const useSmoothScroll = () => {
  const { isMobileDevice } = usePerformance();
  
  const scrollTo = useCallback((target: string | number, offset: number = 0) => {
    const targetElement = typeof target === 'string' ? document.querySelector(target) : null;
    const targetPosition = typeof target === 'number' ? target : 
      targetElement ? (targetElement as HTMLElement).offsetTop : 0;
    
    const finalPosition = targetPosition - offset;
    
    if (isMobileDevice) {
      // On mobile, use instant scroll for better performance
      window.scrollTo({
        top: finalPosition,
        behavior: 'auto'
      });
    } else {
      // On desktop, use smooth scroll
      window.scrollTo({
        top: finalPosition,
        behavior: 'smooth'
      });
    }
  }, [isMobileDevice]);

  return { scrollTo };
};

// Hook untuk intersection observer yang dioptimalkan
export const useIntersectionObserver = (
  callback: (isIntersecting: boolean) => void,
  options: IntersectionObserverInit = {}
) => {
  const { isMobileDevice } = usePerformance();
  
  // Optimize options for mobile
  const optimizedOptions: IntersectionObserverInit = {
    rootMargin: isMobileDevice ? '20px' : '50px',
    threshold: isMobileDevice ? 0.1 : 0.2,
    ...options
  };

  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      callback(entry.isIntersecting);
    }, optimizedOptions);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [callback, optimizedOptions]);

  return elementRef;
};
