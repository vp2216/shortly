import "../App.css";
import Nav from "./Nav";
import Input from "./Input";
import Result from "./Result";
import Cardholder from "./Cardholder";
import Footer from "./Footer";
import people from "../Assets/people working.svg";
import { useEffect, useState } from "react";

function App() {
  const [links, setLinks] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setError("");
    },4000);
  },[error])
  return (
    <div className="overflow-hidden">
      <Nav />
      <div className="text-4xl sm:text-6xl lg:text-8xl text-gray-800 flex justify-center items-center text-center font-extrabold flex-wrap m-auto w-5/6 md:w-3/4 lg:w-3/4 my-10">
        MORE THAN JUST SHORTER LINKS
      </div>
      <img src={people} alt="fun" className="h-auto w-2/4 md:w-2/6 m-auto" />
      {/* <div className="flex flex-col items-center relative overflow-hidden"> */}
      {/* <img src={people} alt="fun" className="h-auto w-2/4 md:w-2/6" /> */}
      <div className="bg-gray-200 pt-10">
        <Input setLinks={setLinks} links={links} setError={setError} />
        {/* </div> */}
        {error ? (
          <div className="text-white font-bold text-center bg-red-500 mt-5 flex justify-center items-center w-5/6 md:w-4/6 m-auto rounded">
            {error}
          </div>
        ) : null}
        <Result links={links} />
        <div className="my-5 mt-20 flex flex-col justify-center items-center gap-5">
          <h3 className="text-4xl font-bold tracking-tighter text-center">
            Advanced Statistics
          </h3>
          <p className="md:w-2/5 w-4/5 text-center text-gray-400 font-bold">
            Track how your links are performing accross the web with our
            advanced statistics dashboard
          </p>
        </div>
        <Cardholder />
        <div className="mt-20 flex justify-center items-center flex-col gap-5 input-bg p-16">
          <h1 className="text-white text-3xl font-bold text-center">
            Boost your links today
          </h1>
          <div className="px-5 py-2 font-bold rounded-full text-white bg-blue-500 lg:hover:bg-blue-600 cursor-pointer">
            Get Started
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
