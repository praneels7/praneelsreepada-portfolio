import React, { useState, useEffect, useRef } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const navRef = useRef(null);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  // Shrink + add border once the page scrolls past the top
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section is currently in view to highlight the right link
  useEffect(() => {
    const sections = links
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the largest visible ratio that's intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActiveHref(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveHref(href);
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 w-full z-50 text-white transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/80 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/10"
          : "bg-gray-900/40 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center transition-all duration-300 ${
          scrolled ? "h-14" : "h-16"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => scrollTo(e, "#home")}
          className="group relative text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent transition-transform duration-300 hover:scale-105"
        >
          PS
          <span className="absolute -inset-2 rounded-lg bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-colors duration-300 -z-10" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1 font-medium">
          {links.map(({ label, href }) => {
            const isActive = activeHref === href;
            return (
              <a
                key={label}
                href={href}
                onClick={(e) => scrollTo(e, href)}
                className={`relative px-3 py-2 text-sm transition-colors duration-300 ${
                  isActive ? "text-cyan-400" : "text-gray-200 hover:text-cyan-400"
                }`}
              >
                {label}
                <span
                  className={`absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-cyan-400 to-purple-400 origin-left transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}

          <a
            href="/Praneel_Sreepada_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-4 py-2 rounded-lg border border-cyan-400/70 text-cyan-400 text-sm font-semibold hover:bg-cyan-400 hover:text-gray-900 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden relative w-9 h-9 flex items-center justify-center text-gray-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              className="transition-all duration-300"
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray-900/95 backdrop-blur-md px-4 pb-4 pt-2 space-y-1 border-t border-white/10">
          {links.map(({ label, href }, i) => {
            const isActive = activeHref === href;
            return (
              <a
                key={label}
                href={href}
                onClick={(e) => scrollTo(e, href)}
                style={{ transitionDelay: isOpen ? `${i * 40}ms` : "0ms" }}
                className={`block rounded-md px-3 py-2.5 text-base transition-all duration-300 ${
                  isOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                } ${
                  isActive
                    ? "text-cyan-400 bg-cyan-400/10"
                    : "text-gray-200 hover:text-cyan-400 hover:bg-white/5"
                }`}
              >
                {label}
              </a>
            );
          })}
          <a
            href="/Praneel_Sreepada_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ transitionDelay: isOpen ? `${links.length * 40}ms` : "0ms" }}
            className={`block mt-2 text-center rounded-lg border border-cyan-400/70 text-cyan-400 font-semibold px-3 py-2.5 transition-all duration-300 ${
              isOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
            } hover:bg-cyan-400 hover:text-gray-900`}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;