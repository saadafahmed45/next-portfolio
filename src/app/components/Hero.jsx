"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { FaSquareUpwork } from "react-icons/fa6";

const HeroPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="px-2   lg:px-16 py-16 bg-[#EDE8DC]">
      <div className="flex flex-col-reverse justify-around md:flex-row gap-4 items-center h-[80vh] ">
        {/* content */}
        <div className=" space-y-4">
          <h1
            data-aos="fade-right"
            className="text-4xl md:text-7xl font-semibold text-[#3B966A] text-center "
          >
            <span className="text-slate-900">Hello, I'm</span> <br /> Mohammad
            H.
          </h1>
          <h3 className="text-md lg:text-lg font-semibold ml-[20px] lg:ml-[120px] ">
            <ReactTyped
              className=""
              strings={[
                " As a skilled MERN Stack Developer",
                " As a skilled Shopify Store Designer",
              ]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </h3>

          {/* social button  */}
          <div className="flex justify-center gap-2 items-center pt-4 pb-8">
            <a
              href="https://github.com/saadafahmed45"
              className="text-3xl hover:text-[#3B966A]"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammadh-/"
              className="text-3xl hover:text-[#3B966A]"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~0108b0d1886edd5892?mp_source=share"
              className="text-3xl hover:text-[#3B966A]"
            >
              <FaSquareUpwork />
            </a>
            <div>
              <a
                href="https://drive.google.com/file/d/1k7jJCwRzQzfRQDp5qLLVDtrM900j_BVV/view?usp=drive_link"
                className="bg-slate-100 p-2 border font-extralight rounded border-[#3B966A] hover:border-slate-950 hover:bg-[#3B966A] hover:text-white"
              >
                {" "}
                Resume
              </a>
            </div>
          </div>
        </div>
        {/* content */}
        <div data-aos="fade-left" className=" w-[300px] lg:w-[450px] px-4 lg:2">
          <img
            src="p1.png"
            className="w-full col-span-4 animate-upDown"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
