import React from "react";
import Slider from 'react-slick';
import login from './assets/reforged/login.png';
import post from './assets/reforged/post.png';
import create_empty from './assets/reforged/create_empty.png';
import create_filled from './assets/reforged/create_filled.png';
import dashboard from "./assets/reforged/dashboard.png";
import web from "../../assets/web-24px.svg";
import github from '../../assets/github.svg';
import "./Projects.scss";

function Projects() {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
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
        <h1>REFORGED MACHINES</h1>
        <Slider {...settings}>
        <img src={login} alt="login screenshot"/>
        <img src={dashboard} alt="Dashboard screenshot"/>
        <img src={post} alt="Post screenshot" />
        <img src={create_empty} alt="Create Empty" />
        <img src={create_filled} alt="Create Filled"/>
        </Slider>
          <p>
            Reforged Machines is a platform for buying and selling used
            computers online. When a user creates a new listing for a computer, they can populate
            the system specs with just one click. The app is able to pull the
            user's system information using Node.js. Current computers for sale are listed as tiles on the main
            dashboard. The app is mobile responsive, allowing the user to swipe
            to switch to the next page. When a user is ready to a buy a computer, they can enter the name
            and number on a post's page. When they hit "Call Me," my chatbot
            will call their number, and confirm their choice over the phone. If
            they say yes, the bot will connect the call to the seller.
          </p>
          <br />
          <p>
            Built using: React.js, Express, PostgreSQL, Amazon S3, and Twillio.
          </p>
          <br />
          <a id="reforge" href="www.reforged.tech">
            <img src={web} alt="Web Icon" />
            Reforged.tech
          </a>
          <a id="github" href="https://github.com/beneccles/reforge">
            <img src={github} alt="Github Link" />
            Github
          </a>
      </div>
      <div className="project">
        <h1>COMING SOON</h1>
      </div>
    </div>
  );
}

export default Projects;
