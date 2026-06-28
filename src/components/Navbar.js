import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {}
        <div className="text-2xl font-bold hover:text-blue-400 transition-colors duration-300 cursor-pointer">
          
        </div>

        {}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link className="hover:text-blue-400 transition-colors duration-300" to="/">Home</Link>
          <Link className="hover:text-blue-400 transition-colors duration-300" to="/about">About</Link>
          <Link className="hover:text-blue-400 transition-colors duration-300" to="/projects">Projects</Link>
          <Link className="hover:text-blue-400 transition-colors duration-300" to="/experience">Experience</Link>

          {}
          <a 
            href="/Praneel_Sreepada_Resume (1) copy.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Resume
          </a>

          <Link className="hover:text-blue-400 transition-colors duration-300" to="/contact">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-4 pb-4 space-y-2">
          <Link onClick={toggleMenu} className="block hover:text-blue-400 transition-colors duration-300" to="/">Home</Link>
          <Link onClick={toggleMenu} className="block hover:text-blue-400 transition-colors duration-300" to="/about">About</Link>
          <Link onClick={toggleMenu} className="block hover:text-blue-400 transition-colors duration-300" to="/projects">Projects</Link>
          <Link onClick={toggleMenu} className="block hover:text-blue-400 transition-colors duration-300" to="/experience" > Experience </Link>

          <a
            href="/Praneel_Sreepada_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-blue-400 transition-colors duration-300"
          >
            Resume
          </a>

          <Link onClick={toggleMenu} className="block hover:text-blue-400 transition-colors duration-300" to="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
