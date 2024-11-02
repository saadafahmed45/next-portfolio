"use client";
import SectionHeader from "../components/SectionHeader";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
    live_link: "https://shoperina-ecommerce.vercel.app/",
    client_link: "https://github.com/saadafahmed45/shoperina-ecommerce",
    server_link: "A full-stack online shopping solution",
    image: "/projects/shoperina.jpg",
    technology: ["Next js", "tailwind", "firebase", "Node.js", "MongoDB"],
  },
  {
    id: 5,
    title: "Dhaka Job Portal",
    description:
      "This job portal is developed using Next.js for a seamless front-end experience, paired with Express.js and MongoDB for fast and efficient data handling. The platform connects job seekers with employers through an intuitive interface, offering essential features such as:",
    Features:
      "Scalable Architecture: Ensures smooth performance as the user base grows.Optimized Routing: Enhances loading speed and overall user experience.SEO Friendly: Server-side rendering improves visibility on search engines. This application is ideal for businesses looking to streamline their recruitment processes and for job seekers eager to find their next opportunity.",
    live_link: "https://dhaka-jobs.vercel.app/",
    client_link: "https://github.com/saadafahmed45/dhaka-jobs-portal",
    server_link: "A full-stack online shopping solution",
    image: "/projects/job_portal.jpg",
    technology: ["Next js", "tailwind", "firebase", "Node.js", "MongoDB"],
  },
  {
    id: 6,
    title: "Maysha Elegance",
    description:
      "an innovative Shopify eCommerce store designed to offer a premium shoe shopping experience. SoleStyle features an extensive collection of shoes for every occasion, from casual wear to high-performance athletic shoes. The store's modern, user-friendly layout makes it easy for customers to find the perfect fit, style, and comfort level they’re seeking",
    Features:
      "Scalable Architecture: Ensures smooth performance as the user base grows.Optimized Routing: Enhances loading speed and overall user experience.SEO Friendly: Server-side rendering improves visibility on search engines. This application is ideal for businesses looking to streamline their recruitment processes and for job seekers eager to find their next opportunity.",
    live_link: "https://maysha-elegance-fashion.myshopify.com/",
    client_link: "https://maysha-elegance-fashion.myshopify.com/",
    server_link: "A full-stack online shopping solution",
    image: "/projects/maysha_ecom.jpg",
    pass: "demo",
    technology: ["Shopify", "Liquid", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    id: 7,
    title: "Essence Reverie",
    description:
      "A bespoke perfume eCommerce platform designed to deliver an immersive fragrance shopping experience. This Shopify site features a sleek, user-friendly interface that allows customers to browse and explore a curated selection of high-quality perfumes, each crafted to captivate the senses. With optimized product pages, intuitive filtering options, and engaging visuals, Essence Reverie enhances the discovery process, helping customers find their perfect scent. Integrated with secure payment gateways and responsive across devices, the website ensures seamless transactions and provides a delightful shopping experience. Tailored to reflect the elegance of the brand, the site’s aesthetic captures the luxurious essence of premium perfumes.",
    Features:
      "Personalized Recommendations: Fragrance suggestions based on customer preferences.Detailed Scent Profiles: Descriptions of top, middle, and base notes for each perfume.Scent Finder Quiz: Interactive quiz to help customers find their ideal fragrance.High-Quality Visuals: Images and videos showcasing the products and packaging.Customer Reviews: Authentic feedback from other buyers.Wishlist Feature: Save favorite products for future purchases.Sample Box Subscription: Monthly sample options for scent discovery.Promotions & Discounts: Automated seasonal offers and bundle deals.Social Sharing: Easy sharing on social media for increased reachLoyalty Program: Points-based rewards for loyal customersSecure Checkout: Multiple, safe payment options.Mobile Optimization: Smooth experience on all devices.",
    live_link: "https://essence-reverie.myshopify.com/",
    client_link: "https://essence-reverie.myshopify.com/",
    server_link: "A full-stack online shopping solution",
    image: "/projects/esens_shop.jpg",
    pass: "demo",
    technology: ["Shopify", "Liquid", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    id: 8,
    title: "Web Aid Shop",
    description:
      "A bespoke perfume eCommerce platform designed to deliver an immersive fragrance shopping experience. This Shopify site features a sleek, user-friendly interface that allows customers to browse and explore a curated selection of high-quality perfumes, each crafted to captivate the senses. With optimized product pages, intuitive filtering options, and engaging visuals, Essence Reverie enhances the discovery process, helping customers find their perfect scent. Integrated with secure payment gateways and responsive across devices, the website ensures seamless transactions and provides a delightful shopping experience. Tailored to reflect the elegance of the brand, the site’s aesthetic captures the luxurious essence of premium perfumes.",
    Features:
      "Personalized Recommendations: Fragrance suggestions based on customer preferences.Detailed Scent Profiles: Descriptions of top, middle, and base notes for each perfume.Scent Finder Quiz: Interactive quiz to help customers find their ideal fragrance.High-Quality Visuals: Images and videos showcasing the products and packaging.Customer Reviews: Authentic feedback from other buyers.Wishlist Feature: Save favorite products for future purchases.Sample Box Subscription: Monthly sample options for scent discovery.Promotions & Discounts: Automated seasonal offers and bundle deals.Social Sharing: Easy sharing on social media for increased reachLoyalty Program: Points-based rewards for loyal customersSecure Checkout: Multiple, safe payment options.Mobile Optimization: Smooth experience on all devices.",
    live_link: "https://webaidshop.myshopify.com/",
    client_link: "https://webaidshop.myshopify.com/",
    server_link: "A full-stack online shopping solution",
    image: "/projects/webaid_shop.jpg",
    pass: "demo",
    technology: ["Shopify", "Liquid", "HTML", "CSS", "Tailwind CSS"],
  },
];
const PortfolioPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="px-2 py-8 lg:py-8 lg:px-16">
      <SectionHeader headerText="Portfolio" />
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((item, index) => (
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
    </div>
  );
};

export default PortfolioPage;
