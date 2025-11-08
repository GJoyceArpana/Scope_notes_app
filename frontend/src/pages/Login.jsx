import React from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import SocialLoginButton from "../components/SocialLoginButton";
import googleIcon from "../assets/google.png";
import facebookIcon from "../assets/facebook.png";
import logo from "../assets/notenest-logo.png";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Card Container */}
      <div className="border-2 border-blue-300 rounded-lg p-6 w-80 text-center shadow-md">
        
        {/* Logo */}
        <img src={logo} alt="NoteNest Logo" className="w-28 mx-auto mb-2" />
        <h1 className="text-2xl font-bold mb-4 text-gray-800">NoteNest</h1>

        {/* Sign In Heading */}
        <div className="flex items-center mb-2">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-600 text-sm">Sign in to your account</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Email + Password */}
        <div className="mt-3">
          <InputField type="email" placeholder="Enter your email" />
          <InputField type="password" placeholder="Enter your password" />
        </div>

        <p className="text-right text-xs text-gray-500 cursor-pointer mb-4 mt-1">
          Forgot password?
        </p>

        {/* Social Sign-In */}
        <div className="flex items-center mb-2">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-600 text-sm">Sign in with social media</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <SocialLoginButton icon={googleIcon} text="Sign in with Google" />
        <SocialLoginButton icon={facebookIcon} text="Sign in with Facebook" />

        <p className="text-sm mt-4 text-gray-700">
          Not a member?{" "}
          <Link to="/signup" className="text-orange-500 hover:underline">
            create a account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
