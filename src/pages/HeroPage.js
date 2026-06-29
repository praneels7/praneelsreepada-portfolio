import React, { useState, useEffect } from "react";
import ParticleField from "../components/ParticleField";

function HeroPage() {
  const fullText = "Software Developer Intern @ Snowflake";
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 40 : 70;
    const timer = setTimeout(() => {
      if (!deleting) {
        if (index < fullText.length) {
          setTypedText(fullText.slice(0, index + 1));
          setIndex(index + 1);
        } else {
          setTimeout(() => setDeleting(true), 2000);
        }
      } else {
        if (index > 0) {
          setTypedText(fullText.slice(0, index - 1));
          setIndex(index - 1);
        } else {
          setDeleting(false);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [index, deleting]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-24">
      <ParticleField />

      <div className="glow-bg w-[600px] h-[600px] bg-cyan-500/8 top-[-200px] left-[-200px]" />
      <div className="glow-bg w-[500px] h-[500px] bg-purple-500/8 bottom-[-150px] right-[-150px]" />

      <div className="relative z-10 max-w-6xl w-full">
        <div className="bento-grid">

          <div className="bento-item span-2 flex flex-col justify-center animate-fade-in-up">
            <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">
              Building backend systems & AI tools
            </p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-4">
              <span className="gradient-text-animated">
                Praneel Sreepada
              </span>
            </h1>
            <div className="h-8 mt-2">
              <p className="text-lg md:text-xl text-gray-400 font-mono">
                {typedText}
                <span className="animate-blink text-cyan-400">|</span>
              </p>
            </div>
          </div>

          <div className="bento-item flex items-center justify-center p-6 animate-fade-in-up delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 blur-2xl rounded-full scale-110" />
              <img
                src="/Professional_Headshot.PNG"
                alt="Praneel Sreepada"
                className="relative w-48 h-48 md:w-56 md:h-56 object-cover rounded-2xl border border-white/10 shadow-2xl"
              />
            </div>
          </div>

          <div className="bento-item animate-fade-in-up delay-300">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-mono">Currently</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <img src="/snowflake.png" alt="Snowflake" className="w-7 h-7 object-contain" />
                <div>
                  <p className="text-white font-semibold text-sm">Snowflake</p>
                  <p className="text-gray-400 text-xs">SWE Intern • ET Applications</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src="/ktp.png" alt="Kappa Theta Pi" className="w-7 h-7 object-contain" />
                <div>
                  <p className="text-white font-semibold text-sm">Kappa Theta Pi</p>
                  <p className="text-gray-400 text-xs">Dev • Director • Project Lead</p>
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-xs font-mono">Active</span>
            </div>
          </div>

          <div className="bento-item flex flex-col justify-start gap-3 animate-fade-in-up delay-400">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-mono">Connect</p>
            <a href="https://github.com/praneels7" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="https://linkedin.com/in/praneelsreepada" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              LinkedIn
            </a>
            <a href="mailto:praneel.sreepada@gmail.com" className="btn-outline text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Email
            </a>
          </div>

          <div className="bento-item animate-fade-in-up delay-500">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-mono">Technical Skills</p>
            <div className="space-y-2.5">
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Languages</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="tech-pill">Python</span>
                  <span className="tech-pill">Java</span>
                  <span className="tech-pill">SQL</span>
                  <span className="tech-pill">JavaScript</span>
                  <span className="tech-pill">C</span>
                  <span className="tech-pill">Swift</span>
                </div>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">AI / ML</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="tech-pill">LangChain</span>
                  <span className="tech-pill">Gemini API</span>
                  <span className="tech-pill">YOLO</span>
                  <span className="tech-pill">FastAPI</span>
                </div>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Frameworks</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="tech-pill">React</span>
                  <span className="tech-pill">Node.js</span>
                  <span className="tech-pill">Spring Boot</span>
                  <span className="tech-pill">JUnit 5</span>
                  <span className="tech-pill">MongoDB</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HeroPage;
