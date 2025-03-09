import Link from 'next/link'
import React from 'react'
import { ExternalLink, Github } from "lucide-react";
const PortfolioCard = ({ data }) => {
    return (
        <div>
            <div
                data-aos="fade-up"
                key={data.id}
                className="bg-orange-50 rounded-lg shadow-md overflow-hidden"
            >
                <div className="relative group">
                    {/* Image */}
                    <img
                        src={data.image}
                        className="w-full h-48 object-cover"
                        alt={data.title}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Button */}
                    <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Link
                            href={`/portfolio/${data.id}`}
                            className="bg-[#3B966A] text-white py-2 px-4 rounded"
                        >
                            Project Details
                        </Link>
                    </div>
                </div>

                <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{data.title}</h3>
                    <p className="text-gray-500 mb-4">
                        {data.description.slice(0, 80)}..
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {data.technology?.map((tag, tagIndex) => (
                            <span
                                key={tagIndex}
                                className="px-2 py-1 bg-gray-100 rounded-full text-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    {/* button  */}
                    <div className="flex gap-4 text-[16px] lg:text-[14px] mt-4">
                        <a
                            href={data.live_link}
                            className="flex items-center text-red-600 hover:text-gray-700 hover:shadow-lg p-1 rounded-md"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ExternalLink className="mr-1" /> Live Site
                        </a>
                        <a
                            href={data.client_link}
                            className="flex items-center text-blue-600 hover:text-gray-700 hover:shadow-lg p-1 rounded-md"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="mr-1" /> Client Repo
                        </a>
                        <a
                            href={data.server_link}
                            className="flex items-center text-[#3B966A] hover:text-gray-700 hover:shadow-lg p-1 rounded-md"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="mr-1" /> Server Repo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard