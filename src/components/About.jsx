import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[rgb(31,40,51)] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#3faec1]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Matt. Nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="text-2xl">
              I'm passionate about creating excellent software that improves the
              lives of those around me. I specialize in developng tools for
              niche processes and applications. With each project, my aim is to
              provide a solution for the problem at hand. What could your team
              accomplish with a developer to your side?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
