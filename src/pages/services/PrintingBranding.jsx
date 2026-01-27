import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from "../../assets/services/img1.webp";
import useSEO from "../../hooks/useSEO";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};

const PrintingBranding = () => {

  useSEO({
  title: "Printing & Branding Services | Decor Studio Kota",
  description:
    "Professional printing and branding services in Kota including flex printing, vinyl printing, digital prints, visiting cards and custom branding materials.",
});

  return (
    <div className="bg-[#0a0a0a] text-white">

      {/* ================= BANNER ================= */}
      <section className="relative h-[45vh] min-h-[420px] flex items-center overflow-hidden">
        <img
          src={img1}
          alt="Printing & Branding Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />

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
            <span className="text-gray-300">Services</span>
            <span className="mx-2">/</span>
            <span className="text-yellow-400">Printing & Branding</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-bold">
            Printing & <span className="text-yellow-400">Branding</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-lg">
            Complete printing and branding solutions to help your business stand
            out with quality, consistency, and professional finishes.
          </p>
        </motion.div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="py-24">
        <motion.div
          {...fadeUp}
          className="max-w-8xl mx-auto px-6 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
        >
          {/* Text */}
          <div>
            <span className="inline-block mb-4 border border-yellow-400/40 text-yellow-400 px-4 py-1 rounded-full text-sm">
              Our Expertise
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Professional Printing & Branding Solutions
            </h2>

            <p className="text-gray-400 mb-6 leading-relaxed">
              At Decor Studio, we offer end-to-end printing and branding services
              designed to elevate your business visibility. From large-format
              flex and vinyl printing to premium visiting cards, we ensure every
              print reflects quality and precision.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Whether you need promotional materials, shop branding, or corporate
              prints, our advanced machines and skilled team deliver sharp,
              durable, and visually impactful results.
            </p>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src={img1}
              alt="Large Format Printing"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* ================= SERVICES INCLUDED ================= */}
      <section className="py-20 border-t border-gray-800">
        <motion.div
          {...fadeUp}
          className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            What’s Included in <span className="text-yellow-400">This Service</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Flex & Vinyl Printing",
              "Digital Printing",
              "Visiting Cards",
              "Branding Materials",
            ].map((item, i) => (
              <div
                key={i}
                className="border border-yellow-400/20 rounded-xl p-6 hover:border-yellow-400/50 transition"
              >
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                  {item}
                </h3>
                <p className="text-gray-400 text-sm">
                  High-quality printing with professional finishing for long-lasting impact.
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
            Need Professional <span className="text-yellow-400">Printing?</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Get in touch with us today to discuss your printing and branding
            requirements. We’re here to bring your ideas to life.
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

export default PrintingBranding;
