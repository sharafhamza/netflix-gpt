import React from "react";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {
  useTrailerVideo(id); // ✅ Call it here at the top level!

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className="w-screen -mt-[140px]">
      {trailerVideo && (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube-nocookie.com/embed/${trailerVideo?.key}?&loop=1&autoplay=1&mute=1&playlist=${trailerVideo?.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
