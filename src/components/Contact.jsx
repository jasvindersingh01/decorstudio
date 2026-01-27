import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0f0f0f] text-white py-24">
      <div className="px-6 md:px-16 lg:px-24 flex items-center justify-between">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-2xl ">
          <span className="inline-block mb-4 border border-yellow-400/40 text-yellow-400 px-4 py-1 rounded-full text-sm">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Get in <span className="text-yellow-400">Touch</span>
          </h2>
          <p className="text-gray-400">
            Have a project in mind? Let’s talk. Reach out to us through phone,
            email, or visit our studio.
          </p>
        </motion.div>
        <div>
          <button className="bg-yellow-400 text-black py-2 px-6 text-2xl font-semibold rounded-full hover:Scale-102 transition-all duration-300 hover:bg-yellow-500">
            <Link to="/contact">
            Contact Us
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
