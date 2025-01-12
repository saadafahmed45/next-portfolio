"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Typewriter from "../components/Typewriter";
import { ReactTyped } from "react-typed";
import Skills from "../components/Skills";
import SectionHeader from "../components/SectionHeader";
import AOS from "aos";
import "aos/dist/aos.css";
export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div>
      <div className="container mx-auto px-6 py-8 lg:py-16 ">
        <SectionHeader data-aos="fade-up" headerText="About Me" />

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
          <p
            data-aos="fade-up"
            className="text-xl font-extralight text-gray-700"
          >
            I’m <b className=" text-[#3B966A]"> Mohammad Haolader</b>, a skilled Frontend Developer with expertise in MERN stack and Shopify development.
          </p>
          <p
            data-aos="fade-up"
            className="text-xl  font-extralight text-gray-700"
          >
            I specialize in building dynamic, responsive web applications and eCommerce platforms that deliver seamless user experiences. With a passion for transforming complex challenges into intuitive solutions, I craft stylish, modern websites tailored to client needs—whether it’s creating robust web applications using React and the MERN stack or designing scalable Shopify stores for eCommerce success
          </p>
          <p
            data-aos="fade-up"
            className="text-xl  font-extralight text-gray-700"
          >
            Let’s bring your vision to life with innovative and impactful digital solutions!

          </p>
        </div>

        <Skills />
      </div>
    </div>
  );
}
