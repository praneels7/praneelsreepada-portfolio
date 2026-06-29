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
    <div className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden">
      <ParticleField />
      <div className="max-w-5xl mx-auto w-full relative z-10">

        <div className="animate-fade-in-up mb-16">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">
            About
          </p>

          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
            I build systems,<br />
            <span className="text-gray-500">not just apps.</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            I'm a Computer Science student at UT Dallas working on backend systems,
            AI-powered applications, and production-grade engineering tools.
            Currently a Software Engineering Intern at Snowflake, where I build
            automated testing systems for large-scale financial pipelines.
          </p>
        </div>

        {/* Role cards — minimal */}
        <div className="animate-fade-in-up delay-300 grid grid-cols-2 md:grid-cols-4 gap-4">
          {roles.map((role, i) => (
            <div
              key={i}
              className="glass-card p-6 text-center group cursor-default"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
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
