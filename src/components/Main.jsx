import React, { useRef } from "react";
import Fade from "react-reveal/Fade";
import arrow from "../../assets/arrow.svg";

const Main = ({ menu, scroll, childRef }) => {
  return (
    <>
      {menu.models.map((x, index) => (
        <section
          ref={childRef[index]}
          style={{ backgroundImage: `url(${x.image})` }}
          key={`x-${index}`}
          className={`w-full h-full snap-start bg-no-repeat bg-center bg-cover`}
        >
          <div className="flex flex-col h-screen justify-between">
            <div className="flex flex-col text-center mt-32">
              <Fade bottom delay={1000}>
                <span className="text-5xl font-semibold tracking-wide">
                  {x.model}
                </span>
              </Fade>
              <Fade bottom delay={2000}>
                {index === 0 ? (
                  <span className="text-xl font-normal mt-2">
                    {x.tagline}
                  </span>
                ) : index === 4 || index === 5 ? (
                  <span className="mt-2">
                    {x.tagline}
                  </span>
                ) : (
                  <span className="underline decoration-1 underline-offset-2 mt-2">
                    {x.tagline}
                  </span>
                )}
              </Fade>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className={`flex ${index === 0 ? "" : "mb-20"}`}>
                <Fade left duration={500} delay={2000}>
                  <button className="px-[6rem] mr-6 py-2 bg-gray-800/90 font-medium rounded text-white">
                    Order Now
                  </button>
                </Fade>
                <Fade duration={500} right delay={2000}>
                  <button className="px-[6rem] py-2 text-stone-800 bg-zinc-100/70 font-medium rounded text-gray-800">
                    Learn More
                  </button>
                </Fade>
              </div>
              {index === 0 && (
                <img
                  onClick={() => scroll("arrow")}
                  className="animate-bounce mt-10 cursor-pointer w-8 h-8"
                  src={arrow}
                />
              )}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Main;
