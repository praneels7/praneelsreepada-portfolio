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
    <div className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden px-6">

      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-[120px] bottom-[-100px] right-[-100px]" />
      </div>

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div className="space-y-6 text-center md:text-left">

          <p className="text-cyan-400 uppercase tracking-widest text-sm">
            Building backend systems & AI tools
          </p>

          <h1 className="text-5xl md:text-7xl font-black">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Praneel Sreepada
            </span>
          </h1>

          <div className="h-10">
            <p className="text-xl md:text-2xl text-gray-300">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-gray-400 max-w-xl">
            Computer Science student at UT Dallas focused on distributed systems,
            AI applications, and production engineering.
          </p>

          {/* LINKS */}
          <div className="flex gap-4 justify-center md:justify-start pt-4">

            <a
              href="https://github.com/praneels7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/praneelsreepada"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:praneel.sreepada@gmail.com"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 hover:scale-105 transition"
            >
              Email
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end items-start">
          <div className="relative -mt-6 md:-mt-10">
            {/* glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-2xl opacity-30 rounded-full" />

            <img
              src="/Professional_Headshot.PNG"
              alt="Profile"
              className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-3xl border border-white/10 shadow-2xl"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default HeroPage;