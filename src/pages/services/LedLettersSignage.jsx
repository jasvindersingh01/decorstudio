import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import ledImg from "../../assets/services/led.webp";
import useSEO from "../../hooks/useSEO";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};

const LedLettersSignage = () => {

  useSEO({
  title: "LED Letters & Signage Solutions | Decor Studio",
  description:
    "Eye-catching LED letters, shop sign boards and indoor-outdoor signage solutions designed to improve brand visibility day and night.",
});

  return (
    <div className="bg-[#0a0a0a] text-white">

      {/* ================= BANNER ================= */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center overflow-hidden">
        <img
          src={ledImg}
          alt="LED Letters & Signage"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full px-6 md:px-16 lg:px-24 text-center mt-14"
        >
          <nav className="text-sm text-gray-300 mb-4">
            <Link to="/" className="hover:text-yellow-400">Home</Link>
            <span className="mx-2">/</span>
            <span>Services</span>
            <span className="mx-2">/</span>
            <span className="text-yellow-400">LED Letters & Signage</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-bold">
            LED Letters & <span className="text-yellow-400">Signage</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-lg">
            Eye-catching LED signage solutions designed to make your brand visible,
            attractive, and memorable—day and night.
          </p>
        </motion.div>
      </section>

      {/* ================= SHOWCASE ================= */}
      <section className="py-24">
        <motion.div
          {...fadeUp}
          className="max-w-8xl mx-auto px-6 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image */}
          <div className="rounded-2xl overflow-hidden border border-gray-800">
            <img
              src={ledImg}
              alt="LED Sign Board"
              className="w-full h-[420px] object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block mb-4 border border-yellow-400/40 text-yellow-400 px-4 py-1 rounded-full text-sm">
              Brand Visibility
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Make Your Business <span className="text-yellow-400">Stand Out</span>
            </h2>

            <p className="text-gray-400 mb-8 leading-relaxed">
              Our LED letters and signage are crafted to grab attention instantly.
              Whether it’s a retail store, showroom, office, or commercial space,
              our signage enhances brand visibility and professionalism.
            </p>

            <p className="text-gray-400 leading-relaxed">
              We use high-quality LEDs and durable materials to ensure long life,
              consistent brightness, and energy efficiency for both indoor and
              outdoor installations.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= FEATURES STRIP ================= */}
      <section className="py-20 border-t border-gray-800">
        <motion.div
          {...fadeUp}
          className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "LED Letters",
              "Shop Sign Boards",
              "Indoor & Outdoor Signage",
              "Energy Efficient",
            ].map((item, i) => (
              <div
                key={i}
                className="text-center border border-yellow-400/20 rounded-xl p-8 hover:border-yellow-400/50 transition"
              >
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                  {item}
                </h3>
                <p className="text-gray-400 text-sm">
                  Premium quality signage designed for maximum impact and durability.
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 border-t border-gray-800 text-center">
        <motion.div {...fadeUp} className="px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Custom <span className="text-yellow-400">LED Signage?</span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Get in touch with us to design LED signage that perfectly represents
            your brand and attracts customers.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Get a Quote
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default LedLettersSignage;
