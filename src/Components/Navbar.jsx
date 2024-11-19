import React, { useState, useEffect } from "react";
import { Logo } from "./index";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      closeMenu();
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = document.querySelectorAll(
      "#Home, #About, #Projects, #Contact"
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div
      className={`bg-gradient-to-t from-white to-gray-500 shadow-md shadow-white fixed top-0 left-0 right-0 z-50 py-2 px-6 lg:px-24 bg-opacity-60 backdrop-blur-md ${
        isMenuOpen ? "" : "rounded-full"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div
          className={`${isMenuOpen ? "hidden" : "flex items-center"}`}
          onClick={() => handleClick("Home")}
        >
          <Logo />
        </div>
        <ul
          className={`${
            isMenuOpen
              ? "h-screen w-screen flex flex-col items-center justify-center"
              : "flex flex-row items-center space-x-1 sm:space-x-6 transition-all duration-300 ease-in-out"
          }`}
        >
          <li
            onClick={toggleMenu}
            className={`text-gray-900 font-semibold text-lg hover:text-blue-700 transition duration-300 ease-in-out cursor-pointer ${
              isMenuOpen ? "lg:block" : "lg:hidden"
            }`}
          >
            {isMenuOpen ? (
              <IoCloseSharp className="absolute top-10 right-10 lg:top-16 lg:right-16 text-xl" />
            ) : (
              <FaBars />
            )}
          </li>
          {["Home", "About", "Projects", "Contact"].map((section) => (
            <li
              key={section}
              className={`text-gray-900 font-extrabold text-lg hover:text-blue-700 transition duration-300 ease-in-out cursor-pointer lg:block ${
                isMenuOpen ? "block mb-4" : "hidden"
              } ${
                activeSection === section ? "text-red-700" : "text-gray-900"
              }`}
              onClick={() => handleClick(section)}
            >
              {section}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
