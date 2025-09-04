import React from "react";
import { NavLink } from "react-router-dom";
import portrait from "../../assets/technology/image-space-capsule-portrait.jpg";
import landscape from "../../assets/technology/image-space-capsule-landscape.jpg";

const TechC = () => {
  const LinkClass = ({ isActive }) =>
    `h-[56px] w-[56px] lg:h-[80px] lg:w-[80px] rounded-full flex justify-center items-center font-Bellefair text-[32px]
   ${
     isActive
       ? "bg-white"
       : "bg-transparent text-white border border-gray-500 hover:border-white ease-in-out duration-300"
   }`;
  return (
    <main className="tech min-h-screen w-full overflow-x-hidden relative">
      <div className="max-w-screen-2xl w-full mx-auto lg:px-16 xl:px-24 min-h-[80vh] lg:min-h-[70vh] pt-24 lg:pt-32">
        <div className="mt-16 sm:mt-28 lg:mt-0 flex items-center text-white font-BarlowCondensed text-[18px] sm:text-[28px] ml-2 lg:ml-16">
          <span className="opacity-25">03</span>
          <p className="ml-3 uppercase font-light tracking-[4px]">
            Space launch 101
          </p>
        </div>

        <section className="mt-5 pt-10 lg:pt-0 lg:ml-16 flex flex-col-reverse lg:flex-row items-center ">
          <div className="flex flex-col lg:flex-row gap-10 items-center lg:w-[70%]">
            {/* Pagination */}
            <div className="lg:mt-10 flex flex-row lg:flex-col justify-center lg:justify-start items-center gap-8">
              <NavLink to="/technology/tech-A" className={LinkClass}>
                1
              </NavLink>
              <NavLink to="/technology/tech-B" className={LinkClass}>
                2
              </NavLink>
              <NavLink to="/technology/tech-C" className={LinkClass}>
                3
              </NavLink>
            </div>

            <div className="pt-6 text-center lg:text-left lg:w-[75%]">
              <span className="text-white opacity-50 text-[18px] sm:text-[32px] uppercase font-Bellefair">
                The terminology...
              </span>
              <h1 className="text-white text-[28px] sm:text-[56px] uppercase font-Bellefair">
                Space capsule
              </h1>
              <p className="max-lg:pb-5 max-lg:px-5 text-Blue300 font-Barlow sm:text-[18px] lg:max-w-[80%] xl:max-w-[90%]">
                A space capsule is an often-crewed spacecraft that uses a
                blunt-body reentry capsule to reenter the Earth's atmosphere
                without wings. Our capsule is where you'll spend your time
                during the flight. It includes a space gym, cinema, and plenty
                of other activities to keep you entertained.
              </p>
            </div>
          </div>

          {/* Img */}
          <div className="mb-10 lg:mb-0">
            <picture>
              <source media="(max-width: 1024px)" srcSet={landscape} />
              <img src={portrait} alt="Space Capsule Image" />
            </picture>
          </div>
        </section>
      </div>
    </main>
  );
};

export default TechC;
