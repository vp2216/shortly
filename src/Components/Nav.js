import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import logo from "../Assets/logo.svg"
import fb from "../Assets/icon-facebook.svg";
import insta from "../Assets/icon-instagram.svg";
import twetter from "../Assets/icon-twitter.svg";
import pintrest from "../Assets/icon-pinterest.svg";

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex w-screen gap-10 items-center justify-between px-10 md:justify-start md:pl-20 md:px-0 py-10 relative">
      <img src={logo} alt="logo" />
      <ul className="hidden md:flex justify-center items-center gap-10">
        <li className="font-bold text-gray-400 hover:text-black cursor-pointer">
          Features
        </li>
        <li className="font-bold text-gray-400 hover:text-black cursor-pointer">
          Pricing
        </li>
        <li className="font-bold text-gray-400 hover:text-black cursor-pointer">
          Resourses
        </li>
      </ul>
      <div
        className={`${
          open ? "translate-x-0 " : "translate-x-full"
        } fixed top-0 right-0 h-screen w-3/4 sm:w-2/4 bg-blue-400 ease-in-out duration-500 z-50 md:hidden`}
      >
        <GrClose
          className="top-10 fixed right-10 w-6 h-6"
          onClick={() => setOpen(false)}
        />
        <div className="top-0 right-0 h-screen text-center flex justify-center items-center flex-col ">
          <div className="font-bold cursor-pointer p-5">Features</div>
          <div className="font-bold cursor-pointer p-5">Pricing</div>
          <div className="font-bold cursor-pointer p-5">Resourses</div>
          <div className="flex gap-10 sm:gap-10 py-10 px-5 flex-wrap justify-center items-center">
            <img src={fb} alt="facebook" />
            <img src={twetter} alt="twetter" />
            <img src={pintrest} alt="pintrest" />
            <img src={insta} alt="instagram" />
          </div>
        </div>
      </div>
      <GiHamburgerMenu
        className="md:hidden w-6 h-6"
        onClick={() => {
          setOpen(true);
        }}
      />
    </div>
  );
}

export default Nav;
