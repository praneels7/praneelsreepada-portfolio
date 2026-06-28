import React from "react";

function Experience() {

  const experience = [
    {
      title: "Software Engineering Intern",
      company: "Snowflake",
      date: "May 2026 – Present",
      logo: "❄️",
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
      logo: "⚙️",
      achievements: [
        "Built internal tools and AI-powered document systems using React, FastAPI, and LangChain.",
        "Developed retrieval-augmented generation (RAG) system for contextual PDF question answering.",
        "Led engineering teams and recruitment initiatives, increasing engagement by 70%."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-16">
          Experience
        </h1>

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <div key={index} className="bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-slate-700">

              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                {exp.title}
              </h3>

              <p className="text-cyan-400 font-semibold mb-4">
                {exp.company}
              </p>

              <ul className="space-y-3">
                {exp.achievements.map((a, i) => (
                  <li key={i} className="text-gray-300 flex gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Experience;