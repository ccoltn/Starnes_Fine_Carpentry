import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const projectTypes = [
  'Custom Shelving',
  'Trim Work',
  'Tongue & Groove Backsplash & Ceilings',
  'Siding',
  'Decking',
  'Wainscoting',
  'Custom Dining Benches',
  'Other / Custom Job',
];

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    project_type: '',
    description: '',
  });
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('submitting');
    setErrorMsg('');

    const { error } = await supabase.from('quote_requests').insert([form]);

    if (error) {
      setState('error');
      setErrorMsg('Something went wrong. Please try again or call us directly.');
    } else {
      setState('success');
      setForm({ name: '', email: '', phone: '', project_type: '', description: '' });
    }
  };

  const inputClass =
    'w-full bg-white border border-sage-200 rounded-sm px-4 py-3 text-forest-800 placeholder-sage-400 focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent transition text-sm';

  return (
    <section id="contact" className="py-24 bg-forest-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div>
            <p className="text-sage-300 font-semibold uppercase tracking-widest text-sm mb-3">
              Get in Touch
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream-50 mb-4">
              Request a Free Quote
            </h2>
            <div className="w-16 h-1 bg-sage-400 mb-8" />
            <p className="text-sage-200 leading-relaxed text-base mb-10">
              Ready to bring your vision to life? Fill out the form and we'll
              get back to you promptly with a free, no-obligation estimate.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-forest-700 rounded-sm flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-sage-300">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12.68 19.79 19.79 0 0110 4.04a2 2 0 012 .18v3a2 2 0 01-1.44 1.94 16 16 0 006.29 6.29A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sage-400 text-xs uppercase tracking-wider font-medium">Phone</p>
                  <a href="tel:8505451556" className="text-cream-100 font-semibold hover:text-sage-300 transition-colors text-lg">
                    (850) 545-1556
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-forest-700 rounded-sm flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-sage-300">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sage-400 text-xs uppercase tracking-wider font-medium">Email</p>
                  <a href="mailto:Starnesservices3@gmail.com" className="text-cream-100 font-semibold hover:text-sage-300 transition-colors">
                    Starnesservices3@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-forest-700 rounded-sm flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-sage-300">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sage-400 text-xs uppercase tracking-wider font-medium">Instagram</p>
                  <a
                    href="https://www.instagram.com/starnes_fine_carpentry/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream-100 font-semibold hover:text-sage-300 transition-colors"
                  >
                    @starnes_fine_carpentry
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-cream-50 p-8 rounded-sm shadow-2xl">
            {state === 'success' ? (
              <div className="text-center py-10">
                <CheckCircle size={56} className="text-forest-500 mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-bold text-forest-800 mb-2">
                  Quote Request Received!
                </h3>
                <p className="text-forest-600 mb-6">
                  Thanks for reaching out. We'll be in touch shortly to discuss your project.
                </p>
                <button
                  onClick={() => setState('idle')}
                  className="text-forest-600 underline text-sm hover:text-forest-800 transition-colors"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-forest-700 text-xs font-semibold uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-forest-700 text-xs font-semibold uppercase tracking-wider mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(850) 000-0000"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-forest-700 text-xs font-semibold uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-forest-700 text-xs font-semibold uppercase tracking-wider mb-2">
                    Project Type
                  </label>
                  <select
                    name="project_type"
                    value={form.project_type}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a service...</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-forest-700 text-xs font-semibold uppercase tracking-wider mb-2">
                    Project Description *
                  </label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your project — size, materials, timeline, any special requirements..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {state === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-sm px-4 py-3 text-sm">
                    <AlertCircle size={16} className="flex-shrink-0" />
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={state === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 bg-forest-600 hover:bg-forest-500 disabled:bg-forest-300 text-cream-50 font-semibold py-4 rounded-sm tracking-wide uppercase text-sm transition-all duration-300 hover:shadow-lg disabled:cursor-not-allowed"
                >
                  {state === 'submitting' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-cream-100 border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Quote Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
