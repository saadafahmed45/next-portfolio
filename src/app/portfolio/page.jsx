import React from "react";
import SectionHeader from "../components/SectionHeader";
import { ExternalLink, Github } from "lucide-react";

const PortfolioPage = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack online shopping solution",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Weather App",
      description: "Real-time weather forecasts",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Task Manager",
      description: "Productivity app for organizing tasks",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Showcase of personal projects",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "Recipe Finder",
      description: "Discover and save your favorite recipes",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "Monitor your workouts and progress",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 7,
      title: "Movie Database",
      description: "Explore and rate your favorite films",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 8,
      title: "Social Media Dashboard",
      description: "Manage multiple social accounts",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 9,
      title: "News Aggregator",
      description: "Curated news from various sources",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 10,
      title: "Language Learning App",
      description: "Interactive lessons for language learners",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 11,
      title: "Budget Planner",
      description: "Track expenses and set financial goals",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 12,
      title: "Virtual Art Gallery",
      description: "Showcase digital artworks online",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 13,
      title: "Job Board",
      description: "Connect job seekers with employers",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 14,
      title: "Podcast Player",
      description: "Stream and manage your podcasts",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 15,
      title: "Travel Planner",
      description: "Organize trips and discover destinations",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 16,
      title: "Code Snippet Manager",
      description: "Store and share useful code snippets",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 17,
      title: "Meditation App",
      description: "Guided meditations for mindfulness",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 18,
      title: "Inventory Management",
      description: "Track stock levels and orders",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 19,
      title: "Music Visualizer",
      description: "Create visual art from audio input",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 20,
      title: "Habit Tracker",
      description: "Build and maintain positive habits",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  return (
    <div className="px-16 py-2 lg:py-4 lg:px-4">
      <SectionHeader headerText="Portfolio" />
      <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => {
          switch (index) {
            case 0:
              return (
                <div
                  key={project.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex justify-between">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                        <ExternalLink className="inline-block mr-2" size={16} />
                        Live Demo
                      </button>
                      <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors duration-300">
                        <Github className="inline-block mr-2" size={16} />
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              );
            case 1:
              return (
                <div
                  key={project.id}
                  className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 mb-4">{project.description}</p>
                    <div className="flex justify-between">
                      <button className="bg-white text-purple-500 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-300">
                        <ExternalLink className="inline-block mr-2" size={16} />
                        Live Demo
                      </button>
                      <button className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-900 transition-colors duration-300">
                        <Github className="inline-block mr-2" size={16} />
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              );
            case 2:
              return (
                <div
                  key={project.id}
                  className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white text-gray-800 px-4 py-2 rounded-lg mr-2 hover:bg-gray-200 transition-colors duration-300">
                        <ExternalLink className="inline-block mr-2" size={16} />
                        Live Demo
                      </button>
                      <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-300">
                        <Github className="inline-block mr-2" size={16} />
                        GitHub
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              );
            case 3:
              return (
                <div
                  key={project.id}
                  className="bg-green-500 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:bg-green-600"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-green-100 mb-4">{project.description}</p>
                    <div className="flex justify-between">
                      <button className="bg-white text-green-500 px-4 py-2 rounded hover:bg-green-100 transition-colors duration-300">
                        <ExternalLink className="inline-block mr-2" size={16} />
                        Live Demo
                      </button>
                      <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition-colors duration-300">
                        <Github className="inline-block mr-2" size={16} />
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              );
            case 4:
              return (
                <div
                  key={project.id}
                  className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-blue-500"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex justify-between">
                      <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition-colors duration-300">
                        <ExternalLink className="inline-block mr-2" size={16} />
                        Live Demo
                      </button>
                      <button className="border-2 border-gray-800 text-gray-800 px-4 py-2 rounded hover:bg-gray-800 hover:text-white transition-colors duration-300">
                        <Github className="inline-block mr-2" size={16} />
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              );
            case 5:
              return (
                <div
                  key={project.id}
                  className="bg-yellow-400 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:rotate-2"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <div className="flex justify-between">
                      <button className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-900 transition-colors duration-300">
                        <ExternalLink className="inline-block mr-2" size={16} />
                        Live Demo
                      </button>
                      <button className="bg-white text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300">
                        <Github className="inline-block mr-2" size={16} />
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              );
            case 6:
              return (
                <div
                  key={project.id}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-blue-100 mb-4">{project.description}</p>
                    <div className="flex justify-between">
                      <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-blue-100 transition-colors duration-300">
                        <ExternalLink className="inline-block mr-2" size={16} />
                        Live Demo
                      </button>
                      <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors duration-300">
                        <Github className="inline-block mr-2" size={16} />
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              );
            case 7:
              return (
                <div
                  key={project.id}
                  className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex justify-between">
                      <button className="bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-200 transition-colors duration-300">
                        <ExternalLink className="inline-block mr-2" size={16} />
                        Live Demo
                      </button>
                      <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors duration-300">
                        <Github className="inline-block mr-2" size={16} />
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              );
            case 8:
              return (
                <div
                  key={project.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 group"
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white text-gray-800 px-4 py-2 rounded-lg mr-2 hover:bg-gray-200 transition-colors duration-300">
                        <ExternalLink className="inline-block mr-2" size={16} />
                        Live Demo
                      </button>
                      <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-300">
                        <Github className="inline-block mr-2" size={16} />
                        GitHub
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              );
            case 9:
              return (
                <div
                  key={project.id}
                  className="bg-red-500 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-red-100 mb-4">{project.description}</p>
                    <div className="flex justify-between">
                      <button className="bg-white text-red-500 px-4 py-2 rounded-full hover:bg-red-100 transition-colors duration-300">
                        <ExternalLink className="inline-block mr-2" size={16} />
                        Live Demo
                      </button>
                      <button className="bg-red-700 text-white px-4 py-2 rounded-full hover:bg-red-800 transition-colors duration-300">
                        <Github className="inline-block mr-2" size={16} />
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              );
            case 10:
              return (
                <div
                  key={project.id}
                  className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-indigo-100 mb-4">
                      {project.description}
                    </p>
                    <div className="flex justify-between">
                      <button className="bg-white text-indigo-500 px-4 py-2 rounded hover:bg-indigo-100 transition-colors duration-300">
                        <ExternalLink className="inline-block mr-2" size={16} />
                        Live Demo
                      </button>
                      <button className="bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-800 transition-colors duration-300">
                        <Github className="inline-block mr-2" size={16} />
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              );
            case 11:
              return (
                <div
                  key={project.id}
                  className="bg-white border-4 border-yellow-400 rounded-lg overflow-hidden transition-all duration-300 hover:border-yellow-500"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex justify-between">
                      <button className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 transition-colors duration-300">
                        <ExternalLink className="inline-block mr-2" size={16} />
                        Live Demo
                      </button>
                      <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors duration-300">
                        <Github className="inline-block mr-2" size={16} />
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              );
            case 12:
              return (
                <div
                  key={project.id}
                  className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <button className="bg-white text-gray-800 px-4 py-2 rounded-lg mr-2 hover:bg-gray-200 transition-colors duration-300">
                        <ExternalLink className="inline-block mr-2" size={16} />
                        Live Demo
                      </button>
                      <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-300">
                        <Github className="inline-block mr-2" size={16} />
                        GitHub
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              );
            case 13:
              return (
                <div
                  key={project.id}
                  className="bg-blue-500 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:bg-blue-600"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-blue-100 mb-4">{project.description}</p>
                    <div className="flex justify-between">
                      <button className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors duration-300">
                        <ExternalLink className="inline-block mr-2" size={16} />
                        Live Demo
                      </button>
                      <button className="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition-colors duration-300">
                        <Github className="inline-block mr-2" size={16} />
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              );
            case 14:
              return (
                <div
                  key={project.id}
                  className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-green-100 mb-4">{project.description}</p>
                    <div className="flex justify-between">
                      <button className="bg-white text-green-500 px-4 py-2 rounded hover:bg-green-100 transition-colors duration-300">
                        <ExternalLink className="inline-block mr-2" size={16} />
                        Live Demo
                      </button>
                      <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition-colors duration-300">
                        <Github className="inline-block mr-2" size={16} />
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              );
            case 15:
              return (
                <div
                  key={project.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 group"
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white text-gray-800 px-4 py-2 rounded-lg mr-2 hover:bg-gray-200 transition-colors duration-300">
                        <ExternalLink className="inline-block mr-2" size={16} />
                        Live Demo
                      </button>
                      <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-300">
                        <Github className="inline-block mr-2" size={16} />
                        GitHub
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              );
            case 16:
              return (
                <div
                  key={project.id}
                  className="bg-purple-500 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:rotate-1"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-purple-100 mb-4">
                      {project.description}
                    </p>
                    <div className="flex justify-between">
                      <button className="bg-white text-purple-500 px-4 py-2 rounded-full hover:bg-purple-100 transition-colors duration-300">
                        <ExternalLink className="inline-block mr-2" size={16} />
                        Live Demo
                      </button>
                      <button className="bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-800 transition-colors duration-300">
                        <Github className="inline-block mr-2" size={16} />
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              );
            case 17:
              return (
                <div
                  key={project.id}
                  className="bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-pink-100 mb-4">{project.description}</p>
                    <div className="flex justify-between">
                      <button className="bg-white text-pink-500 px-4 py-2 rounded hover:bg-pink-100 transition-colors duration-300">
                        <ExternalLink className="inline-block mr-2" size={16} />
                        Live Demo
                      </button>
                      <button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition-colors duration-300">
                        <Github className="inline-block mr-2" size={16} />
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              );
            case 18:
              return (
                <div
                  key={project.id}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex justify-between">
                      <button className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-200 transition-colors duration-300">
                        <ExternalLink className="inline-block mr-2" size={16} />
                        Live Demo
                      </button>
                      <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-300">
                        <Github className="inline-block mr-2" size={16} />
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              );
            case 19:
              return (
                <div
                  key={project.id}
                  className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-yellow-100 mb-4">
                      {project.description}
                    </p>
                    <div className="flex justify-between">
                      <button className="bg-white text-yellow-500 px-4 py-2 rounded hover:bg-yellow-100 transition-colors duration-300">
                        <ExternalLink className="inline-block mr-2" size={16} />
                        Live Demo
                      </button>
                      <button className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition-colors duration-300">
                        <Github className="inline-block mr-2" size={16} />
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default PortfolioPage;
