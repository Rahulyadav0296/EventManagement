import React from "react";
import logo from "../../assets/logo.png";
import "./Header.css";
function Header() {
  return (
    <header className="header">
      <img src={logo} alt="The logo" className="logo" />
      <h1 className="title">Event Management website</h1>
    </header>
  );
}

export default Header;
