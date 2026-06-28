import React from "react";

function ResumeButton() {
  return (
    <div className="text-center mt-8">
      <a
        href="/Praneel_Resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 hover:scale-105 transform transition duration-300"
      >
        View Resume
      </a>
    </div>
  );
}

export default ResumeButton;
