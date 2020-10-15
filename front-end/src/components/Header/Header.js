import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {

//   const signOut = () => {
//     localStorage.removeItem("token");
//     window.location.reload("/articles/");
//   };

  return (
    <div className="header">
      <a
        className="logo"
        href="#"
      >
        Kickstarter-Success
      </a>
      <nav className="nav-links">
        <a href="#">Dashboard</a>
        <a href="#">Sign In</a>
        <a href="#">Sign Out</a>
      </nav>
    </div>
  );
};

export default Header;