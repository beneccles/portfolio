import React from "react";
import Slider from 'react-slick';
import login from './assets/reforged/login.png';
import post from './assets/reforged/post.png';
import create_empty from './assets/reforged/create_empty.png';
import create_filled from './assets/reforged/create_filled.png';
import dashboard from "./assets/reforged/dashboard.png";
import game from './assets/waka2/game.png';
import highscore from './assets/waka2/highscore.png';
import landing from './assets/waka2/landing.png';
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
        <img src={login} height="335.28" alt="login screenshot"/>
        <img src={dashboard} height="335.28" alt="Dashboard screenshot"/>
        <img src={post} height="335.28" alt="Post screenshot" />
        <img src={create_empty} height="335.28" alt="Create Empty" />
        <img src={create_filled} height="335.28" alt="Create Filled"/>
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
        <h1>WAKA TWO</h1>
        <Slider {...settings}>
        <img src={landing} alt="landing page"/>
        <img src={game} alt="game screenshot"/>
        <img src={highscore} alt="highscore screenshot" />
        </Slider>
        <p>
        Waka 2 is a full Pacman clone built using React, Express, PostgreSQL, and Sass (both the verbal and CSS kind). The game includes
        a single player version as well as a 2 player pacman versus mode. For single player, each ghost is programmed to chase Pacman per the original game logic. Blinky will track Pacman's coordinates directly. 
        Pinky will target 4 spaces in front of Pacman to cut off the player. Inky will also try to cut the player off by finding 
        the halfway point between Blinky and Pacman, and then target 180 degrees from that point. Finally Clyde will follow Blinky's
        tracking if he is 8 or more spaces from the player, or follow scatter mode tracking if within 8 spaces. The player will win the 
        game if the successfully evade the ghosts and collect all of the pellets. The player looses the game if they loose all three lives. In two player mode,
        the first player to collect the most pellets wins. If a player eats a power pellet, they gain the power to eat the other player.
        </p>
        <br />
          <a id="reforge" href="https://www.waka2.dev">
            <img src={web} alt="Web Icon" />
            waka2.dev
          </a>
          <a id="github" href="https://github.com/waka2/waka2">
            <img src={github} alt="Github Link" />
            Github
          </a>
      </div>
    </div>
  );
}

export default Projects;
