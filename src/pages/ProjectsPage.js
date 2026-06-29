import React from "react";
import ParticleField from "../components/ParticleField";

function ProjectsPage() {
  const projects = [
    {
      title: "RAG Bot",
      tech: ["React", "Node.js", "MongoDB", "Gemini API", "LangChain"],
      date: "Dec 2025 \u2013 Present",
      icon: "\uD83E\uDDE0",
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
      description: [
        "Built financial services web platform for underbanked users to manage accounts and credit access.",
        "Developed responsive frontend with accessible UI/UX design principles.",
        "Implemented backend data persistence using Node.js and MongoDB Atlas."
      ]
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden">
      <ParticleField />
      <div className="max-w-6xl mx-auto w-full relative z-10">

        <div className="animate-fade-in-up mb-16">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">
            Work
          </p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-pill">{t}</span>
                ))}
              </div>

              <ul className="space-y-2">
                {project.description.map((d, i) => (
                  <li key={i} className="text-gray-400 text-sm flex gap-2 leading-relaxed">
                    <span className="text-cyan-500/60 mt-1 flex-shrink-0">\u2022</span>
                    <span>{d}</span>
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

export default ProjectsPage;
