import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import eventImg from "../../assets/services/event.jpg";
import useSEO from "../../hooks/useSEO";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};

const EventPropsDisplays = () => {
  
  useSEO({
  title: "Event Props & Display Solutions | Decor Studio",
  description:
    "Creative event props, stage decor and promotional display solutions for exhibitions, brand promotions and special events.",
});

  return (
    <div className="bg-[#0a0a0a] text-white">

      {/* ================= BANNER ================= */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center overflow-hidden">
        <img
          src={eventImg}
          alt="Event Props & Displays"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />
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
            <span className="text-yellow-400">Event Props & Displays</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-bold">
            Event Props & <span className="text-yellow-400">Displays</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-lg">
            Creative event props and display solutions designed to attract,
            engage, and leave a lasting impression.
          </p>
        </motion.div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24">
        <motion.div
          {...fadeUp}
          className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 text-center"
        >
          <span className="inline-block mb-4 border border-yellow-400/40 text-yellow-400 px-4 py-1 rounded-full text-sm">
            Creative Solutions
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bring Your Events to <span className="text-yellow-400">Life</span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg">
            Whether it’s a brand promotion, exhibition, product launch, or special
            celebration, our event props and display solutions are crafted to
            create visually striking environments that connect with your audience.
          </p>
        </motion.div>
      </section>

      {/* ================= FEATURE GRID (DIFFERENT STYLE) ================= */}
      <section className="pb-24">
        <motion.div
          {...fadeUp}
          className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Event Props",
                desc: "Custom-designed props that enhance themes, branding, and visual storytelling."
              },
              {
                title: "Stage Decor",
                desc: "Creative stage setups that elevate performances, launches, and presentations."
              },
              {
                title: "Promotional Displays",
                desc: "Eye-catching displays that attract attention and boost brand engagement."
              },
              {
                title: "Custom Fabrication",
                desc: "Tailor-made structures and decor elements built to match your event vision."
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-yellow-400/20 rounded-2xl p-8 hover:border-yellow-400/50 transition"
              >
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= IMAGE HIGHLIGHT ================= */}
      <section className="pb-24">
        <motion.div
          {...fadeUp}
          className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24"
        >
          <div className="rounded-2xl overflow-hidden border border-gray-800">
            <img
              src={eventImg}
              alt="Event Display Setup"
              className="w-full h-[450px] object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 border-t border-gray-800 text-center">
        <motion.div {...fadeUp} className="px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Planning an <span className="text-yellow-400">Event?</span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Let us design custom event props and displays that perfectly match
            your concept and leave a memorable impact.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Discuss Your Event
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default EventPropsDisplays;
