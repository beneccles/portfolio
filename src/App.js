import React from 'react';
import ParticleAnimation from 'react-particle-animation';
import Header from './components/Header/Header';
import Particles from 'react-particles-js';
import './App.css';

function App() {
  const particlesOptions = {
    particles: {
      number: {
        value: 300,
        density: {
          enable: true,
          value_area:800
        }
      }
    }
  }
  return (
    <div className="App">
      {/* <svg id="svgBack" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g fill="white" stroke="green" stroke-witdth="5">
          <circle cx="40" cy="40" r="5" />
          <circle cx="60" cy="60" r="25" />
          <line xl="0" x2="100" y1="50" y2="70" />
          <circle stroke="blue" cx="40" cy="40" r="5" />
        </g>
      </svg> */}
      {/* <ParticleAnimation background={{ r:37, g:52, b:72, a:1 }} numParticles={800} /> */}
      {/* <Particles className="particles" params={particlesOptions} /> */}
      <Header />
    </div>
  );
}

export default App;
