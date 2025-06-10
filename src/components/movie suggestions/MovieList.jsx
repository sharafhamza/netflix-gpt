import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="flex overflow-hidden ">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} image_id={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
