import React from "react";
import SectionHeader from "../components/SectionHeader";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export const projectsData = [
  {
    id: 1,
    title: "Ira Fasion",
    description:
      "This project involves building a comprehensive eCommerce platform designed to offer users a seamless shopping experience. The website features product listings, shopping carts, payment integration, and user account management. The focus is on scalability, security, and user-friendliness.",
    Features:
      "Product Listings: Display products with detailed descriptions, prices, and reviews.Shopping Cart: Allows users to add items, view totals, and proceed to checkout.Payment Gateway Integration:Secure payment options including credit cards and digital wallets.User Accounts:Allows users to sign up, log in, and manage their orders.Product Search and Filters: Helps users find products quickly with filters for categories, price, and ratings.Responsive Design: Optimized for both desktop and mobile devices to enhance user experience.",
    live_link: "https://ira-fashion.vercel.app/",
    client_link: "https://github.com/saadafahmed45/ira-fashion-clients",
    server_link: "https://github.com/saadafahmed45/ira-fashion-server",
    image: "/projects/ira_fasion.jpg",
    technology: ["Next js", "tailwind", "firebase", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Hotel Relex",
    description:
      "Hotel Relex is a fully functional hotel booking platform that allows users to search for hotels, view details, book rooms, and make payments online. The site was built with a focus on user experience and backend integration, ensuring a smooth and secure booking process.",
    Features:
      "Hotel Search Functionality: Users can search for hotels by location, check-in and check-out dates, and number of guests.Room Availability: Displays available rooms with pricing and details.Booking System: Users can book rooms directly through the website.Payment Gateway Integration: Secure online payment options, including credit cards and digital wallets.User Accounts: Option for users to create accounts, view booking history, and manage reservations.Responsive Design: Mobile-friendly and optimized for different devices.",
    live_link: "https://hotel-relex.vercel.app/",
    client_link: "https://github.com/saadafahmed45/hotel-relex-client",
    server_link: "https://github.com/saadafahmed45/hotel-relex-servern",
    image: "/projects/hotel_relex.jpg",
    technology: ["Next js", "tailwind", "firebase", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    title: "Photo Plex",
    description: "A full-stack online shopping solution",
    live_link: "https://photo-plex.vercel.app/",
    client_link: "https://github.com/saadafahmed45/photo-plex-client",
    server_link: "A full-stack online shopping solution",
    image: "/projects/photo_plex.jpg",
    technology: ["Next js", "tailwind", "firebase", "Node.js", "MongoDB"],
  },
  {
    id: 4,
    title: "Shoperina",
    description:
      "A full-stack online eCommerce platform designed to offer users a seamless shopping experience. The website features product listings, shopping carts, payment integration, and user account management. The focus is on scalability, security, and user-friendliness.",
    Features:
      "Product Listings: Display products with detailed descriptions, prices, and reviews.Shopping Cart: Allows users to add items, view totals, and proceed to checkout.Payment Gateway Integration:Secure payment options including credit cards and digital wallets.User Accounts:Allows users to sign up, log in, and manage their orders.Product Search and Filters: Helps users find products quickly with filters for categories, price, and ratings.Responsive Design: Optimized for both desktop and mobile devices to enhance user experience.",
    live_link: "A full-stack online shopping solution",
    client_link: "A full-stack online shopping solution",
    server_link: "A full-stack online shopping solution",
    image: "/projects/shoperina.jpg",
    technology: ["Next js", "tailwind", "firebase", "Node.js", "MongoDB"],
  },
];
const PortfolioPage = () => {
  return (
    <div className="px-2 py-8 lg:py-8 lg:px-4">
      <SectionHeader headerText="Portfolio" />
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((item, index) => (
          <div
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
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Project Details
                </Link>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-500 mb-4">
                Real-time financial data visualization for a fintech startup.
              </p>
              <div className="flex flex-wrap gap-2">
                {item.technology?.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-gray-200 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
