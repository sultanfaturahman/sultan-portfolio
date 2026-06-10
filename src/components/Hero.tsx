import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { TextReveal, Magnetic, Marquee, Counter } from './motion';

const CV_URL =
  'https://drive.google.com/file/d/1ap30E5tFEiWCGaB8_6f6A1HLMd8WsBjt/view?usp=drive_link';

const EASE = [0.22, 1, 0.36, 1] as const;

const Hero: React.FC = () => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yHead = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -140]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0.96]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex flex-col justify-between pt-28 pb-0">
      <div className="container-page w-full">
        {/* Meta row */}
        <motion.div
          className="rule pt-4 flex flex-wrap items-center justify-between gap-y-2 text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="eyebrow">Portfolio © {new Date().getFullYear()}</span>
          <span className="eyebrow hidden sm:inline">Jakarta, Indonesia</span>
          <span className="eyebrow flex items-center gap-2">
            <motion.span
              className="inline-block w-1.5 h-1.5 rounded-full bg-accent"
              animate={reduce ? undefined : { scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            Available for work
          </span>
        </motion.div>

        {/* Display headline with masked word reveal — only this fades/parallaxes on scroll */}
        <motion.h1 style={{ y: yHead, opacity, scale }} className="text-display font-serif font-medium mt-10 lg:mt-14 gpu origin-left">
          <span className="block">
            <TextReveal text="Building web" delay={0.15} />
          </span>
          <span className="block">
            <TextReveal text="experiences that feel" delay={0.3} />
          </span>
          <span className="block italic">
            <TextReveal text="effortless" delay={0.5} />
            <motion.span
              className="text-accent not-italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.4 }}
            >
              .
            </motion.span>
          </span>
        </motion.h1>

        {/* Lower grid */}
        <div className="mt-12 lg:mt-16 grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <motion.div
            className="lg:col-span-7 max-w-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
          >
            <p className="text-lg sm:text-xl leading-relaxed text-ink-soft text-balance">
              I&rsquo;m Muhamad Sultan Faturahman a full-stack web developer focused on
              clean, fast, and accessible interfaces.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Magnetic strength={0.5}>
                <a href="#contact" className="btn-ink">Get in touch</a>
              </Magnetic>
              <Magnetic strength={0.5}>
                <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  View CV
                </a>
              </Magnetic>
            </div>
          </motion.div>

          <motion.dl
            className="lg:col-span-5 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-line pt-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1.05 }}
          >
            <div>
              <dt className="eyebrow">Experience</dt>
              <dd className="font-serif text-4xl mt-2">
                <Counter to={3} suffix="+ yrs" />
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Projects shipped</dt>
              <dd className="font-serif text-4xl mt-2">
                <Counter to={20} suffix="+" />
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Focus</dt>
              <dd className="font-serif text-2xl mt-2 leading-snug">React &amp; Laravel</dd>
            </div>
            <div>
              <dt className="eyebrow">Based in</dt>
              <dd className="font-serif text-2xl mt-2 leading-snug">Indonesia</dd>
            </div>
          </motion.dl>
        </div>
      </div>

      {/* Marquee strip */}
      <motion.div
        className="mt-14 border-y border-line py-4 bg-paper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <Marquee speed={50}>
          {['Full-Stack Developer', 'React', 'TypeScript', 'Laravel', 'UI / UX', 'Tailwind CSS', 'Supabase'].map(
            (t, i) => (
              <span key={i} className="flex items-center font-serif text-2xl sm:text-3xl px-6 text-ink-soft">
                {t}
                <span className="text-accent mx-6">✦</span>
              </span>
            )
          )}
        </Marquee>
      </motion.div>
    </section>
  );
};

export default Hero;
