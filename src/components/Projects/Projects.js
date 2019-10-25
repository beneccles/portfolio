import React from "react";
import Slider from 'react-slick';
import login from './assets/reforged/login.png';
import post from './assets/reforged/post.png';
import create_empty from './assets/reforged/create_empty.png';
import create_filled from './assets/reforged/create_filled.png';
import dashboard from "./assets/reforged/dashboard.png";
import "./Projects.css";

function Projects() {
    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        cssEase: 'linear',
        autoplaySpeed: 5000
    }

  return (
    <div id="Projects">
      <div className="project">
        <h1>Reforged Machines</h1>
        <Slider {...settings}>
        <img src={login}/>
        <img src={dashboard}/>
        <img src={post} />
        <img src={create_empty}/>
        <img src={create_filled}/>
        </Slider>
        <ul>
          <li>
            Reforged Machines is a platform for buying and selling used
            computers online.
          </li>
          <li>
            When a user creates a new listing for a computer, they can populate
            the system specs with just one click. The app is able to pull the
            user's system information using Node.js.
          </li>
          <li>
            Current computers for sale are listed as tiles on the main
            dashboard. The app is mobile responsive, allowing the user to swipe
            to switch to the next page.
          </li>
          <li>
            When a user is ready to a buy a computer, they can enter the name
            and number on a post's page. When they hit "Call Me," our chatbot
            will call their number, and confirm their choice over the phone. If
            they say yes, the bot will connect the call to the seller.
          </li>
          <li>
            Built using: React.js, Express, PostgreSQL, Amazon S3, and Twillio
            Flow.{" "}
          </li>
          <li>Live site: www.reforged.tech</li>
          <li>GitHub Repo Link Here</li>
        </ul>
      </div>
      <div className="project">
        <div className="projectImages">Test</div>
      </div>
    </div>
  );
}

export default Projects;
