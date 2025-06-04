import React from "react";

const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      className="border-2 border-gray-700 outline-0 w-full h-[60px] placeholder:text-[20px] text-white rounded bg-gray-700/30 text-2xl pl-3"
      placeholder={placeholder}
    />
  );
};

export default Input;
