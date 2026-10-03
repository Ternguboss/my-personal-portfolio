import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navitems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#project" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0b0f19]/80 border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a 
          href="#home" 
          onClick={() => setActiveItem("Home")}
          className="text-base font-extrabold tracking-widest text-white hover:text-indigo-400 transition-colors uppercase"
        >
          TERNGU
        </a>

        {/* Laptop / Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navitems.map((item) => {
            const isActive = activeItem === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className={`text-sm font-medium transition-all duration-200 relative py-1 ${
                  isActive
                    ? "text-white font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-indigo-400 after:rounded-full"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl text-slate-300 hover:text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0b0f19]/95 backdrop-blur-xl border-b border-slate-800 px-6 py-6 space-y-4">
          {navitems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => {
                setActiveItem(item.name);
                setIsMenuOpen(false);
              }}
              className={`block text-base font-medium py-2 ${
                activeItem === item.name
                  ? "text-indigo-400 font-semibold"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;