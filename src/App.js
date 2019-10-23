import React from 'react';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
// eslint-disable-next-line
import Hero from './components/Hero/Hero';
import {Element} from 'react-scroll';
import './App.css';

function App() {

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
      <Header />
      <Element name="Hero" className="element">
        <Hero />
      </Element>
      <Element name="Projects" className="element">
        <Projects />
      </Element>
      <Element name="Contact" className="element">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
