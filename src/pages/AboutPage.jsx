import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpeg";
import officeImg from "../assets/office.jpeg";
import workshopImg from "../assets/workspace.jpeg";
import printerImg from "../assets/workspace2.jpeg";
import cutterImg from "../assets/working.jpeg";
import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";

const AboutPage = () => {

  useSEO({
  title: "About Decor Studio | 10+ Years of Decor & Printing Excellence",
  description:
    "Learn about Decor Studio, our journey, expertise and commitment to premium decor and printing solutions.",
});

  const fadeIn = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true }
  }

  return (
    <>
      <section className="relative h-[40vh] min-h-[400px] flex items-center overflow-hidden">
        <img
          src={aboutImg}
          alt="About Decor Studio"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 w-full px-6 md:px-16 lg:px-24 flex flex-col justify-center items-center text-center mt-14"
        >
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-300 mb-4">
            <Link to="/" className="hover:text-yellow-400 cursor-pointer">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-yellow-400">About Us</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-bold text-white">
            About <span className="text-yellow-400">Decor Studio</span>
          </h1>

          <p className="mt-4 max-w-xl text-gray-300 text-lg">
            Crafting premium decor and printing solutions with creativity,
            precision, and passion for over a decade.
          </p>
        </motion.div>
      </section>

      <div className="bg-[#0a0a0a] text-white min-h-screen">
        {/* Page Header */}
        <section className="py-20 scroll-mt-16">
          <motion.div
            {...fadeIn}
            className="w-full px-6 md:px-16 lg:px-24">
            <span className="inline-block mb-4 border border-yellow-400/40 text-yellow-400 px-4 py-1 rounded-full text-sm">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              About Decor <span className="text-yellow-400">Studio</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div className="relative rounded-2xl overflow-hidden h-[450px]">
                <img
                  src={aboutImg}
                  alt="Decor Studio Office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-black/40" />
              </div>

              <div>
                <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                  Established more than 10 years ago, Decor Studio started as a small printing shop with a vision to transform spaces and brands through quality design and printing solutions. What began as a modest setup has now grown into a full-fledged decor and printing hub.
                </p>

                <p className="text-gray-400 mb-8 leading-relaxed">
                  We believe that every space and brand deserves to stand out. With our team of skilled professionals and industry-grade machinery, we have delivered 500+ successful projects for homes, offices, commercial establishments and brands across the region.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="text-center">
                    <h4 className="text-yellow-400 text-3xl font-bold">10+</h4>
                    <p className="text-gray-400 text-sm mt-1">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-yellow-400 text-3xl font-bold">500+</h4>
                    <p className="text-gray-400 text-sm mt-1">Completed Projects</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-yellow-400 text-3xl font-bold">100%</h4>
                    <p className="text-gray-400 text-sm mt-1">Client Satisfaction</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-yellow-400 text-3xl font-bold">20+</h4>
                    <p className="text-gray-400 text-sm mt-1">Services</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Our Infrastructure Section */}
        <section className="py-16 border-t border-gray-800">
          <motion.div
            {...fadeIn}
            className="w-full px-6 md:px-16 lg:px-24">
            <span className="inline-block mb-4 border border-yellow-400/40 text-yellow-400 px-4 py-1 rounded-full text-sm">
              Our Workshop
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Advanced <span className="text-yellow-400">Infrastructure</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                {...fadeIn}
                transition={{ delay: 0.1 }}
                className="rounded-xl overflow-hidden group">
                <img
                  src={printerImg}
                  alt="High Quality Printing Machine"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              <motion.div
                {...fadeIn}
                transition={{ delay: 0.2 }}
                className="rounded-xl overflow-hidden group">
                <img
                  src={cutterImg}
                  alt="CNC and Laser Cutting Machines"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              <motion.div
                {...fadeIn}
                transition={{ delay: 0.3 }}
                className="rounded-xl overflow-hidden group">
                <img
                  src={workshopImg}
                  alt="Decor Studio Workshop"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              <motion.div
                {...fadeIn}
                transition={{ delay: 0.4 }}
                className="rounded-xl overflow-hidden group col-span-1 md:col-span-2 lg:col-span-3">
                <img
                  src={officeImg}
                  alt="Decor Studio Office Workspace"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            </div>

            <p className="text-gray-400 mt-8 max-w-3xl">
              We have invested in industry-leading printing and cutting machinery to ensure we deliver the highest quality output for every project. Our workshop is equipped with large format printers, CNC routers, laser cutters, and professional finishing tools to handle all your decor and printing needs under one roof.
            </p>
          </motion.div>
        </section>

        {/* Our Core Values */}
        <section className="py-16 border-t border-gray-800">
          <motion.div
            {...fadeIn}
            className="w-full px-6 md:px-16 lg:px-24">
            <span className="inline-block mb-4 border border-yellow-400/40 text-yellow-400 px-4 py-1 rounded-full text-sm">
              Our Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Our Core <span className="text-yellow-400">Values</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="border border-yellow-400/20 rounded-xl p-6 hover:border-yellow-400/50 transition-colors">
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">Quality Craftsmanship</h3>
                <p className="text-gray-400 text-sm">We never compromise on quality, and ensure every project meets the highest standards of finish and durability.</p>
              </div>

              <div className="border border-yellow-400/20 rounded-xl p-6 hover:border-yellow-400/50 transition-colors">
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">Creative Excellence</h3>
                <p className="text-gray-400 text-sm">Our team of designers bring fresh, innovative ideas to life to help your space and brand stand out.</p>
              </div>

              <div className="border border-yellow-400/20 rounded-xl p-6 hover:border-yellow-400/50 transition-colors">
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">On Time Delivery</h3>
                <p className="text-gray-400 text-sm">We understand the value of time, and always deliver every project within the committed timeline.</p>
              </div>

              <div className="border border-yellow-400/20 rounded-xl p-6 hover:border-yellow-400/50 transition-colors">
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">Customer First</h3>
                <p className="text-gray-400 text-sm">We work closely with our clients to understand their requirements and deliver custom solutions tailored to their needs.</p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;