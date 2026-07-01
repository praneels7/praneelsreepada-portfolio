import React from "react";
import ParticleField from "../components/ParticleField";

function About() {
  const roles = [
    { title: "Backend & Systems", icon: "\u2699\uFE0F" },
    { title: "AI / LLM", icon: "\uD83E\uDDE0" },
    { title: "Full-Stack", icon: "\uD83C\uDF10" },
    { title: "Product Builder", icon: "\uD83D\uDE80" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16 relative overflow-hidden">
      <ParticleField />
      <div className="max-w-5xl mx-auto w-full relative z-10">

        <div className="animate-fade-in-up mb-10">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">
            About
          </p>

          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            I build systems,<br />
            <span className="text-gray-500">not just apps.</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed mb-4">
            I'm a Computer Science student at UT Dallas working on backend systems,
            AI-powered applications, and production-grade engineering tools.
            Currently a Software Engineering Intern at Snowflake, where I build
            automated testing systems for large-scale financial pipelines.
          </p>

          <div className="flex items-center gap-3 text-sm text-gray-500">
            <svg className="w-4 h-4 text-cyan-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
            </svg>
            <span>B.S. Computer Science, UT Dallas &bull; Dean's List &bull; Expected May 2027</span>
          </div>
        </div>

        {/* Role cards */}
        <div className="animate-fade-in-up delay-300 grid grid-cols-2 md:grid-cols-4 gap-3">
          {roles.map((role, i) => (
            <div
              key={i}
              className="glass-card p-5 text-center group cursor-default"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {role.icon}
              </div>
              <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {role.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default About;
