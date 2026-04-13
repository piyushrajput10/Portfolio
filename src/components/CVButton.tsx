  import MyCV from '../assets/Piyush_Rajput_FullStack_Resume.pdf';

 import React from "react";
import { Download } from "lucide-react";

const ResumeButton: React.FC = () => {
  return (
    <a
      href={MyCV}
      download="Piyush_Rajput_Resume.pdf"
      className="group relative inline-flex items-center gap-2 btn-primary w-full  justify-center shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition duration-300"></span>

      <Download className="w-5 h-5 transition-transform group-hover:translate-y-1" />

      <span>Download Resume</span>
    </a>
  );
};

export default ResumeButton;