import React, { useState } from "react";

function Experience() {
  const [hovered, setHovered] = useState(null);

  const experience = [
    {
      title: "Software Engineering Intern",
      company: "Snowflake",
      date: "May 2026 – Present",
      logoSrc: "snowflake.png",
      accent: "#29B5E8",
      glow: "rgba(41,181,232,0.25)",
      achievements: [
        "Built automated regression testing infrastructure for enterprise financial pipelines (ASC 606).",
        "Designed fixture-based testing framework across multiple production services (Salesforce, Workday, Billing).",
        "Developed JUnit-based diagnostics system mapping failures to field-level business logic, reducing debugging time from days to seconds."
      ]
    },
    {
      title: "Software Developer & Director of Membership",
      company: "Kappa Theta Pi",
      date: "Jan 2025 – Present",
      logoSrc: "ktp.png",
      accent: "#E8B339",
      glow: "rgba(232,179,57,0.22)",
      achievements: [
        "Built internal tools and AI-powered document systems using React, FastAPI, and LangChain.",
        "Developed retrieval-augmented generation (RAG) system for contextual PDF question answering.",
        "Led engineering teams and recruitment initiatives, increasing engagement by 70%."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white p-8 pt-24 md:p-16 md:pt-24">
      <div className="max-w-5xl mx-auto">

        <div className="mb-16">
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
            Career timeline
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mt-2">
            Experience
          </h1>
        </div>

        <div className="relative">
          {/* Timeline rail */}
          <div
            className="absolute left-[27px] md:left-[35px] top-3 bottom-3 w-px bg-gradient-to-b from-slate-600 via-slate-700 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {experience.map((exp, index) => {
              const isHovered = hovered === index;
              return (
                <div key={index} className="relative flex gap-6 md:gap-8">

                  {/* Node + logo */}
                  <div className="relative flex-shrink-0 z-10">
                    <div
                      className="w-14 h-14 md:w-[70px] md:h-[70px] rounded-2xl flex items-center justify-center border transition-all duration-300 overflow-hidden"
                      style={{
                        backgroundColor: "rgba(15,23,42,0.9)",
                        borderColor: isHovered ? exp.accent : "rgba(100,116,139,0.4)",
                        boxShadow: isHovered ? `0 0 0 4px ${exp.glow}` : "none"
                      }}
                    >
                      {exp.logoSrc ? (
                        <img
                          src={exp.logoSrc}
                          alt={`${exp.company} logo`}
                          className="w-2/3 h-2/3 object-contain"
                        />
                      ) : (
                        <span
                          className="text-lg md:text-xl font-bold"
                          style={{ color: exp.accent }}
                        >
                          {exp.company.charAt(0)}
                        </span>
                      )}
                    </div>
                    {/* Pulse dot marking "current" role */}
                    {exp.date.includes("Present") && (
                      <span
                        className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse"
                        style={{ backgroundColor: exp.accent }}
                        aria-label="Current role"
                      />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                    className="flex-1 rounded-2xl p-6 md:p-8 border bg-slate-800/40 backdrop-blur-sm transition-all duration-300"
                    style={{
                      borderColor: isHovered ? exp.accent + "80" : "rgba(51,65,85,0.6)",
                      boxShadow: isHovered ? `0 8px 30px -8px ${exp.glow}` : "none",
                      transform: isHovered ? "translateY(-2px)" : "translateY(0)"
                    }}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h3 className="text-2xl md:text-3xl font-bold">
                        {exp.title}
                      </h3>
                      <span
                        className="text-xs font-mono px-2 py-1 rounded-full border"
                        style={{
                          color: exp.accent,
                          borderColor: exp.accent + "40",
                          backgroundColor: exp.accent + "10"
                        }}
                      >
                        {exp.date}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-5">
                      <span
                        className="font-semibold"
                        style={{ color: exp.accent }}
                      >
                        {exp.company}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {exp.achievements.map((a, i) => (
                        <li key={i} className="text-gray-300 flex gap-3 leading-relaxed">
                          <span
                            className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: exp.accent }}
                          />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Experience;