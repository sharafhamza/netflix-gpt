import React from "react";

const Input = ({ type, placeholder, ref }) => {
  return (
    <input
      type={type}
      className="border-2 border-gray-700 outline-0 w-full h-[60px] placeholder:text-[20px] text-white rounded bg-gray-700/30 text-2xl pl-3 focus:outline-2 outline-amber-50"
      placeholder={placeholder}
      ref={ref ? ref : null}
    />
  );
};

export default Input;
