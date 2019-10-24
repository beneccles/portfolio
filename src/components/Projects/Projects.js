import React from 'react';
import './Projects.css'

function Projects() {
    return (
        <div id="Projects">
            <h1>Projects</h1>
            <div className="project">
                <h1>Reforged Machines</h1>
                <ul>
                    <li>Reforged Machines is a platform for buying and selling used computers online.</li>
                    <li>When a user creates a new listing for a computer, they can populate the system specs with just one click. The app is able to pull the user's system information using Node.js.
                    </li>
                    <li>Current computers for sale are listed as tiles on the main dashboard. The app is mobile responsive, allowing the user to swipe to switch to the next page.</li>
                    <li>When a user is ready to a buy a computer, they can enter the name and number on a post's page. When they hit "Call Me," our chatbot will call their number,
                         and confirm their choice over the phone. If they say yes, the bot will connect the call to the seller.</li>
                    <li>Built using: React.js, Express, PostgreSQL, Amazon S3, and Twillio Flow. </li>
                    <li>Live site: www.reforged.tech</li>
                    <li>GitHub Repo Link Here</li>
                </ul>
            </div>
        </div>
    )
}

export default Projects