import React from "react";
import SectionHeader from "./SectionHeader";

const Skills = () => {
  const allSkills = [
    ...[
      {
        id: 1,
        name: "HTML",
        icon: "html.png",
      },
      {
        id: 2,
        name: "CSS",
        icon: "css.png",
      },
      {
        id: 3,
        name: "Javascript",
        icon: "js.png",
      },
      {
        id: 4,
        name: "TailWind",
        icon: "icons8-tailwind-css-48.png",
      },
      {
        id: 5,
        name: "Bootstrap",
        icon: "bootstrap.png",
      },
      {
        id: 6,
        name: "Framer ",
        icon: "https://img.icons8.com/plumpy/24/framer-logo.png",
      },
      {
        id: 7,
        name: "Redux",
        icon: "https://img.icons8.com/color/48/redux.png",
      },
    ],
    ...[
      {
        id: 8,
        name: "Firebase",
        icon: "https://img.icons8.com/color/48/firebase.png",
      },
      {
        id: 9,
        name: "Node.JS",
        icon: "https://img.icons8.com/fluency/50/node-js.png",
      },
      {
        id: 10,
        name: "Express.JS",
        icon: "https://img.icons8.com/ios/50/express-js.png",
      },
      {
        id: 11,
        name: "MongoDB",
        icon: "https://img.icons8.com/color/48/mongodb.png",
      },
      {
        id: 12,
        name: "Prisma",
        icon: "https://img.icons8.com/fluency/50/prisma-orm.png",
      },
      {
        id: 13,
        name: "Postgresql",
        icon: "https://img.icons8.com/ios/50/postgreesql.png",
      },
    ],
    ...[
      {
        id: 14,
        name: "MySQL",
        icon: "https://img.icons8.com/fluency/50/mysql-logo.png",
      },
      {
        id: 15,
        name: "Graphql",
        icon: "https://img.icons8.com/ios-filled/50/graphql.png",
      },
    ],
    ...[
      {
        id: 16,
        name: "Git",
        icon: "https://img.icons8.com/color/48/git.png",
      },
      {
        id: 17,
        name: "Figma",
        icon: "https://img.icons8.com/color/48/figma.png",
      },
      {
        id: 18,
        name: "Photoshop",
        icon: "https://img.icons8.com/color/48/adobe-photoshop--v1.png",
      },
      {
        id: 19,
        name: "NPM",
        icon: "https://img.icons8.com/color/48/npm.png",
      },
      {
        id: 20,
        name: "Github",
        icon: "https://img.icons8.com/ios-filled/50/github.png",
      },
    ],
  ];

  return (
    <div className="px-4 py-2 lg:py-8 mt-8 lg:px-16">
      <SectionHeader headerText="Skills" />
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 items-start text-start text-2xl">
        {allSkills.map((item) => (
          <div
            key={item.id}
            className="bg-[rgba(255,255,255,0.29)] rounded-[16px] shadow-[0_1px_15px_rgba(0,0,0,0.1)] backdrop-blur-[3.6px] border border-[rgba(255,255,255,0.07)]"
          >
            <div className="flex gap-4 items-center p-2">
              <img className="w-[30px]" src={item.icon} alt={item.name} />
              <span className="text-[18px] lg:text-xl font-extralight">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
