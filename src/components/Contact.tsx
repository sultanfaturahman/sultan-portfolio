import React, { useState } from 'react';
import Reveal from './Reveal';

const EMAIL = 'sultannfaturahman@gmail.com';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend wired yet — open the user's mail client as a graceful fallback.
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'someone'}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <section id="contact" className="section">
      <div className="container-page">
        <div className="rule pt-6 grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <Reveal className="flex items-baseline gap-3">
              <span className="section-index">05</span>
              <span className="eyebrow">Contact</span>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[0.95] text-balance">
                Let&rsquo;s build
                <br />
                something <span className="italic text-accent">good</span>.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Details */}
          <Reveal className="lg:col-span-5 space-y-10">
            <div>
              <span className="eyebrow">Email</span>
              <a
                href={`mailto:${EMAIL}`}
                className="link-underline block font-serif text-2xl sm:text-3xl mt-2 break-words"
              >
                {EMAIL}
              </a>
            </div>

            <dl className="divide-y divide-line border-t border-line">
              <div className="flex justify-between gap-6 py-3">
                <dt className="eyebrow pt-1">Phone</dt>
                <dd>
                  <a href="tel:+6281380942768" className="link-underline font-serif text-lg">
                    +62 813-8094-2768
                  </a>
                </dd>
              </div>
              <div className="flex justify-between gap-6 py-3">
                <dt className="eyebrow pt-1">Location</dt>
                <dd className="font-serif text-lg">Jakarta, Indonesia</dd>
              </div>
              <div className="flex justify-between gap-6 py-3">
                <dt className="eyebrow pt-1">Response</dt>
                <dd className="font-serif text-lg">Within 24 hours</dd>
              </div>
            </dl>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <a href="https://github.com/sultanfaturahman" target="_blank" rel="noopener noreferrer" className="link-underline">
                GitHub &nearr;
              </a>
              <a href="https://linkedin.com/in/sultan-faturahman" target="_blank" rel="noopener noreferrer" className="link-underline">
                LinkedIn &nearr;
              </a>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="eyebrow">Name</label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="field mt-2"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="eyebrow">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="field mt-2"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="eyebrow">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="field mt-2 resize-none"
                  placeholder="Tell me about your project…"
                />
              </div>

              <div className="flex items-center gap-6">
                <button type="submit" className="btn-ink">Send message</button>
                <span aria-live="polite" className="text-sm text-accent">
                  {sent ? 'Thanks — opening your mail client.' : ''}
                </span>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
