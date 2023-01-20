import React from "react";
import Card from "./Card";

const Cardholder = () => {
    return (
      <div className="mt-20 flex flex-col lg:flex-row justify-around items-center gap-10 lg:px-10">
        <Card />
        <Card />
        <Card />
      </div>
    );
}

export default Cardholder;