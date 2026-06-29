import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Experience", to: "/experience" },
    { label: "Contact", to: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="/PS_Logo.png"
            alt="Logo"
            className="h-8 w-8 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <span className="text-sm font-bold text-white hidden sm:block">
            Praneel Sreepada's Portfolio
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                location.pathname === to
                  ? "text-cyan-400 bg-cyan-400/5"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="/Praneel_Sreepada_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 btn-outline text-xs py-2 px-4"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden w-9 h-9 flex items-center justify-center text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition"
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="bg-black/95 backdrop-blur-xl px-6 pb-4 pt-2 space-y-1 border-t border-white/5">
          {links.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                location.pathname === to
                  ? "text-cyan-400 bg-cyan-400/5"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="/Praneel_Sreepada_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 text-center btn-outline w-full justify-center py-3"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
