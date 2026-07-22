import React from 'react';
import { Reveal, TextReveal } from './motion';

interface SkillCategory {
  title: string;
  skills: string[];
  evidence: string;
}

const categories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'TypeScript',
      'React.js',
      'Vite',
      'Tailwind CSS',
    ],
    evidence: 'Applied in Teelite Club, SiNaik, and The Blue Economist.',
  },
  {
    title: 'Backend & API',
    skills: [
      'Node.js',
      'Express.js',
      'PHP',
      'CodeIgniter',
      'Laravel',
      'REST API Development',
      'API Integration',
      'Authentication & Authorization',
      'Data Validation',
    ],
    evidence: 'Used for application services, authentication, validation, and business workflows.',
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase'],
    evidence: 'Supabase-backed workflows in SiNaik and Teelite Club; MySQL for e-KTA services.',
  },
  {
    title: 'Development Practices',
    skills: [
      'Git',
      'GitHub',
      'Branching',
      'Pull Requests',
      'Debugging',
      'Bug Fixing',
      'Code Review',
      'Testing & QA',
      'Technical Documentation',
      'Agile Workflow',
    ],
    evidence: 'Applied while maintaining existing systems, testing with users, and preparing handovers.',
  },
  {
    title: 'Cloud & Integrations',
    skills: [
      'DigitalOcean',
      'AWS',
      'Docker',
      'Midtrans',
      'TanStack Query',
      'Supabase Edge Functions',
      'Figma',
    ],
    evidence: 'Used for cloud deployment, payment flows, async data, and server-side functions.',
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section bg-paper-dim">
      <div className="container-page">
        <div className="rule pt-6 grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <Reveal className="flex items-baseline gap-3">
              <span className="section-index">02</span>
              <span className="eyebrow">Capabilities</span>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl">
              <TextReveal text="The tools and disciplines I reach for." />
            </h2>
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          {categories.map((cat) => (
            <Reveal key={cat.title}>
              <h3 className="font-serif text-xl border-b border-ink pb-3">{cat.title}</h3>
              <ul>
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="group/skill py-2.5 border-b border-line transition-[padding] duration-300 hover:pl-2"
                  >
                    <span className="text-ink-soft transition-colors duration-300 group-hover/skill:text-accent">{skill}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted leading-relaxed">
                <span className="font-medium text-ink-soft">Evidence:</span> {cat.evidence}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
