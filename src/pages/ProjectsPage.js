import React from "react";

function WorkExperience() {
  const experiences = [
    {
      title: "Software Developer, Director of Membership",
      company: "Kappa Theta Pi",
      date: "January 2025 - Present",
      logo: "💻",
      achievements: [
        "Led recruitment efforts and designed onboarding initiatives, growing and engaging the member base by over 70%.",
        "Developed software solutions for internal tools and collaborative technical projects using Swift and Xcode.",
        "Primarily contributed to VitalTrack AI and Annual-Report-AI, an AI-powered PDF chatbot using FastAPI and LangChain for HackAI 2025, enabling contextual question-answering from document uploads."
      ]
    },
    {
      title: "Retail Sales Associate",
      company: "Uniqlo",
      date: "October 2024 - March 2025",
      logo: "🛍️",
      achievements: [
        "Assisted customers throughout the store and ensured an efficient, fast, and positive shopping experience.",
        "Rotated across multiple roles including cashiering, shipment processing, online order pickups, and floor sales.",
        "Analyzed weekly sales performance to identify trends and set daily and weekly sales goals."
      ]
    }
  ];

  const projects = [
    {
      title: "VitalTrack AI",
      tech: "Xcode, Swift, Figma",
      date: "February 2025 - May 2025",
      logo: "📱",
      description: [
        "Designed and implemented Figma-based interfaces in Swift for an AI-powered health monitoring app.",
        "Built frontend to process wearable and medical data, enabling personalized insights and early anomaly detection.",
        "Enabled personalized insights, early anomaly detection, and medication reminders to support healthcare decisions."
      ]
    },
    {
      title: "Trash Trends Venture Project",
      tech: "YOLO, Python, Anaconda, VS Code",
      date: "August 2024 - January 2025",
      logo: "🤖",
      description: [
        "Gained hands-on experience in computer vision and implemented real-time object detection using YOLO.",
        "Utilized Python and drone technology for computer vision to track urban waste patterns.",
        "Integrated drone imagery with YOLO's object detection capabilities, improving tracking accuracy by 25%."
      ]
    },
    {
      title: "META Web Application",
      tech: "Microsoft Azure, HTML, CSS",
      date: "May 2024 - August 2024",
      logo: "🏥",
      description: [
        "Built a triage-assistance web app using Azure and AI to speed up emergency response decisions.",
        "Integrated Azure Computer Vision API under Microsoft Data Architect mentorship for image-based triage.",
        "Enhanced triage accuracy by 50% using an emotion-aware AI model developed from scratch."
      ]
    },
    {
      title: "FinSure Website",
      tech: "HTML, CSS, Node.js, MongoDB, Vercel",
      date: "November 2024",
      logo: "💰",
      description: [
        "Developed a financial services web app for under-banked users to build credit and manage accounts.",
        "Implemented front-end interfaces with HTML/CSS focusing on easy accessibility through transparent design.",
        "Integrated MongoDB Atlas database with Node.js backend so user data could be stored and retrieved."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        {/* Work Experience Section */}
        <div className="mb-24">
          <div className="mb-16">
            <p className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
            </p>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight">
              Professional  Experience
            </h1>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div
                    className={`flex-1 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 ml-16 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-cyan-400 font-semibold text-lg mb-4">{exp.company}</p>
                    
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300 flex items-start gap-3">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex flex-col items-center z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 flex items-center justify-center text-2xl shadow-lg shadow-cyan-500/50 hover:scale-110 transition-transform duration-300">
                      {exp.logo}
                    </div>
                  </div>

                  {/* Date Badge */}
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-left md:pl-8" : "md:text-right md:pr-8"
                    } hidden md:block`}
                  >
                    <div className={`inline-block bg-slate-800 border border-cyan-500/30 rounded-full px-6 py-3`}>
                      <p className="text-cyan-400 font-semibold">{exp.date}</p>
                    </div>
                  </div>

                  {/* Mobile Date */}
                  <div className="md:hidden ml-16">
                    <div className="inline-block bg-slate-800 border border-cyan-500/30 rounded-full px-4 py-2">
                      <p className="text-cyan-400 text-sm font-semibold">{exp.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <p className="text-yellow-400 text-sm font-semibold tracking-wider uppercase mb-4">
          </p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-16">
            Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105"
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400 via-red-500 to-pink-500 flex items-center justify-center text-3xl shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  {project.logo}
                </div>
              </div>

              {/* Title and Tech */}
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-cyan-400 text-sm font-semibold mb-2">{project.tech}</p>
              <p className="text-gray-400 text-sm mb-4">{project.date}</p>

              {/* Description */}
              <ul className="space-y-2">
                {project.description.map((item, i) => (
                  <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span className="leading-relaxed">{item}</span>
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

export default WorkExperience;