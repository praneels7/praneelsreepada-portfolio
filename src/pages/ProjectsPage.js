import React from "react";

function ProjectsPage() {

  const projects = [
    {
      title: "RAG Bot",
      tech: "React, Node.js, MongoDB, Gemini API, LangChain",
      date: "January 2026 – February 2026",
      logo: "🧠",
      description: [
        "Built retrieval-augmented generation pipeline for document-grounded question answering.",
        "Implemented semantic chunking and embedding-based search over uploaded PDFs.",
        "Designed full-stack system enabling real-time querying of contextual knowledge bases."
      ]
    },
    {
      title: "VitalTrack AI",
      tech: "Xcode, Swift, Figma",
      date: "Feb 2025 – May 2025",
      logo: "📱",
      description: [
        "Designed iOS frontend for AI-powered health monitoring system integrating wearable and medical data.",
        "Built interface supporting real-time health insights, anomaly detection, and medication tracking.",
        "Translated Figma designs into production-ready Swift UI components."
      ]
    },
    {
      title: "Trash Trends Venture Project",
      tech: "YOLO, Python, Anaconda, VS Code",
      date: "Aug 2024 – Jan 2025",
      logo: "🤖",
      description: [
        "Trained YOLO-based object detection model on drone imagery for environmental waste classification.",
        "Processed and labeled custom datasets to improve detection performance.",
        "Improved tracking accuracy by 25% through model tuning and data refinement."
      ]
    },
    {
      title: "META Web Application",
      tech: "Microsoft Azure, HTML, CSS",
      date: "May 2024 – Aug 2024",
      logo: "🏥",
      description: [
        "Built AI-assisted triage web application using Azure Computer Vision API.",
        "Integrated image-based classification pipeline for emergency response support.",
        "Improved triage decision speed through automated visual analysis system."
      ]
    },
    {
      title: "FinSure Website",
      tech: "HTML, CSS, Node.js, MongoDB, Vercel",
      date: "Nov 2024",
      logo: "💰",
      description: [
        "Built financial services web platform for underbanked users to manage accounts and credit access.",
        "Developed responsive frontend with accessible UI/UX design principles.",
        "Implemented backend data persistence using Node.js and MongoDB Atlas."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white p-8 pt-24 md:p-16 md:pt-24">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-6xl md:text-8xl font-black mb-16">
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">

              <div className="text-3xl mb-4">{project.logo}</div>

              <h3 className="text-2xl font-bold">{project.title}</h3>

              <p className="text-cyan-400 text-sm mb-1">
                {project.tech}
              </p>

              <p className="text-gray-400 text-sm mb-4">
                {project.date}
              </p>

              <ul className="space-y-2">
                {project.description.map((d, i) => (
                  <li key={i} className="text-gray-300 flex gap-2 text-sm">
                    <span className="text-cyan-400">•</span>
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