import React from 'react';
import { motion } from 'framer-motion';
import { Reveal, TextReveal } from './motion';

const meta = [
  { label: 'Education', value: 'B.Informatics, Universitas Sultan Ageng Tirtayasa' },
  { label: 'Graduated', value: 'January 2026' },
  { label: 'GPA', value: '3.78 / 4.00' },
  { label: 'Location', value: 'Jakarta, Indonesia' },
];

const qualities = [
  ['Existing codebases', 'Maintaining and extending systems already used in production.'],
  ['Business workflows', 'Membership, payments, validation, inventory, and reporting.'],
  ['End-to-end delivery', 'Frontend, backend services, databases, APIs, and deployment.'],
  ['Clear handover', 'Setup, maintenance, troubleshooting, and operational documentation.'],
];

const EASE = [0.22, 1, 0.36, 1] as const;

const About: React.FC = () => {
  return (
    <section id="about" className="section relative z-10">
      <div className="container-page">
        <div className="rule pt-6 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* ── Left column: label + photo ── */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <Reveal className="flex items-baseline gap-3">
              <span className="section-index">01</span>
              <span className="eyebrow">About</span>
            </Reveal>

            <Reveal delay={0.05}>
              <img
                src="/images/profile/sultan-profile.png"
                alt="Muhamad Sultan Faturahman"
                className="w-full max-h-[30rem] object-contain object-top drop-shadow-sm"
              />
            </Reveal>
          </div>

          {/* ── Right column: heading + bio + meta ── */}
          <div className="lg:col-span-8 space-y-8">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
              <TextReveal text="I work beyond the happy path: business rules, failures, maintenance, and handover." />
            </h2>

            <Reveal delay={0.1} className="space-y-4 text-ink-soft leading-relaxed">
              <p>
                Across freelance work, product development, and two MSIB roles, I have
                contributed to web applications for membership services, payments,
                e-commerce operations, and financial management for MSMEs.
              </p>
              <p>
                I work across React and TypeScript interfaces, backend services, APIs,
                SQL and NoSQL data, debugging, validation, deployment, and technical
                documentation—with an emphasis on maintainable features that support
                real operational needs.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
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

          {/* ── Qualities — full-width row spanning both columns ── */}
          <motion.div
            className="lg:col-span-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -12%' }}
            transition={{ staggerChildren: 0.1 }}
          >
            {qualities.map(([title, desc]) => (
              <motion.div
                key={title}
                className="bg-paper p-6 transition-colors duration-300 hover:bg-paper-dim"
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
                }}
                whileHover={{ y: -4 }}
              >
                <h3 className="font-serif text-xl">{title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
