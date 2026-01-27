import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MapPin,
    Instagram,
    Facebook,
    MessageCircle,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-black text-white">

            {/* Main Footer */}
            <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="px-6 md:px-16 lg:px-24 py-20 border-b border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <img src="/logo.png" alt="Decor Studio" className="h-16" />
                            <h3 className="text-xl font-display font-bold">
                                Decor <span className="text-yellow-400">Studio</span>
                            </h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Premium decor and printing solutions delivering creativity,
                            precision, and lasting impressions.
                        </p>

                        {/* Social */}
                        <div className="flex gap-4 mt-6">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                className="w-10 h-10 flex items-center justify-center rounded-full
                bg-black border border-white/10 text-yellow-400
                hover:bg-yellow-400 hover:text-black transition"
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                className="w-10 h-10 flex items-center justify-center rounded-full
                bg-black border border-white/10 text-yellow-400
                hover:bg-yellow-400 hover:text-black transition"
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href="https://wa.me/918696748334"
                                target="_blank"
                                className="w-10 h-10 flex items-center justify-center rounded-full
                bg-black border border-white/10 text-yellow-400
                hover:bg-yellow-400 hover:text-black transition"
                            >
                                <MessageCircle size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-3 text-gray-400">
                            {["Home", "About", "Services", "Gallery", "Contact"].map(
                                (item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            className="hover:text-yellow-400 transition"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Our Services</h4>
                        <ul className="space-y-3 text-gray-400">
                            {[
                                "Flex & Vinyl Printing",
                                "Wallpaper",
                                "CNC Cutting",
                                "Laser Cutting",
                                "LED Letters",
                            ].map((item) => (
                                <li key={item}>
                                    <span className="hover:text-yellow-400 transition cursor-default">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex gap-3">
                                <Phone size={18} className="text-yellow-400" />
                                <a href="tel:+918696748334" className="hover:text-yellow-400">
                                    +91 86967 48334
                                </a>
                            </li>
                            <li className="flex gap-3">
                                <Mail size={18} className="text-yellow-400" />
                                <a
                                    href="mailto:decorstudio@gmail.com"
                                    className="hover:text-yellow-400"
                                >
                                    decorstudio@gmail.com
                                </a>
                            </li>
                            <li className="flex gap-3">
                                <MapPin size={50} className="text-yellow-400" />
                                <span>
                                    Plot no. 735, Vishwakarma Nagar, Transport Nagar, Rangbari, Kota, Rajasthan, India 324005
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>
            </motion.div>

            <div className="py-6 text-center text-gray-500 text-sm border-t border-white/10">
                © {new Date().getFullYear()}{" "}
                <span className="text-white">Decor Studio</span>. All rights reserved.{" "}
                <span className="mx-2">|</span>
                Designed & Developed by{" "}
                <a
                    href="https://rightads.in"
                    target="_blank"
                    className="text-yellow-400 hover:underline"
                >
                    RightAds
                </a>
            </div>

        </footer>
    );
};

export default Footer;
