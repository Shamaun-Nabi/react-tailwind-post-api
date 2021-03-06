import React from "react";
import { NavLink } from "react-router-dom";

const PostCard = (props) => {
  const { id, body, title } = props.post;
  const btnStyle = {
    width: "30px",
    height: "30px",
  };
  return (
    <div className="flex flex-wrap justify-center">
      <div className="p-12 md:w-1/2 flex flex-col items-start justify-center">
        <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
          Number : {id}
        </span>
        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
         {title}
        </h2>
        <p className="leading-relaxed mb-8">
          {body}
        </p>
        <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
          <NavLink
            to={`/post/${id}`}
            className="text-indigo-500 inline-flex items-center"
          >
            See More
            <lottie-player
              src="https://assets1.lottiefiles.com/packages/lf20_pmvvftcc.json"
              background="transparent"
              speed="1"
              style={btnStyle}
              loop
              autoplay
            ></lottie-player>
          </NavLink>
          <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg
              className="w-4 h-4 mr-1"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            1.2K
          </span>
          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg
              className="w-4 h-4 mr-1"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>
            6
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
