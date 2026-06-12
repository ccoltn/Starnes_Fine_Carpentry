import { Layers, Ruler, TreePine, Home, PanelTop, SquareStack, UtensilsCrossed, Wrench } from 'lucide-react';

const services = [
  {
    icon: SquareStack,
    title: 'Custom Shelving',
    description: 'Built-in bookshelves, closet organizers, and storage solutions designed to fit your space perfectly.',
  },
  {
    icon: Ruler,
    title: 'Trim Work',
    description: 'Precision-cut baseboards, crown molding, door casings, and decorative trim that elevates any room.',
  },
  {
    icon: Layers,
    title: 'Tongue & Groove',
    description: 'Stunning backsplash and ceiling installations using tongue and groove techniques for a refined finish.',
  },
  {
    icon: Home,
    title: 'Siding',
    description: 'Quality exterior siding installation and replacement to protect and beautify your home.',
  },
  {
    icon: TreePine,
    title: 'Decking',
    description: 'Custom decks and outdoor living spaces built with care, from platform decks to full railing systems.',
  },
  {
    icon: PanelTop,
    title: 'Wainscoting',
    description: 'Classic and contemporary wainscoting panels that add character and elegance to your walls.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Custom Dining Benches',
    description: 'Handcrafted dining benches built to your specifications — functional, durable, and beautiful.',
  },
  {
    icon: Wrench,
    title: 'Custom Jobs',
    description: 'Have a unique project in mind? We love a challenge. Contact us to discuss your custom carpentry needs.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-forest-500 font-semibold uppercase tracking-widest text-sm mb-3">
            What We Do
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-forest-800 mb-4">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-forest-500 mx-auto mb-6" />
          <p className="text-forest-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From interior finish work to exterior builds, Starnes Fine Carpentry delivers
            quality craftsmanship across a wide range of projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-sm p-6 shadow-sm hover:shadow-md border border-sage-100 hover:border-forest-300 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-forest-50 rounded-sm flex items-center justify-center mb-4 group-hover:bg-forest-500 transition-colors duration-300">
                  <Icon
                    size={22}
                    className="text-forest-600 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="font-serif text-lg font-bold text-forest-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-forest-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
