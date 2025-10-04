"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import SectionHeader from "../components/SectionHeader";
import Skills from "../components/Skills";
// import { ReactTyped } from "react-typed"; // optional if you want typewriter effect

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animate only once
    });
  }, []);

  return (
    <main className="bg-[#fdf6e3] text-gray-800">
      <div className="container mx-auto px-6 py-8 lg:py-24">
        {/* --- Page Level Heading (H1) --- */}
        <SectionHeader data-aos="fade-up" headerText="About Me" />

        {/* --- Intro Text --- */}
        <section
          className="max-w-2xl mx-auto space-y-6 leading-relaxed"
          aria-labelledby="about-intro"
        >
          <h2 id="about-intro" className="sr-only">
            About Mohammad Haolader
          </h2>

          {/* If you want a typed intro, keep it inside h2 or h3 for semantics */}
          {/*
          <h2 className="text-3xl font-semibold mb-6 text-green-900">
            I’m a{" "}
            <ReactTyped
              className="font-semibold"
              strings={["MERN Stack Developer", "React Developer"]}
              typeSpeed={60}
              backSpeed={50}
              loop
            />
          </h2>
          */}

          <p
            data-aos="fade-up"
            className="text-lg md:text-xl font-light text-gray-900"
          >
            I’m{" "}
            <strong className="text-green-900 font-semibold">
              Mohammad&nbsp;Haolader
            </strong>
            , a skilled Frontend Developer with expertise in the MERN stack
            and&nbsp;Shopify development.
          </p>

          <p
            data-aos="fade-up"
            className="text-lg md:text-xl font-light text-gray-900"
          >
            I specialize in building dynamic, responsive web applications and
            eCommerce platforms that deliver seamless user experiences. With a
            passion for transforming complex challenges into intuitive
            solutions, I craft stylish, modern websites tailored to client
            needs—whether it’s creating robust web applications using React and
            the MERN stack or designing scalable Shopify stores for eCommerce
            success.
          </p>

          <p
            data-aos="fade-up"
            className="text-lg md:text-xl font-light text-gray-900"
          >
            Let’s bring your vision to life with innovative and impactful
            digital solutions!
          </p>
        </section>

        {/* --- Skills Section --- */}
        <section className="mt-12" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="sr-only">
            Technical Skills
          </h2>
          <Skills />
        </section>
      </div>
    </main>
  );
}
