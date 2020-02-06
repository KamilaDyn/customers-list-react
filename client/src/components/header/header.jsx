import React from "react";
import "./header.scss";

const Header = () => (
  <div className="header-container">
    <a href="/">
      <header className="header">
        <h1>Customer Management in React</h1>
        <p>React app connected with MongoDB</p>
      </header>
    </a>
  </div>
);

export default Header;
