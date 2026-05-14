import React from "react";
// icon
import { FaReact, FaWordpress, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiJavascript, SiExpress } from "react-icons/si";

import { SiTailwindcss } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiGreensock } from "react-icons/si";
import { FaBolt } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiApachespark } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";
const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "GSAP", icon: <SiGreensock /> },
  { name: "Framer Motion", icon: <FaBolt /> },
  { name: "Shadcn/UI", icon: <SiShadcnui /> },
  { name: "Sitecore", icon: <FaGlobe /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "WordPress", icon: <FaWordpress /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "REST API", icon: <SiApachespark /> },
];
const AboutSkills = () => {
  return (
    <div className="w-full max-w-75 sm:max-w-120 ">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Core Skills
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-200 mt-2">
          Technologies and tools I use to build modern web applications.
        </p>
      </div>

      <div className="flex gap-2 flex-wrap justify-center ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-2 custom-border transition rounded-xl py-3 px-3 sm:py-4 sm:px-4 text-white text-sm sm:text-base"
          >
            <span className="text-lg sm:text-xl md:text-2xl">{skill.icon}</span>
            <span className="whitespace-nowrap">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSkills;
