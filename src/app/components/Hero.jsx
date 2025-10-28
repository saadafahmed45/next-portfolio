"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

const HeroPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="relative primary_bg_color px-4 lg:px-20 py-20">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 max-w-7xl  mx-auto">
        {/* ---------- LEFT CONTENT ---------- */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1
            data-aos="fade-right"
            className="text-4xl md:text-6xl font-bold text-[#3B966A] leading-tight"
          >
            <span className="text-slate-900">Hello, I’m</span> <br />
            Mohammad Haolader
          </h1>

          <h3
            data-aos="fade-up"
            className="text-lg md:text-xl font-medium text-slate-700"
          >
            <ReactTyped
              strings={[
                "A Skilled MERN Stack Developer",
                "A Passionate Shopify Store Designer",
                "Building Scalable Webflow Websites",
              ]}
              typeSpeed={50}
              backSpeed={40}
              loop
            />
          </h3>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="max-w-xl mx-auto lg:mx-0 text-base text-slate-700 leading-relaxed"
          >
            I create fast, responsive, and modern web applications — from
            MERN-based platforms to custom Shopify stores and elegant Webflow
            designs that deliver seamless user experiences.
          </p>

          {/* ---------- SOCIAL & BUTTONS ---------- */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex items-center justify-center lg:justify-start gap-5 pt-4"
          >
            {/* Social Icons */}
            <a
              href="https://github.com/saadafahmed45"
              className="text-3xl text-slate-800 hover:text-[#3B966A] transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/mohammadh-/"
              className="text-3xl text-slate-800 hover:text-[#3B966A] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.upwork.com/freelancers/~0108b0d1886edd5892?mp_source=share"
              className="text-3xl text-slate-800 hover:text-[#3B966A] transition-colors duration-300"
              aria-label="Upwork"
            >
              <FaSquareUpwork />
            </a>

            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1k7jJCwRzQzfRQDp5qLLVDtrM900j_BVV/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded border border-[#3B966A] text-slate-800 bg-white font-medium shadow-sm hover:bg-[#3B966A] hover:text-white transition-all duration-300"
            >
              Resume
            </a>
          </div>
        </div>

        {/* ---------- RIGHT IMAGE ---------- */}
        <div
          data-aos="fade-left"
          className="flex-1 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <img
              src="profile2.jpeg"
              alt="Profile"
              className="w-full h-full object-cover [clip-path:circle(50%)] shadow-lg transition-transform duration-500 ease-in-out hover:scale-105"
            />
            {/* Decorative Ring Effect */}
            <div className="absolute inset-0 rounded-full border-[6px] border-[#3B966A] opacity-20 scale-110 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
