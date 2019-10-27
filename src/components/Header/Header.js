import React from "react";
// eslint-disable-next-line
import "./Header.scss";

export default function Header(props) {

  return (
    <div className="Header">
        <div className="nameLogo">
            <h1>Benjamin Eccles</h1>
        </div>
      <div className="navBar">

        <button onClick={props.scroll}>Click</button>
      <a href="#Hero">About</a>
      <a href="#Projects">Projects</a>
      <a href="#Contact">Contact</a>

      </div>
    </div>
  );
}
