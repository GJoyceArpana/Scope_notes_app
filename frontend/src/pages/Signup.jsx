import React from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="border-2 border-blue-300 rounded-lg p-6 w-80 text-center shadow-md">
        <h1 className="text-2xl font-bold mb-4">Create Account</h1>

        <InputField type="email" placeholder="Enter your email" />
        <InputField type="password" placeholder="Enter your password" />
        <InputField type="password" placeholder="Confirm password" />

        <button className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded-md mt-3">
          Sign Up
        </button>

        <p className="text-sm mt-4 text-gray-700">
          Already have an account?{" "}
          <Link to="/" className="text-orange-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
