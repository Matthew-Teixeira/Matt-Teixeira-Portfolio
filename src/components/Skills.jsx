import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Mongo from "../assets/mongo.png";
import Linux from "../assets/Linux.png"
import PostgreSQL from "../assets/PostgreSQL.png"

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[rgb(31,40,51)] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#3faec1]">Skills</p>
          <p className="py-4 text-2xl">These are the technologies I have worked with.</p>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
            <div className="shadow-md shadow-[rgb(15,15,15)] hover:scale-110 duration-500">
              <img className="w-20 mt-2 mx-auto" src={JavaScript} alt="JavaScript icon" />
              <p className="my-4">JavaScript</p>
            </div>
            <div className="shadow-md shadow-[rgb(15,15,15)] hover:scale-110 duration-500">
              <img className="w-20 mt-2 mx-auto" src={ReactImg} alt="ReactImg icon" />
              <p className="my-4">React</p>
            </div>
            <div className="shadow-md shadow-[rgb(15,15,15)] hover:scale-110 duration-500">
              <img className="w-20 mt-2 mx-auto" src={Node} alt="Node icon" />
              <p className="my-4">Node</p>
            </div>
            <div className="shadow-md shadow-[rgb(15,15,15)] hover:scale-110 duration-500">
              <img className="w-20 mt-2 mx-auto" src={Mongo} alt="Mongo icon" />
              <p className="my-4">MongoDB</p>
            </div>
            <div className="shadow-md shadow-[rgb(15,15,15)] hover:scale-110 duration-500">
              <img className="w-20 mt-2 mx-auto" src={PostgreSQL} alt="PostgreSQL icon" />
              <p className="my-4">PostgreSQL</p>
            </div>
            <div className="shadow-md shadow-[rgb(15,15,15)] hover:scale-110 duration-500">
              <img className="w-20 mt-2 mx-auto" src={Linux} alt="Linux icon" />
              <p className="my-4">Linux</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
