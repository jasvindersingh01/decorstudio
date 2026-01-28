import { motion } from "framer-motion";
import { path } from "framer-motion/client";
import {
    Phone,
    Mail,
    MapPin,
    Instagram,
    Facebook,
    MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-black text-white">

            {/* Main Footer */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="px-6 md:px-16 lg:px-24 py-20 border-b border-white/10"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <img src="/logo.png" alt="Decor Studio Logo" className="h-14" />
                            <h3 className="text-xl font-bold">
                                Decor <span className="text-yellow-400">Studio</span>
                            </h3>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            Premium decor and printing solutions delivering creativity,
                            precision, and lasting impressions.
                        </p>

                        {/* Social */}
                        <div className="flex gap-6 mt-6 ">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social"
                            >
                                <Instagram size={24} />
                            </a>

                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social"
                            >
                                <Facebook size={24} />
                            </a>

                            <a
                                href="https://wa.me/918696748334"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social"
                            >
                                <MessageCircle size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-3 text-gray-400">
                            {[
                                { name: "Home", path: "/" },
                                { name: "About", path: "/about" },
                                { name: "Services", path: "/services" },
                                { name: "Gallery", path: "/gallery" },
                                { name: "Contact", path: "/contact" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className="hover:text-yellow-400 transition"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Our Services</h4>
                        <ul className="space-y-3 text-gray-400">
                            {[
                                { name: "Printing & Branding", path: "/services/printing-branding" },
                                { name: "Wallpaper & Wall Graphics", path: "/services/wallpaper-wall-graphics" },
                                { name: "CNC & Laser Cutting", path: "/services/cnc-laser-cutting" },
                                { name: "LED Letters & Signage", path: "/services/led-letters-signage" },
                                { name: "Event Props & Displays", path: "/services/event-props-displays"},
                                { name: "Custom Decor Solutions", path: "/services/custom-decor-solutions" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className="hover:text-yellow-400 transition"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">

                            <li className="flex gap-3 items-start">
                                <Phone size={18} className="text-yellow-400 mt-0.5" />
                                <a href="tel:+918696748334" className="hover:text-yellow-400">
                                    +91 86967 48334
                                </a>
                            </li>

                            <li className="flex gap-3 items-start">
                                <Mail size={18} className="text-yellow-400 mt-0.5" />
                                <a
                                    href="mailto:decorstudio@gmail.com"
                                    className="hover:text-yellow-400"
                                >
                                    decorstudio@gmail.com
                                </a>
                            </li>

                            <li className="flex gap-3 items-start">
                                <MapPin size={50} className="text-yellow-400 mt-1" />
                                <span className="leading-relaxed">
                                    Plot no. 735, Vishwakarma Nagar, Transport Nagar,
                                    Rangbari, Kota, Rajasthan 324005
                                </span>
                            </li>

                        </ul>
                    </div>

                </div>
            </motion.div>

            {/* Bottom Bar */}
            <div className="py-6 text-center text-gray-500 text-sm border-t border-white/10">
                © {new Date().getFullYear()}{" "}
                <span className="text-white">Decor Studio</span>. All rights reserved.
                <span className="mx-2">|</span>
                Designed & Developed by{" "}
                <a
                    href="https://rightads.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:underline"
                >
                    RightAds
                </a>
            </div>

        </footer>
    );
};

export default Footer;
