import React, { useState, useEffect } from "react";

function HeroPage() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Software Engineering Intern @ Snowflake";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 70);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden px-4">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden opacity-70">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">

        <div className="space-y-3">
          <p className="text-cyan-400 text-sm md:text-base font-semibold tracking-wider uppercase">
            Building backend systems & AI-powered tools
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Praneel Sreepada
            </span>
          </h1>
        </div>

        <div className="h-16 flex items-center justify-center">
          <p className="text-xl md:text-3xl font-light text-gray-300">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Computer Science student at UT Dallas focused on distributed systems,
          AI applications, and production engineering. Currently building testing
          infrastructure for financial data pipelines at Snowflake.
        </p>

        {/* FIXED BUTTON SECTION */}
        <div className="flex gap-6 justify-center pt-6">

          <a
            href="https://github.com/praneels7"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/praneelsreepada"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-black transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:praneel.sreepada@gmail.com"
            className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-black transition"
          >
            Email
          </a>

        </div>

      </div>
    </div>
  );
}

export default HeroPage;