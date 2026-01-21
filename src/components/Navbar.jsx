import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 py-4 bg-black/40 backdrop-blur-md">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img src="/logo.png" alt="Decor Studio" className="w-14" />
          <span className="text-white font-semibold text-lg">
            Decor <span className="text-yellow-400">Studio</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="mx-4 text-white relative
                  after:content-['']
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0
                  after:bg-yellow-400
                  after:transition-all after:duration-300
                  hover:after:w-full"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Call Button */}
        <a
          href="tel:+919876543210"
          className="hidden md:flex items-center gap-2 bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-500 transition"
        >
          <Phone size={16} />
          Call Now
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur px-6 py-6 space-y-6">

          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-white text-lg border-b border-white/10 pb-2 hover:text-yellow-400 transition"
            >
              {item.name}
            </a>
          ))}

          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold mt-4"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
