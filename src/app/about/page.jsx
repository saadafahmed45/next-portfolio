"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Typewriter from "../components/Typewriter";
import { ReactTyped } from "react-typed";
import Skills from "../components/Skills";
import SectionHeader from "../components/SectionHeader";

export default function AboutPage() {
  return (
    <div>
      <div className="container mx-auto px-4 py-2 lg:py-16 ">
        <SectionHeader headerText="About Me" />

        <div className="max-w-2xl mx-auto space-y-4">
          {/* <h2 className="text-3xl font-semibold mb-6">
            I'm a <br />
            <ReactTyped
              className="text-3xl font-semibold"
              strings={[" MERN Stack Developer ", " React Developer "]}
              typeSpeed={60}
              backSpeed={50}
              loop
            />
          </h2> */}

          {/* <Typewriter text="Crafting awesome web experiences!" speed={250} /> */}
          <p className="text-2xl text-gray-700">
            I’m <b> Mohammad Haolader</b>, a dedicated Frontend React Developer
            with a passion for creating dynamic and responsive web applications.
            I thrive on transforming complex problems into intuitive user
            interfaces using React
          </p>
          <p className="text-2xl text-gray-700">
            I design and develop services for customers specializing creating
            stylish, modern websites, web services and online stores. My passion
            is to design digital user experiences through meaningful
            interactions.
          </p>
        </div>

        <Skills />
      </div>
    </div>
  );
}
