import React from "react";
import logo from "../assets/duoAxiom.png";
import { Link } from "react-router-dom";
import Shuffle from "./styles/shuffle.js";

function Navbar() {
  return (
    <>
      <div className="text-bold fixed top-0 right-0 left-0 z-1 m-0 flex h-20 w-full items-center justify-between bg-[#ff8dbb] p-0 text-2xl text-white">
        <div className="flex items-center">
          <img className="h-12 w-12" src={logo} alt="DuoAxiom Logo" />
          <Link to="/">
            <Shuffle
              text="Duo Axiom"
              shuffleDirection="right"
              duration={1.0}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover={true}
              respectReducedMotion={true}
              loop={true}
            />
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="/">
            <div className="h-20 cursor-pointer border-b-6 border-none border-b-white p-6 transition-all duration-500 hover:border-solid hover:bg-[#6dddea]">
              Home
            </div>
          </Link>
          <Link to="/about">
            <div className="h-20 cursor-pointer border-b-6 border-none border-b-white p-6 transition-all duration-500 hover:border-solid hover:bg-[#6dddea]">
              About
            </div>
          </Link>
          <Link to="/contact">
            <div className="h-20 cursor-pointer border-b-6 border-none border-b-white p-6 transition-all duration-500 hover:border-solid hover:bg-[#6dddea]">
              Contact
            </div>
          </Link>
          <Link to="/login">
            <div className="h-20 cursor-pointer border-b-6 border-none border-b-white p-6 transition-all duration-500 hover:border-solid hover:bg-[#6dddea]">
              Login
            </div>
          </Link>
          <Link to="/signup">
            <div className="h-20 cursor-pointer border-b-6 border-none border-b-white p-6 transition-all duration-500 hover:border-solid hover:bg-[#6dddea]">
              Sign Up
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
