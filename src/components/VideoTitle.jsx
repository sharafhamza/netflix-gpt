import React from "react";
import { FaCircleInfo } from "react-icons/fa6";
import { RiTriangleFill } from "react-icons/ri";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="text-whit w-screen text-white aspect-video pt-[20%] px-14 absolute bg-gradient-to-r from-black">
      <h2 className="text-2xl md:text-6xl font-bold py-3 gesrio-bold">
        {title}
      </h2>
      <p className="text-md w-[600px] mb-4 text-gray-400">{overview}</p>
      <div className="my-4 md:m-0 flex">
        <button className=" bg-white text-black  gap-2 md:py-4 cursor-pointer px-3 md:px-12 text-xl font-semibold  rounded-xl hover:bg-opacity-8 flex items-center">
          <RiTriangleFill className="text-xl rotate-90" /> Play
        </button>
        <button className="hidden md:flex items-center gap-2 cursor-pointer mx-2  bg-gray-500 text-white p-4 px-12 text-xl rounded-xl bg-opacity-50 ">
          <FaCircleInfo className="text-xl" /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
