import React from "react";
import Input from "./Input";

const SignForm = () => {
  return (
    <form className="w-[325px]  flex flex-col mx-auto gap-4 py-7">
      <h2 className="text-white text-4xl mb-4 font-semibold">Sign In</h2>
      <Input type="text" placeholder="Email" />
      <Input type="text" placeholder="Password" />

      <button
        type="submit"
        className="text-white bg-red-600 w-full py-2 text-xl font-semibold rounded-md"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignForm;
