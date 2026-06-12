import { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type GalleryItem = {
  src: string;
  alt: string;
  type: 'image' | 'video';
};

type Category = {
  label: string;
  items: GalleryItem[];
};

const imageBase = import.meta.env.BASE_URL;

const categories: Category[] = [
  {
    label: 'Custom Shelving',
    items: [
      { src: `${imageBase}images/gallery/IMG_5967.jpeg`, alt: 'Custom shelving detail', type: 'image' },
      { src: `${imageBase}images/gallery/IMG_5974.jpeg`, alt: 'Custom shelving detail', type: 'image' },
      { src: `${imageBase}images/Closet.mp4`, alt: 'Custom shelving video', type: 'video' },
      { src: `${imageBase}images/gallery/IMG_7866.jpeg`, alt: 'Custom shelving detail', type: 'image' },
      { src: `${imageBase}images/gallery/IMG_8094.jpeg`, alt: 'Custom shelving detail', type: 'image' },
      { src: `${imageBase}images/gallery/IMG_7870.jpeg`, alt: 'Custom shelving detail', type: 'image' },
      { src: `${imageBase}images/gallery/IMG_8084.jpeg`, alt: 'Custom shelving detail', type: 'image' },
    ],
  },
  {
    label: 'Trim Work',
    items: [
      { src: `${imageBase}images/gallery/IMG_8691.jpeg`, alt: 'Precision baseboard trim detail', type: 'image' },
      { src: `${imageBase}images/gallery/IMG_0631.jpeg`, alt: 'Precision baseboard trim detail', type: 'image' },
      { src: `${imageBase}images/gallery/IMG_8420.jpeg`, alt: 'Precision baseboard trim detail', type: 'image' },
    ],
  },
  {
    label: 'Tongue & Groove Backsplash & Ceilings',
    items: [
      { src: `${imageBase}images/gallery/IMG_6976.jpeg`, alt: 'Tongue & Groove wood paneling', type: 'image' },
      { src: `${imageBase}images/gallery/IMG_1094.jpeg`, alt: 'Tongue & Groove wood paneling', type: 'image' },
    ],
  },
  {
    label: 'Siding',
    items: [
      { src: `${imageBase}images/gallery/IMG_8100.jpeg`, alt: 'Siding Installation', type: 'image' },
    ],
  },
  {
    label: 'Decking',
    items: [
      { src: `${imageBase}images/gallery/IMG_8835.jpeg`, alt: 'Custom deck with cross-brace railings', type: 'image' },
      { src: `${imageBase}images/gallery/IMG_8732.jpeg`, alt: 'Deck steps with railing in front of French doors', type: 'image' },
    ],
  },
  {
    label: 'Wainscoting',
    items: [
      { src: `${imageBase}images/gallery/IMG_8477.jpeg`, alt: 'Decorative Wall Paneling', type: 'image' },
    ],
  },
  {
    label: 'Custom Dining Benches',
    items: [
      { src: `${imageBase}images/Bench3.mp4`, alt: 'Handcrafted built-in dining bench', type: 'video' },
    ],
  },
  {
    label: 'Custom Jobs',
    items: [
      { src: `${imageBase}images/gallery/IMG_7936.jpeg`, alt: '', type: 'image' },
    ],
  },
];

function CategorySlider({ items }: { items: GalleryItem[] }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  useEffect(() => {
    if (!videoRef.current || items[index]?.type !== 'video') return;

    const video = videoRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.muted = true;
          video.loop = true;
          video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [index, items]);

  if (items.length === 0) {
    return (
      <div className="aspect-[4/3] bg-sage-100 rounded-sm flex items-center justify-center">
        <p className="text-sage-500 text-sm font-medium tracking-wide text-center px-4">
          Photos coming soon
        </p>
      </div>
    );
  }

  return (
    <div
      className="relative aspect-[4/3] overflow-hidden rounded-sm border border-white/10 bg-forest-800 shadow-xl group"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {items[index].type === 'video' ? (
        <video
          ref={videoRef}
          src={items[index].src}
          muted
          playsInline
          loop
          preload="metadata"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <img
          src={items[index].src}
          alt={items[index].alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}

      {items.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-forest-900/60 hover:bg-forest-900/80 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-forest-900/60 hover:bg-forest-900/80 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === index ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-cream-100 text-xs font-medium">{items[index].alt}</p>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [activeTab, setActiveTab] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);

  const scrollTab = (dir: 'left' | 'right') => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: dir === 'left' ? -150 : 150, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="py-24 bg-forest-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sage-300 font-semibold uppercase tracking-widest text-sm mb-3">
            Our Portfolio
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream-50 mb-4">
            Work Gallery
          </h2>
          <div className="w-16 h-1 bg-sage-400 mx-auto mb-6" />
          <p className="text-sage-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Browse through our completed projects — each one a testament to
            quality craftsmanship and attention to detail.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="relative mb-10">
          <button
            onClick={() => scrollTab('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-forest-800 hover:bg-forest-700 text-cream-200 p-1 rounded-full sm:hidden"
            aria-label="Scroll tabs left"
          >
            <ChevronLeft size={16} />
          </button>
          <div
            ref={tabsRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide px-6 sm:px-0 sm:flex-wrap sm:justify-center"
          >
            {categories.map((cat, i) => (
              <button
                key={cat.label}
                onClick={() => setActiveTab(i)}
                className={`whitespace-nowrap px-4 py-2 text-sm font-medium tracking-wide uppercase rounded-sm transition-all duration-200 flex-shrink-0 ${
                  activeTab === i
                    ? 'bg-forest-500 text-cream-50 shadow'
                    : 'bg-forest-800 text-sage-300 hover:bg-forest-700 hover:text-cream-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollTab('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-forest-800 hover:bg-forest-700 text-cream-200 p-1 rounded-full sm:hidden"
            aria-label="Scroll tabs right"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Grid for active category */}
        <div className="min-h-[300px]">
          {categories[activeTab].items.length === 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[0, 1, 2].map((i) => (
                <div key={i} className="aspect-[4/3] rounded-sm border border-white/10 bg-forest-800 shadow-xl flex flex-col items-center justify-center gap-2">
                  <div className="w-10 h-10 border-2 border-dashed border-sage-600 rounded-full flex items-center justify-center">
                    <span className="text-sage-500 text-lg">+</span>
                  </div>
                  <p className="text-sage-500 text-sm">Photos coming soon</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories[activeTab].items.map((item, i) => (
                <CategorySlider key={i} items={[item]} />
              ))}
              {/* Fill remaining slots */}
              {categories[activeTab].items.length < 3 &&
                Array.from({ length: 3 - categories[activeTab].items.length }).map((_, i) => (
                  <div key={`empty-${i}`} className="aspect-[4/3] rounded-sm border border-white/10 bg-forest-800 shadow-xl flex flex-col items-center justify-center gap-2">
                    <div className="w-10 h-10 border-2 border-dashed border-sage-600 rounded-full flex items-center justify-center">
                      <span className="text-sage-500 text-lg">+</span>
                    </div>
                    <p className="text-sage-500 text-sm">More photos coming soon</p>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <p className="text-sage-300 mb-4 text-sm">
            Follow us for more project updates
          </p>
          <a
            href="https://www.instagram.com/starnes_fine_carpentry/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400 text-white font-semibold px-6 py-3 rounded-sm hover:opacity-90 transition-opacity text-sm tracking-wide"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            @starnes_fine_carpentry
          </a>
        </div>
      </div>
    </section>
  );
}
