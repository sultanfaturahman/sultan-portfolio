import React from 'react';
import { Reveal, TextReveal } from './motion';

interface Skill {
  name: string;
  level: string;
  years: string;
}

const categories: { title: string; skills: Skill[] }[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 'Expert', years: '3+' },
      { name: 'JavaScript (ES6+)', level: 'Expert', years: '4+' },
      { name: 'TypeScript', level: 'Advanced', years: '2+' },
      { name: 'HTML5 & CSS3', level: 'Expert', years: '4+' },
      { name: 'Tailwind CSS', level: 'Advanced', years: '2+' },
      { name: 'Bootstrap', level: 'Advanced', years: '3+' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'PHP', level: 'Advanced', years: '3+' },
      { name: 'Laravel', level: 'Advanced', years: '2+' },
      { name: 'Node.js', level: 'Intermediate', years: '1+' },
      { name: 'Express.js', level: 'Intermediate', years: '1+' },
      { name: 'REST API Design', level: 'Advanced', years: '2+' },
      { name: 'GraphQL', level: 'Beginner', years: '<1' },
    ],
  },
  {
    title: 'Database & Cloud',
    skills: [
      { name: 'MySQL', level: 'Advanced', years: '3+' },
      { name: 'PostgreSQL', level: 'Intermediate', years: '1+' },
      { name: 'Supabase', level: 'Intermediate', years: '1+' },
      { name: 'Digital Ocean', level: 'Intermediate', years: '2+' },
      { name: 'AWS (Basic)', level: 'Beginner', years: '<1' },
      { name: 'MongoDB', level: 'Beginner', years: '<1' },
    ],
  },
  {
    title: 'Tooling',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', years: '3+' },
      { name: 'Vite', level: 'Advanced', years: '2+' },
      { name: 'Webpack', level: 'Intermediate', years: '1+' },
      { name: 'Docker', level: 'Beginner', years: '<1' },
      { name: 'VS Code', level: 'Expert', years: '4+' },
      { name: 'Figma', level: 'Intermediate', years: '2+' },
    ],
  },
  {
    title: 'Standards & UX',
    skills: [
      { name: 'Responsive Design', level: 'Expert', years: '4+' },
      { name: 'Mobile-First', level: 'Expert', years: '3+' },
      { name: 'Web Performance', level: 'Advanced', years: '2+' },
      { name: 'Accessibility', level: 'Intermediate', years: '1+' },
      { name: 'UI/UX Principles', level: 'Advanced', years: '2+' },
      { name: 'Design Systems', level: 'Intermediate', years: '1+' },
    ],
  },
  {
    title: 'Practice',
    skills: [
      { name: 'Payment Integration', level: 'Advanced', years: '2+' },
      { name: 'E-commerce', level: 'Advanced', years: '2+' },
      { name: 'Code Review & Testing', level: 'Intermediate', years: '2+' },
      { name: 'Agile Workflow', level: 'Intermediate', years: '2+' },
      { name: 'Client Communication', level: 'Advanced', years: '3+' },
      { name: 'Documentation', level: 'Advanced', years: '3+' },
    ],
  },
];

const exploring = ['Next.js', 'Vue 3', 'Python & Django', 'Cloud Architecture', 'DevOps', 'AI Integration'];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section bg-paper-dim">
      <div className="container-page">
        <div className="rule pt-6 grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <Reveal className="flex items-baseline gap-3">
              <span className="section-index">04</span>
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
                {cat.skills.map((s) => (
                  <li
                    key={s.name}
                    className="group/skill flex items-baseline justify-between gap-4 py-2.5 border-b border-line transition-[padding] duration-300 hover:pl-2"
                  >
                    <span className="text-ink-soft transition-colors duration-300 group-hover/skill:text-accent">{s.name}</span>
                    <span className="font-mono text-[0.7rem] uppercase tracking-wide text-muted whitespace-nowrap">
                      {s.level} · {s.years}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        {/* Currently exploring */}
        <Reveal className="mt-16 rule pt-8 flex flex-col sm:flex-row sm:items-baseline gap-4">
          <span className="eyebrow shrink-0">Currently exploring</span>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-serif text-lg">
            {exploring.map((e) => (
              <li key={e} className="text-ink-soft">{e}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
