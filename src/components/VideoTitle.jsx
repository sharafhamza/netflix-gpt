import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="text-white">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-md w-[600px]">{overview}</p>
    </div>
  );
};

export default VideoTitle;
