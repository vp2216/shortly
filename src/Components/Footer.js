import React from "react";
import logo from "../Assets/logo_white.svg";
import fb from "../Assets/icon-facebook.svg";
import insta from "../Assets/icon-instagram.svg";
import twetter from "../Assets/icon-twitter.svg";
import pintrest from "../Assets/icon-pinterest.svg";

const Footer = () => {
    return (
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-center p-20 bg-gray-800 ">
        <div className="flex flex-col gap-10">
          <span className="flex justify-center items-center">
            <img src={logo} alt="logo" />
          </span>
          <div className="flex justify-center items-center gap-10">
            <img src={fb} alt="facebook" className="cursor-pointer w-8" />
            <img src={twetter} alt="twetter" className="cursor-pointer w-8" />
            <img src={pintrest} alt="pintrest" className="cursor-pointer w-8" />
            <img src={insta} alt="instagram" className="cursor-pointer w-8" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row text-white gap-10 justify-center md:items-start items-center">
          <span className="flex flex-col gap-5 font-semibold justify-center items-center md:items-start">
            <h3>Features</h3>
            <ul className="flex flex-col gap-2 text-center text-gray-400 justify-center items-center md:items-start">
              <li className="md:hover:text-blue-400 cursor-pointer">
                Link Shortening
              </li>
              <li className="md:hover:text-blue-400 cursor-pointer">
                Branded Links
              </li>
              <li className="md:hover:text-blue-400 cursor-pointer">
                Analytics
              </li>
            </ul>
          </span>
          <span className="flex flex-col gap-5 font-semibold justify-center items-center md:items-start">
            <h3>Resources</h3>
            <ul className="flex flex-col gap-2 text-center text-gray-400 justify-center items-center md:items-start">
              <li className="md:hover:text-blue-400 cursor-pointer">Blog</li>
              <li className="md:hover:text-blue-400 cursor-pointer">
                Developers
              </li>
              <li className="md:hover:text-blue-400 cursor-pointer">Support</li>
            </ul>
          </span>
          <span className="flex flex-col gap-5 font-semibold justify-center items-center md:items-start">
            <h3>Company</h3>
            <ul className="flex flex-col gap-2 text-center text-gray-400 justify-center items-center md:items-start">
              <li className="md:hover:text-blue-400 cursor-pointer">About</li>
              <li className="md:hover:text-blue-400 cursor-pointer">
                Our Team
              </li>
              <li className="md:hover:text-blue-400 cursor-pointer">Careers</li>
              <li className="md:hover:text-blue-400 cursor-pointer">Contact</li>
            </ul>
          </span>
        </div>
      </div>
    );
}

export default Footer;