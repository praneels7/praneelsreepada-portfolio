import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroPage from "./pages/HeroPage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/Experience";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <section id="home">
        <HeroPage />
      </section>
      <section id="about">
        <AboutPage />
      </section>
      <section id="projects">
        <ProjectsPage />
      </section>
      <section id="experience">
        <ExperiencePage />
      </section>
      <section id="contact">
        <ContactPage />
      </section>
      <Footer />
    </div>
  );
}

export default App;
