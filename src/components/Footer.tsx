import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-ink text-paper">
      <div className="container-page py-16">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-6">
            <p className="font-serif text-3xl sm:text-4xl leading-tight max-w-md">
              Available for freelance &amp; full-time work.
            </p>
            <a
              href="mailto:sultannfaturahman@gmail.com"
              className="link-underline inline-block mt-6 text-paper/80 hover:text-paper"
            >
              sultannfaturahman@gmail.com
            </a>
          </div>

          <div className="md:col-span-3">
            <span className="eyebrow text-paper/50">Elsewhere</span>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="https://github.com/sultanfaturahman" target="_blank" rel="noopener noreferrer" className="link-underline text-paper/80 hover:text-paper">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/sultan-faturahman" target="_blank" rel="noopener noreferrer" className="link-underline text-paper/80 hover:text-paper">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 md:text-right">
            <button onClick={toTop} className="link-underline text-paper/80 hover:text-paper">
              Back to top &uarr;
            </button>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-paper/15 flex flex-col sm:flex-row justify-between gap-3 text-xs text-paper/50 font-mono">
          <span>© {year} Muhamad Sultan Faturahman</span>
          <span>Built with React &amp; Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
