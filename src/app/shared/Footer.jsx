import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#fdf6e3] border-t border-gray-200">
      <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extralight text-slate-900 hover:text-[#3B966A] transition-colors">
          MH
        </Link>

        {/* Copyright */}
        <p className="text-sm text-slate-500 text-center">
          © {currentYear}{" "}
          <span className="font-medium text-slate-700">Mohammad Haolader</span>
          . All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/saadafahmed45"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 hover:text-[#3B966A] transition-colors duration-200 hover:scale-110 inline-block"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammadh-/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 hover:text-[#3B966A] transition-colors duration-200 hover:scale-110 inline-block"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~0108b0d1886edd5892?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Upwork"
            className="text-slate-500 hover:text-[#3B966A] transition-colors duration-200 hover:scale-110 inline-block"
          >
            <FaSquareUpwork className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
