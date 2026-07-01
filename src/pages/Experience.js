import React from "react";
import ParticleField from "../components/ParticleField";

function Experience() {
  const experience = [
    {
      title: "Software Engineering Intern",
      company: "Snowflake",
      date: "May 2026 \u2013 Present",
      logoSrc: "snowflake.png",
      accent: "#29B5E8",
      current: true,
      achievements: [
        "Designed and built an automated regression testing framework for Snowflake's internal revenue recognition pipeline (ASC 606), enabling zero-code test creation via JSON fixture files.",
        "Architected fixture-based testing across 6 services (Workday, Salesforce, Billing Engine, RightRev, combined Pipeline, Affiliate Transfer) covering 5 contract lifecycle scenarios.",
        "Achieved 100% field-level detection rate across 24+ test cases, validated by injecting 40+ edge case mutations with every regression caught.",
        "Built a Streamlit diagnostic dashboard that parses JUnit XML results and maps stack trace line numbers to field names, reducing regression detection time from weeks to seconds."
      ]
    },
    {
      title: "Software Developer, Director of Membership, Project Lead",
      company: "Kappa Theta Pi",
      date: "Jan 2025 \u2013 Present",
      logoSrc: "ktp.png",
      accent: "#E8B339",
      current: true,
      achievements: [
        "Developed full-stack applications and internal tools using React, FastAPI, Node.js, Swift, and MongoDB Atlas.",
        "Built AI-powered document processing applications leveraging LangChain and vector-based semantic retrieval for contextual question-answering from uploaded PDFs.",
        "Led cross-functional student engineering teams through project planning, development, testing, and deployment.",
        "Directed recruitment and onboarding initiatives that increased chapter membership and engagement by over 70%."
      ]
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16 relative overflow-hidden">
      <ParticleField />
      <div className="max-w-5xl mx-auto w-full relative z-10">

        <div className="animate-fade-in-up mb-10">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">
            Career
          </p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight">
            Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[23px] md:left-[31px] top-6 bottom-6 w-px bg-gradient-to-b from-slate-600 via-slate-700 to-transparent" />

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="relative flex gap-5 md:gap-7">
                {/* Timeline node */}
                <div className="relative flex-shrink-0 z-10">
                  <div
                    className="w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center border overflow-hidden transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: "rgba(15, 23, 42, 0.9)",
                      borderColor: `${exp.accent}40`,
                    }}
                  >
                    <img
                      src={exp.logoSrc}
                      alt={`${exp.company} logo`}
                      className="w-2/3 h-2/3 object-contain"
                    />
                  </div>
                  {exp.current && (
                    <span
                      className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse"
                      style={{ backgroundColor: exp.accent }}
                    />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 glass-card p-6 md:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {exp.title}
                    </h3>
                    <span
                      className="text-xs font-mono px-2.5 py-1 rounded-full border"
                      style={{
                        color: exp.accent,
                        borderColor: `${exp.accent}30`,
                        backgroundColor: `${exp.accent}10`
                      }}
                    >
                      {exp.date}
                    </span>
                  </div>

                  <p className="font-medium text-sm mb-4" style={{ color: exp.accent }}>
                    {exp.company}
                  </p>

                  <ul className="space-y-2.5">
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="text-gray-400 text-sm flex gap-3 leading-relaxed">
                        <span
                          className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: exp.accent }}
                        />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Experience;
