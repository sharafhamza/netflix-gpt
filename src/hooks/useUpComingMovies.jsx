import { useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../utils/redux/movieSlice";
import { API_options } from "../utils/constants";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);

  const comingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_options
    );
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };
  useEffect(() => {
    !upComingMovies && comingMovies();
  }, []);
};

export default useUpComingMovies;
