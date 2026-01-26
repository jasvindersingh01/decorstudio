import { motion } from "framer-motion";
import {
  Printer,
  Image,
  Scissors,
  Layers,
  Lightbulb,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    title: "Printing & Branding",
    icon: Printer,
    desc:
      "Complete printing and branding solutions including flex, vinyl, digital prints, and visiting cards for businesses.",
    points: [
      "Flex & Vinyl Printing",
      "Digital Printing",
      "Visiting Cards",
      "Branding Materials",
    ],
  },
  {
    title: "Wallpaper & Wall Graphics",
    icon: Image,
    desc:
      "Premium wallpapers and wall graphics that enhance interiors with custom designs and finishes.",
    points: [
      "Designer Wallpapers",
      "Wall Stickers",
      "Custom Wall Graphics",
      "Professional Installation",
    ],
  },
  {
    title: "CNC & Laser Cutting",
    icon: Scissors,
    desc:
      "High-precision CNC and laser cutting services for decor, signage, and custom design elements.",
    points: [
      "CNC Cutting",
      "Laser Cutting",
      "Multiple Materials",
      "Precision Work",
    ],
  },
  {
    title: "LED Letters & Signage",
    icon: Lightbulb,
    desc:
      "Eye-catching LED letters and signage solutions to make your brand stand out day and night.",
    points: [
      "LED Letters",
      "Shop Sign Boards",
      "Indoor & Outdoor Signage",
      "Energy Efficient",
    ],
  },
  {
    title: "Event Props & Displays",
    icon: Sparkles,
    desc:
      "Creative event props and display solutions for promotions, exhibitions, and special occasions.",
    points: [
      "Event Props",
      "Stage Decor",
      "Promotional Displays",
      "Custom Fabrication",
    ],
  },
  {
    title: "Custom Decor Solutions",
    icon: Layers,
    desc:
      "Tailor-made decor solutions designed to match your vision, space, and branding needs.",
    points: [
      "Custom Designs",
      "Mixed Materials",
      "One-of-a-Kind Projects",
      "End-to-End Execution",
    ],
  },
];


const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#121111] text-white py-20 scroll-mt-8">
      <div className="px-6 md:px-16 lg:px-24">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-2xl mb-14 justify-center text-center mx-auto">
          <span className="inline-block mb-4 border border-yellow-400/40 text-yellow-400 px-4 py-1 rounded-full text-sm">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Premium <span className="text-yellow-400">Decor & Printing</span> Solutions
          </h2>
          <p className="text-gray-400">
            We provide end-to-end decor and printing services with precision,
            creativity, and premium quality.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="group relative bg-black/60 rounded-2xl p-8 border border-white/10
                transition-all duration-300 hover:-translate-y-2
                hover:border-yellow-400/50
                hover:shadow-[0_0_60px_rgba(250,204,21,0.15)]"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-xl
                  bg-yellow-400/10 text-yellow-400 mb-6
                  transition group-hover:bg-yellow-400 group-hover:text-black"
                >
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {service.desc}
                </p>

                {/* Points */}
                <ul className="space-y-2">
                  {service.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <CheckCircle2 size={16} className="text-yellow-400" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Hover Overlay (Subtle) */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0
                  group-hover:opacity-100 transition
                  bg-gradient-to-tr from-yellow-400/5 via-transparent to-transparent"
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
