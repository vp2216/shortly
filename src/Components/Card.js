import React from "react";
import graph from "../Assets/icon-brand-recognition.svg"

const Card = () => {
    return (
      <div className="flex flex-col relative gap-5 w-5/6 md:w-2/4 lg:w-1/4 shadow-xl shadow-gray-500 p-5 rounded bg-white">
        <span className="bg-gray-800 p-3 w-fit rounded-full">
          <img src={graph} alt="graph"/>
        </span>
        <h1 className="text-xl font-bold text-gray-700">Brand Recognition</h1>
        <p className="font-semibold text-gray-400">
          Boost yor brand recognition with each click. Generic links don't mean
          a thing. Branded links helps install confidence in your content.
        </p>
      </div>
    );
}

export default Card;