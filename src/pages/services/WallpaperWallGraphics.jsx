import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import wallpaperImg from "../../assets/services/wallpaper.jpg";
import useSEO from "../../hooks/useSEO";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};

const WallpaperWallGraphics = () => {

    useSEO({
  title: "Wallpaper & Wall Graphics Solutions | Decor Studio",
  description:
    "Premium wallpaper and wall graphics solutions for homes, offices and commercial spaces with custom designs and professional installation.",
});

  return (
    <div className="bg-[#0a0a0a] text-white">

      {/* ================= BANNER ================= */}
      <section className="relative h-[45vh] min-h-[420px] flex items-center overflow-hidden">
        <img
          src={wallpaperImg}
          alt="Wallpaper & Wall Graphics"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />
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
            <span>Services</span>
            <span className="mx-2">/</span>
            <span className="text-yellow-400">Wallpaper & Wall Graphics</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-bold">
            Wallpaper & <span className="text-yellow-400">Wall Graphics</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-lg">
            Premium wallpapers and wall graphics designed to transform interiors
            with elegance, creativity, and flawless finishes.
          </p>
        </motion.div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="py-24">
        <motion.div
          {...fadeUp}
          className="max-w-8xl mx-auto px-6 md:px-16 lg:px-24"
        >
          <span className="inline-block mb-4 border border-yellow-400/40 text-yellow-400 px-4 py-1 rounded-full text-sm">
            Interior Enhancement
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Walls Into <span className="text-yellow-400">Statements</span>
          </h2>

          <p className="text-gray-400 mb-8 leading-relaxed text-lg max-w-3xl">
            Walls define the mood of a space. At Decor Studio, we specialize in
            premium wallpaper and wall graphic solutions that add character,
            depth, and personality to homes, offices, and commercial interiors.
          </p>

          <p className="text-gray-400 mb-14 leading-relaxed max-w-3xl">
            From subtle textures to bold artistic designs, our solutions are
            fully customizable and professionally installed to ensure seamless
            alignment, durability, and a refined finish.
          </p>

          {/* ================= INCLUDED SERVICES ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {[
              "Designer Wallpapers",
              "Wall Stickers",
              "Custom Wall Graphics",
              "Professional Installation",
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

      {/* ================= SINGLE IMAGE SHOWCASE ================= */}
      <section className="pb-24">
        <motion.div
          {...fadeUp}
          className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24"
        >
          <div className="rounded-2xl overflow-hidden">
            <img
              src={wallpaperImg}
              alt="Wallpaper Interior Design"
              className="w-full h-[480px] object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 border-t border-gray-800 text-center">
        <motion.div {...fadeUp} className="px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Upgrade Your <span className="text-yellow-400">Interiors</span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Let us help you choose the perfect wallpaper or wall graphic that
            complements your space and style.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Get Consultation
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default WallpaperWallGraphics;
