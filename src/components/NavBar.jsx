import React, { useState } from "react";
import Logo from "./Logo";
import Search from "./Search";
import NumResults from "./NumResults";

const NavBar = ({ movies }) => {
  return (
    <div>
      <nav className="nav-bar">
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </nav>
    </div>
  );
};

export default NavBar;
