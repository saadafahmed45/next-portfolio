"use client";

import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaShopify,
  FaBootstrap,
  FaGitAlt,
  FaFigma,
  FaGithub,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNpm,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiWebflow,
} from "react-icons/si";
import SectionHeader from "./SectionHeader";

const skillsData = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
  { name: "React.js", icon: <FaReact className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Shopify", icon: <FaShopify className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
  { name: "NPM", icon: <FaNpm className="text-red-600" /> },
  { name: "Figma", icon: <FaFigma className="text-purple-600" /> },
  { name: "Webflow", icon: <SiWebflow className="text-indigo-500" /> },
  { name: "Database", icon: <FaDatabase className="text-orange-500" /> },
];

const Skills = () => {
  return (
    <section className="bg-[#fdf6e3] py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader headerText="My Skills" />

        {/* Marquee wrapper */}
        <div className="relative mt-12 overflow-hidden">
          <div className="flex gap-8 animate-marquee">
            {/* Repeat skills to create infinite scroll effect */}
            {[...skillsData, ...skillsData].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center min-w-[160px] p-6 bg-white rounded-xl shadow-sm hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <div className="text-5xl mb-4">{skill.icon}</div>
                <p className="text-lg font-medium text-gray-800 text-center">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
