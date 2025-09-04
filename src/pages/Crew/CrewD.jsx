import React from "react";
import anousheh from "../../assets/crew/image-anousheh-ansari.png";
import { NavLink } from "react-router-dom";

const CrewD = () => {
  const LinkClass = ({ isActive }) =>
    `h-[14px] w-[14px] rounded-full
   ${isActive ? "bg-white" : "bg-white/50 opacity-40"}`;

  return (
    <main className="crew min-h-screen w-full overflow-x-hidden relative">
      <div className="max-w-screen-2xl w-full mx-auto px-6 lg:px-16 xl:px-24 min-h-[80vh] lg:min-h-[70vh] pt-24 lg:pt-32">
        {/* Header */}
        <div className="mt-16 sm:mt-28 lg:mt-0 flex items-center text-white font-BarlowCondensed text-[18px] sm:text-[28px] ml-2 lg:ml-16">
          <span className="opacity-25">02</span>
          <p className="ml-3 uppercase font-light tracking-[4px]">
            Meet your crew
          </p>
        </div>

        <section className="mt-5 pt-10 lg:pt-0 lg:ml-16 flex flex-col lg:flex-row items-center gap-10">
          <div className="pt-6 text-center lg:text-left lg:w-[50%]">
            <span className="text-white opacity-50 text-[24px] uppercase font-Bellefair">
              Flight Engineer
            </span>
            <h1 className="text-white text-[32px] sm:text-[56px] uppercase font-Bellefair">
              Anousheh Ansari
            </h1>
            <p className="text-Blue300 font-Barlow text-[18px] lg:max-w-[70%] xl:max-w-[90%]">
              Anousheh Ansari is an Iranian American engineer and co-founder of
              Prodea Systems. Ansari was the fourth self-funded space tourist,
              the first self-funded woman to fly to the ISS, and the first
              Iranian in space.
            </p>

            {/* Pagination */}
            <div className="mt-14 lg:mt-28 flex flex-row justify-center lg:justify-start items-center gap-8">
              <NavLink to="/crew/crew-A" className={LinkClass}></NavLink>
              <NavLink to="/crew/crew-B" className={LinkClass}></NavLink>
              <NavLink to="/crew/crew-C" className={LinkClass}></NavLink>
              <NavLink to="/crew/crew-D" className={LinkClass}></NavLink>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-[55%]">
            <img src={anousheh} alt="Anousheh" className="max-sm:w-[180px]" />
          </div>
        </section>
      </div>
    </main>
  );
};

export default CrewD;
