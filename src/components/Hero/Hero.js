import React from 'react';
import { withRouter } from 'react-router-dom';
import me from '../../assets/me.jpg';
import './Hero.css';

function Hero() {
    return (
        <div className="Hero">
            <div>
                {/* <img id="heroImage" src={me} alt="profile portrait" /> */}
            </div>
        </div>
    )
}

export default withRouter(Hero);