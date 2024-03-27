import React from "react";
import { Cards } from "../Components";
import { cards } from "../../Portfolio";

function Projects() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50">
      <h1 className="mt-[60px] text-2xl text-blue-700 font-bold mb-6">
        Explore Projects
      </h1>
      <p className="mt-5 mb-5 text-xl text-center text-gray-700 font-medium">
        Each Project is unique piece of development.
      </p>
      <div className="flex flex-row flex-wrap items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32">
        {cards.map((card, index) => (
          <Cards
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            liveLink={card.liveLink}
            gitLink={card.gitLink}
            icons={card.icons}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
