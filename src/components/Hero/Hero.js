import React from "react";
import "./Hero.scss";

function Hero() {
  return (
    <div id="Hero" >
      <div className="heroText">
        <p><a href="#About">About</a>   -   <a href="#Projects">Projects</a>   -   <a href="#Skills">Stack</a>   -   <a href="#Contact">Contact</a></p>
        <h1>My Name is Benjamin Eccles</h1>
        <br/>
        <p>a Full Stack Developer based out of Lehi, UT.</p>
      </div>
    </div>
  );
}

export default Hero;
