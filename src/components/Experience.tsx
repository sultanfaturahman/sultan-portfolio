import React from 'react';
import { Reveal, TextReveal, ArrowLink } from './motion';

interface Role {
  year: string;
  company: string;
  position: string;
  context: string;
  description: string;
  highlights: string[];
  technologies: string[];
  website?: string;
  github?: string;
}

const roles: Role[] = [
  {
    year: '2025',
    company: 'Link Productive',
    position: 'Web Developer',
    context: 'Product development · Remote',
    description:
      'Developed SiNaik, a financial management application that helps local MSMEs record transactions, understand business performance, and plan growth.',
    highlights: [
      'Built transaction management, financial reporting, account authentication, and AI-assisted business strategy workflows',
      'Connected React and TypeScript interfaces to Supabase Auth, PostgreSQL, Edge Functions, and TanStack Query',
      'Supported product testing with 10 local MSMEs and iterated application flows from user feedback',
    ],
    technologies: ['React', 'TypeScript', 'Supabase Auth', 'PostgreSQL', 'Edge Functions', 'TanStack Query'],
    github: 'https://github.com/sultanfaturahman/Sinaik-Finance-App',
  },
  {
    year: '2025',
    company: 'Self-Employed · Teelite Club',
    position: 'Freelance Full-Stack Web Developer',
    context: 'Client project · Remote',
    description:
      'Built and maintained a type-safe e-commerce storefront using React, Vite, TypeScript, Tailwind CSS, and Supabase.',
    highlights: [
      'Delivered storefront interfaces and Supabase-backed product and operational data workflows',
      'Diagnosed database, stock-validation, image-loading, performance, and security issues',
      'Documented deployment, maintenance, and troubleshooting procedures while keeping in-progress payment work clearly scoped',
    ],
    technologies: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    website: 'https://teeliteclub.com',
    github: 'https://github.com/sultanfaturahman/teeliteclub',
  },
  {
    year: '2024',
    company: 'Maritim Muda Nusantara',
    position: 'Website Developer & Administrator',
    context: 'Batch 6 MSIB · On-site',
    description:
      'Maintained and enhanced an existing React and Tailwind CSS membership platform, including Midtrans payment and digital certification workflows.',
    highlights: [
      'Developed member-facing registration and certification features in an existing production codebase',
      'Investigated registration and payment issues and improved member-facing UI flows',
      'Prepared technical documentation for administration, maintenance, and handover',
    ],
    technologies: ['React', 'Tailwind CSS', 'Midtrans', 'JavaScript'],
    website: 'https://theblueeconomist.org',
  },
  {
    year: '2023',
    company: 'Maritim Muda Nusantara',
    position: 'Website Developer',
    context: 'Batch 5 MSIB · On-site',
    description:
      'Developed and administered e-KTA registration, validation, and member database workflows across existing organization websites.',
    highlights: [
      'Built registration and member-verification workflows for the e-KTA service',
      'Designed maintainable data structures and reduced manual verification steps',
      'Supported DigitalOcean deployment and documented operations for future administrators',
    ],
    technologies: ['CodeIgniter', 'PHP', 'MySQL', 'Bootstrap', 'DigitalOcean'],
    website: 'https://maritimmuda.id',
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="container-page">
        <div className="rule pt-6 grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <Reveal className="flex items-baseline gap-3">
              <span className="section-index">03</span>
              <span className="eyebrow">Experience</span>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl">
              <TextReveal text="Roles and projects that have shaped how I build." />
            </h2>
          </div>
        </div>

        <div className="mt-14 border-t border-line">
          {roles.map((r) => (
            <Reveal key={`${r.company}-${r.year}`}>
              <article className="group grid lg:grid-cols-12 gap-6 lg:gap-12 py-10 lg:py-14 border-b border-line transition-colors duration-300 hover:bg-paper-dim/60">
                <div className="lg:col-span-3 lg:pl-2 transition-[padding] duration-300 group-hover:lg:pl-5">
                  <p className="font-serif text-3xl transition-colors duration-300 group-hover:text-accent">{r.year}</p>
                  <p className="mt-2 eyebrow">{r.context}</p>
                </div>

                <div className="lg:col-span-9 max-w-2xl">
                  <h3 className="font-serif text-2xl sm:text-3xl">{r.position}</h3>
                  <p className="mt-1 text-accent font-sans text-sm">{r.company}</p>

                  <p className="mt-5 text-ink-soft leading-relaxed">{r.description}</p>

                  <ul className="mt-5 space-y-2">
                    {r.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm text-ink-soft">
                        <span className="text-accent mt-px">—</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 justify-between">
                    <ul className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted">
                      {r.technologies.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap items-center gap-5">
                      {r.website && (
                        <ArrowLink href={r.website} className="text-sm">
                          Visit site
                        </ArrowLink>
                      )}
                      {r.github && (
                        <ArrowLink href={r.github} muted className="text-sm">
                          GitHub
                        </ArrowLink>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}

          {/* Education */}
          <Reveal>
            <article className="grid lg:grid-cols-12 gap-6 lg:gap-12 py-10 lg:py-14 border-b border-line">
              <div className="lg:col-span-3">
                <p className="font-serif text-3xl">2026</p>
                <p className="mt-2 eyebrow">Graduated January</p>
              </div>
              <div className="lg:col-span-9 max-w-2xl">
                <h3 className="font-serif text-2xl sm:text-3xl">Universitas Sultan Ageng Tirtayasa</h3>
                <p className="mt-1 text-accent font-sans text-sm">Bachelor of Informatics · GPA 3.78 / 4.00</p>
                <p className="mt-5 text-ink-soft leading-relaxed">
                  Built a foundation in software engineering, web application development,
                  databases, and the delivery of maintainable information systems.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Experience;
