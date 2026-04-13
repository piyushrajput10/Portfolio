import { useState, type FormEvent } from 'react';
import FadeUp from '../components/FadeUp';
import { contactLinks } from '../data';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production: connect to EmailJS, Formspree, or a custom API
    const mailto = `mailto:piyushrajput10@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="bg-gray-50  dark:bg-black py-28 px-8 md:px-12">
      <div className="max-w-6xl mx-auto">

        <FadeUp>
         
          <h2 className="section-title mb-4 text-text-muted dark:text-text">Let's Work Together</h2>
          <p className="text-text-muted text-base max-w-lg mb-16">
            I'm currently open to new opportunities. Whether you have a project in mind or just want
            to say hello — my inbox is always open.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — links */}
          <FadeUp delay={100}>
            <div className="space-y-4 mb-10">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-5 bg-gray-200 dark:bg-bg-surface border border-border rounded-xl no-underline transition-all duration-200 hover:border-accent/30 hover:translate-x-1 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center font-mono text-base text-accent flex-shrink-0">
                    {link.icon}
                  </div>
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-text-dim mb-0.5">
                      {link.label}
                    </div>
                    <div className="text-sm text-text group-hover:text-accent transition-colors duration-200">
                      {link.value}
                    </div>
                  </div>
                  <span className="ml-auto text-text-dim group-hover:text-accent transition-colors duration-200">→</span>
                </a>
              ))}
            </div>

            {/* Social strip */}
            <div className="flex items-center gap-2 pt-6 border-t border-border">
              <span className="font-mono text-xs text-text-dim tracking-widest mr-2">FIND ME ON</span>
              {[
                { label: 'LinkedIn', href: 'https://linkedin.com/in/rajput-piyush' },
                { label: 'GitHub', href: 'https://github.com/piyushrajput10' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs px-3 py-1.5 border border-border rounded text-text-muted hover:text-accent hover:border-accent/40 transition-all duration-200 no-underline"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </FadeUp>

          {/* Right — form */}
          <FadeUp delay={200}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-64 bg-bg-surface border border-accent/30 rounded-xl p-8 text-center">
                <span className="text-4xl mb-4">✉️</span>
                <h3 className="font-display font-bold text-xl text-accent mb-2">Message sent!</h3>
                <p className="text-text-muted text-sm">Your email client should have opened. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[10px] tracking-[0.15em] uppercase text-text-dim block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] tracking-[0.15em] uppercase text-text-dim block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[10px] tracking-[0.15em] uppercase text-text-dim block mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="font-mono text-[10px] tracking-[0.15em] uppercase text-text-dim block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, opportunity, or just say hi..."
                    className="form-input resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message ↗
                </button>

                <p className="font-mono text-[10px] text-text-dim text-center tracking-wide">
                  Opens your default email client
                </p>
              </form>
            )}
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
