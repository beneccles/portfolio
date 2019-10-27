import React from "react";
// eslint-disable-next-line
import "./Header.scss";

export default function Header() {

  return (
    <div className="Header">
        <div className="nameLogo">
            <h1>Benjamin Eccles</h1>
        </div>
      <div className="navBar">
      <a href="#Hero">About</a>
      <a href="#Projects">Projects</a>
      <a href="#Contact">Contact</a>

      </div>
    </div>
  );
}
