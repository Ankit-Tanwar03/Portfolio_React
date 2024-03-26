import React from "react";
import "./Logo.css";
import { homeGreetings } from "../../../Portfolio";

function Logo() {
  return (
    <div>
      <h3 className="text-gray-900 font- text-[40px] hover:text-red-700 transition duration-300 ease-in-out cursor-pointer">
        {homeGreetings.name}
      </h3>
    </div>
  );
}

export default Logo;
