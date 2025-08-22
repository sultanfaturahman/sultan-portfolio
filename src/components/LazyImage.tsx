import React, { useState, useEffect, useRef } from 'react';
import { usePerformance } from '../hooks/usePerformance';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  priority?: boolean;
  sizes?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder = '/images/profile-placeholder.svg',
  priority = false,
  sizes = '100vw'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [imageSrc, setImageSrc] = useState(placeholder);
  const imgRef = useRef<HTMLImageElement>(null);
  const { isMobileDevice } = usePerformance();

  useEffect(() => {
    if (priority) {
      setImageSrc(src);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: isMobileDevice ? '50px' : '100px', // Smaller margin on mobile
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src, priority, isMobileDevice]);

  useEffect(() => {
    if (isInView && !isLoaded) {
      const img = new Image();
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
      img.onerror = () => {
        // Fallback to placeholder if image fails to load
        setImageSrc(placeholder);
        setIsLoaded(true);
      };
      img.src = src;
    }
  }, [isInView, src, placeholder, isLoaded]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={{
        transition: isMobileDevice ? 'opacity 0.2s ease-out' : 'opacity 0.3s ease-out',
        willChange: isLoaded ? 'auto' : 'opacity'
      }}
      sizes={sizes}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
};

export default LazyImage;
