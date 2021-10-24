import React from "react";
import { NavLink } from "react-router-dom";
import "./webnav.css";

const WebNav = () => {
  const logostyle = {
    width: "70px",
    height: "70px",
  };
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <NavLink
              className="mr-5 font-medium hover:text-gray-900"
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className="mr-5 font-medium hover:text-gray-900"
              to="/post"
            >
              Post
            </NavLink>
          </nav>
          <lottie-player
            className="webLogo"
            src="https://assets1.lottiefiles.com/packages/lf20_yzsagzwo.json"
            style={logostyle}
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
          <NavLink  className="ml-3 text-xl  cursor-pointer" to="/home">
            API POST
          </NavLink>
          {/* <span className="ml-3 text-xl  cursor-pointer">API POST</span> */}

          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Sign Up
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default WebNav;
