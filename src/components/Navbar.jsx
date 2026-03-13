import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navitems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Project", href: "#project" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];
 
 {/*state for controlling menue bar  */}
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    
    <nav className="w-full fixed top-0  backdrop-blur-md border-b border-gray-800 z-50 text-white">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <a href="#home" className="text-xl font-bold tracking-widest text-white">
          TERNGU
        </a>

        {/* laptop Menu */}
        <div className="hidden md:flex space-x-8">
          {navitems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-secondary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* phone Menu Button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* phone Menu */}
      
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center pb-6 space-y-4 border-b border-gray-800 ">
          {navitems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:text-blue-500 text-lg"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;