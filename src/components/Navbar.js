import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm text-white shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <a
          href="#home"
          onClick={(e) => scrollTo(e, "#home")}
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          PS
        </a>

        <div className="hidden md:flex items-center space-x-6 font-medium">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => scrollTo(e, href)}
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              {label}
            </a>
          ))}
          <a
            href="/Praneel_Sreepada_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm px-4 pb-4 space-y-3">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => scrollTo(e, href)}
              className="block hover:text-cyan-400 transition-colors duration-300"
            >
              {label}
            </a>
          ))}
          <a
            href="/Praneel_Sreepada_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-cyan-400 transition-colors duration-300"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
