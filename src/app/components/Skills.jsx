"use client";
import React from "react";
import SectionHeader from "./SectionHeader";

import {
  FaReact, FaNodeJs, FaDatabase, FaShopify, FaBootstrap,
  FaGitAlt, FaFigma, FaGithub, FaJsSquare, FaHtml5, FaCss3Alt, FaNpm,
} from "react-icons/fa";
import {
  SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiWebflow, SiNextdotjs,
} from "react-icons/si";

const skillsData = [
  { name: "HTML5",       icon: <FaHtml5    className="text-orange-500" /> },
  { name: "CSS3",        icon: <FaCss3Alt  className="text-blue-500"   /> },
  { name: "JavaScript",  icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "React.js",    icon: <FaReact    className="text-cyan-400"   /> },
  { name: "Next.js",     icon: <SiNextdotjs className="text-slate-800" /> },
  { name: "Tailwind CSS",icon: <SiTailwindcss className="text-cyan-500"/> },
  { name: "Bootstrap",   icon: <FaBootstrap className="text-purple-600"/> },
  { name: "Node.js",     icon: <FaNodeJs   className="text-green-600"  /> },
  { name: "Express.js",  icon: <SiExpress  className="text-slate-700"  /> },
  { name: "MongoDB",     icon: <SiMongodb  className="text-green-700"  /> },
  { name: "Firebase",    icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Shopify",     icon: <FaShopify  className="text-[#3B966A]"  /> },
  { name: "Webflow",     icon: <SiWebflow  className="text-indigo-500" /> },
  { name: "Git",         icon: <FaGitAlt   className="text-red-500"    /> },
  { name: "GitHub",      icon: <FaGithub   className="text-slate-800"  /> },
  { name: "Figma",       icon: <FaFigma    className="text-purple-500" /> },
  { name: "NPM",         icon: <FaNpm      className="text-red-600"    /> },
  { name: "Database",    icon: <FaDatabase className="text-orange-500" /> },
];

const SkillCard = ({ skill }) => (
  <div className="flex flex-col items-center justify-center min-w-[130px] p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#3B966A]/30 hover:-translate-y-1 transition-all duration-300 cursor-default select-none">
    <div className="text-4xl mb-3">{skill.icon}</div>
    <p className="text-sm font-semibold text-slate-700 text-center whitespace-nowrap">{skill.name}</p>
  </div>
);

const Skills = () => {
  return (
    <section className="bg-[#fdf6e3] py-20 overflow-hidden" id="skills">
      <div className="container mx-auto px-6">
        <SectionHeader headerText="My Skills" />

        {/* Row 1 — scrolls left */}
        <div className="relative mt-12 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#fdf6e3] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#fdf6e3] to-transparent z-10" />
          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
            {[...skillsData, ...skillsData].map((skill, i) => (
              <SkillCard key={`r1-${i}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right (reverse) */}
        <div className="relative mt-6 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#fdf6e3] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#fdf6e3] to-transparent z-10" />
          <div className="flex gap-6 animate-marquee-reverse hover:[animation-play-state:paused]">
            {[...skillsData.slice(9), ...skillsData, ...skillsData.slice(0, 9)].map((skill, i) => (
              <SkillCard key={`r2-${i}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
