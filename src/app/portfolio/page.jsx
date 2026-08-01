"use client";
import SectionHeader from "../components/SectionHeader";
import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { portfolioData } from "../api/portfolioData";
import PortfolioCard from "../components/PortfolioCard";
import { ChevronLeft, ChevronRight, Grid3X3 } from "lucide-react";

const PROJECTS_PER_PAGE = 6;

const stackConfig = {
  All:     { label: "All Projects",   emoji: "🚀", color: "from-[#3B966A] to-[#2d7554]" },
  react:   { label: "React / Next.js",emoji: "⚛️", color: "from-[#3B966A] to-teal-600"  },
  Shopify: { label: "Shopify",         emoji: "🛍️", color: "from-[#3B966A] to-emerald-700"},
  webflow: { label: "Webflow",         emoji: "🌊", color: "from-[#3B966A] to-cyan-700"  },
  mern:    { label: "MERN Stack",      emoji: "⚡", color: "from-[#3B966A] to-green-800" },
};

const PortfolioPage = () => {
  const [selectedStack, setSelectedStack] = useState("All");
  const [currentPage, setCurrentPage]     = useState(1);
  const [animating, setAnimating]         = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const stacks = ["All", ...Object.keys(stackConfig).filter((k) => k !== "All")];

  const stackCounts = stacks.reduce((acc, stack) => {
    acc[stack] =
      stack === "All"
        ? portfolioData.length
        : portfolioData.filter(
            (d) => d.teckStack?.toLowerCase() === stack.toLowerCase()
          ).length;
    return acc;
  }, {});

  const filteredData =
    selectedStack === "All"
      ? portfolioData
      : portfolioData.filter(
          (d) => d.teckStack?.toLowerCase() === selectedStack.toLowerCase()
        );

  const totalPages  = Math.ceil(filteredData.length / PROJECTS_PER_PAGE);
  const startIndex  = (currentPage - 1) * PROJECTS_PER_PAGE;
  const paginatedData = filteredData.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  const handleFilterChange = (stack) => {
    if (stack === selectedStack) return;
    setAnimating(true);
    setTimeout(() => {
      setSelectedStack(stack);
      setCurrentPage(1);
      setAnimating(false);
    }, 200);
  };

  const handlePageChange = (page) => {
    if (page === currentPage) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentPage(page);
      setAnimating(false);
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  };

  const getPageNumbers = () => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage <= 4) return [1, 2, 3, 4, 5, "...", totalPages];
    if (currentPage >= totalPages - 3)
      return [1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
  };

  const config = stackConfig[selectedStack] || stackConfig["All"];

  return (
    <div className="min-h-screen px-4 py-12 lg:px-16 lg:py-16 bg-[#fdf6e3]">
      <SectionHeader headerText="Portfolio" />

      {/* Stats bar */}
      <div className="flex justify-center mb-8" data-aos="fade-down" data-aos-delay="100">
        <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-2 shadow-sm text-sm text-slate-600">
          <Grid3X3 size={14} className="text-[#3B966A]" />
          <span>
            Showing{" "}
            <strong className="text-slate-900">{filteredData.length}</strong> of{" "}
            <strong className="text-slate-900">{portfolioData.length}</strong> projects
            {selectedStack !== "All" && (
              <span className="ml-1">
                in{" "}
                <span className="text-[#3B966A] font-semibold">
                  {config.label}
                </span>
              </span>
            )}
          </span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div
        className="flex justify-center flex-wrap gap-3 mb-12"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        {stacks.map((stack) => {
          const cfg    = stackConfig[stack] || stackConfig["All"];
          const isActive = selectedStack === stack;
          return (
            <button
              key={stack}
              onClick={() => handleFilterChange(stack)}
              className={`
                relative flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm
                transition-all duration-300 border
                ${
                  isActive
                    ? `bg-gradient-to-r ${cfg.color} text-white border-transparent shadow-lg scale-105`
                    : "bg-white text-slate-600 border-gray-200 hover:border-[#3B966A] hover:text-[#3B966A] hover:scale-[1.02] hover:shadow-md"
                }
              `}
            >
              <span>{cfg.emoji}</span>
              <span>{cfg.label}</span>
              <span
                className={`
                  ml-1 text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold
                  ${isActive ? "bg-white/25 text-white" : "bg-gray-100 text-slate-500"}
                `}
              >
                {stackCounts[stack]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div ref={gridRef} className="container mx-auto">
        {selectedStack !== "All" && (
          <div className="flex items-center gap-2 mb-6">
            <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${config.color}`} />
            <span className="text-sm font-medium text-slate-500">
              {config.emoji} {config.label}
            </span>
            <button
              onClick={() => handleFilterChange("All")}
              className="ml-2 text-xs text-gray-400 hover:text-red-500 transition-colors underline"
            >
              Clear filter
            </button>
          </div>
        )}

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(12px)" : "translateY(0)",
            transition: "opacity 0.2s ease, transform 0.2s ease",
          }}
        >
          {paginatedData.length > 0 ? (
            paginatedData.map((data, index) => (
              <div
                key={`${selectedStack}-${currentPage}-${data.id}`}
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <PortfolioCard data={data} />
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-24 text-center">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-slate-700 mb-2">No projects found</h3>
              <p className="text-slate-400 mb-6">No projects in this category yet.</p>
              <button
                onClick={() => handleFilterChange("All")}
                className="px-6 py-2 bg-[#3B966A] text-white rounded-full font-medium hover:bg-[#2d7554] hover:shadow-lg transition-all"
              >
                View all projects
              </button>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center gap-4 mt-14" data-aos="fade-up">
            <p className="text-sm text-slate-500">
              Page <strong className="text-slate-700">{currentPage}</strong> of{" "}
              <strong className="text-slate-700">{totalPages}</strong> &mdash; Projects{" "}
              {startIndex + 1}–{Math.min(startIndex + PROJECTS_PER_PAGE, filteredData.length)} of{" "}
              {filteredData.length}
            </p>

            <div className="flex items-center gap-2">
              {/* Prev */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border
                  ${currentPage === 1
                    ? "opacity-40 cursor-not-allowed bg-white text-slate-400 border-gray-200"
                    : "bg-white text-slate-700 border-gray-200 hover:border-[#3B966A] hover:text-[#3B966A] hover:shadow-md"
                  }`}
              >
                <ChevronLeft size={16} /> Prev
              </button>

              {/* Page numbers */}
              <div className="flex items-center gap-1">
                {getPageNumbers().map((page, idx) =>
                  page === "..." ? (
                    <span key={`ellipsis-${idx}`} className="w-9 text-center text-slate-400 text-sm">
                      ···
                    </span>
                  ) : (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-9 h-9 rounded-full text-sm font-semibold transition-all duration-200 border
                        ${currentPage === page
                          ? "bg-[#3B966A] text-white border-transparent shadow-lg scale-110"
                          : "bg-white text-slate-600 border-gray-200 hover:border-[#3B966A] hover:text-[#3B966A] hover:scale-105"
                        }`}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>

              {/* Next */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border
                  ${currentPage === totalPages
                    ? "opacity-40 cursor-not-allowed bg-white text-slate-400 border-gray-200"
                    : "bg-white text-slate-700 border-gray-200 hover:border-[#3B966A] hover:text-[#3B966A] hover:shadow-md"
                  }`}
              >
                Next <ChevronRight size={16} />
              </button>
            </div>

            {/* Progress bar */}
            <div className="w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-[#3B966A] transition-all duration-500"
                style={{ width: `${(currentPage / totalPages) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;
