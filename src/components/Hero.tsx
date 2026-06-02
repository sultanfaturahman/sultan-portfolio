import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Reveal from './Reveal';

const CV_URL =
  'https://drive.google.com/file/d/1ap30E5tFEiWCGaB8_6f6A1HLMd8WsBjt/view?usp=drive_link';

const Hero: React.FC = () => {
  const reduce = useReducedMotion();

  const line = (text: string, delay: number) => (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={reduce ? { opacity: 0 } : { y: '110%' }}
        animate={reduce ? { opacity: 1 } : { y: '0%' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {text}
      </motion.span>
    </span>
  );

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-end pt-28 pb-16">
      <div className="container-page w-full">
        {/* Meta row */}
        <Reveal className="rule pt-4 flex flex-wrap items-center justify-between gap-y-2 text-muted">
          <span className="eyebrow">Portfolio © {new Date().getFullYear()}</span>
          <span className="eyebrow">Jakarta, Indonesia</span>
          <span className="eyebrow flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
            Available for work
          </span>
        </Reveal>

        {/* Display headline */}
        <h1 className="text-display font-serif font-medium mt-10 lg:mt-16">
          {line('Building web', 0.05)}
          {line('experiences that feel', 0.13)}
          <span className="block overflow-hidden">
            <motion.span
              className="block italic"
              initial={reduce ? { opacity: 0 } : { y: '110%' }}
              animate={reduce ? { opacity: 1 } : { y: '0%' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.21 }}
            >
              effortless<span className="text-accent">.</span>
            </motion.span>
          </span>
        </h1>

        {/* Lower grid */}
        <div className="mt-14 lg:mt-24 grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <Reveal delay={0.1} className="lg:col-span-7 max-w-xl">
            <p className="text-lg sm:text-xl leading-relaxed text-ink-soft text-balance">
              I&rsquo;m Muhamad Sultan Faturahman — a full-stack web developer focused on
              clean, fast, and accessible interfaces. I design and code things that are
              simple on the surface and solid underneath.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-ink">Get in touch</a>
              <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
                View CV
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-5">
            <dl className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-line pt-8">
              <div>
                <dt className="eyebrow">Experience</dt>
                <dd className="font-serif text-4xl mt-2">3+ yrs</dd>
              </div>
              <div>
                <dt className="eyebrow">Projects shipped</dt>
                <dd className="font-serif text-4xl mt-2">20+</dd>
              </div>
              <div>
                <dt className="eyebrow">Focus</dt>
                <dd className="font-serif text-2xl mt-2 leading-snug">React &amp; Laravel</dd>
              </div>
              <div>
                <dt className="eyebrow">Based in</dt>
                <dd className="font-serif text-2xl mt-2 leading-snug">Indonesia</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
