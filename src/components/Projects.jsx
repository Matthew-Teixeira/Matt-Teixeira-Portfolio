import React from "react";
import Volumes from "../assets/volumetric-tracking.png";
import CoinVault from "../assets/coin-vault.png";
import SMT from "../assets/SmashMyTrash.png";
import Movies from "../assets/React-Movies-API.png";
import Weather from "../assets/weather-dash.png";
import PixelArt from "../assets/pixel-art.png";
import Truck from "../assets/truck-it-up.png";
import Node_Img from "../assets/Node.jpg";
import Rust from "../assets/Rust.png";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[rgb(31,40,51)]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-400 border-[#3faec1]">
            Projects
          </p>
          <p className="py-6 text-2xl">Check out some of my recent projects.</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid */}
          <div
            style={{ backgroundImage: `url(${Volumes})` }}
            className="shadow-lg shadow-[rgb(15,15,15)] group container rounded-md flex justify-center items-center mx-auto project-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wide">
                Full-Stack Application
              </span>
              <p>
                Contaminated ground water volumetric waste stream tracking.{" "}
              </p>
              <div className="pt-8 text-center">
                <a
                  href="https://volumetric-tracking-b5a1cb277229.herokuapp.com/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/ApolloSolo/frac-tank-db"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div
            style={{ backgroundImage: `url(${Node_Img})` }}
            className="shadow-lg shadow-[rgb(15,15,15)] group container rounded-md flex justify-center items-center mx-auto project-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wide">
                Node Backend Application
              </span>
              <p>Read, parse, and persist log data from remote sources.</p>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/Matt-Teixeira/hhm_rpp"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div
            style={{ backgroundImage: `url(${Node_Img})` }}
            className="shadow-lg shadow-[rgb(15,15,15)] group container rounded-md flex justify-center items-center mx-auto project-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wide">
                Node Backend Application
              </span>
              <p>
                Access and pull data from remote systems, VPN tunnel resets, and
                job rerun queues.
              </p>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/Matt-Teixeira/hhm_data_acquisition"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div
            style={{ backgroundImage: `url(${PixelArt})` }}
            className="shadow-lg shadow-[rgb(15,15,15)] group container rounded-md flex justify-center items-center mx-auto project-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wide">
                Vanilla JS Application
              </span>
              <p>
                Express your artistic self with this relaxing pixel art
                application.
              </p>
              <div className="pt-8 text-center">
                <a
                  href="https://matthew-teixeira.github.io/Pixel-Art-2.0/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/ApolloSolo/Pixel-Art-2.0"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div
            style={{ backgroundImage: `url(${Rust})` }}
            className="shadow-lg shadow-[rgb(15,15,15)] group container rounded-md flex justify-center items-center mx-auto project-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wide">
                Rust Application
              </span>
              <p>Cammand line RPG built with Rust</p>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/Matthew-Teixeira/command_rpg"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div
            style={{ backgroundImage: `url(${Rust})` }}
            className="shadow-lg shadow-[rgb(15,15,15)] group container rounded-md flex justify-center items-center mx-auto project-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wide">
                Rust Application
              </span>
              <p>Serialize and Deserialize JSON. Insert into PostgreSQL db.</p>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/Matthew-Teixeira/serialize_deserialize_json"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid */}
          {/*           <div
            style={{ backgroundImage: `url(${Truck})` }}
            className="shadow-lg shadow-[rgb(15,15,15)] group container rounded-md flex justify-center items-center mx-auto project-div sm:col-span-2 lg:col-span-3"
          >

            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wide">
                React JS Application - PWA
              </span>
              <p>
                Manage your fleet scheduling with our project management
                application.
              </p>
              <div className="pt-8 text-center">
                <a
                  href="https://peaceful-plains-64054.herokuapp.com/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/willjduncan/trucked-up"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
