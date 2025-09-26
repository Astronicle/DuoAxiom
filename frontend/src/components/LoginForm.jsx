import React from "react";
import { motion } from "framer-motion";

const LoginForm = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }} className="flex flex-col rounded-lg bg-white px-8 py-12 shadow-lg">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
        Login
      </h2>
      <form className="flex flex-col">
        <input
          type="email"
          placeholder="Email"
          className="mb-4 rounded-lg border-2 border-gray-300 bg-gray-100 px-4 py-3 focus:border-[#6dddea] focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-6 rounded-lg border-2 border-gray-300 bg-gray-100 px-4 py-3 focus:border-[#6dddea] focus:outline-none"
        />
        <button
          type="submit"
          className="cursor-pointer rounded-lg bg-[#6dddea] py-3 text-lg font-bold text-white transition duration-200 hover:bg-[#4dd3e3]"
        >
          Login
        </button>
      </form>
      <p className="mt-6 text-center text-gray-600">
        Don't have an account?{" "}
        <a href="/signup" className="text-blue-500 hover:underline">
          Sign up
        </a>
      </p>
    </motion.div>
  );
};

export default LoginForm;
