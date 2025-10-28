"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import SectionHeader from "../components/SectionHeader";
// import Skills from "../components/Skills"; // Uncomment if you need skills section
// import { ReactTyped } from "react-typed"; // Optional: For typewriter effect

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animate only once
    });
  }, []);

  return (
    <main className="bg-[#fdf6e3] text-gray-800" id="about">
      <div className="container mx-auto px-6 py-8 lg:py-24">
        {/* --- Page Level Heading (H1) --- */}
        <SectionHeader data-aos="fade-up" headerText="About Me" />

        {/* --- Intro Section --- */}
        <div className="container mx-auto py-16 px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* LEFT COLUMN: Profile Image */}
            <div className="w-full md:w-[40%]" data-aos="fade-right">
              <img
                src="profile.jpg"
                alt="Mohammad Haolader - Profile"
                className="w-96 h-auto object-cover rounded-xl shadow-2xl"
              />
            </div>

            {/* RIGHT COLUMN: About Content */}
            <div className="w-full md:w-[60%]">
              {/* Intro Paragraph */}
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-lg md:text-xl font-light text-gray-700 mb-6"
              >
                🚀 Hi,&nbsp;
                <strong className="text-green-700 font-semibold">
                  I’m Mohammad Haolader
                </strong>
                , a dedicated Web Developer with 3+ years of experience building
                modern, high-performing, and user-friendly websites that bring
                ideas to life.
              </p>

              {/* Specialization Paragraph */}
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-lg md:text-xl font-light text-gray-700 mb-6"
              >
                I specialize in building dynamic, responsive web applications
                and eCommerce platforms that deliver{" "}
                <span className="font-semibold">seamless user experiences</span>
                . With a passion for transforming complex challenges into
                intuitive solutions, I craft stylish, modern websites tailored
                to client needs — whether it’s creating robust web applications
                using <span className="font-semibold">React</span> or designing
                scalable <span className="font-semibold">Shopify</span> stores
                for eCommerce success.
              </p>

              {/* Additional Expertise */}
              <p
                data-aos="fade-up"
                data-aos-delay="250"
                className="text-lg md:text-xl font-light text-gray-700 mb-6"
              >
                I focus on building high-performing, modern websites — from
                robust <span className="font-semibold">MERN</span>-based
                applications to custom{" "}
                <span className="font-semibold">Shopify</span> stores and
                Webflow-powered designs — ensuring seamless, responsive
                experiences for all users.
              </p>

              {/* Closing Statement */}
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-lg md:text-xl font-medium text-gray-700"
              >
                Let’s bring your vision to life with innovative and impactful
                digital solutions!
              </p>
            </div>
          </div>
        </div>

        {/* --- Skills Section (Optional) --- */}
        {/*
        <section className="mt-12" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="sr-only">
            Technical Skills
          </h2>
          <Skills />
        </section>
        */}
      </div>
    </main>
  );
}
