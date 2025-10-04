"use client";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeader from "./SectionHeader";
import { portfolioData } from "../api/portfolioData";
import PortfolioCard from "./PortfolioCard";

const RecentProject = () => {
  const allProducts = portfolioData;

  const newProducts = allProducts.slice(-3).reverse();

  return (
    <div className="px-2 py-8 lg:py-24 lg:px-16">
      <SectionHeader headerText="Recent Project" />

      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newProducts.map((data, index) => (
          <PortfolioCard data={data} key={data.id} />
        ))}
      </div>
      <div className="text-center mt-6">
        <Link
          href={"/portfolio"}
          className="px-4 py-2 font-semibold border rounded border-gray-800 text-gray-800"
        >
          See all project
        </Link>
      </div>
    </div>
  );
};

export default RecentProject;
