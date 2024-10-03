import React from "react";
import Volumes from "../assets/volumetric-tracking.png";
import CoinVault from "../assets/coin-vault.png";
import SMT from "../assets/SmashMyTrash.png";
import Movies from "../assets/React-Movies-API.png";
import Weather from "../assets/weather-dash.png";
import PixelArt from "../assets/pixel-art.png";
import Truck from "../assets/truck-it-up.png";

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
            style={{ backgroundImage: `url(${CoinVault})` }}
            className="shadow-lg shadow-[rgb(15,15,15)] group container rounded-md flex justify-center items-center mx-auto project-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wide">
                Node JS Application
              </span>
              <p>A collaborative cryptocurrency trading simulator.</p>
              <div className="pt-8 text-center">
                <a href="https://the-coin-vault.herokuapp.com/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/ApolloSolo/Coin-Vault" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div
            style={{ backgroundImage: `url(${SMT})` }}
            className="shadow-lg shadow-[rgb(15,15,15)] group container rounded-md flex justify-center items-center mx-auto project-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wide">
                Vanilla JS Application
              </span>
              <p>Custom pricing calculator for a local small business.</p>
              <div className="pt-8 text-center">
                <a
                  href="https://apollosolo.github.io/SMT-Pricing-Calculator/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/ApolloSolo/SMT-Pricing-Calculator"
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
            style={{ backgroundImage: `url(${Movies})` }}
            className="shadow-lg shadow-[rgb(15,15,15)] group container rounded-md flex justify-center items-center mx-auto project-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wide">
                React JS Application
              </span>
              <p>Search movies and show utilizing a 3rd party API.</p>
              <div className="pt-8 text-center">
                <a
                  href="https://react-movie-demos.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/ApolloSolo/React-Movies"
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
            style={{ backgroundImage: `url(${Weather})` }}
            className="shadow-lg shadow-[rgb(15,15,15)] group container rounded-md flex justify-center items-center mx-auto project-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wide">
                Vanilla JS Application
              </span>
              <p>
                Search for weather data near you or anywhere within the United
                States.
              </p>
              <div className="pt-8 text-center">
                <a
                  href="https://apollosolo.github.io/Weather-Dashboard/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/ApolloSolo/Weather-Dashboard"
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
            style={{ backgroundImage: `url(${Truck})` }}
            className="shadow-lg shadow-[rgb(15,15,15)] group container rounded-md flex justify-center items-center mx-auto project-div sm:col-span-2 lg:col-span-3"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wide">
              React JS Application - PWA
              </span>
              <p>
              Manage your fleet scheduling with our project management application. 
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
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
