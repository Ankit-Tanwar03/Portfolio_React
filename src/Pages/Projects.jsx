import React from "react";
import { Cards } from "../Components";
import { cards } from "../../Portfolio";

function Projects() {
  return (
    <div
      className="flex flex-col items-center justify-center bg-gray-800 h-full border-b-[1px] border-yellow-700"
      id="Projects"
    >
      <h1 className="mt-20 text-2xl lg:text-3xl text-white font-bold">
        Explore Projects
      </h1>
      <p className="mt-5 mb-5 text-xl text-center text-blue-300 font-medium">
        Each Project is unique piece of development.
      </p>
      <div className="flex flex-row flex-wrap items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 lg:gap-y-10">
        {[...cards].reverse().map((card, index) => (
          <Cards
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            liveLink={card.liveLink}
            gitLink={card.gitLink}
            icons={card.icons}
            isIndexOdd={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
