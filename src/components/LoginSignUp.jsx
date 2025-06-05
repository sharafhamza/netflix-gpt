import { logo, loginBg } from "../utils/otherUrl";
import React from "react";
import SignForm from "./forms/SignForm";
const LoginSignUp = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute left-[350px] ">
        <img className="w-2xs" alt="netflix logo" src={logo} />
      </div>

      <div className="absolute w-screen h-screen overflow-hidden -z-10">
        <div className="bg-black absolute inset-0 opacity-50 w-full "></div>
        <img src={loginBg} className="w-full" alt="Netflix Background" />
      </div>
      <div className="bg-black/80 w-[500px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded">
        <SignForm />
      </div>
    </div>
  );
};

export default LoginSignUp;
