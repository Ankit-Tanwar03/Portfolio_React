import React from "react";
import { images } from "../../Portfolio";
import { about } from "../../Portfolio";

import {
  SiClerk,
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiAppwrite,
  SiDaisyui,
  SiPrisma,
  SiShadcnui,
  SiGit,
  SiCloudinary,
} from "react-icons/si";

function About() {
  return (
    <div
      className="min-h-screen h-full bg-gray-800 border-b-[1px] border-yellow-700 lg:pt-5"
      id="About"
    >
      <div className=" w-full h-full flex flex-col lg:flex-row items-center justify-between pb-10 px-6 lg:p-6 lg:px-20">
        <div className="lg:w-1/2 flex flex-row items-center justify-center">
          <img
            className="w-[300px] md:w-[400px] lg:w-[3000px]"
            src={images.About}
            alt="About-Image"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col items-start justify-center lg:mt-10 mt-0 lg:ml-0">
          <h1 className="text-2xl lg:text-3xl text-white font-bold text-center w-full lg:text-left">
            {about.heading}
          </h1>
          <p className="mt-5 text-lg lg:text-xl text-blue-300 font-medium ">
            {about.title}
          </p>
          <p className="mt-5  text-base lg:text-md text-gray-300">
            {about.description1}
          </p>
          <p className="mt-5 text-base lg:text-md text-gray-300">
            {about.description2}
          </p>
          <div className="mt-5 text-xl lg:text-md text-blue-300 font-bold underline underline-offset-2">
            Tech Stack
          </div>
          <div className="flex flex-row mt-5 flex-wrap gap-2">
            <div className="text-white text-center border-2 rounded-full w-40 py-2">
              <SiNextdotjs className="w-5 h-5 inline" />{" "}
              <span className="text-white">Next.js</span>
            </div>
            <div className="text-white text-center border-2 rounded-full w-40 py-2">
              <SiReact className="w-5 h-5 inline" />{" "}
              <span className="text-white">React</span>
            </div>
            <div className="text-white text-center border-2 rounded-full w-40 py-2">
              <SiJavascript className="w-5 h-5 inline" />{" "}
              <span className="text-white">JavaScript</span>
            </div>
            <div className="text-white text-center border-2 rounded-full w-40 py-2">
              <SiTailwindcss className="w-5 h-5 inline" />{" "}
              <span className="text-white">TailwindCSS</span>
            </div>
            <div className="text-white text-center border-2 rounded-full w-40 py-2">
              <SiHtml5 className="w-5 h-5 inline" />{" "}
              <span className="text-white">HTML</span>
            </div>
            <div className="text-white text-center border-2 rounded-full w-40 py-2">
              <SiCss3 className="w-5 h-5 inline" />{" "}
              <span className="text-white">CSS</span>
            </div>
            <div className="text-white text-center border-2 rounded-full w-40 py-2">
              <SiAppwrite className="w-5 h-5 inline" />{" "}
              <span className="text-white">Appwrite</span>
            </div>
            <div className="text-white text-center border-2 rounded-full w-40 py-2">
              <SiClerk className="w-5 h-5 inline" />{" "}
              <span className="text-white">Clerk</span>
            </div>
            <div className="text-white text-center border-2 rounded-full w-40 py-2">
              <SiMongodb className="w-5 h-5 inline" />{" "}
              <span className="text-white">MongoDB</span>
            </div>
            <div className="text-white text-center border-2 rounded-full w-40 py-2">
              <SiNodedotjs className="w-5 h-5 inline" />{" "}
              <span className="text-white">Node.js</span>
            </div>
            <div className="text-white text-center border-2 rounded-full w-40 py-2">
              <SiGithub className="w-5 h-5 inline" />{" "}
              <span className="text-white">GitHub</span>
            </div>
            <div className="text-white text-center border-2 rounded-full w-40 py-2">
              <SiGit className="w-5 h-5 inline" />{" "}
              <span className="text-white">Git</span>
            </div>
            <div className="text-white text-center border-2 rounded-full w-40 py-2">
              <SiPrisma className="w-5 h-5 inline" />{" "}
              <span className="text-white">Prisma</span>
            </div>
            <div className="text-white text-center border-2 rounded-full w-40 py-2">
              <SiDaisyui className="w-5 h-5 inline" />{" "}
              <span className="text-white">DaisyUI</span>
            </div>
            <div className="text-white text-center border-2 rounded-full w-40 py-2">
              <SiShadcnui className="w-5 h-5 inline" />{" "}
              <span className="text-white">ShadCN</span>
            </div>
            <div className="text-white text-center border-2 rounded-full w-40 py-2">
              <SiCloudinary className="w-5 h-5 inline" />{" "}
              <span className="text-white">Cloudinary</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
