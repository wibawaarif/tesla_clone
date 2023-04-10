import React, { useRef, useState } from "react";

import Main from "./components/Main";
import Navbar from "./components/Navbar";

const menu = {
  models: [
    {
      model: "Model S",
      image: "../../designs/tesla-1.jpeg",
      tagline: "Leasing starting at $349/mo",
    },
    {
      model: "Model 3",
      image: "../../designs/tesla-2.jpeg",
      tagline: "Schedule a Demo Drive",
    },
    {
      model: "Model X",
      image: "../../designs/tesla-3.jpeg",
      tagline: "Schedule a Demo Drive",
    },
    {
      model: "Model Y",
      image: "../../designs/tesla-4.jpeg",
      tagline: "Schedule a Demo Drive",
    },
    {
      model: "Solar Roof",
      image: "../../designs/tesla-5.jpeg",
      tagline: "Lowest Cost Solar Panels in America",
    },
    {
      model: "Solar Panels",
      image: "../../designs/tesla-6.jpeg",
      tagline: "Produce Clean Energy From Your Roof",
    },
  ],
  others: ["Shop", "Account", "Menu"],
};

const LandingPage = () => {
  const childRef = menu.models.map(() => useRef(null));

  const handleScroll = (value) => {
    if (value === "arrow") {
      childRef[1].current.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }

    childRef[value].current.scrollIntoView({
      behavior: "smooth",
      inline: "start",
    });
  };

  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden">
      <Navbar scroll={handleScroll} menu={menu} />
      <Main childRef={childRef} scroll={handleScroll} menu={menu} />
    </main>
  );
};

export default LandingPage;
