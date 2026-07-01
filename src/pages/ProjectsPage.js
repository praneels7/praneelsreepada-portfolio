import React from "react";
import ParticleField from "../components/ParticleField";

function ProjectsPage() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      tech: ["React", "Tailwind CSS", "EmailJS"],
      date: "June 2026 - Present",
      icon: "\uD83C\uDF10",
      github: "https://github.com/praneels7/praneelsreepada-portfolio",
      description: [
        "Designed and built this personal portfolio from scratch using React and Tailwind CSS.",
        "Features interactive particle field, bento-grid layout, and responsive design.",
        "Implemented animated navigation pill, gradient hover effects, and scroll-reveal transitions."
      ]
    },
    {
      title: "RAG Bot",
      tech: ["React", "Node.js", "MongoDB", "Gemini API", "LangChain"],
      date: "Dec 2025 \u2013 Present",
      icon: "\uD83E\uDDE0",
      github: null,
      description: [
        "Built retrieval-augmented generation pipeline for document-grounded question answering.",
        "Used MongoDB Atlas to store processed document data and retrieve relevant sections for LLM responses.",
        "Built a full-stack app using React and Node.js to support document upload, indexing, and real-time querying."
      ]
    },
    {
      title: "VitalTrack AI",
      tech: ["Xcode", "Swift", "Figma"],
      date: "Feb \u2013 May 2025",
      icon: "\uD83D\uDCF1",
      github: "https://github.com/aashayvishwakarma/VitalTrack",
      description: [
        "Designed iOS frontend for AI-powered health monitoring system integrating wearable and medical data.",
        "Built interface supporting real-time health insights, anomaly detection, and medication tracking.",
        "Translated Figma designs into production-ready Swift UI components."
      ]
    },
    {
      title: "Trash Trends",
      tech: ["YOLO", "Python", "Computer Vision"],
      date: "Aug 2025 \u2013 Jan 2026",
      icon: "\uD83E\uDD16",
      github: "https://github.com/Chtun/Trash-Trends",
      description: [
        "Utilized Python and drone technology for computer vision to track urban waste patterns.",
        "Trained and fine-tuned a YOLO model on custom-labeled drone imagery, improving detection accuracy by 50% and tracking accuracy by 25%."
      ]
    },
    {
      title: "META Web App",
      tech: ["Azure", "Computer Vision API", "HTML/CSS"],
      date: "May \u2013 Aug 2024",
      icon: "\uD83C\uDFE5",
      github: null,
      description: [
        "Built AI-assisted triage web application using Azure Computer Vision API.",
        "Integrated image-based classification pipeline for emergency response support.",
        "Improved triage decision speed through automated visual analysis system."
      ]
    },
    {
      title: "FinSure",
      tech: ["Node.js", "MongoDB", "Vercel"],
      date: "Nov 2024",
      icon: "\uD83D\uDCB0",
      github: "https://github.com/praneels7/hackathon2k24",
      description: [
        "Built financial services web platform for underbanked users to manage accounts and credit access.",
        "Developed responsive frontend with accessible UI/UX design principles.",
        "Implemented backend data persistence using Node.js and MongoDB Atlas."
      ]
    }
  ];

  return (
    <div className="min-h-screen px-6 pt-32 pb-16 relative overflow-hidden">
      <ParticleField />
      <div className="max-w-6xl mx-auto w-full relative z-10">

        <div className="animate-fade-in-up mb-10">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">
            Work
          </p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="glass-card p-6 md:p-8 group">
              <div className="flex items-start justify-between mb-4">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </span>
                <span className="text-xs text-gray-500 font-mono">
                  {project.date}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors relative inline-block">
                {project.title}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </h3>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-pill">{t}</span>
                ))}
              </div>

              <ul className="space-y-2 mb-4">
                {project.description.map((d, i) => (
                  <li key={i} className="text-gray-400 text-sm flex gap-2 leading-relaxed">
                    <span className="text-cyan-500/60 mt-1 flex-shrink-0">{"\u2022"}</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-cyan-400/10 hover:border-cyan-400/30 hover:text-cyan-400 transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default ProjectsPage;
