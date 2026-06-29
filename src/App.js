import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroPage from "./pages/HeroPage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/Experience";
import ContactPage from "./pages/ContactPage";

const sections = [
  { id: "home", label: "Home", icon: "🏠" },
  { id: "about", label: "About", icon: "👤" },
  { id: "projects", label: "Projects", icon: "💻" },
  { id: "experience", label: "Experience", icon: "⚙️" },
  { id: "contact", label: "Contact", icon: "✉️" },
];

function NavRail({ activeSection }) {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-6">

      {sections.map((section) => (
        <div key={section.id} className="relative group">

          {/* ICON BUTTON */}
          <button
            onClick={() => scrollToSection(section.id)}
            className={`w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 text-lg
              ${
                activeSection === section.id
                  ? "bg-cyan-400 text-black scale-110 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }
            `}
          >
            {section.icon}
          </button>

          {/* LABEL ON HOVER */}
          <div className="absolute left-12 top-1/2 -translate-y-1/2 px-2 py-1 bg-black/80 text-xs rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap border border-white/10">
            {section.label}
          </div>

        </div>
      ))}

    </div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;

        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <NavRail activeSection={activeSection} />

      <section id="home"><HeroPage /></section>
      <section id="about"><AboutPage /></section>
      <section id="projects"><ProjectsPage /></section>
      <section id="experience"><ExperiencePage /></section>
      <section id="contact"><ContactPage /></section>

      <Footer />
    </div>
  );
}

export default App;