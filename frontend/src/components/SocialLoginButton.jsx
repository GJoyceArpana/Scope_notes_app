import React from "react";

const SocialLoginButton = ({ icon, text, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-center w-full bg-orange-400 hover:bg-orange-500 text-white font-medium py-2 rounded-md my-2 shadow-md"
  >
    <img src={icon} alt="icon" className="w-5 h-5 mr-2" />
    {text}
  </button>
);

export default SocialLoginButton;
