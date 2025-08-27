import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
