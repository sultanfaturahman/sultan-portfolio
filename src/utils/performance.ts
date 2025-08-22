// Performance utilities for mobile optimization

// Check if device is mobile
export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const userAgent = navigator.userAgent;
  const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const isMobileViewport = window.innerWidth <= 768;
  
  return isMobileUA || isTouchDevice || isMobileViewport;
};

// Check if device has low memory
export const hasLowMemory = (): boolean => {
  if (typeof navigator === 'undefined') return false;
  
  const memory = (navigator as any).deviceMemory;
  return memory !== undefined && memory <= 2;
};

// Check if connection is slow
export const hasSlowConnection = (): boolean => {
  if (typeof navigator === 'undefined') return false;
  
  const connection = (navigator as any).connection;
  if (!connection) return false;
  
  return connection.effectiveType === 'slow-2g' || 
         connection.effectiveType === '2g' || 
         connection.effectiveType === '3g';
};

// Get performance tier
export const getPerformanceTier = (): 'high' | 'medium' | 'low' => {
  if (isMobileDevice() || hasLowMemory() || hasSlowConnection()) {
    return 'low';
  }
  
  const cores = navigator.hardwareConcurrency || 4;
  if (cores >= 8) {
    return 'high';
  }
  
  return 'medium';
};

// Apply performance optimizations based on device capabilities
export const applyPerformanceOptimizations = (): void => {
  if (typeof document === 'undefined') return;
  
  const tier = getPerformanceTier();
  
  // Add performance class to document
  document.documentElement.classList.add(`perf-${tier}`);
  
  // Apply specific optimizations
  if (tier === 'low') {
    document.documentElement.classList.add('low-end', 'mobile-optimized');
    
    // Disable heavy CSS effects
    const style = document.createElement('style');
    style.textContent = `
      .low-end * {
        animation-duration: 0.2s !important;
        transition-duration: 0.2s !important;
        will-change: auto !important;
      }
      
      .low-end .fx-heavy {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  }
};

// Debounce function for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for performance
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Optimize images for mobile
export const optimizeImageForMobile = (src: string, width: number): string => {
  if (!isMobileDevice()) return src;
  
  // For mobile, you might want to use smaller image sizes
  // This is a placeholder - implement based on your image optimization strategy
  return src;
};

// Preload critical resources
export const preloadCriticalResources = (): void => {
  if (typeof document === 'undefined') return;
  
  const criticalResources = [
    '/images/profile/profile.png',
    '/images/logo.png'
  ];
  
  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = resource;
    document.head.appendChild(link);
  });
};

// Initialize performance optimizations
export const initPerformanceOptimizations = (): void => {
  applyPerformanceOptimizations();
  preloadCriticalResources();
};
