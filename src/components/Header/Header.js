import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
        <div className="nameLogo">
            <h1>Benjamin Eccles</h1>
        </div>
      <div className="navBar">
        <span>About</span>
        <span>Contact</span>
        <span>Projects</span>
      </div>
    </div>
  );
}
