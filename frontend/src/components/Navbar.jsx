import React from "react";
import logo from "../assets/duoAxiom.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="text-bold fixed top-0 right-0 left-0 z-1 m-0 flex h-20 w-full items-center justify-between bg-[#ff8dbb] p-0 text-2xl text-white">
        <div className="flex items-center">
          <img className="h-12 w-12" src={logo} alt="DuoAxiom Logo" />
          <Link to="/">
            <div>Duo Axiom</div>
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="/">
            <div className="h-20 cursor-pointer border-none border-b-white border-b-6 p-6 transition-all duration-500 hover:border-solid hover:bg-[#6dddea]">
              Home
            </div>
          </Link>
          <Link to="/about">
            <div className="h-20 cursor-pointer border-none border-b-white border-b-6 p-6 transition-all duration-500 hover:border-solid hover:bg-[#6dddea]">
              About
            </div>
          </Link>
          <Link to="/contact">
            <div className="h-20 cursor-pointer border-none border-b-white border-b-6 p-6 transition-all duration-500 hover:border-solid hover:bg-[#6dddea]">
              Contact
            </div>
          </Link>
          <Link to="/login">
            <div className="h-20 cursor-pointer border-none border-b-white border-b-6 p-6 transition-all duration-500 hover:border-solid hover:bg-[#6dddea]">
              Login
            </div>
          </Link>
          <Link to="/signup">
            <div className="h-20 cursor-pointer border-none border-b-white border-b-6 p-6 transition-all duration-500 hover:border-solid hover:bg-[#6dddea]">
              Sign Up
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
