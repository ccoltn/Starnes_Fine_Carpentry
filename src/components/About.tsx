import { Award, Users, Clock, Hammer } from 'lucide-react';

const stats = [
  { icon: Hammer, value: '500+', label: 'Projects Completed' },
  { icon: Users, value: '200+', label: 'Happy Clients' },
  { icon: Award, value: '10+', label: 'Years Experience' },
  { icon: Clock, value: '100%', label: 'Satisfaction Rate' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-forest-400 rounded-sm" />
            <img
              src="/images/IMG_1226.jpeg"
              alt="Starnes Fine Carpentry craftsman at work"
              className="relative w-full max-w-md mx-auto lg:mx-0 rounded-sm shadow-2xl object-cover aspect-[3/4]"
            />
            <div className="absolute -bottom-6 -right-6 bg-forest-600 text-cream-50 py-4 px-6 rounded-sm shadow-lg">
              <p className="font-serif text-2xl font-bold">10+</p>
              <p className="text-sage-200 text-xs uppercase tracking-widest font-medium">Years of Craft</p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="text-forest-500 font-semibold uppercase tracking-widest text-sm mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-forest-800 mb-4">
              About Starnes<br />Fine Carpentry
            </h2>
            <div className="w-16 h-1 bg-forest-500 mb-8" />

            <div className="space-y-5 text-forest-700 leading-relaxed text-base">
              <p>
                Starnes Fine Carpentry was built on a simple belief: every home deserves
                woodwork done right. Founded right here in the Florida Panhandle, we bring
                a craftsman's eye and a tradesman's work ethic to every project we take on.
              </p>
              <p>
                Whether it's intricate trim work that frames a room perfectly, custom
                shelving built to your exact needs, a deck that becomes your favorite
                outdoor space, or siding that stands up to the Florida weather — we treat
                every job like it's our own home.
              </p>
              <p>
                No subcontractors, no shortcuts. When you hire Starnes Fine Carpentry,
                you get hands-on craftsmanship from start to finish.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="tel:8505451556"
                className="bg-forest-600 hover:bg-forest-500 text-cream-50 font-semibold px-6 py-3 rounded-sm tracking-wide uppercase text-sm transition-all duration-300 hover:shadow-lg"
              >
                Call Now
              </a>
              <a
                href="#contact"
                className="border-2 border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-cream-50 font-semibold px-6 py-3 rounded-sm tracking-wide uppercase text-sm transition-all duration-300"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center bg-white p-6 rounded-sm shadow-sm border border-sage-100 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-3">
                  <Icon size={28} className="text-forest-500" />
                </div>
                <p className="font-serif text-3xl font-bold text-forest-800">{stat.value}</p>
                <p className="text-forest-600 text-sm mt-1 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
