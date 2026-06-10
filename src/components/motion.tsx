import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useReducedMotion,
  useInView,
  animate,
} from 'framer-motion';
import ReactFastMarquee from 'react-fast-marquee';

const EASE = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------ */
/* Scroll progress bar (top of page)                                   */
/* ------------------------------------------------------------------ */
export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left bg-accent"
    />
  );
};

/* ------------------------------------------------------------------ */
/* Word-by-word masked text reveal                                     */
/* ------------------------------------------------------------------ */
export const TextReveal: React.FC<{
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}> = ({ text, className = '', delay = 0, stagger = 0.07, once = true }) => {
  const reduce = useReducedMotion();
  const words = text.split(' ');

  if (reduce) {
    return (
      <motion.span
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once }}
        transition={{ duration: 0.5, delay }}
      >
        {text}
      </motion.span>
    );
  }

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '0px 0px -10% 0px' }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom" aria-hidden>
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '115%' },
              visible: { y: '0%', transition: { duration: 0.85, ease: EASE } },
            }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

/* ------------------------------------------------------------------ */
/* Magnetic wrapper — element drifts toward the cursor                 */
/* ------------------------------------------------------------------ */
export const Magnetic: React.FC<{
  children: React.ReactNode;
  className?: string;
  strength?: number;
}> = ({ children, className = '', strength = 0.4 }) => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.2 });
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.2 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/* Infinite marquee strip — powered by react-fast-marquee              */
/* ------------------------------------------------------------------ */
export const Marquee: React.FC<{
  children: React.ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
  pauseOnHover?: boolean;
}> = ({ children, speed = 50, reverse = false, className = '', pauseOnHover = true }) => {
  return (
    <ReactFastMarquee
      speed={speed}
      direction={reverse ? 'right' : 'left'}
      pauseOnHover={pauseOnHover}
      gradient={false}
      className={className}
    >
      {children}
    </ReactFastMarquee>
  );
};

/* ------------------------------------------------------------------ */
/* Animated number counter (runs when scrolled into view)              */
/* ------------------------------------------------------------------ */
export const Counter: React.FC<{
  to: number;
  suffix?: string;
  className?: string;
  duration?: number;
}> = ({ to, suffix = '', className = '', duration = 1.6 }) => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
};

/* ------------------------------------------------------------------ */
/* Parallax — shifts a block on scroll. `speed` in px of travel.       */
/* ------------------------------------------------------------------ */
export const Parallax: React.FC<{
  children: React.ReactNode;
  speed?: number;
  className?: string;
}> = ({ children, speed = 80, className = '' }) => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  const sy = useSpring(y, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduce ? undefined : { y: sy }}>{children}</motion.div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* ArrowLink — styled external link with a kinetic arrow               */
/* ------------------------------------------------------------------ */
export const ArrowLink: React.FC<{
  href: string;
  children: React.ReactNode;
  muted?: boolean;
  className?: string;
}> = ({ href, children, muted = false, className = '' }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group/al inline-flex items-center gap-1.5 ${muted ? 'text-muted hover:text-ink' : 'text-ink'} transition-colors ${className}`}
  >
    <span className="link-underline">{children}</span>
    <span
      aria-hidden
      className="text-[0.9em] transition-transform duration-300 ease-out group-hover/al:translate-x-0.5 group-hover/al:-translate-y-0.5"
    >
      &#8599;
    </span>
  </a>
);

/* ------------------------------------------------------------------ */
/* Reveal — fade + lift on scroll (richer default than before)         */
/* ------------------------------------------------------------------ */
export const Reveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  blur?: boolean;
}> = ({ children, className = '', delay = 0, y = 26, blur = true }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y, filter: blur ? 'blur(8px)' : 'blur(0px)' }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
};
