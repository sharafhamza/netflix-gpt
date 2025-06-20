import React from "react";
import useAddNowPlaying from "../hooks/useAddNowPlaying";
import usePopulerMovies from "../hooks/usePopulerMovies";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";

const Hero = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  useAddNowPlaying();
  usePopulerMovies();
  useTopRatedMovies();
  useUpComingMovies();
  if (!movies) return;
  const mainMovie = movies[14];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="bg-black  overflow-hidden relative h-[700px] flex items-center">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default Hero;
