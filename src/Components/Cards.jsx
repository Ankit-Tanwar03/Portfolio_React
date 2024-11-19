import React from "react";
import { SiGithub } from "react-icons/si";
import { IoIosPlayCircle } from "react-icons/io";
import { Tooltip } from "react-tooltip";

function Cards({
  isIndexOdd,
  image,
  title,
  description,
  liveLink,
  gitLink,
  icons,
}) {
  return (
    <div
      className={`sm:w-3/4 md:w-4/5 lg:w-full flex flex-col items-center lg:flex-row bg-transparent rounded-3xl overflow-hidden lg:overflow-visible transform transition-all ease-in-out duration-300 my-10 lg:h-80 group ${
        isIndexOdd ? "lg:flex-row-reverse" : ""
      }`}
    >
      <img
        src={image}
        alt="Card Image"
        className="w-full  lg:w-1/2 h-48 sm:h-56 lg:h-80 object-fill rounded-3xl group-hover:scale-105 transition-all ease-in-out duration-300  z-10 "
      />

      <div className="relative z-10 w-full lg:w-1/2 lg:max-h-80 p-6 bg-red-900 bg-opacity-20 backdrop-blur-md rounded-3xl group-hover:shadow-[0px_0px_100px_-40px_rgba(0,0,0,0.3)] group-hover:shadow-blue-600 transition-all ease-in-out duration-300">
        <div>
          <p className="text-xl font-bold text-yellow-300 mb-2">{title}</p>
          <p className="text-gray-200 mb-4">{description}</p>
          <div className="flex flex-wrap items-center">
            <h2 className="mr-2 text-lg font-semibold text-white">
              Technologies:
            </h2>
            {icons.map((icon, index) => (
              <span key={index} className="mx-2 mt-1 text-2xl text-white">
                {icon}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-start mt-4">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 bg-opacity-80 hover:bg-opacity-100 text-white font-semibold py-2 px-4 rounded-full mr-5 transition-all duration-300"
          >
            <IoIosPlayCircle className="inline mr-1 text-xl" /> Live Demo
          </a>

          <a
            href={gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black bg-opacity-80 hover:bg-opacity-100 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300"
          >
            <SiGithub className="inline mr-1 text-xl" /> GitHub
          </a>
        </div>
        <Tooltip id="HTML5" content="HTML5" place="top" />
        <Tooltip id="TailwindCSS" content="TailwindCSS" place="top" />
        <Tooltip id="React" content="React" place="top" />
        <Tooltip id="Vite" content="Vite" place="top" />
        <Tooltip id="ReactRouter" content="ReactRouter" place="top" />
        <Tooltip id="Appwrite" content="Appwrite" place="top" />
      </div>
    </div>
  );
}

export default Cards;
