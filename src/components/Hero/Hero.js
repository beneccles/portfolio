import React from 'react';
import { withRouter } from 'react-router-dom';
import me from '../../assets/ben_nobackground.png';
import nasa from '../../assets/nasa2.jpg';
import './Hero.scss';

function Hero() {

    return (
        <div id="Hero" style={{backgroundImage: `url(${nasa})`}}>
            <div className="heroText">
                <h1>My Name is Benjamin Eccles</h1>
                <p>a Full Stack Developer based out of Lehi, UT.</p>
            </div>
        </div>
    )
}

export default Hero;