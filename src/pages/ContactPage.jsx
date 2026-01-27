import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MapPin,
    Instagram,
    Facebook,
    MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import aboutImg from '../assets/about.jpeg'
import useSEO from "../hooks/useSEO";

const ContactPage = () => {

    useSEO({
  title: "Contact Decor Studio | Get Printing & Decor Services",
  description:
    "Contact Decor Studio for printing, wallpaper, CNC cutting, LED signage and decor solutions.",
});

    const fadeInLeft = {
        initial: { opacity: 0, x: -50 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
        viewport: { once: true }
    }

    const fadeInRight = {
        initial: { opacity: 0, x: 50 },
        whileInView: { opacity: 1, x: 0 },
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
                        <span className="text-yellow-400">Contact</span>
                    </nav>

                    <h1 className="text-4xl md:text-6xl font-bold text-white">
                        Contact <span className="text-yellow-400">Decor Studio</span>
                    </h1>

                    <p className="mt-4 max-w-xl text-gray-300 text-lg">
                       Let’s discuss your project and bring your ideas to life with premium decor
      and printing solutions.

                    </p>
                </motion.div>
            </section>

            <div className="bg-[#0a0a0a] text-white min-h-screen">
                {/* Page Header */}
                <section className="pt-12 pb-4 text-center">
                    <motion.div
                        {...fadeInLeft}>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            Get In <span className="text-yellow-400">Touch</span>
                        </h1>
                    </motion.div>
                </section>

                {/* Contact Content */}
                <section className="py-8 border-t border-gray-800">
                    <div className="w-full px-6 md:px-16 lg:px-24">
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-14">
                            {/* Left Column: Contact Info & Form */}
                            <motion.div {...fadeInLeft}>
                                {/* Contact Info Cards */}
                                <div className="space-y-6 mb-12">
                                    {/* Phone */}
                                    <div className="flex items-start gap-5 bg-black/60 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/40 transition">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                                            <Phone />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-1">Call Us</h4>
                                            <a
                                                href="tel:+918696748334"
                                                className="text-gray-400 hover:text-yellow-400 transition"
                                            >
                                                +91 86967 48334
                                            </a>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start gap-5 bg-black/60 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/40 transition">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                                            <Mail />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-1">Email</h4>
                                            <a
                                                href="mailto:decorstudio@gmail.com"
                                                className="text-gray-400 hover:text-yellow-400 transition"
                                            >
                                                decorstudio@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="flex items-start gap-5 bg-black/60 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/40 transition">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                                            <MapPin />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-1">Visit Us</h4>
                                            <p className="text-gray-400">
                                                Plot no. 735, Vishwakarma Nagar, Transport Nagar, Rangbari, Kota, Rajasthan 324005
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Media */}
                                <div className="mb-12">
                                    <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                                    <div className="flex gap-4">
                                        <a
                                            href="https://instagram.com"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="w-12 h-12 flex items-center justify-center rounded-xl
                    bg-black/60 border border-white/10 text-yellow-400
                    hover:bg-yellow-400 hover:text-black transition"
                                        >
                                            <Instagram />
                                        </a>
                                        <a
                                            href="https://facebook.com"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="w-12 h-12 flex items-center justify-center rounded-xl
                    bg-black/60 border border-white/10 text-yellow-400
                    hover:bg-yellow-400 hover:text-black transition"
                                        >
                                            <Facebook />
                                        </a>
                                        <a
                                            href="https://wa.me/918696748334"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="w-12 h-12 flex items-center justify-center rounded-xl
                    bg-black/60 border border-white/10 text-yellow-400
                    hover:bg-yellow-400 hover:text-black transition"
                                        >
                                            <MessageCircle />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right Column: Google Map */}
                            <motion.div {...fadeInRight}>
                                <div className="sticky top-24">
                                    <h3 className="text-2xl font-semibold mb-6">Find Us Here</h3>
                                    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10">
                                        <iframe
                                            title="Decor Studio Location"
                                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7397762.268882828!2d66.0917891!3d25.1293136!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f8527d1bce5cd%3A0xabd9d3cf42a5ebd4!2sDecor%20Studio!5e0!3m2!1sen!2sin!4v1768978625175!5m2!1sen!2sin"
                                            className="w-full h-full"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ContactPage;