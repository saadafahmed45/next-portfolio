"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { href: "/",          label: "Home"      },
  { href: "/#about",    label: "About"     },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/#contact",  label: "Contact"   },
];

const FullScreenNavbar = () => {
  const [isOpen,    setIsOpen]    = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const pathname = usePathname();

  /* ── scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── close drawer on route change ── */
  useEffect(() => { setIsOpen(false); }, [pathname]);

  /* ── lock body scroll when drawer open ── */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.replace("/#", "/"));
  };

  /* ── variants ── */
  const drawerVariants = {
    closed: { x: "100%", transition: { type: "tween", duration: 0.3, ease: "easeInOut" } },
    open:   { x: 0,      transition: { type: "tween", duration: 0.3, ease: "easeInOut" } },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 30 },
    open:   (i) => ({ opacity: 1, x: 0, transition: { delay: 0.1 + i * 0.07, duration: 0.3 } }),
  };

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          px-4 lg:px-20 py-3
          bg-[#fdf6e3]
          transition-all duration-300
          ${scrolled ? "shadow-md shadow-black/5 border-b border-gray-200/70" : "border-b border-transparent"}
        `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="text-2xl font-extralight text-slate-900 tracking-wider hover:text-[#3B966A] transition-colors duration-200"
          >
            MH
          </Link>

          {/* ── Desktop Menu ── */}
          <ul className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`
                      relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200
                      ${active
                        ? "text-[#3B966A]"
                        : "text-slate-700 hover:text-[#3B966A] hover:bg-[#3B966A]/5"
                      }
                    `}
                  >
                    {item.label}
                    {/* Active underline dot */}
                    {active && (
                      <motion.span
                        layoutId="nav-active-dot"
                        className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#3B966A]"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://drive.google.com/file/d/1y_okdy1_ZLvnAP3H_5qLIEMzPClyK1zp/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-5 py-2 text-sm font-semibold text-white bg-[#3B966A] rounded-full shadow-sm hover:bg-[#2d7554] hover:shadow-md hover:scale-105 transition-all duration-200"
            >
              Hire Me <ArrowUpRight size={14} />
            </a>
          </div>

          {/* ── Mobile Hamburger ── */}
          <motion.button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:text-[#3B966A] hover:bg-[#3B966A]/8 transition-colors"
            whileTap={{ scale: 0.9 }}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </motion.button>
        </div>
      </nav>

      {/* ── Spacer so content doesn't hide under fixed nav ── */}
      <div className="h-[57px]" />

      {/* ── Mobile Drawer Backdrop ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ── Mobile Drawer Panel ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="drawer"
            className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#fdf6e3] shadow-2xl flex flex-col"
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
              <span className="text-2xl font-extralight text-slate-900 tracking-wider">MH</span>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-slate-500 hover:text-[#3B966A] hover:bg-[#3B966A]/8 transition-colors"
                whileTap={{ scale: 0.9 }}
                aria-label="Close menu"
              >
                <X size={22} />
              </motion.button>
            </div>

            {/* Drawer Links */}
            <nav className="flex-1 px-4 py-8">
              <ul className="space-y-1">
                {menuItems.map((item, i) => {
                  const active = isActive(item.href);
                  return (
                    <motion.li
                      key={item.href}
                      custom={i}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`
                          flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200
                          ${active
                            ? "bg-[#3B966A]/10 text-[#3B966A] font-semibold"
                            : "text-slate-700 hover:bg-gray-100 hover:text-[#3B966A]"
                          }
                        `}
                      >
                        {/* Active indicator */}
                        {active && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3B966A] shrink-0" />
                        )}
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            {/* Drawer CTA */}
            <div className="px-6 pb-8 border-t border-gray-200 pt-6 space-y-3">
              <a
                href="https://drive.google.com/file/d/1y_okdy1_ZLvnAP3H_5qLIEMzPClyK1zp/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#3B966A] text-white font-semibold rounded-xl hover:bg-[#2d7554] transition-all text-sm shadow-md"
              >
                Hire Me <ArrowUpRight size={15} />
              </a>
              <a
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full py-3 border-2 border-[#3B966A] text-[#3B966A] font-semibold rounded-xl hover:bg-[#3B966A]/5 transition-all text-sm"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FullScreenNavbar;
