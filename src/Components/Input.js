import React, { useState } from "react";

const Input = ({ setLinks,links,setError }) => {
  const [url, setUrl] = useState("");
  const short = () => {
    setError("");
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.ok) {
          setLinks([...links, { url: url, shortUrl: res.result.full_short_link }]);
          setUrl("");
        } else {
          setUrl("");
          if (res.error_code === 1) setError("No URL specified");
          else if (res.error_code === 2) setError("Invalid URL submitted");
          else if (res.error_code === 3) setError("Rate limit reached, Wait a second and try again");
          else if (res.error_code === 10) setError("Trying to shorten a disallowed Link");
        }
      })
      .catch((err)=>{});
  }
  return (
    <div className="py-10 px-10 flex justify-between items-center flex-col md:flex-row gap-5 w-5/6 md:w-4/6 lg:w-6/6 rounded input-bg m-auto">
        <input
          placeholder="Shorten a link here..."
          className="outline-none bg-white p-2 w-full md:w-3/4 font-semibold rounded cursor-auto"
        onChange={(e) => {
          setError("");
          setUrl(e.target.value);
        }}
          value={url}
        />
        <button className="p-2 bg-blue-500 w-full md:w-1/4 md:hover:bg-blue-600 text-white font-semibold tracking-wide rounded" onClick={short}>
          Shorten It!
        </button>
      </div>
    );
}

export default Input;