import React, { useState } from "react";
import Logo from "../../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const LinkClass = ({ isActive }) =>
    `relative pb-9 transition-all duration-300
   after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:transition-all after:duration-300
   ${isActive ? "text-white after:w-full" : "after:w-0 hover:after:w-full"}`;

  return (
    <header className="absolute top-0 left-0 right-0 z-40">
      <div className="w-full max-w-screen-2xl mx-auto">
        <nav className="relative top-7 bg-transparent flex flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 ml-8 sm:ml-10">
            <img src={Logo} alt="Logo" />
          </div>

          {/* Horizontal Line */}
          <div className="hidden lg:block flex-grow relative mx-8">
            <span className="absolute left-14 z-50 w-full h-0.5 bg-white opacity-25"></span>
          </div>

          {/* Links */}
          <div className="hidden sm:block bg-white/5 backdrop-blur-xl px-6 sm:px-8 lg:px-16 xl:px-20 py-8 flex-shrink-0 h-[96px] lg:w-[730px]">
            <div className="flex flex-row justify-between items-center gap-4 sm:gap-6 lg:gap-8 text-[14px] sm:text-[16px] lg:text-[18px] uppercase text-white font-BarlowCondensed tracking-widest">
              <NavLink to="/" className={LinkClass}>
                <span className="font-semibold mr-2"> 00</span> Home
              </NavLink>
              <NavLink to="/destination/moon" className={LinkClass}>
                <span className="font-semibold mr-2"> 01</span> Destination
              </NavLink>
              <NavLink to="crew/crew-A" className={LinkClass}>
                <span className="font-semibold mr-2"> 02</span> Crew
              </NavLink>
              <NavLink to="tech-tech-A" className={LinkClass}>
                <span className="font-semibold mr-2"> 03</span> Technology
              </NavLink>
            </div>
          </div>

          {/* Mobile Nav */}
          <div className="sm:hidden flex-shrink-0">
            <button
              onClick={toggleMenu}
              className="relative right-8 w-8 h-[21px] flex flex-col justify-between items-center group"
            >
              <div
                className={clsx(
                  "w-8 h-[2px] bg-white transform transition duration-300 ease-in-out overflow-y-auto",
                  isOpen ? "rotate-45 translate-y-[10px]" : ""
                )}
              />
              <div
                className={clsx(
                  "w-8 h-[2px] bg-white transition duration-300 ease-in-out",
                  isOpen ? "opacity-0" : "opacity-100"
                )}
              />
              <div
                className={clsx(
                  "w-8 h-[2px] bg-white transform transition duration-300 ease-in-out",
                  isOpen ? "-rotate-45 -translate-y-[10px]" : ""
                )}
              />
            </button>

            <div
              className={clsx(
                "fixed top-0 right-0 h-screen w-2/3 max-w-xs bg-white/5 backdrop-blur-xl text-white uppercase tracking-widest transform transition-transform duration-500 overflow-hidden",
                isOpen ? "translate-x-0 z-50" : "translate-x-full z-50"
              )}
            >
              <button
                onClick={toggleMenu}
                className="mt-10 right-8 absolute w-8 h-[21px] flex flex-col justify-between items-center group"
              >
                <div
                  className={clsx(
                    "w-8 h-[2px] bg-white transform transition duration-300 ease-in-out",
                    isOpen ? "rotate-45 translate-y-[10px]" : ""
                  )}
                />
                <div
                  className={clsx(
                    "w-8 h-[2px] bg-white transition duration-300 ease-in-out",
                    isOpen ? "opacity-0" : "opacity-100"
                  )}
                />
                <div
                  className={clsx(
                    "w-8 h-[2px] bg-white transform transition duration-300 ease-in-out",
                    isOpen ? "-rotate-45 -translate-y-[10px]" : ""
                  )}
                />
              </button>

              <div className="flex flex-col mt-32 px-5 gap-7 text-[18px] uppercase text-white font-BarlowCondensed tracking-widest ">
                <NavLink to="/" onClick={() => setIsOpen(false)}>
                  <span className="font-semibold mr-2"> 00</span> Home
                </NavLink>
                <NavLink
                  to="/destination/moon"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="font-semibold mr-2"> 01</span> Destination
                </NavLink>
                <NavLink to="crew/crew-A" onClick={() => setIsOpen(false)}>
                  <span className="font-semibold mr-2"> 02</span> Crew
                </NavLink>
                <NavLink to="tech-tech-A" onClick={() => setIsOpen(false)}>
                  <span className="font-semibold mr-2"> 03</span> Technology
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
