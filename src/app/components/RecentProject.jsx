"use client";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { projectsData } from '../portfolio/page';
import SectionHeader from "./SectionHeader";

const RecentProject = () => {
    const allProducts = projectsData;

    const newProducts = allProducts.slice(-3).reverse();

    return (
        <div className="px-2 py-8 lg:py-8 lg:px-16">
            <SectionHeader headerText="Recent Project" />

            <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newProducts.map((item, index) => (
                    <div
                        data-aos="fade-up"
                        key={item.id}
                        className="bg-orange-50 rounded-lg shadow-md overflow-hidden"
                    >
                        <div className="relative group">
                            {/* Image */}
                            <img
                                src={item.image}
                                className="w-full h-48 object-cover"
                                alt={item.title}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Button */}
                            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Link
                                    href={`/portfolio/${item.id}`}
                                    className="bg-[#3B966A] text-white py-2 px-4 rounded"
                                >
                                    Project Details
                                </Link>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-500 mb-4">
                                {item.description.slice(0, 80)}..
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {item.technology?.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="px-2 py-1 bg-gray-100 rounded-full text-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-6">
                <Link href={'/portfolio'} className="px-4 py-2 font-semibold border rounded border-gray-800 text-gray-800">See all project</Link>
            </div>
        </div>
    )
}

export default RecentProject