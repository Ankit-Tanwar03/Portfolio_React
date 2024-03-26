import React from "react";
import { homeGreetings, socialLinks, images } from "../../Portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { Decoration } from "../Components";

function Home() {
  function ScrollToTop() {
    useEffect(() => {
      const scrollToTop = () => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
      };

      scrollToTop();
    }, []);
  }

  return (
    <div className="h-screen mt-16 lg:mt-[60px] lg:h-[calc(100vh-60px)] bg-gray-100">
      <Decoration />
      <div className="h-full flex flex-col-reverse justify-center lg:flex-row items-center lg:justify-between  px-6 lg:px-48 z-10 relative">
        <div className="mb-10 lg:mb-0 lg:mr-10">
          <div>
            <h1 className="text-3xl lg:text-6xl text-gray-800 font-semibold">
              {homeGreetings.title}
            </h1>
            <p className="mt-4 lg:mt-10 text-lg lg:text-xl text-gray-700 font-medium">
              {homeGreetings.description}
            </p>
          </div>
          <ul className="flex flex-row mt-4 lg:mt-10 text-2xl lg:text-4xl text-gray-900 ">
            <li className="mr-4 lg:mr-8 hover:text-red-700 transition duration-300 ease-in-out cursor-pointer">
              <a href={socialLinks.GitHub}>
                <FontAwesomeIcon icon={faSquareGithub} />
              </a>
            </li>
            <li className="mr-2 lg:mr-8 hover:text-red-700 transition duration-300 ease-in-out cursor-pointer">
              <a href={socialLinks.LinkedIn}>
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
