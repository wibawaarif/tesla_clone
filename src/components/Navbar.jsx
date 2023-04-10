import React from "react";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";
import logo from "../../assets/tesla.svg";

const Navbar = ({ menu, scroll }) => {
  return (
    <header className="w-full fixed top-0 z-50 px-12 py-6 flex justify-between items-center">
      <Reveal effect="fadeInUp">
        <img className="w-36 cursor-pointer" src={logo} alt="logo" />
      </Reveal>
      <Fade>
        <nav className="flex ml-[5rem]">
          {menu.models.map((x, index) => (
            <button
              className="mx-1 cursor-pointer transition ease-in-out delay-150 duration-500 font-semibold tracking-wide text-[0.93rem] px-4 py-2 rounded hover:bg-slate-400/30"
              onClick={() => scroll(index)}
              key={`x-${index}`}
            >
              {x.model}
            </button>
          ))}
        </nav>
        <nav className="flex">
          {menu.others.map((x, index) => (
            <button
              className="mx-1 cursor-pointer transition ease-in-out delay-150 duration-500 font-semibold tracking-wide text-[0.93rem] px-4 py-2 rounded hover:bg-slate-400/30"
              key={`x-${index}`}
            >
              {x}
            </button>
          ))}
        </nav>
      </Fade>
    </header>
  );
};

export default Navbar;
