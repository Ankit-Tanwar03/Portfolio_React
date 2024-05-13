import React, { useState } from "react";
import { Logo } from "./index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isActiveHome, setIsActiveHome] = useState(false);
  const [isActiveAbout, setIsActiveAbout] = useState(false);
  const [isActiveProjects, setIsActiveProjects] = useState(false);
  const [isActiveContact, setIsActiveContact] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickHome = () => {
    Home;
    const HomeSection = document.getElementById("Home");
    if (Home) {
      const scroll = HomeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickAbout = () => {
    const AboutSection = document.getElementById("About");
    if (About) {
      const scroll = AboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickProjects = () => {
    const ProjectsSection = document.getElementById("Projects");
    if (Projects) {
      const scroll = ProjectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickContact = () => {
    const ContactSection = document.getElementById("Contact");
    if (Contact) {
      const scroll = ContactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-blue-50 shadow-lg fixed top-0 left-0 right-0 z-50 py-1 px-6 lg:px-24 bg-opacity-50 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between">
        <div
          className={`${isMenuOpen ? "hidden" : "flex items-center"}`}
          onClick={() => {
            handleClickHome();
            setIsActiveHome(true);
            setIsActiveAbout(false);
            setIsActiveProjects(false);
            setIsActiveContact(false);
          }}
        >
          <Logo />
        </div>
        <ul
          className={`${
            isMenuOpen
              ? "h-screen w-screen flex flex-col items-center justify-between"
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
              <FontAwesomeIcon
                icon={faX}
                className="absolute top-2 right-2 lg:top-10 lg:right-10"
              />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </li>
          <li
            className={`text-gray-900 font-semibold text-lg hover:text-blue-700 transition duration-300 ease-in-out cursor-pointer lg:block ${
              isMenuOpen ? "block mb-4" : "hidden"
            } ${isActiveHome ? "text-red-700" : "text-gray-900"}`}
            onClick={() => {
              handleClickHome();
              setIsActiveHome(true);
              setIsActiveAbout(false);
              setIsActiveProjects(false);
              setIsActiveContact(false);
            }}
          >
            Home
          </li>
          <li
            className={`text-gray-900 font-semibold text-lg hover:text-blue-700 transition duration-300 ease-in-out cursor-pointer lg:block ${
              isMenuOpen ? "block mb-4" : "hidden"
            } ${isActiveAbout ? "text-red-700" : "text-gray-900"}`}
            onClick={() => {
              handleClickAbout();
              setIsActiveHome(false);
              setIsActiveAbout(true);
              setIsActiveProjects(false);
              setIsActiveContact(false);
            }}
          >
            About
          </li>
          <li
            className={`text-gray-900 font-semibold text-lg hover:text-blue-700 transition duration-300 ease-in-out cursor-pointer lg:block ${
              isMenuOpen ? "block mb-4" : "hidden"
            } ${isActiveProjects ? "text-red-700" : "text-gray-900"}`}
            onClick={() => {
              handleClickProjects();
              setIsActiveHome(false);
              setIsActiveAbout(false);
              setIsActiveProjects(true);
              setIsActiveContact(false);
            }}
          >
            Projects
          </li>
          <li
            className={`text-gray-900 font-semibold text-lg hover:text-blue-700 transition duration-300 ease-in-out cursor-pointer lg:block ${
              isMenuOpen ? "block mb-4" : "hidden"
            } ${isActiveContact ? "text-red-700" : "text-gray-900"}`}
            onClick={() => {
              handleClickContact();
              setIsActiveHome(false);
              setIsActiveAbout(false);
              setIsActiveProjects(false);
              setIsActiveContact(true);
            }}
          >
            Contact
          </li>

          {/* <li
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
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
