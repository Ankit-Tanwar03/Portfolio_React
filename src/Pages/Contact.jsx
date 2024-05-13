import React from "react";
import { contact, socialLinks } from "../../Portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faSquareEnvelope,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className="bg-white h-full" id="Contact">
      <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start mt-10 lg:mt-20 px-6 lg:px-96 pb-20">
        <h1 className="text-2xl lg:text-4xl text-blue-700 font-bold text-center lg:text-left">
          {contact.title}
        </h1>
        <p className="mt-4 lg:mt-8 text-lg lg:text-2xl text-gray-700 font-medium text-center lg:text-left">
          {contact.description}
        </p>
        <ul className="flex flex-row mt-8 lg:mt-12 w-full justify-center lg:justify-start text-xl lg:text-3xl">
          <li className="mr-4 w-12 h-12 lg:w-16 lg:h-16 hover:text-green-800 transition duration-300 ease-in-out cursor-pointer text-gray-900">
            <span className="flex items-center justify-center h-full w-full rounded-full bg-white shadow-lg shadow-cyan-500/50 transform transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50">
              <a href={socialLinks.GitHub} target="blank">
                <FontAwesomeIcon icon={faSquareGithub} />
              </a>
            </span>
          </li>

          <li className="mr-4 w-12 h-12 lg:w-16 lg:h-16 hover:text-green-800 transition duration-300 ease-in-out cursor-pointer text-blue-700">
            <span className="flex items-center justify-center h-full w-full rounded-full bg-white shadow-lg shadow-cyan-500/50 transform transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50">
              <a href={socialLinks.LinkedIn} target="blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </span>
          </li>
          <li className="mr-4 w-12 h-12 lg:w-16 lg:h-16 hover:text-green-800 transition duration-300 ease-in-out cursor-pointer text-red-700">
            <span className="flex items-center justify-center h-full w-full rounded-full bg-white shadow-lg shadow-cyan-500/50 transform transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50">
              <a href={socialLinks.Gmail} target="blank">
                <FontAwesomeIcon icon={faSquareEnvelope} />
              </a>
            </span>
          </li>
        </ul>
        <div className="w-full mt-6 lg:mt-8">
          <div className="flex items-center justify-center lg:justify-start">
            <ul className="flex flex-row w-20 lg:w-24 text-lg lg:text-2xl">
              <li className="mr-4 w-12 h-12 lg:w-16 lg:h-16 hover:text-green-800 transition duration-300 ease-in-out cursor-pointer text-gray-900">
                <span className="flex items-center justify-center h-full w-full rounded-full bg-white shadow-lg shadow-cyan-500/50 transform transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50">
                  <a href={socialLinks.GitHub} target="blank">
                    <FontAwesomeIcon icon={faMapLocationDot} />
                  </a>
                </span>
              </li>
            </ul>
            <div className="mt-2 lg:mt-0">
              <h1 className="text-base lg:text-lg text-blue-700 font-bold">
                Location
              </h1>
              <p className="text-sm lg:text-base text-gray-700 font-medium">
                Warsaw, Poland
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
