import React from 'react';
import { motion } from 'framer-motion';
import { Reveal, TextReveal, Parallax, ArrowLink } from './motion';

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

const hostOf = (url?: string) => {
  if (!url) return '';
  try {
    return new URL(url).host.replace(/^www\./, '');
  } catch {
    return url;
  }
};

const EASE = [0.22, 1, 0.36, 1] as const;

const BrowserFrame: React.FC<{ project: Project }> = ({ project }) => {
  const href = project.website ?? project.github ?? '#';
  return (
    <motion.div
      className="overflow-hidden rounded-xl border border-line bg-white shadow-2xl shadow-ink/10"
      initial={{ clipPath: 'inset(0 0 100% 0)' }}
      whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 1, ease: EASE }}
    >
      {/* Fake browser chrome */}
      <div className="flex items-center gap-2 h-10 px-4 border-b border-line bg-paper-dim">
        <span className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#E26D5A]" />
          <span className="w-3 h-3 rounded-full bg-[#E8B34B]" />
          <span className="w-3 h-3 rounded-full bg-[#7FB069]" />
        </span>
        <span className="mx-auto px-3 py-1 rounded bg-paper border border-line font-mono text-[0.7rem] text-muted truncate max-w-[70%]">
          {hostOf(project.website) || 'github.com'}
        </span>
      </div>

      {/* Full screenshot — never cropped */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title}`}
        className="block bg-paper"
      >
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className="media-grayscale block w-full h-auto"
          onError={(e) => {
            const t = e.target as HTMLImageElement;
            t.style.display = 'none';
          }}
        />
      </a>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section bg-paper-dim relative z-10">
      <div className="container-page">
        <div className="rule pt-6 grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <Reveal className="flex items-baseline gap-3">
              <span className="section-index">02</span>
              <span className="eyebrow">Selected Work</span>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl">
              <TextReveal text="A few projects I've designed, built, and shipped." />
            </h2>
          </div>
        </div>

        {/* Work list — alternating, browser-mockup style */}
        <div className="mt-16 space-y-24 lg:space-y-32">
          {projects.map((p, i) => {
            const imageLeft = i % 2 === 1;
            return (
              <article key={p.title} className="group grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                {/* Text */}
                <div className={`lg:col-span-5 ${imageLeft ? 'lg:order-2' : ''}`}>
                  <Reveal>
                    <span className="font-mono text-xs text-accent tracking-widest">
                      {String(i + 1).padStart(2, '0')} &mdash; 03
                    </span>
                  </Reveal>
                  <h3 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
                    <TextReveal text={p.title} stagger={0.05} />
                  </h3>
                  <Reveal delay={0.1}>
                    <p className="mt-4 eyebrow">
                      {p.role} <span className="text-line">/</span> {p.org}{' '}
                      <span className="text-line">/</span> {p.year}{' '}
                      <span className="text-line">/</span> {p.category}
                    </p>
                    <p className="mt-5 max-w-md text-ink-soft leading-relaxed">{p.description}</p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {p.technologies.map((t) => (
                        <li
                          key={t}
                          className="font-mono text-xs text-muted border border-line rounded-full px-3 py-1 transition-colors group-hover:border-ink/30"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
                      {p.website && <ArrowLink href={p.website}>Visit site</ArrowLink>}
                      {p.github && (
                        <ArrowLink href={p.github} muted>
                          Source code
                        </ArrowLink>
                      )}
                    </div>
                  </Reveal>
                </div>

                {/* Image (full, framed) */}
                <div className={`lg:col-span-7 ${imageLeft ? 'lg:order-1' : ''}`}>
                  <Parallax speed={36}>
                    <BrowserFrame project={p} />
                  </Parallax>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
