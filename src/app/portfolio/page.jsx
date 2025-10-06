"use client";
import SectionHeader from "../components/SectionHeader";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { portfolioData } from "../api/portfolioData";
import PortfolioCard from "../components/PortfolioCard";

const PortfolioPage = () => {
  const [selectedStack, setSelectedStack] = useState("All");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const stacks = ["All", "React", "Shopify", "Webflow"];

  const filteredData =
    selectedStack === "All"
      ? portfolioData
      : portfolioData.filter(
          (data) =>
            data.teckStack?.toLowerCase() === selectedStack.toLowerCase()
        );

  return (
    <div className="px-4 py-12 lg:px-16 lg:py-16 bg-[#fdf6e3]">
      <SectionHeader headerText="Portfolio" />

      {/* Filter Section */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {stacks.map((stack) => (
          <button
            key={stack}
            onClick={() => setSelectedStack(stack)}
            className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 shadow-md ${
              selectedStack === stack
                ? "bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg scale-105"
                : "bg-white text-gray-700 hover:bg-green-50 hover:text-green-600"
            }`}
          >
            {stack}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredData.length > 0 ? (
          filteredData.map((data, index) => (
            <div key={data.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <PortfolioCard data={data} />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No projects found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;
