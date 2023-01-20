import React, { useEffect, useState } from "react";

const Result = ({ links }) => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 4000);
  },[copied])
  
    return (
      <div className="flex flex-col justify-center items-center gap-5 w-full mt-10">
        {links.map((links,i) => {
          return (
            <div
              className="bg-white rounded flex md:flex-row gap-5 flex-col justify-between items-center py-5 px-5 w-5/6 md:w-4/6 "
              key={i}
            >
              <div className="truncate bg-white w-full font-bold rounded md:p-2 text-gray-700">
                {links.url}
              </div>
              <div className="border-2 border-gray-200 w-full md:hidden"></div>
              <div className="truncate bg-white w-full font-bold rounded md:p-2 text-gray-700">
                {links.shortUrl}
              </div>
              <div className=" bg-blue-500 md:hover:bg-blue-600 rounded px-5 py-2 text-center text-white font-semibold cursor-pointer w-full md:w-1/4" onClick={() => {
                setCopied(true);
                navigator.clipboard.writeText(links.shortUrl);
              }
              }>
                Copy
              </div>
              {copied ? <div className="fixed text-center right-1/3 left-1/3 bottom-10 font-bold p-5 bg-blue-900 text-white rounded z-20">Copied!</div> : null}
            </div>
          );
        })}
      </div>
    );
}

export default Result;