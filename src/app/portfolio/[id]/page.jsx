"use client"
import React from "react";
import { projectsData } from "../page";
import SectionHeader from "@/app/components/SectionHeader";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { portfolioData } from "@/app/api/portfolioData";

const PortfolioDetails = ({ params }) => {
  const { id } = params; // Get the dynamic id from the URL
  const project = portfolioData.find((project) => project.id === parseInt(id)); // Find project by id

  // If the project is not found, show a message
  if (!project) {
    return (
      <div className="px-2 py-8 lg:py-8 lg:px-4">
        <SectionHeader headerText="Project Not Found" />
        <p>Sorry, the project you're looking for doesn't exist.</p>
        <Link href="/portfolio" className="text-[#3B966A] underline">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="px-2 py-8 lg:py-8 lg:px-16">
      <SectionHeader headerText="Project Details" />
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
      {/* Project Details */}
      <div className="container mx-auto px-4">
        <div className="grid grid-row-1 lg:grid-cols-2 gap-4">
          {/* img  */}
          <div>
            <img
              src={project.image}
              //   alt={project.title}
              className="w-full h-96 object-contain mb-4 rounded-md"
            />
          </div>
          {/* details  */}
          <div>
            <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

            <p className="text-gray-600 mb-4">{project.description}</p>
            <h3 className="text-xl font-semibold mb-4">Key features:</h3>
            <p className="text-gray-600 mb-4">{project.Features}</p>

            <div>
              <h3 className="text-xl font-semibold">Technology Used:</h3>
              <div className="flex flex-wrap gap-4 my-2">
                {project.technology.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              {project.pass && (
                <h3 className="text-xl font-semibold mb-4">
                  Store Password:{" "}
                  <span className="text-xl font-light"> {project.pass}</span>
                </h3>
              )}
            </div>
            <div className="flex gap-4 text-[16px] lg:text-md mt-4">
              <a
                href={project.live_link}
                className="flex items-center text-[#3B966A] hover:text-[#2f7553]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2" /> Live Site
              </a>
              <a
                href={project.client_link}
                className="flex items-center text-[#3B966A] hover:text-[#2f7553]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2" /> Client Repo
              </a>
              <a
                href={project.server_link}
                className="flex items-center text-[#3B966A]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2" /> Server Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;
