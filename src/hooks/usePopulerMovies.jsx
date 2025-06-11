import { useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopulerMovies } from "../utils/redux/movieSlice";
import { API_options } from "../utils/constants";

const usePopulerMovies = () => {
  const dispatch = useDispatch();
  const populerMovies = useSelector((store) => store.movies.populerMovies);

  const usePopulerMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      API_options
    );
    const json = await data.json();
    dispatch(addPopulerMovies(json.results));
  };
  useEffect(() => {
    !populerMovies && usePopulerMovies();
  }, []);
};

export default usePopulerMovies;
