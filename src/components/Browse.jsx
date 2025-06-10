import React, { useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import MovieSuggestion from "./movie suggestions/MovieSuggestion";

const Browse = () => {
  return (
    <div>
      <Header />
      <Hero />
      <MovieSuggestion />
    </div>
  );
};

export default Browse;
