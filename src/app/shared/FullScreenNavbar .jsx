"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, SquareMenu, X } from "lucide-react";
import Link from "next/link";

const FullScreenNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  const menuVariants = {
    closed: {
      scale: 0,
      transition: {
        delay: 0.15,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <nav className="relative z-50 px-2 lg:px-16">
      <div className=" top-0 left-0 right-0 bg-transparent  p-4">
        <div className="flex justify-between items-center">
          <Link href={'/'} className="text-3xl font-extralight text-gray-950">
            MH
          </Link>
          <motion.button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-900"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <SquareMenu size={34} />
            {/* {isOpen ? <X size={34} /> : <SquareMenu size={34} />} */}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black text-white flex items-center justify-center"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.button
              onClick={toggleMenu}
              className="absolute px-2 lg:px-16 top-4 right-4 text-white hover:text-gray-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close menu"
            >
              <X size={34} />
            </motion.button>
            <motion.ul className="text-center">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  className="my-6"
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-3xl hover:text-gray-400 hover:font-semibold transition-colors duration-200 block"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default FullScreenNavbar;
