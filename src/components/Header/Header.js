import React from "react";
// eslint-disable-next-line
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {

  return (
    <div className="Header">
        <div className="nameLogo">
            <h1>Benjamin Eccles</h1>
        </div>
      <div className="navBar">
        <a href='#about'>About</a>
        <a href='#contact'>Contact</a>
        <a href='#projects'>Projects</a>
      </div>
    </div>
  );
}
