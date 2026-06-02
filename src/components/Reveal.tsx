import React from 'react';
import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';

type RevealProps = HTMLMotionProps<'div'> & {
  delay?: number;
  y?: number;
};

/**
 * Minimal, tasteful scroll reveal. Fades and lifts content into place once.
 * Respects prefers-reduced-motion by fading only.
 */
const Reveal: React.FC<RevealProps> = ({ children, delay = 0, y = 18, className = '', ...rest }) => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
