import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-linear-to-r from-transparent to-transparent bg-opacity-30 backdrop-blur-md fixed w-full z-50 shadow-lg">
      {/* padding and margin from screen */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
        {/* centering content in navbar */}
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex text-white text-2xl font-semibold">
              Ryan's Portfolio
            </div>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <a
                href="#home"
                className="text-white font-semibold
                 hover:text-indigo-400 hover:underline hover:underline-offset-4 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                Home
              </a>
              <a
                href="#about"
                className="text-white font-semibold hover:text-indigo-400 hover:underline hover:underline-offset-4 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                About
              </a>
              <a
                href="#skills"
                className="text-white font-semibold
                 hover:text-indigo-400 hover:underline hover:underline-offset-4 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                Skills
              </a>
              <a
                href="#projects"
                className="text-white  font-semibold hover:text-indigo-400 hover:underline hover:underline-offset-4 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                Projects
              </a>
              <a
                href="#contact"
                className="text-white font-semibold hover:text-indigo-400 hover:underline hover:underline-offset-4 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
