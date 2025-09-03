import React from "react";
import logo from "../assets/duoAxiom.png";

function Navbar() {
  return (
    <>
      <div className="text-bold fixed top-0 right-0 left-0 z-1 m-0 flex w-full items-center justify-between bg-[#ff8dbb] p-4 text-2xl text-white">
        <div className="flex items-center">
          <img className="h-12 w-12" src={logo} alt="DuoAxiom Logo" />
          <div>Duo Axiom</div>
        </div>
        <div className="flex items-center">
          <div className="cursor-pointer p-3">Home</div>
          <div className="cursor-pointer p-3">About</div>
          <div className="cursor-pointer p-3">Contact</div>
          <div className="cursor-pointer p-3">Login</div>
          <div className="cursor-pointer p-3">Sign Up</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
