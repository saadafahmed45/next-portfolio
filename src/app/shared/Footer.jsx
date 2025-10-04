import React from "react";
import { FaReddit, FaFacebookF, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#fdf6e3] text-gray-800">
      <div className="container mx-auto flex flex-col items-center justify-between p-6 space-y-4 sm:space-y-0 sm:flex-row">
        {/* Logo / Branding */}
        <div className="logo text-xl md:text-3xl font-extralight">
          <h2 className="sr-only">Mohammad Haolader</h2>
          <span>MH</span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600">
          © Copyright 2021. All Rights Reserved.
        </p>

        {/* Social Links */}
        <div className="flex -mx-2">
          {/* Reddit */}
          <a
            href="#"
            aria-label="Visit Reddit profile"
            className="mx-2 text-gray-600 hover:text-red-500 transition-colors duration-300"
          >
            <FaReddit className="w-5 h-5" />
          </a>

          {/* Facebook */}
          <a
            href="#"
            aria-label="Visit Facebook profile"
            className="mx-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <FaFacebookF className="w-5 h-5" />
          </a>

          {/* GitHub */}
          <a
            href="#"
            aria-label="Visit GitHub profile"
            className="mx-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
          >
            <FaGithub className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
