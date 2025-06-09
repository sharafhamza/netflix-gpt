import React from "react";
import useAddNowPlaying from "../hooks/useAddNowPlaying";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const Hero = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  useAddNowPlaying();

  if (!movies) return;
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground id={id} />
      </div>
    </div>
  );
};

export default Hero;
