export default function Footer() {
  const imageBase = import.meta.env.BASE_URL;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-900 border-t border-forest-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img
              src={`${imageBase}images/4.PNG`}
              alt="Starnes Fine Carpentry"
              className="h-20 w-auto mb-4"
            />
            <p className="text-sage-400 text-sm leading-relaxed max-w-xs">
              Handcrafted carpentry with pride and precision. Serving the Florida Panhandle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cream-100 font-semibold uppercase tracking-widest text-xs mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Gallery', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sage-400 hover:text-cream-200 text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream-100 font-semibold uppercase tracking-widest text-xs mb-5">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:8505451556"
                className="flex items-center gap-2 text-sage-400 hover:text-cream-200 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12.68 19.79 19.79 0 0110 4.04a2 2 0 012 .18v3a2 2 0 01-1.44 1.94 16 16 0 006.29 6.29A2 2 0 0122 16.92z" />
                </svg>
                (850) 545-1556
              </a>
              <a
                href="mailto:Starnesservices3@gmail.com"
                className="flex items-center gap-2 text-sage-400 hover:text-cream-200 transition-colors break-all"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 flex-shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Starnesservices3@gmail.com
              </a>
              <a
                href="https://www.instagram.com/starnes_fine_carpentry/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sage-400 hover:text-cream-200 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                @starnes_fine_carpentry
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-forest-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sage-600 text-xs">
            &copy; {year} Starnes Fine Carpentry. All rights reserved.
          </p>
          <p className="text-sage-600 text-xs">
            Serving the Florida Panhandle
          </p>
        </div>
      </div>
    </footer>
  );
}
