import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { servicesList } from "../data/services";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 py-4 bg-black/40 backdrop-blur-md">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Decor Studio" className="w-14" />
          <span className="text-white font-semibold text-lg">
            Decor <span className="text-yellow-400">Studio</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center">
          {navLinks.map((item) => {
            if (item.name === "Services") {
              return (
                <li key={item.name} className="relative group">
                  {/* Services Trigger */}
                  <span
                    className="mx-4 text-white cursor-pointer relative flex items-center gap-1
  after:content-['']
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-0
  after:bg-yellow-400
  after:transition-all after:duration-300
  group-hover:after:w-full"
                  >
                    Services
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                  </span>

                  {/* Dropdown */}
                  <ul
                    className="absolute top-full left-0 mt-4 w-64
            bg-black/95 backdrop-blur-md
            border border-white/10 rounded-xl shadow-xl
            opacity-0 invisible group-hover:opacity-100 group-hover:visible
            transition-all duration-300"
                  >
                    {servicesList.map((service) => (
                      <li key={service.slug}>
                        <NavLink
                          to={`/services/${service.slug}`}
                          className={({ isActive }) =>
                            `block px-5 py-3 text-sm transition
                     ${isActive
                              ? "text-yellow-400 bg-yellow-400/10"
                              : "text-white hover:bg-white/5 hover:text-yellow-400"
                            }`
                          }
                        >
                          {service.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }

            // Normal menu items
            return (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `mx-4 text-white relative
            after:content-['']
            after:absolute after:left-0 after:-bottom-1
            after:h-[2px] after:bg-yellow-400
            after:transition-all after:duration-300
            ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <a
          href="tel:+918696748334"
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

        {navLinks.map((item) => {
  // SERVICES DROPDOWN
  if (item.name === "Services") {
    return (
      <div key={item.name} className="pb-2 border-b border-white/10">
        {/* Services trigger */}
        <button
          onClick={() => setServicesOpen(!servicesOpen)}
          className="w-full flex items-center justify-between text-lg text-white hover:text-yellow-400 transition"
        >
          <span>Services</span>
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${
              servicesOpen ? "rotate-180 text-yellow-400" : ""
            }`}
          />
        </button>

        {/* Services list */}
        {servicesOpen && (
          <div className="mt-3 pl-4 space-y-2">
            {servicesList.map((service) => (
              <NavLink
                key={service.slug}
                to={`/services/${service.slug}`}
                onClick={() => {
                  setServicesOpen(false);
                  setOpen(false);
                }}
                className={({ isActive }) =>
                  `block text-base transition
                   ${
                     isActive
                       ? "text-yellow-400"
                       : "text-gray-300 hover:text-yellow-400"
                   }`
                }
              >
                {service.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    );
  }

  // NORMAL LINKS
  return (
    <NavLink
      key={item.name}
      to={item.path}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `block text-lg pb-2 border-b border-white/10 transition
         ${isActive ? "text-yellow-400" : "text-white hover:text-yellow-400"}`
      }
    >
      {item.name}
    </NavLink>
  );
})}


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
