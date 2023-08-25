import React, { useState } from "react";
import Logo from "./Logo";
import Search from "./Search";
import NumResults from "./NumResults";

const NavBar = ({ children }) => {
  return (
    <div>
      <nav className="nav-bar">{children}</nav>
    </div>
  );
};

export default NavBar;
