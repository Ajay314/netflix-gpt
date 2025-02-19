import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);

  return (
    <div className="px-6 ">
        <h1 className="text-3xl py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll ">
        
        <div className="flex">
          {movies?.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} primaryImage={movie.primaryImage} />
            ))
          ) : (
            <div>Loading... or No Movies</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
