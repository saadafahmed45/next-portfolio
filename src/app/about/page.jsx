"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import SectionHeader from "../components/SectionHeader";
import { CheckCircle2, Download } from "lucide-react";

const highlights = [
  "3+ years of professional web development experience",
  "MERN stack – React, Node.js, Express, MongoDB",
  "Custom Shopify theme & store development",
  "Webflow design & CMS-powered websites",
  "Responsive, SEO-friendly, and performance-optimised builds",
  "End-to-end project delivery from design to deployment",
];

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section className="bg-[#fdf6e3] text-slate-800" id="about">
      <div className="container mx-auto px-6 py-12 lg:py-24">
        <SectionHeader headerText="About Me" />

        <div className="flex flex-col md:flex-row items-center gap-12 mt-10">

          {/* ── Profile Image ── */}
          <div className="w-full md:w-[42%] flex justify-center" data-aos="fade-right">
            <div className="relative">
              {/* Decorative background blob */}
              <div className="absolute -inset-4 bg-[#3B966A]/10 rounded-3xl -rotate-3 z-0" />
              <img
                src="profile.jpg"
                alt="Mohammad Haolader – Web Developer"
                className="relative z-10 w-72 lg:w-80 h-auto object-cover rounded-2xl shadow-2xl"
              />
              {/* Experience badge */}
              <div className="absolute -bottom-4 -right-4 z-20 bg-[#3B966A] text-white rounded-2xl px-4 py-3 shadow-xl text-center">
                <p className="text-2xl font-extrabold leading-none">3+</p>
                <p className="text-xs font-medium mt-0.5">Years Exp.</p>
              </div>
            </div>
          </div>

          {/* ── Text Content ── */}
          <div className="w-full md:w-[58%]" data-aos="fade-left" data-aos-delay="100">
            <p
              className="text-lg md:text-xl font-light text-slate-700 mb-5 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              🚀 Hi,{" "}
              <strong className="text-[#3B966A] font-semibold">
                I'm Mohammad Haolader
              </strong>
              , a dedicated Web Developer with 3+ years of experience building
              modern, high-performing, and user-friendly websites that bring
              ideas to life.
            </p>

            <p
              className="text-base text-slate-600 mb-6 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              I specialize in dynamic, responsive web applications and eCommerce
              platforms — from robust{" "}
              <span className="font-semibold text-slate-800">MERN</span>-stack
              apps to custom{" "}
              <span className="font-semibold text-slate-800">Shopify</span>{" "}
              stores and{" "}
              <span className="font-semibold text-slate-800">Webflow</span>-powered
              designs — always with seamless user experiences at the core.
            </p>

            {/* Highlights list */}
            <ul className="space-y-2.5 mb-8" data-aos="fade-up" data-aos-delay="250">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#3B966A]" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="300">
              <a
                href="https://drive.google.com/file/d/1k7jJCwRzQzfRQDp5qLLVDtrM900j_BVV/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#3B966A] text-white font-semibold rounded-full shadow-md hover:bg-[#2d7554] hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm"
              >
                <Download size={16} /> Download Resume
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 border-2 border-[#3B966A] text-[#3B966A] font-semibold rounded-full hover:bg-[#3B966A] hover:text-white transition-all duration-200 text-sm"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
