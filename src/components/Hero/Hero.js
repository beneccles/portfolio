import React from 'react';
import { withRouter } from 'react-router-dom';
import me from '../../assets/ben_nobackground.png';
import './Hero.css';

function Hero() {

    return (
        <div id="Hero">
            {/* <img id="heroImage" src={me} alt="profile portrait" /> */}
            <div className="heroText">
                <h1>Hi.</h1>
                <p>I'm Ben, a Full Stack Developer based out of Lehi, UT.</p>
            </div>
        </div>
    )
}

export default Hero;