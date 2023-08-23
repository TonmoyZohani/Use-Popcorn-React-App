import React from "react";
import WatchedMovie from "./WatchedMovie";

const WatchedMovieList = ({watched}) => {
  return (
    <>
      <ul className="list">
        {watched.map((movie) => (
            <WatchedMovie movie={movie}/>
        ))}
      </ul>
    </>
  );
};

export default WatchedMovieList;
