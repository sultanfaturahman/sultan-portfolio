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
}

const roles: Role[] = [
  {
    year: '2024',
    company: 'Maritim Muda Nusantara',
    position: 'Website Developer & Administrator',
    context: 'Batch 6 — MSIB · On-site',
    description:
      'Developed and maintained theblueeconomist.org with React and Tailwind CSS, and integrated the Midtrans payment gateway for membership and certification.',
    highlights: [
      'Built the membership registration system for The Blue Economist',
      'Integrated payment for certification programs',
      'Managed site administration and content updates',
    ],
    technologies: ['React', 'Tailwind CSS', 'Midtrans', 'JavaScript'],
    website: 'https://theblueeconomist.org',
  },
  {
    year: '2023',
    company: 'Maritim Muda Nusantara',
    position: 'Website Developer',
    context: 'Batch 5 — MSIB · On-site',
    description:
      'Built maritimmuda.id with Laravel and an e-KTA membership system for the organization, deployed on Digital Ocean.',
    highlights: [
      'Developed the company profile website',
      'Created the e-KTA membership registration system',
      'Deployed and maintained the site on Digital Ocean',
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'Digital Ocean'],
    website: 'https://maritimmuda.id',
  },
  {
    year: '2025',
    company: 'Teelite Club Studio',
    position: 'Full-Stack Developer',
    context: 'Freelance · Remote',
    description:
      'Developed teeliteclub.com, an exclusive clothing store, with a modern type-safe stack for optimal performance.',
    highlights: [
      'Designed and built the storefront and e-commerce flow',
      'Used TypeScript for type safety end-to-end',
      'Integrated Supabase for backend services',
    ],
    technologies: ['Vite', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    website: 'https://teeliteclub.com',
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
                    {r.website && (
                      <ArrowLink href={r.website} className="text-sm">
                        Visit site
                      </ArrowLink>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}

          {/* Education */}
          <Reveal>
            <article className="grid lg:grid-cols-12 gap-6 lg:gap-12 py-10 lg:py-14 border-b border-line">
              <div className="lg:col-span-3">
                <p className="font-serif text-3xl">Edu</p>
                <p className="mt-2 eyebrow">Bachelor&rsquo;s Degree</p>
              </div>
              <div className="lg:col-span-9 max-w-2xl">
                <h3 className="font-serif text-2xl sm:text-3xl">Universitas Sultan Ageng Tirtayasa</h3>
                <p className="mt-1 text-accent font-sans text-sm">Computer Science</p>
                <p className="mt-5 text-ink-soft leading-relaxed">
                  Graduated with a focus on web development and software engineering the
                  foundation for everything I build today.
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
