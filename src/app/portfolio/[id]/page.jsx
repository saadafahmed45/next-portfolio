import React from "react";
import { projectsData } from "../page";
import SectionHeader from "@/app/components/SectionHeader";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

const PortfolioDetails = ({ params }) => {
  const { id } = params; // Get the dynamic id from the URL
  const project = projectsData.find((project) => project.id === parseInt(id)); // Find project by id

  // If the project is not found, show a message
  if (!project) {
    return (
      <div className="px-2 py-8 lg:py-8 lg:px-4">
        <SectionHeader headerText="Project Not Found" />
        <p>Sorry, the project you're looking for doesn't exist.</p>
        <Link href="/portfolio" className="text-blue-500 underline">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="px-2 py-8 lg:py-8 lg:px-4">
      <SectionHeader headerText="Project Details" />

      {/* Project Details */}
      <div className="container mx-auto px-4">
        <div className="grid grid-row-1 lg:grid-cols-2 gap-4">
          {/* img  */}
          <div>
            <img
              src={project.image}
              //   alt={project.title}
              className="w-full h-80 object-contain mb-4"
            />
          </div>
          {/* details  */}
          <div>
            <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

            <p className="text-gray-600 mb-4">{project.description}</p>
            <p className="text-gray-600 mb-4">{project.Features}</p>

            <div>
              <h3 className="text-xl font-bold">Technology Used:</h3>
              <div className="flex flex-wrap gap-4 mb-4">
                {project.technology.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={project.live_link}
                className="flex items-center text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2" /> Live Site
              </a>
              <a
                href={project.client_link}
                className="flex items-center text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2" /> Client Repo
              </a>
              <a
                href={project.server_link}
                className="flex items-center text-blue-500"
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