import React, {useRef} from "react";
import me from "../../assets/ben_nobackground.png";
import nasa from "../../assets/nasa2.jpg";
import "./Hero.scss";

function Hero() {
    const projectLink = useRef(null);
// style={{ backgroundImage: `url(${nasa})` }}
  return (
    <div id="Hero" >
    <div id="satNav">
      {/* <a href="#About">
          <p id="pAbout" className="navLink">About</p>
      </a>
      <a className="menu-item" href="#Projects" ref={projectLink}>
        <p id="pProjects" className="navLink">Projects</p>
      </a>
      <a className="Menu-item" href="#Skills">
        <p id="pStack" className="navLink">Stack</p>
      </a>
      <a className="menu-item" href="#Contact">
        <p id="pContact" className="navLink">Contact</p>
      </a> */}
    </div>
  
      <div className="heroText">
        <p><a href="#About">About</a>   -   <a href="#Projects">Projects</a>   -   <a href="#Skills">Stack</a>   -   <a href="#Contact">Contact</a></p>
        <h1>My Name is Benjamin Eccles</h1>
        <p>a Full Stack Developer based out of Lehi, UT.</p>
      </div>
    </div>
  );
}

export default Hero;
