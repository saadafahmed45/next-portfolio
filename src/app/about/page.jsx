"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Typewriter from "../components/Typewriter";
import { ReactTyped } from "react-typed";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-2 md:py-4 ">
      <h1 className="text-center text-5xl font-extralight mb-8">About Me</h1>

      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">
          I'm a <br />
          <ReactTyped
            className="text-3xl font-semibold"
            strings={[" MERN Stack Developer ", " React Developer "]}
            typeSpeed={60}
            backSpeed={50}
            loop
          />
        </h2>

        {/* <Typewriter text="Crafting awesome web experiences!" speed={250} /> */}
        <p className="text-2xl text-gray-700">
          focused on crafting user‑friendly experiences. I am passionate about
          building excellent software that improves the lives of those around
          me. <br /> I design and develop services for customers specializing
          creating stylish, modern websites, web services and online stores. My
          passion is to design digital user experiences through meaningful
          interactions. Check out my Portfolio
        </p>
      </div>
    </div>
  );
}
