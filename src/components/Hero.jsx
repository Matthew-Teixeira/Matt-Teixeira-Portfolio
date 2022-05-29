import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div name="hero" className="bg-[rgb(31,40,51)] w-full h-screen">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#3faec1] text-2xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Matt Teixeira
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          I'm a full-stack developer.
        </h2>
        <p className="text-[#3faec1] py-4 max-w-[700px] text-2xl">
          I'm a full-stack developer specializing in solution driven
          applications. Currently, I am focused on building responsive and
          scalable full-stack web applications.
        </p>
        <div>
        <Link to="projects" smooth={true} duration={700}>
          <button className="text-white group border-2 px-6 py-2 flex items-center hover:bg-[#3faec1] hover:border-[#3faec1] duration-300">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
