import React from "react";
import europa from "../../assets/destination/image-europa.png";
import { NavLink } from "react-router-dom";

const Europa = () => {
  const LinkClass = ({ isActive }) =>
    `relative pb-3 transition-all duration-300 font-BarlowCondensed uppercase text-white tracking-[2px]
   after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:transition-all after:duration-300
   ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`;

  return (
    <main className="destination min-h-screen w-full overflow-x-hidden relative">
      <div className="max-w-screen-2xl w-full mx-auto px-6 lg:px-16 xl:px-24 min-h-[80vh] lg:min-h-[70vh] pt-24 lg:pt-32">
        {/* Header */}
        <div className="mt-16 sm:mt-28 lg:mt-0 flex items-center text-white font-BarlowCondensed text-[18px] sm:text-[28px] ml-2 lg:ml-16">
          <span className="opacity-25">01</span>
          <p className="ml-3 uppercase font-light tracking-[4px]">
            pick your destination
          </p>
        </div>

        <section className="mt-5 pt-10 lg:pt-0 lg:ml-10 flex flex-col lg:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="lg:w-[60%]">
            <img src={europa} alt="Moon" className="max-sm:w-[150px]" />
          </div>

          <div className="flex flex-col space-y-3 items-center lg:items-start lg:ml-20 lg:w-[60%]">
            {/* Links */}
            <div className="flex flex-row items-center gap-4 sm:gap-9">
              <NavLink to="/destination/moon" className={LinkClass}>
                Moon
              </NavLink>
              <NavLink to="/destination/mars" className={LinkClass}>
                Mars
              </NavLink>
              <NavLink to="/destination/europa" className={LinkClass}>
                Europa
              </NavLink>
              <NavLink to="/destination/titan" className={LinkClass}>
                Titan
              </NavLink>
            </div>

            <div className="pt-6 text-center lg:text-left">
              <h1 className="font-Bellefair text-[56px] sm:text-[96px] uppercase text-white leading-none">
                Europa
              </h1>
              <p className="text-Blue300 font-Barlow px-7 sm:px-0 sm:text-[18px] max-w-[480px] lg:max-w-[70%] xl:max-w-[80%]">
                The smallest of the four Galilean moons orbiting Jupiter, Europa
                is a winter lover’s dream. With an icy surface, it’s perfect for
                a bit of ice skating, curling, hockey, or simple relaxation in
                your snug wintery cabin.
              </p>
            </div>

            {/* Horizontal Line */}
            <div className="flex pt-4 pb-5 mx- px-8 sm:px-0">
              <span className="h-0.5 w-[514px] lg:w-[445px] bg-white opacity-25"></span>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-8 sm:gap-16 text-white uppercase text-center sm:text-left">
              <div>
                <span className="font-BarlowCondensed tracking-[2px] text-Blue300">
                  Avg. Distance
                </span>
                <p className="font-Bellefair text-[28px] mt-2">628 Mil.km</p>
              </div>
              <div>
                <span className="font-BarlowCondensed tracking-[2px] text-Blue300">
                  Est. travel time
                </span>
                <p className="font-Bellefair text-[28px] mt-2">3 Years</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Europa;
