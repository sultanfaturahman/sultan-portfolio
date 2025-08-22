import React, { useEffect } from 'react';
import { MotionConfig, useReducedMotion, LazyMotion, domAnimation } from 'framer-motion';
import { usePerformance } from './hooks/usePerformance';
import { initPerformanceOptimizations } from './utils/performance';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const prefersReducedMotion = useReducedMotion();
  const { isLowEndDevice, shouldReduceAnimations } = usePerformance();
  const shouldReduce = prefersReducedMotion || isLowEndDevice || shouldReduceAnimations;

  // Initialize performance optimizations
  useEffect(() => {
    initPerformanceOptimizations();
  }, []);

  return (
    <MotionConfig
      reducedMotion={shouldReduce ? "always" : "user"}
      transition={{
        duration: shouldReduce ? 0.3 : 0.6,
        ease: shouldReduce ? "easeOut" : [0.25, 0.46, 0.45, 0.94]
      }}
    >
      <LazyMotion features={domAnimation}>
        <div className="App dark bg-dark-950 text-gray-100 min-h-screen">
          {/* Skip to main content link for screen readers */}
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:shadow-lg"
          >
            Skip to main content
          </a>

          <Header />
          <main id="main" role="main">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
      </LazyMotion>
    </MotionConfig>
  );
}

export default App;
