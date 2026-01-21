import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Gallery", path: "#gallery" },
    { name: "Contact", path: "#contact" }
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 py-4 bg-black/40 backdrop-blur-md">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png"
            alt="Decor Studio" className="w-14" />
          <span className="text-white font-semibold text-lg">
            Decor <span className="text-yellow-400">Studio</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center text-gray-700 font-medium">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="hidden md:inline-block text-white mx-4   hidden md:inline-block mx-4 text-white relative
                                    after:content-['']
                                    after:absolute after:left-0 after:-bottom-1
                                    after:h-[2px] after:w-0
                                    after:bg-yellow-400
                                    after:transition-all after:duration-300
                                    hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+919876543210"
          className="hidden md:flex items-center gap-2 bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-500 transition"
        >
          <Phone size={16} />
          Call Now
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black text-white px-6 py-6 space-y-4">
          {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
            <div
              key={item}
              className="border-b border-white/10 pb-2 hover:text-yellow-400"
              onClick={() => setOpen(false)}
            >
              {item}
            </div>
          ))}

          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 bg-yellow-400 text-black px-5 py-3 rounded-lg font-semibold mt-4"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
