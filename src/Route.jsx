import React from "react";
import { Navbar } from "./Components";
import { Outlet } from "react-router-dom";

function Route() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Route;
