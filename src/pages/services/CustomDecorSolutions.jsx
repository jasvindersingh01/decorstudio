import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import decorImg from "../../assets/services/custom.jpg";
import useSEO from "../../hooks/useSEO";

const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true },
};

const CustomDecorSolutions = () => {

    useSEO({
        title: "Custom Decor Solutions | Decor Studio",
        description:
            "Tailor-made custom decor solutions designed to match your vision, space and branding needs with end-to-end execution.",
    });

    return (
        <div className="bg-[#0a0a0a] text-white">

            {/* ================= BANNER ================= */}
            <section className="relative h-[40vh] min-h-[400px] flex items-center overflow-hidden">
                <img
                    src={decorImg}
                    alt="Custom Decor Solutions"
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
                        <span className="text-yellow-400">Custom Decor Solutions</span>
                    </nav>

                    <h1 className="text-4xl md:text-6xl font-bold">
                        Custom Decor <span className="text-yellow-400">Solutions</span>
                    </h1>

                    <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-lg">
                        Tailor-made decor solutions crafted to match your vision, space,
                        and brand identity—executed with precision and creativity.
                    </p>
                </motion.div>
            </section>

            {/* ================= INTRO / PHILOSOPHY ================= */}
            <section className="py-24">
                <motion.div
                    {...fadeUp}
                    className="max-w-8xl mx-auto px-6 md:px-16 lg:px-24 text-center"
                >
                    <span className="inline-block mb-4 border border-yellow-400/40 text-yellow-400 px-4 py-1 rounded-full text-sm">
                        Bespoke Approach
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        No Templates. <span className="text-yellow-400">Only Custom.</span>
                    </h2>

                    <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg">
                        Every space is unique—and so is every requirement. Our custom decor
                        solutions are designed from scratch to align perfectly with your
                        concept, functionality, and aesthetic goals.
                    </p>
                </motion.div>
            </section>

            {/* ================= PROCESS / HOW WE WORK ================= */}
            <section className="pb-24">
                <motion.div
                    {...fadeUp}
                    className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {[
                            {
                                step: "01",
                                title: "Understanding Your Vision",
                                desc: "We begin by understanding your ideas, space, purpose, and branding needs in detail."
                            },
                            {
                                step: "02",
                                title: "Design & Material Planning",
                                desc: "Our team plans layouts, materials, finishes, and fabrication techniques tailored to your project."
                            },
                            {
                                step: "03",
                                title: "Custom Fabrication",
                                desc: "Using mixed materials and skilled craftsmanship, we bring designs to life with precision."
                            },
                            {
                                step: "04",
                                title: "End-to-End Execution",
                                desc: "From production to installation, we handle everything to ensure a seamless final result."
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="border border-yellow-400/20 rounded-2xl p-8 hover:border-yellow-400/50 transition"
                            >
                                <div className="text-yellow-400 text-2xl font-bold mb-3">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">
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

            {/* ================= CAPABILITIES ================= */}
            <section className="pb-24">
                <motion.div
                    {...fadeUp}
                    className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "Custom Designs",
                            "Mixed Materials",
                            "One-of-a-Kind Projects",
                            "End-to-End Execution",
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="text-center border border-yellow-400/20 rounded-xl p-8 hover:border-yellow-400/50 transition"
                            >
                                <h3 className="text-lg font-semibold text-yellow-400">
                                    {item}
                                </h3>
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
                            src={decorImg}
                            alt="Custom Decor Project"
                            className="w-full h-[460px] object-cover"
                        />
                    </div>
                </motion.div>
            </section>

            {/* ================= CTA ================= */}
            <section className="py-24 border-t border-gray-800 text-center">
                <motion.div {...fadeUp} className="px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Have a <span className="text-yellow-400">Unique Idea?</span>
                    </h2>

                    <p className="text-gray-400 max-w-xl mx-auto mb-8">
                        Share your concept with us and let’s create a custom decor solution
                        that truly reflects your vision.
                    </p>

                    <Link
                        to="/contact"
                        className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition"
                    >
                        Start Your Project
                    </Link>
                </motion.div>
            </section>

        </div>
    );
};

export default CustomDecorSolutions;
