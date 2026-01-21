import { Phone, ArrowRight } from "lucide-react";
import heroBg from "../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Decor Studio Background"
          className="w-full h-full object-cover"
        />

        {/* Dark cinematic overlays */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24">
        <div className="max-w-lg">
          <span className="inline-flex items-center gap-2 border border-yellow-400/40 text-yellow-400 px-4 py-1 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            Premium Decor Solutions
          </span>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            Decor <span className="text-yellow-300">Studio</span>
          </h1>

          {/* Services line */}
          <p className="text-lg md:text-xl text-gray-300 mb-4">
            <span className="text-yellow-400 font-semibold">
              Flex & Vinyl Printing
            </span>{" "}
            • Wallpaper • CNC Cutting • Laser Cutting
          </p>

          {/* Description */}
          <p className="text-gray-400 max-w-xl mb-8">
            Transform your space with our premium printing and decor services.
            Quality craftsmanship meets creative excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4">
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
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-yellow-400/50 rounded-full flex justify-center p-1">
          <span className="w-1 h-2 bg-yellow-400 rounded-full animate-bounce"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
