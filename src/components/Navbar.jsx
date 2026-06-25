import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MenuOverlay from "./MenuOverlay";
import logo from "../assets/images/logo.png";

const navItems = [
  { name: "HOME", id: "hero" },
  { name: "SERVICES", id: "services" },
  { name: "PILLARS", id: "pillars" },
  { name: "ABOUT", id: "about" },
  { name: "WAY FORWARD", id: "wayforward" },
  { name: "TEAM", id: "team" },
  { name: "CONTACT", id: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleItemClick = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const yOffset = -90;

      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      setMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] bg-transparent">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-20 h-24 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-shrink-0 cursor-pointer z-20"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              setMenuOpen(false);
            }}
          >
            <img
              src={logo}
              alt="Leela Films Logo"
              className="h-11 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10 xl:gap-12">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.4,
                }}
                onClick={() => handleItemClick(item.id)}
                className="group relative"
              >
                <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white transition-colors duration-300 group-hover:text-[#ea222d]">
                  {item.name}
                </span>

                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#ea222d] transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full bg-transparent border border-white/20 z-20"
            aria-label="Toggle Menu"
          >
            <div className="relative w-5 h-4">
              <motion.span
                animate={
                  menuOpen
                    ? { rotate: 45, top: 7 }
                    : { rotate: 0, top: 0 }
                }
                className="absolute left-0 w-full h-[2px] bg-white rounded-full"
              />

              <motion.span
                animate={{
                  opacity: menuOpen ? 0 : 1,
                }}
                className="absolute left-0 top-[7px] w-full h-[2px] bg-white rounded-full"
              />

              <motion.span
                animate={
                  menuOpen
                    ? { rotate: -45, top: 7 }
                    : { rotate: 0, top: 14 }
                }
                className="absolute left-0 w-full h-[2px] bg-white rounded-full"
              />
            </div>
          </motion.button>
        </div>
      </nav>

      <MenuOverlay
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;