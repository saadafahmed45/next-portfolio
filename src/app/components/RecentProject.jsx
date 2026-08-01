"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeader from "./SectionHeader";
import { portfolioData } from "../api/portfolioData";
import PortfolioCard from "./PortfolioCard";
import { ArrowRight } from "lucide-react";

const RecentProject = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Last 3 projects (most recently added)
  const recentProjects = portfolioData.slice(-3).reverse();

  return (
    <section className="bg-[#fdf6e3] px-4 py-16 lg:py-24 lg:px-16">
      <SectionHeader headerText="Recent Projects" />

      <div
        className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {recentProjects.map((data, index) => (
          <div key={data.id} data-aos="fade-up" data-aos-delay={index * 100}>
            <PortfolioCard data={data} />
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 px-8 py-3 bg-[#3B966A] text-white font-semibold rounded-full shadow-md hover:bg-[#2d7554] hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm"
        >
          View All Projects
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default RecentProject;
