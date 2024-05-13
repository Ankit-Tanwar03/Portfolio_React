import React from "react";
import { images } from "../../Portfolio";
import { about } from "../../Portfolio";

function About() {
  return (
    <div className="h-screen bg-white" id="About">
      <div className="h-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-48">
        <div className="flex flex-row items-center justify-start lg:mr-10">
          <img
            className="w-[300px] md:w-[400px] lg:w-[3000px]"
            src={images.About}
            alt="About-Image"
          />
        </div>
        <div className="flex flex-col items-start ml-0 lg:ml-10">
          <h1 className="text-2xl lg:text-3xl text-blue-700 font-bold">
            {about.heading}
          </h1>
          <p className="mt-5 lg:mt-10 text-lg lg:text-xl text-gray-800 font-medium">
            {about.title}
          </p>
          <p className="mt-5 lg:mt-10 text-base lg:text-lg text-gray-700 font-medium">
            {about.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
