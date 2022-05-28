import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div name="hero" className="bg-[rgb(31,40,51)] w-full h-screen">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl">Matt Teixeira</h1>
        <p>
          I'm a full-stack developer specializing in building solution driven
          applications. Currently, I am focused on building responsive and
          scalable full-stack web applications.
        </p>
        <div>
            <button>View Work <HiArrowNarrowRight/></button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
