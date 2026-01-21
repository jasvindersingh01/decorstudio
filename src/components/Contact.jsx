import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  return (
    <section id="#contact" className="bg-[#0f0f0f] text-white py-28">
      <div className="px-6 md:px-16 lg:px-24">

        {/* Header */}
        <div className="max-w-2xl mb-16">
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
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-14">

          {/* LEFT : Contact Info */}
          <div className="space-y-8">

            {/* Phone */}
            <div className="flex items-start gap-5 bg-black/60 border border-white/10 rounded-2xl p-6
              hover:border-yellow-400/40 transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl
                bg-yellow-400/10 text-yellow-400">
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
            <div className="flex items-start gap-5 bg-black/60 border border-white/10 rounded-2xl p-6
              hover:border-yellow-400/40 transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl
                bg-yellow-400/10 text-yellow-400">
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
            <div className="flex items-start gap-5 bg-black/60 border border-white/10 rounded-2xl p-6
              hover:border-yellow-400/40 transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl
                bg-yellow-400/10 text-yellow-400">
                <MapPin />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Visit Us</h4>
                <p className="text-gray-400">
                  Plot no. 735, Vishwakarma Nagar, Transport Nagar, Rangbari, Kota, Rajasthan 324005
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="w-12 h-12 flex items-center justify-center rounded-xl
                  bg-black/60 border border-white/10 text-yellow-400
                  hover:bg-yellow-400 hover:text-black transition"
                >
                  <Instagram />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="w-12 h-12 flex items-center justify-center rounded-xl
                  bg-black/60 border border-white/10 text-yellow-400
                  hover:bg-yellow-400 hover:text-black transition"
                >
                  <Facebook />
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  className="w-12 h-12 flex items-center justify-center rounded-xl
                  bg-black/60 border border-white/10 text-yellow-400
                  hover:bg-yellow-400 hover:text-black transition"
                >
                  <MessageCircle />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT : Google Map */}
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden
            border border-white/10">
            <iframe
              title="Decor Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7397762.268882828!2d66.0917891!3d25.1293136!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f8527d1bce5cd%3A0xabd9d3cf42a5ebd4!2sDecor%20Studio!5e0!3m2!1sen!2sin!4v1768978625175!5m2!1sen!2sin"
              className="w-full h-full transition"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
