import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed right-5 bottom-6 z-50 flex flex-col gap-4">

      {/* WhatsApp */}
      <a
        href="https://wa.me/918696748334"
        target="_blank"
        aria-label="Chat on WhatsApp"
        className="group relative w-14 h-14 rounded-full
        bg-green-500 text-white flex items-center justify-center
        shadow-lg hover:scale-110 transition
        animate-pulse"
      >
        <MessageCircle size={26} />

        {/* Tooltip */}
        <span
          className="absolute right-16 top-1/2 -translate-y-1/2
          bg-black text-white text-xs px-3 py-1 rounded
          opacity-0 group-hover:opacity-100 transition"
        >
          WhatsApp
        </span>
      </a>

      {/* Call */}
      <a
        href="tel:+918696748334"
        aria-label="Call Now"
        className="group relative w-14 h-14 rounded-full
  bg-yellow-400 text-black flex items-center justify-center
  shadow-lg transition
  call-glow"
      >
        <Phone size={26} className="call-ring" />

        {/* Tooltip */}
        <span
          className="absolute right-16 top-1/2 -translate-y-1/2
    bg-black text-white text-xs px-3 py-1 rounded
    opacity-0 group-hover:opacity-100 transition"
        >
          Call Now
        </span>
      </a>

    </div>
  );
};

export default FloatingButtons;
