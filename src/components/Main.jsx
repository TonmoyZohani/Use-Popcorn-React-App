import React, { useState } from "react";
import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";



const Main = ({ tempWatchedData, movies }) => {
  
  return (
    <main className="main">
      <ListBox movies={movies} />
      <WatchedBox tempWatchedData={tempWatchedData} />
    </main>
  );
};

export default Main;
