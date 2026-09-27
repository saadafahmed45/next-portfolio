"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";
import { ReactTyped } from "react-typed";

const HeroPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="relative primary_bg_color px-4 sm:px-8 lg:px-20 py-12 lg:py-24 overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14 max-w-7xl mx-auto">
        {/* ---------- LEFT CONTENT ---------- */}
        <div className="flex-1 space-y-6 text-left max-w-2xl mx-auto lg:mx-0">
          {/* Status Badge */}
          <div data-aos="fade-down" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3B966A]/10 border border-[#3B966A]/25 text-[#2e7d56] text-xs sm:text-sm font-medium tracking-wide shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B966A] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3B966A]" />
            </span>
            Available for Projects & Full-time Roles
          </div>

          {/* Heading */}
          <h1
            data-aos="fade-right"
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.18]"
          >
            Hello, I&apos;m{" "}
            <span className="text-[#3B966A] block sm:inline mt-1 sm:mt-0 drop-shadow-sm">
              Mohammad Haolader
            </span>
          </h1>

          {/* Typewriter Subtitle */}
          <div
            data-aos="fade-up"
            className="flex flex-wrap items-center gap-2 text-base sm:text-xl lg:text-2xl font-semibold text-slate-800 min-h-[34px]"
          >
            <span className="text-slate-500 font-normal">A Passionate</span>
            <span className="text-[#3B966A] border-b-2 border-[#3B966A]/30 pb-0.5">
              <ReactTyped
                strings={[
                  "MERN Stack Developer",
                  "Shopify Store Designer",
                  "Webflow Website Builder",
                  "Frontend Specialist",
                ]}
                typeSpeed={50}
                backSpeed={40}
                loop
              />
            </span>
          </div>

          {/* Paragraph */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl"
          >
            I create fast, responsive, and modern web applications — blending{" "}
            <strong className="font-semibold text-slate-900">MERN stack architecture</strong> with{" "}
            <strong className="font-semibold text-slate-900">custom Shopify stores</strong> and{" "}
            <strong className="font-semibold text-slate-900">clean UI design</strong> to deliver seamless user experiences.
          </p>

          {/* ---------- SOCIAL & BUTTONS ---------- */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
          >
            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1k7jJCwRzQzfRQDp5qLLVDtrM900j_BVV/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#3B966A] text-white font-medium text-sm shadow-md shadow-[#3B966A]/20 hover:bg-[#327e59] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Contact Me Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-slate-300/90 bg-white text-slate-800 font-medium text-sm shadow-sm hover:border-[#3B966A] hover:text-[#3B966A] hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
            >
              <span>Contact Me</span>
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-2 sm:ml-1">
              <a
                href="https://github.com/saadafahmed45"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-xl border border-slate-300/80 bg-white text-slate-700 hover:text-[#3B966A] hover:border-[#3B966A] hover:-translate-y-0.5 shadow-sm transition-all duration-300 text-lg sm:text-xl"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/mohammadh-/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-xl border border-slate-300/80 bg-white text-slate-700 hover:text-[#3B966A] hover:border-[#3B966A] hover:-translate-y-0.5 shadow-sm transition-all duration-300 text-lg sm:text-xl"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.upwork.com/freelancers/~0108b0d1886edd5892?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-xl border border-slate-300/80 bg-white text-slate-700 hover:text-[#3B966A] hover:border-[#3B966A] hover:-translate-y-0.5 shadow-sm transition-all duration-300 text-lg sm:text-xl"
                aria-label="Upwork Profile"
              >
                <FaSquareUpwork />
              </a>
            </div>
          </div>
        </div>

        {/* ---------- RIGHT IMAGE ---------- */}
        <div
          data-aos="fade-left"
          className="flex-1 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src="/profile2.jpeg"
              fill
              priority
              sizes="(max-width: 1024px) 320px, 384px"
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
