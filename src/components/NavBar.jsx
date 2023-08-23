import React, { useState } from "react";
import Logo from "./Logo";
import Search from "./Search";

const NavBar = ({ movies }) => {

  return (
    <div>
      <nav className="nav-bar">
       <Logo/>
       <Search />

      
        <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
      </nav>
    </div>
  );
};

export default NavBar;
