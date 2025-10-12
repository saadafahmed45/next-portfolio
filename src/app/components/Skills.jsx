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
  FaPhotoshop,
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
  SiPrisma,
  SiPostgresql,
  SiMysql,
  SiGraphql,
  SiFirebase,
  SiFramer,
  SiWebflow,
} from "react-icons/si";
import SectionHeader from "./SectionHeader";

const skillsData = [
  // Frontend
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  // { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
  // { name: "Redux", icon: <FaReact className="text-blue-500" /> },

  // Backend
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  { name: "Shopify", icon: <FaShopify className="text-green-600" /> },

  // Database
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  // { name: "Prisma", icon: <SiPrisma className="text-blue-500" /> },
  // { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  // { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
  { name: "Database", icon: <FaDatabase className="text-orange-500" /> },

  // Tools & Design
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
  { name: "NPM", icon: <FaNpm className="text-red-600" /> },
  { name: "Figma", icon: <FaFigma className="text-purple-600" /> },
  { name: "Webflow", icon: <SiWebflow className="text-purple-500" /> }, // Added Webflow
];

const Skills = () => {
  return (
    <section className="bg-[#fdf6e3] py-20">
      <div className="container mx-auto px-6">
        <SectionHeader data-aos="fade-up" headerText="My Skills" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-8 mt-12">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="text-5xl mb-4">{skill.icon}</div>
              <p className="text-lg font-medium text-gray-800 text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
