import React from "react";
import "../styles/components/navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="inner-navbar">
        <div className="logo">
          FLAT<span>ARCHITECTS</span>
        </div>
        <nav className="nav">
          <li>
            <a href="/projects">PROJECTS</a>
          </li>
          <li>
            <a href="/studio">STUDIO</a>
          </li>
          <li>
            <a href="/team">TEAM</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/awards">AWARDS</a>
          </li>
          <li>
            <a href="/press">PRESS</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
