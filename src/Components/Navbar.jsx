import React, { useState } from "react";
import { Logo } from "./index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-blue-50 shadow-lg fixed top-0 left-0 right-0 z-50 py-1 px-24 bg-opacity-50 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className={`${isMenuOpen ? "hidden" : "flex items-center"}`}>
          <Logo />
        </div>
        <ul
          className={`${
            isMenuOpen
              ? "h-[100vh] w-[100vw] flex flex-col items-center justify-center"
              : "flex flex-row items-center space-x-6 transition-all duration-300 ease-in-out"
          }`}
        >
          <li
            onClick={toggleMenu}
            className={`text-gray-900 font-semibold text-lg hover:text-blue-700 transition duration-300 ease-in-out cursor-pointer ${
              isMenuOpen ? "lg:block" : "lg:hidden"
            }`}
          >
            {isMenuOpen ? (
              <FontAwesomeIcon
                icon={faX}
                className="absolute top-10 right-10"
              />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </li>
          <li
            className={`text-gray-900 font-semibold text-lg hover:text-blue-700 transition duration-300 ease-in-out cursor-pointer lg:block ${
              isMenuOpen ? "block mb-4" : "hidden"
            }`}
          >
            Home
          </li>
          <li
            className={`text-gray-900 font-semibold text-lg hover:text-blue-700 transition duration-300 ease-in-out cursor-pointer lg:block ${
              isMenuOpen ? "block mb-4" : "hidden"
            }`}
          >
            About
          </li>
          <li
            className={`text-gray-900 font-semibold text-lg hover:text-blue-700 transition duration-300 ease-in-out cursor-pointer lg:block ${
              isMenuOpen ? "block mb-4" : "hidden"
            }`}
          >
            Projects
          </li>
          <li
            className={`text-gray-900 font-semibold text-lg hover:text-blue-700 transition duration-300 ease-in-out cursor-pointer lg:block ${
              isMenuOpen ? "block mb-4" : "hidden"
            }`}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
