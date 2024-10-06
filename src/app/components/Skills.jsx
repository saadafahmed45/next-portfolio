import React from "react";
import SectionHeader from "./SectionHeader";

const Skills = () => {
  const frontEndIcon = [
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
      name: "TailWind CSS",
      icon: "icons8-tailwind-css-48.png",
    },
    {
      id: 5,
      name: "Bootstrap",
      icon: "bootstrap.png",
    },
    {
      id: 6,
      name: "Framer Motion",
      icon: "https://img.icons8.com/plumpy/24/framer-logo.png",
    },
    {
      id: 7,
      name: "Redux",
      icon: "https://img.icons8.com/color/48/redux.png",
    },
  ];

  const BackEndIcon = [
    {
      id: 1,
      name: "Firebase",
      icon: "https://img.icons8.com/color/48/firebase.png",
    },
    {
      id: 2,
      name: "Node.JS",
      icon: "https://img.icons8.com/fluency/50/node-js.png",
    },
    {
      id: 3,
      name: "Express.JS",
      icon: "https://img.icons8.com/ios/50/express-js.png",
    },
    {
      id: 4,
      name: "MongoDB",
      icon: "https://img.icons8.com/color/48/mongodb.png",
    },
    {
      id: 4,
      name: "Prisma",
      icon: "https://img.icons8.com/fluency/50/prisma-orm.png",
    },
    {
      id: 5,
      name: "Postgresql",
      icon: "https://img.icons8.com/ios/50/postgreesql.png",
    },
  ];

  const toolsIcon = [
    {
      id: 1,
      name: "Git",
      icon: "https://img.icons8.com/color/48/git.png",
    },
    {
      id: 2,
      name: "Figma",
      icon: "https://img.icons8.com/color/48/figma.png",
    },
    {
      id: 3,
      name: "Photoshop",
      icon: "https://img.icons8.com/color/48/adobe-photoshop--v1.png",
    },
    {
      id: 4,
      name: "NPM Package ",
      icon: "https://img.icons8.com/color/48/npm.png",
    },
    {
      id: 4,
      name: "Github",
      icon: "https://img.icons8.com/ios-filled/50/github.png",
    },
  ];
  return (
    <div className=" px-8 py-2 lg:py-16 mt-8 lg:px-24">
      <SectionHeader headerText="Skills" />
      <div className=" grid grid-cols-1 gap-6 lg:grid-cols-3 items-start text-center text-2xl">
        <div>
          <h3 className="text-3xl font-semibold">Front-end</h3>
          <div className="space-y-4 mt-4">
            {frontEndIcon.map((item) => (
              <div key={item.id} className="flex gap-4 items-center p-2">
                <img className="w-[50px]" src={item.icon} alt="" />
                <span className="text-2xl font-extralight">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-semibold">Back-end</h3>
          <div className="space-y-4 mt-4">
            {BackEndIcon.map((item) => (
              <div key={item.id} className="flex gap-4 items-center p-2">
                <img className="w-[50px]" src={item.icon} alt="" />
                <span className="text-2xl font-extralight">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-semibold">Tools</h3>
          <div className="space-y-4 mt-4">
            {toolsIcon.map((item) => (
              <div key={item.id} className="flex gap-4 items-center p-2">
                <img className="w-[50px]" src={item.icon} alt="" />
                <span className="text-2xl font-extralight">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
