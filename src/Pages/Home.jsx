import { React, useEffect } from "react";
import { homeGreetings, socialLinks, images } from "../../Portfolio";
import { SiGithub, SiLinkedin } from "react-icons/si";
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
    <div className="h-screen bg-gray-800" id="Home">
      <Decoration />

      <div className="h-full w-full flex flex-col-reverse justify-center items-center lg:flex-row lg:justify-between px-6 lg:px-20 xl:px-32 z-10 relative border-b-[1px] border-yellow-700">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
          <div>
            <h1 className="text-3xl lg:text-6xl text-blue-200 font-semibold text-center lg:text-left">
              {homeGreetings.title}
            </h1>
            <p className="mt-4 lg:mt-10 text-lg lg:text-xl text-gray-100 font-medium text-center lg:text-left">
              {homeGreetings.description}
            </p>
          </div>
          <ul className="flex flex-row justify-center mt-8 lg:mt-10 text-4xl text-white  lg:justify-start">
            <li className="mr-4 lg:mr-6 hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">
              <a href={socialLinks.GitHub} target="blank">
                <SiGithub />
              </a>
            </li>
            <li className="mr-4 lg:mr-6 hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">
              <a href={socialLinks.LinkedIn} target="blank">
                <SiLinkedin />
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 flex items-center justify-center mb-10 lg:mb-0">
          <div className="rounded-full p-1 border-[2px] border-white">
            <img
              className="w-52 h-52 lg:w-72 lg:h-72 rounded-full object-cover"
              src={images.Profile}
              alt="Profile-Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
