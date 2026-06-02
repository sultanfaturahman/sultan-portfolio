import React from 'react';
import Reveal from './Reveal';

interface Project {
  title: string;
  org: string;
  role: string;
  year: string;
  category: string;
  description: string;
  technologies: string[];
  website?: string;
  github?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'The Blue Economist',
    org: 'Maritim Muda Nusantara',
    role: 'Lead Developer',
    year: '2024',
    category: 'Web Application',
    description:
      'A membership platform with integrated payment gateway and certification programs. Rebuilt the registration flow to cut drop-off and eliminate payment errors.',
    technologies: ['React', 'Tailwind CSS', 'Midtrans', 'JavaScript'],
    website: 'https://theblueeconomist.org',
    github: 'https://github.com/maritimmuda-id',
    image: '/images/projects/theblueeconomist.jpg',
  },
  {
    title: 'Maritim Muda Indonesia',
    org: 'Maritim Muda Nusantara',
    role: 'Full-Stack Developer',
    year: '2023',
    category: 'Company Profile',
    description:
      'Company profile website with an e-KTA membership system for organization members, deployed and maintained on Digital Ocean.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'Digital Ocean'],
    website: 'https://maritimmuda.id',
    github: 'https://github.com/maritimmuda-id/maritimmuda.id',
    image: '/images/projects/maritimmuda.jpg',
  },
  {
    title: 'Teelite Club',
    org: 'Teelite Club Studio',
    role: 'Full-Stack Developer',
    year: '2025',
    category: 'E-Commerce',
    description:
      'An exclusive clothing store with a modern, authentic design and a full e-commerce flow built on a type-safe stack.',
    technologies: ['Vite', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    website: 'https://teeliteclub.com',
    github: 'https://github.com/sultanfaturahman/teeliteclub',
    image: '/images/projects/teeliteclub.jpg',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section bg-paper-dim">
      <div className="container-page">
        <div className="rule pt-6 grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <Reveal className="flex items-baseline gap-3">
              <span className="section-index">02</span>
              <span className="eyebrow">Selected Work</span>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl text-balance">
                A few projects I&rsquo;ve designed, built, and shipped.
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Work list */}
        <div className="mt-14 border-t border-line">
          {projects.map((p, i) => (
            <Reveal key={p.title}>
              <article className="group grid lg:grid-cols-12 gap-6 lg:gap-12 py-10 lg:py-14 border-b border-line">
                {/* index */}
                <div className="lg:col-span-1">
                  <span className="font-mono text-sm text-muted">{String(i + 1).padStart(2, '0')}</span>
                </div>

                {/* text */}
                <div className="lg:col-span-7 order-2 lg:order-none">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-none">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-3 eyebrow">
                    {p.role} <span className="text-line">/</span> {p.org}{' '}
                    <span className="text-line">/</span> {p.year}{' '}
                    <span className="text-line">/</span> {p.category}
                  </p>

                  <p className="mt-5 max-w-xl text-ink-soft leading-relaxed">{p.description}</p>

                  <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted">
                    {p.technologies.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-6 text-sm">
                    {p.website && (
                      <a
                        href={p.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline text-ink"
                      >
                        Visit site &nearr;
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline text-muted"
                      >
                        Source &nearr;
                      </a>
                    )}
                  </div>
                </div>

                {/* image */}
                <div className="lg:col-span-4 order-1 lg:order-none">
                  <a
                    href={p.website ?? p.github ?? '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden border border-line aspect-[4/3] bg-paper"
                    aria-label={`Open ${p.title}`}
                  >
                    <img
                      src={p.image}
                      alt={`${p.title} preview`}
                      loading="lazy"
                      className="media-grayscale w-full h-full object-cover group-hover:scale-[1.03]"
                      onError={(e) => {
                        const t = e.target as HTMLImageElement;
                        t.style.display = 'none';
                      }}
                    />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
