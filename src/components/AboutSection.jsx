import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpeg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section
      className="bg-[#0a0a0a] text-white py-20 scroll-mt-18">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left Image */}
          <div className="relative">
            <img
              src={aboutImg}
              alt="Decor Studio Work"
              className="w-full h-[420px] object-cover rounded-2xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-black/50 via-transparent to-black/30" />
          </div>

          <div>
            <span className="inline-block mb-4 border border-yellow-400/40 text-yellow-400 px-4 py-1 rounded-full text-sm">
              About Us
            </span>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Crafting Premium <span className="text-yellow-400">Decor Experiences</span>
            </h2>

            {/* Description */}
            <p className="text-gray-400 mb-4 leading-relaxed">
              Decor Studio is a creative decor and printing solution provider
              specializing in premium-quality designs, modern techniques, and
              professional execution. We believe every space deserves a
              powerful visual identity.
            </p>

            <p className="text-gray-400 mb-6 leading-relaxed">
              With advanced machinery, skilled craftsmanship, and a passion for
              creativity, we deliver services that combine durability, elegance,
              and precision — ensuring complete customer satisfaction.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border border-yellow-400/30 rounded-xl p-4">
                <h4 className="text-yellow-400 text-xl font-semibold">10+ Years</h4>
                <p className="text-sm text-gray-400">Industry Experience</p>
              </div>

              <div className="border border-yellow-400/30 rounded-xl p-4">
                <h4 className="text-yellow-400 text-xl font-semibold">500+</h4>
                <p className="text-sm text-gray-400">Projects Delivered</p>
              </div>
            </div>

            {/* CTA */}
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
              <Link to="/about">
              Learn More
              </Link>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
