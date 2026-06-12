import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const imageBase = import.meta.env.BASE_URL;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageBase}images/gallery/IMG_1094.jpeg)` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900/80 via-forest-800/70 to-forest-900/90" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <img
            src={`${imageBase}images/4.PNG`}
            alt="Starnes Fine Carpentry"
            className="mx-auto h-40 sm:h-52 w-auto drop-shadow-2xl"
          />
        </div>

        <p className="text-sage-200 text-lg sm:text-xl font-light tracking-widest uppercase mb-4">
          Craftsmanship You Can Trust
        </p>

        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-cream-50 text-shadow mb-6 leading-tight">
          Fine Carpentry,<br />
          <span className="text-sage-300">Built to Last</span>
        </h1>

        <p className="text-cream-200 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          From custom shelving and trim work to decks and siding — handcrafted
          with precision and pride in every project.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-block bg-forest-500 hover:bg-forest-400 text-cream-50 font-semibold px-8 py-4 rounded-sm tracking-wide uppercase text-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
          >
            Request a Quote
          </a>
          <a
            href="#gallery"
            className="inline-block border-2 border-cream-200 hover:border-sage-300 hover:bg-forest-800/50 text-cream-100 font-semibold px-8 py-4 rounded-sm tracking-wide uppercase text-sm transition-all duration-300"
          >
            View Our Work
          </a>
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
