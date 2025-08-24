import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Homepage from "../pages/Homepage";
import NotFoundPage from "../pages/NotFoundPage";

// Destination Pages
import Moon from "../pages/Destination/Moon";
import Mars from "../pages/Destination/Mars";
import Europa from "../pages/Destination/Europa";
import Titan from "../pages/Destination/Titan";

// Crew Pages
import CrewA from "../pages/Crew/CrewA";
import CrewB from "../pages/Crew/CrewB";
import CrewC from "../pages/Crew/CrewC";
import CrewD from "../pages/Crew/CrewD";

// Technology Pages
import TechA from "../pages/Technology/TechA";
import TechB from "../pages/Technology/TechB";
import TechC from "../pages/Technology/TechC";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route index element={<Homepage />} />

        {/* Destination Pages */}
        <Route path="/destination">
          <Route index element={<Moon />} />
          <Route path="moon" element={<Moon />} />
          <Route path="mars" element={<Mars />} />
          <Route path="europa" element={<Europa />} />
          <Route path="titan" element={<Titan />} />
        </Route>

        {/* Crew Pages */}
        <Route path="/crew">
          <Route path="crew-A" element={<CrewA />} />
          <Route path="crew-B" element={<CrewB />} />
          <Route path="crew-C" element={<CrewC />} />
          <Route path="crew-D" element={<CrewD />} />
        </Route>

        {/* Technology Pages */}
        <Route path="/technology">
          <Route path="tech-A" element={<TechA />} />
          <Route path="tech-B" element={<TechB />} />
          <Route path="tech-C" element={<TechC />} />
        </Route>

        {/* Not Found Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
