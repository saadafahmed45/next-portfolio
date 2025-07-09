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

  const filteredData =
    selectedStack === "All"
      ? portfolioData
      : portfolioData.filter((data) => data.teckStack === selectedStack);

  return (
    <div className="px-2 py-8 lg:py-8 lg:px-16">
      <SectionHeader headerText="Portfolio" />

      {/* Filter Section */}
      <div className="flex justify-center mb-6 space-x-4">
        {["All", "react", "Shopify", "webflow"].map((stack) => (
          <button
            key={stack}
            onClick={() => setSelectedStack(stack)}
            className={`px-4 py-2 rounded ${selectedStack === stack
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
              }`}
          >
            {stack}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredData.map((data) => (
          <PortfolioCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
