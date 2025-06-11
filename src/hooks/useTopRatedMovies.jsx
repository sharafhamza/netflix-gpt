import { useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/redux/movieSlice";
import { API_options } from "../utils/constants";
const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const useTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_options
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    !topRatedMovies && useTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
