import React from 'react';
import { withRouter } from 'react-router-dom';
import me from '../../assets/me.jpg';
import './Hero.css';

function Hero() {
    return (
        <div className="Hero">
            <div id="heroImage" style={{ backgroundImage: `url('${me})`}}>

            </div>
        </div>
    )
}

export default withRouter(Hero);