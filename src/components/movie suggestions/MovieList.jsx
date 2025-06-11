import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, className, movies }) => {
  return (
    <div className={className ? className : ""}>
      <h2 className="text-3xl font-bold mb-4 text-white">{title}</h2>
      <div className="flex overflow-hidden gap-5">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} image_id={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
