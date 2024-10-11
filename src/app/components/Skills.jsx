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

  const database = [
    {
      id: 1,
      name: "MongoDB",
      icon: "https://img.icons8.com/color/48/mongodb.png",
    },
    {
      id: 2,
      name: "MySQL",
      icon: "https://img.icons8.com/fluency/50/mysql-logo.png",
    },
    {
      id: 3,
      name: "Graphql",
      icon: "https://img.icons8.com/ios-filled/50/graphql.png",
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
    <div className=" px-4 py-2 lg:py-8 mt-8 lg:px-16">
      <SectionHeader headerText="Skills" />
      <div className=" grid grid-cols-2 gap-4 lg:grid-cols-4 items-start text-start text-2xl">
        <div>
          <h3 className="lg:text-3xl text-2xl font-semibold">Front-end:</h3>
          <div className="space-y-2 mt-4">
            {frontEndIcon.map((item) => (
              <div key={item.id} className="flex gap-4 items-center p-2">
                <img className="w-[30px] " src={item.icon} alt="" />
                <span className="text-[18px] lg:text-xl font-extralight">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="lg:text-3xl text-2xl font-semibold">Back-end:</h3>
          <div className="space-y-2 mt-4">
            {BackEndIcon.map((item) => (
              <div key={item.id} className="flex gap-2 items-center p-2">
                <img className="w-[30px]" src={item.icon} alt="" />
                <span className="text-[18px] lg:text-xl font-extralight">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="lg:text-3xl text-2xl font-semibold">Database:</h3>
          <div className="space-y-2 mt-4">
            {database.map((item) => (
              <div key={item.id} className="flex gap-4 items-center p-2">
                <img className="w-[30px]" src={item.icon} alt="" />
                <span className="text-[18px] lg:text-xl font-extralight">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="lg:text-3xl text-2xl font-semibold">Tools:</h3>
          <div className="space-y-2 mt-4">
            {toolsIcon.map((item) => (
              <div key={item.id} className="flex gap-4 items-center p-2">
                <img className="w-[30px]" src={item.icon} alt="" />
                <span className="text-[18px] lg:text-xl font-extralight">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
