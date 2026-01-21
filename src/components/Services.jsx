import { motion } from "framer-motion";
import {
  Printer,
  Image,
  Scissors,
  Zap,
  Lightbulb,
  FileText,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    title: "Flex & Vinyl Printing",
    icon: Printer,
    desc:
      "High-quality flex and vinyl printing for banners, hoardings, shop boards, and promotional materials.",
    points: [
      "Large Format Printing",
      "Weather Resistant",
      "Custom Sizes",
      "Fast Turnaround",
    ],
  },
  {
    title: "Wallpaper",
    icon: Image,
    desc:
      "Transform your walls with our premium wallpaper collection. Custom designs and professional installation included.",
    points: [
      "Custom Designs",
      "Professional Installation",
      "Variety of Textures",
      "Easy Maintenance",
    ],
  },
  {
    title: "CNC Cutting",
    icon: Scissors,
    desc:
      "Precision CNC cutting for wood, MDF, acrylic, and more. Perfect for decor and signage.",
    points: [
      "Intricate Designs",
      "Multiple Materials",
      "High Precision",
      "Custom Patterns",
    ],
  },
  {
    title: "Laser Cutting",
    icon: Zap,
    desc:
      "Advanced laser cutting solutions for clean edges and detailed designs.",
    points: [
      "Clean Finish",
      "High Accuracy",
      "Fast Processing",
      "Custom Shapes",
    ],
  },
  {
    title: "LED Letters",
    icon: Lightbulb,
    desc:
      "Eye-catching LED letters and signage for branding and storefronts.",
    points: [
      "Bright Illumination",
      "Energy Efficient",
      "Custom Fonts",
      "Indoor & Outdoor",
    ],
  },
  {
    title: "Visiting Cards",
    icon: FileText,
    desc:
      "Premium visiting cards that leave a lasting impression.",
    points: [
      "Premium Paper",
      "Custom Finishes",
      "Sharp Printing",
      "Quick Delivery",
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
