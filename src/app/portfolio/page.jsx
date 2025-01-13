"use client";
import SectionHeader from "../components/SectionHeader";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { portfolioData } from "../api/portfolioData";
import PortfolioCard from "../components/PortfolioCard";


const PortfolioPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="px-2 py-8 lg:py-8 lg:px-16">
      <SectionHeader headerText="Portfolio" />
      <nav aria-label="breadcrumb" className="w-full p-4">
        <ol className="flex h-8 space-x-2">
          <li className="flex items-center">
            <Link href={'/'} title="Back to homepage" className="hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 pr-1 dark:text-gray-600">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-400">
              <path d="M32 30.031h-32l16-28.061z"></path>
            </svg>
            <a rel="noopener noreferrer" href="#" className="flex items-center px-1 capitalize hover:underline">Portfolio</a>
          </li>

        </ol>
      </nav>
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.map((data, index) => <PortfolioCard data={data} key={data.id} />)}
      </div>
    </div>
  );
};

export default PortfolioPage;
