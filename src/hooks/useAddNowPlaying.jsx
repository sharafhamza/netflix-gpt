import { useEffect } from "react";

import React from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/redux/movieSlice";
import { API_options } from "../utils/constants";
const useAddNowPlaying = () => {
  const dispatch = useDispatch();
  const getMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_options
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    getMovieData();
  }, []);
};

export default useAddNowPlaying;
