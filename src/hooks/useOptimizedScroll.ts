import { useEffect, useCallback, useRef } from 'react';

// Optimized scroll handler with RAF throttling
export const useOptimizedScroll = (callback: (scrollY: number) => void) => {
  const ticking = useRef(false);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    
    ticking.current = true;
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      
      // Only call callback if scroll position changed significantly
      if (Math.abs(scrollY - lastScrollY.current) > 1) {
        callback(scrollY);
        lastScrollY.current = scrollY;
      }
      
      ticking.current = false;
    });
  }, [callback]);

  useEffect(() => {
    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
};

// Intersection Observer hook for viewport detection
export const useIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const observe = useCallback((element: Element) => {
    if (observer.current) {
      observer.current.observe(element);
    }
  }, []);

  const unobserve = useCallback((element: Element) => {
    if (observer.current) {
      observer.current.unobserve(element);
    }
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver(callback, {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1,
      ...options
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [callback, options]);

  return { observe, unobserve };
};
