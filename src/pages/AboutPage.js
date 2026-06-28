import React from "react";

function About() {
  const roles = [
    {
      title: "Software Engineer",
      gradient: "from-cyan-400 via-blue-500 to-purple-600",
      icon: "🌐"
    },
    {
      title: "Software Developer",
      gradient: "from-pink-400 via-purple-400 to-cyan-400",
      icon: "💎"
    },
    {
      title: "Mobile App Developer",
      gradient: "from-cyan-400 via-teal-400 to-emerald-400",
      icon: "📱"
    },
    {
      title: "Web Developer",
      gradient: "from-purple-400 via-pink-400 to-cyan-400",
      icon: "✨"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Introduction Section */}
        <div className="mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
            INTRODUCTION
          </p>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight">
            Overview
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed">
            I'm a student at The University of Texas at Dallas studying Computer Science. 
            I'm skilled at Java, Python, C++, React, HTML, and JavaScript. I'm a quick learner 
            who enjoys bringing new ideas to the table and exploring new technologies.
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border-2 border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Gradient Icon */}
              <div className="mb-6 flex justify-center">
                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${role.gradient} flex items-center justify-center text-4xl shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}>
                  {role.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-center leading-tight">
                {role.title}
              </h3>

              {/* Subtle glow effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${role.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;