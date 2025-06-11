import React from "react";
import MovieList from "./MovieList"; // Make sure MovieList component accepts 'className' prop
import { useSelector } from "react-redux";

const MovieSuggestion = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black px-14 py-2">
        <div className="relative z-10 -mt-30 flex flex-col gap-y-6">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Popular"} movies={movies.populerMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies} />
          <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default MovieSuggestion;
