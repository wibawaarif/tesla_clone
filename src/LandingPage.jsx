import React, { useRef, useState } from "react";

import Main from "./components/Main";
import Navbar from "./components/Navbar";

const menu = {
  models: [
    {
      model: "Model S",
      image: "../../assets/tesla-1.jpeg",
      tagline: "Leasing starting at $349/mo",
    },
    {
      model: "Model 3",
      image: "../../assets/tesla-2.jpeg",
      tagline: "Schedule a Demo Drive",
    },
    {
      model: "Model X",
      image: "../../assets/tesla-3.jpeg",
      tagline: "Schedule a Demo Drive",
    },
    {
      model: "Model Y",
      image: "../../assets/tesla-4.jpeg",
      tagline: "Schedule a Demo Drive",
    },
    {
      model: "Solar Roof",
      image: "../../assets/tesla-5.jpeg",
      tagline: "Lowest Cost Solar Panels in America",
    },
    {
      model: "Solar Panels",
      image: "../../assets/tesla-6.jpeg",
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
