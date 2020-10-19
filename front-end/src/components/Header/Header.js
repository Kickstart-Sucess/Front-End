import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {

  const signOut = () => {
    localStorage.removeItem("token");
    window.location.reload("/login");
  };

  return (
    <div className="header">
      <a
        className="logo"
        href="#"
      >
        Kickstarter-Success
      </a>
      <nav className="nav-links">
        {localStorage.getItem("token") ? (
          <Link className="nav-link" to="/Dashboard">
            Dashboard
          </Link>
        ) : null}
        {localStorage.getItem("token") ? (
          <Link className="nav-link" to="/" onClick={signOut}>
            Sign Out
          </Link>
        ) : (
          <Link className="nav-link" to="/login">
            Sign In
          </Link>
        )}
        {localStorage.getItem("token") ? null : (
          <Link className="nav-link" id="signup-btn" to="/SignUp">
            Sign Up
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;