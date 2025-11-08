import React from "react";
import { Mail, Lock } from "lucide-react";

const InputField = ({ type, placeholder }) => {
  const Icon = type === "email" ? Mail : Lock;
  return (
    <div className="flex items-center bg-gray-200 rounded-md px-3 py-2 mb-3">
      <Icon className="text-gray-500 mr-2" size={18} />
      <input
        type={type}
        placeholder={placeholder}
        className="bg-transparent outline-none text-gray-700 w-full placeholder-gray-500"
      />
    </div>
  );
};

export default InputField;
