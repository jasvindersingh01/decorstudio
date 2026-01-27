import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import cncImg from "../../assets/services/laser.png";
import useSEO from "../../hooks/useSEO";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};

const CncLaserCutting = () => {
  
useSEO({
  title: "CNC & Laser Cutting Services | Decor Studio",
  description:
    "High-precision CNC and laser cutting services for decor, signage and custom fabrication using multiple materials and accurate finishing.",
});

  return (
    <div className="bg-[#0a0a0a] text-white">

      {/* ================= BANNER ================= */}
      <section className="relative h-[45vh] min-h-[420px] flex items-center overflow-hidden">
        <img
          src={cncImg}
          alt="CNC & Laser Cutting Services"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 w-full px-6 md:px-16 lg:px-24 text-center mt-14"
        >
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-300 mb-4">
            <Link to="/" className="hover:text-yellow-400">Home</Link>
            <span className="mx-2">/</span>
            <span >Services</span>
            <span className="mx-2">/</span>
            <span className="text-yellow-400">CNC & Laser Cutting</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-bold">
            CNC & <span className="text-yellow-400">Laser Cutting</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-lg">
            High-precision cutting solutions for decor, signage, and custom
            fabrication using advanced CNC and laser technology.
          </p>
        </motion.div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-24">
        <motion.div
          {...fadeUp}
          className="max-w-8xl mx-auto px-6 md:px-16 lg:px-24"
        >
          <span className="inline-block mb-4 border border-yellow-400/40 text-yellow-400 px-4 py-1 rounded-full text-sm">
            Precision Engineering
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Accuracy Meets <span className="text-yellow-400">Craftsmanship</span>
          </h2>

          <p className="text-gray-400 mb-8 leading-relaxed text-lg max-w-3xl">
            Our CNC and laser cutting services are designed for projects that
            demand precision, consistency, and flawless detailing. From intricate
            decorative patterns to robust signage elements, we deliver exact
            results every time.
          </p>

          <p className="text-gray-400 mb-14 leading-relaxed max-w-3xl">
            Using industry-grade machines, we work with a wide range of materials
            and thicknesses, ensuring smooth edges, accurate dimensions, and
            high-quality finishes suitable for both indoor and outdoor use.
          </p>

          {/* ================= CAPABILITIES ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {[
              "CNC Cutting",
              "Laser Cutting",
              "Multiple Materials",
              "Precision Work",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 border border-yellow-400/20 rounded-xl p-6 hover:border-yellow-400/50 transition"
              >
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <h3 className="text-lg font-medium text-gray-200">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= SINGLE IMAGE ================= */}
      <section className="pb-24">
        <motion.div
          {...fadeUp}
          className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24"
        >
          <div className="rounded-2xl overflow-hidden border border-gray-800">
            <img
              src={cncImg}
              alt="Precision CNC Laser Cutting Machine"
              className="w-full h-[480px] object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 border-t border-gray-800 text-center">
        <motion.div {...fadeUp} className="px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need <span className="text-yellow-400">Precision Cutting?</span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Share your design or requirements with us and get high-accuracy CNC
            or laser cutting solutions tailored to your project.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Request a Quote
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default CncLaserCutting;
