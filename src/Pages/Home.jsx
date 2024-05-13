import { React, useEffect } from "react";
import { homeGreetings, socialLinks, images } from "../../Portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { Decoration } from "../Components";

function Home() {
  useEffect(() => {
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }

    scrollToTop();
    return () => {
      window.removeEventListener("load", scrollToTop);
    };
  }, []);

  return (
    <div className="h-screen bg-gray-100" id="Home">
      <Decoration />
      <div className="h-full flex flex-col-reverse justify-center items-center lg:flex-row lg:justify-between px-6 lg:px-20 xl:px-44 z-10 relative">
        <div className="mb-10 lg:mb-0 lg:mr-10">
          <div>
            <h1 className="text-3xl lg:text-6xl text-gray-800 font-semibold">
              {homeGreetings.title}
            </h1>
            <p className="mt-4 lg:mt-10 text-lg lg:text-xl text-gray-700 font-medium">
              {homeGreetings.description}
            </p>
          </div>
          <ul className="flex flex-row justify-center mt-8 lg:mt-10 text-4xl text-gray-900  lg:justify-start">
            <li className="mr-4 lg:mr-6 hover:text-red-700 transition duration-300 ease-in-out cursor-pointer">
              <a href={socialLinks.GitHub} target="blank">
                <FontAwesomeIcon icon={faSquareGithub} />
              </a>
            </li>
            <li className="mr-4 lg:mr-6 hover:text-red-700 transition duration-300 ease-in-out cursor-pointer">
              <a href={socialLinks.LinkedIn} target="blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-start rounded-full p-1 border-[2px] border-gray-400 mb-20 lg:mb-0">
          <img
            className="w-52 h-52 lg:w-72 lg:h-72 rounded-full object-cover"
            src={images.Profile}
            alt="Profile-Image"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
