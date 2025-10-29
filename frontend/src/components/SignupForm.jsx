import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { registerUser } from "../api/auth";

const SignupForm = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await registerUser(form);
      console.log("User registered:", result);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col rounded-lg bg-white px-8 py-12 shadow-lg"
    >
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
        Sign Up
      </h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="mb-4 rounded-lg border-2 border-gray-300 bg-gray-100 px-4 py-3 focus:border-[#6dddea] focus:outline-none"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="mb-4 rounded-lg border-2 border-gray-300 bg-gray-100 px-4 py-3 focus:border-[#6dddea] focus:outline-none"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="mb-6 rounded-lg border-2 border-gray-300 bg-gray-100 px-4 py-3 focus:border-[#6dddea] focus:outline-none"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="cursor-pointer rounded-lg bg-[#6dddea] py-3 text-lg font-bold text-white transition duration-200 hover:bg-[#4dd3e3]"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-6 text-center text-gray-600">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500 hover:underline">
          Login
        </a>
      </p>
    </motion.div>
  );
};

export default SignupForm;
