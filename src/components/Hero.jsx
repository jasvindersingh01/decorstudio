import { Phone, ArrowRight } from "lucide-react";
import heroBg from "../assets/hero-bg.jpg";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};


const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Decor Studio Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full px-6 md:px-16 lg:px-24"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="max-w-lg">

          {/* Badge */}
          <motion.span
            variants={itemUp}
            className="inline-flex items-center gap-2 border border-yellow-400/40
            text-yellow-400 px-4 py-1 rounded-full text-sm mb-6"
          >
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            Premium Decor Solutions
          </motion.span>

          {/* Heading */}
          <motion.h1
            variants={itemUp}
            className="text-5xl md:text-7xl font-bold leading-tight mb-4"
          >
            Decor <span className="text-yellow-300">Studio</span>
          </motion.h1>

          {/* Services line */}
          <motion.p
            variants={itemUp}
            className="text-lg md:text-xl text-gray-300 mb-4"
          >
            <span className="text-yellow-400 font-semibold">
              Flex & Vinyl Printing
            </span>{" "}
            • Wallpaper • CNC Cutting • Laser Cutting
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemUp}
            className="text-gray-400 max-w-xl mb-8"
          >
            Transform your space with our premium printing and decor services.
            Quality craftsmanship meets creative excellence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemUp}
            className="flex gap-4"
          >
            <button className="flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
              View Services <ArrowRight size={18} />
            </button>

            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 border border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition"
            >
              <Phone size={18} />
              Call Now
            </a>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll Indicator (no motion needed) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-yellow-400/50 rounded-full flex justify-center p-1">
          <span className="w-1 h-2 bg-yellow-400 rounded-full animate-bounce"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
