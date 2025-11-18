"use client";
import React from "react";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import SectionHeader from "@/app/components/SectionHeader";
import { portfolioData } from "@/app/api/portfolioData";
import PortfolioCard from "@/app/components/PortfolioCard";

const PortfolioDetails = ({ params }) => {
  const { id } = params;
  const project = portfolioData.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return (
      <div className="px-4 py-12 lg:px-16 lg:py-16">
        <SectionHeader headerText="Project Not Found" />
        <p className="text-gray-600 mt-4">
          Sorry, the project you're looking for doesn't exist.
        </p>
        <Link
          href="/portfolio"
          className="text-green-600 underline mt-2 inline-block"
        >
          Back to Portfolio
        </Link>
      </div>
    );
  }

  const relatedProjects = portfolioData
    .filter(
      (item) => item.id !== project.id && item.teckStack === project.teckStack
    )
    .slice(0, 4);

  return (
    <div className="px-4 py-12 lg:px-16 lg:py-16">
      <SectionHeader headerText="Project Details" />

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-8 text-sm text-gray-500">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="flex items-center hover:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-1"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <span className="mx-2">/</span>
            <Link href="/portfolio" className="hover:underline">
              Portfolio
            </Link>
          </li>
          <li>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{project.title}</span>
          </li>
        </ol>
      </nav>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image */}
        <div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover rounded-xl shadow-lg mb-6"
          />
        </div>

        {/* Details */}
        <div>
          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
          <p className="text-gray-700 mb-4">{project.description}</p>

          <h3 className="text-2xl font-semibold mb-2">Key Features:</h3>
          <p className="text-gray-700">{project.Features}</p>

          {/* Technology */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Technology Used:</h3>
            <div className="flex flex-wrap gap-2">
              {project.technology.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-gray-100 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Store Password */}
          {project.pass && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold">
                Store Password:{" "}
                <span className="font-medium text-red-600">{project.pass}</span>
              </h3>
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href={project.live_link}
              target="_blank"
              className="flex items-center gap-1 px-4 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition"
            >
              <ExternalLink /> Live Site
            </a>

            {project.client_link && (
              <a
                href={project.client_link}
                target="_blank"
                className="flex items-center gap-1 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition"
              >
                <Github /> Client Repo
              </a>
            )}

            {project.server_link && (
              <a
                href={project.server_link}
                target="_blank"
                className="flex items-center gap-1 px-4 py-2 bg-teal-50 text-teal-600 rounded-lg hover:bg-teal-100 transition"
              >
                <Github /> Server Repo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Related Projects */}
      <div className="mt-20">
        <div className="flex gap-4 items-center mb-6">
          <h3 className="text-2xl font-serif font-bold">Related Projects</h3>
          <span className="text-lg uppercase text-gray-600">
            ({project.teckStack})
          </span>
        </div>

        {relatedProjects.length === 0 ? (
          <p className="text-gray-500">No related projects found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProjects.map((proj) => (
              <PortfolioCard key={proj.id} data={proj} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioDetails;
