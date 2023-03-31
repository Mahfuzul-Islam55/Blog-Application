import React, { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="py-4 border-b">
        <div className="navbar-container">
          <div className="logo">
            <a href="index.html">
              <img src="" alt="search" />
            </a>
          </div>
          <div className="auth-buttons">
            <button className="btn btn-primary">sign in</button>
            <button className="btn btn-outline">sign up</button>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
