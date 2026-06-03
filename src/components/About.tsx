import React from 'react';
import { motion } from 'framer-motion';
import { Reveal, TextReveal } from './motion';

const meta = [
  { label: 'Education', value: 'Universitas Sultan Ageng Tirtayasa' },
  { label: 'Discipline', value: 'Computer Science' },
  { label: 'Location', value: 'Indonesia' },
  { label: 'Status', value: 'Open to opportunities' },
];

const qualities = [
  ['Problem solver', 'Creative solutions for complex challenges.'],
  ['Team player', 'Collaborative, communicative approach.'],
  ['Quality focused', 'Attention to detail and best practices.'],
  ['Always learning', 'Continually refining the craft.'],
];

const EASE = [0.22, 1, 0.36, 1] as const;

const About: React.FC = () => {
  return (
    <section id="about" className="section relative z-10">
      <div className="container-page">
        <div className="rule pt-6 grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <Reveal className="flex items-baseline gap-3 lg:sticky lg:top-28">
              <span className="section-index">01</span>
              <span className="eyebrow">About</span>
            </Reveal>
          </div>

          <div className="lg:col-span-9">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl">
              <TextReveal text="A web developer focused on scalable systems and the experience of the people who use them." />
            </h2>

            <div className="mt-12 grid md:grid-cols-2 gap-10 lg:gap-16">
              <Reveal delay={0.05} className="space-y-5 text-ink-soft leading-relaxed max-w-prose">
                <p>
                  My journey in web development began at Universitas Sultan Ageng
                  Tirtayasa, where I built a strong foundation across both frontend and
                  backend. Since then I&rsquo;ve shipped e-commerce platforms, company
                  profiles, and membership systems.
                </p>
                <p>
                  I care about writing clean, maintainable code and pairing technical
                  rigour with a sense for design — so the result is fast, accessible,
                  and genuinely pleasant to use.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <dl className="divide-y divide-line border-t border-line">
                  {meta.map((m) => (
                    <div key={m.label} className="flex justify-between gap-6 py-3">
                      <dt className="eyebrow pt-1">{m.label}</dt>
                      <dd className="font-serif text-lg text-right">{m.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            {/* Qualities — staggered reveal + hover lift */}
            <motion.div
              className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '0px 0px -12%' }}
              transition={{ staggerChildren: 0.12 }}
            >
              {qualities.map(([title, desc]) => (
                <motion.div
                  key={title}
                  className="bg-paper p-6 transition-colors duration-300 hover:bg-paper-dim"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
                  }}
                  whileHover={{ y: -6 }}
                >
                  <h3 className="font-serif text-xl">{title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
