import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies, handleSelectedId }) => {
  return (
    <>
      <ul className="list">
        {movies?.map((movie) => (
          <Movie
            key={movie.imdbID}
            movie={movie}
            handleSelectedId={handleSelectedId}
          />
        ))}
      </ul>
    </>
  );
};

export default MovieList;
