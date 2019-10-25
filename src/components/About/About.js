import React from "react";
import "./About.css";
import me from "../../assets/me.jpg";

export default function About() {
  return (
    <div className="About">
      <div className="image" style={{ backgroundImage: `url(${me})` }}></div>
      <div id="aboutMe">
        <h1>Hi! I'm Ben...</h1>
        <p>
          As a Developer, I like to break code. Not what you were expecting,
          right? One of the things I've learned as a Full Stack Developer is
          that if you want to really understand how code works, take it apart
          and see where it breaks. Not only do we better understand how a
          particular function works, we are in a better position to handle
          errors for it when they come. When I'm not coding, you can find me
          composing on Piano or playing games like Destiny 2. If you have
          questions please don't hesitate to get in touch!
        </p>
        <div className="navi">
          <a href="#Projects">Projects </a>
          <a>Stack </a>
          <a>Contact</a>
        </div>
      </div>
    </div>
  );
}
