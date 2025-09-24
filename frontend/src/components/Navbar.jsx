import React from "react";
import logo from "../assets/duoAxiom.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="text-bold fixed top-0 right-0 left-0 z-1 m-0 flex w-full items-center justify-between bg-[#ff8dbb] p-4 text-2xl text-white">
        <div className="flex items-center">
          <img className="h-12 w-12" src={logo} alt="DuoAxiom Logo" />
          <Link to="/">
            <div>Duo Axiom</div>
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="/">
            <div className="cursor-pointer p-3">Home</div>
          </Link>
          <Link to="/about">
            <div className="cursor-pointer p-3">About</div>
          </Link>
          <Link to="/contact">
            <div className="cursor-pointer p-3">Contact</div>
          </Link>
          <Link to="/login">
            <div className="cursor-pointer p-3">Login</div>
          </Link>
          <Link to="/signup">
            <div className="cursor-pointer p-3">Sign Up</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
