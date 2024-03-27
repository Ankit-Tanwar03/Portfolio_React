import React from "react";

function Cards({ image, title, description, liveLink, gitLink, icons }) {
  return (
    <div className="w-full lg:w-[30vw] h-[80vh] flex flex-col lg:flex-col bg-white rounded-lg overflow-hidden shadow-md shadow-cyan-500/50 transform transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-950 m-10">
      <img
        src={image}
        alt="Card Image"
        className="w-full h-48 sm:h-56 lg:h-auto object-fill"
      />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <p className="text-gray-800 text-lg font-semibold mb-2">{title}</p>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex flex-wrap">
            <h2 className="mr-2">Technologies:</h2>
            {icons.map((icon, index) => (
              <span key={index} className={`${icon} mr-1 mt-1 w-7 h-7`}></span>
            ))}
          </div>
        </div>
        <div className="flex justify-start mt-3">
          <a
            href={liveLink}
            target="_blank"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-5"
          >
            Live Demo
          </a>
          <a
            href={gitLink}
            target="_blank"
            className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
