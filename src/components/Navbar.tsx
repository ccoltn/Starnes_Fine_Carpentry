import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const imageBase = import.meta.env.BASE_URL;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-forest-800 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={`${imageBase}images/4.PNG`}
              alt="Starnes Fine Carpentry"
              className="h-12 w-auto"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cream-100 hover:text-sage-200 font-medium text-sm tracking-wide uppercase transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Phone size={16} className="text-sage-300" />
            <a
              href="tel:8505451556"
              className="text-cream-100 font-semibold text-sm hover:text-sage-300 transition-colors"
            >
              (850) 545-1556
            </a>
          </div>

          <button
            className="md:hidden text-cream-100 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-forest-800 border-t border-forest-700">
          <div className="px-4 pt-2 pb-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-cream-100 py-3 px-2 text-base font-medium border-b border-forest-700 hover:text-sage-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:8505451556"
              className="mt-3 flex items-center gap-2 text-sage-300 font-semibold"
            >
              <Phone size={16} />
              (850) 545-1556
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
