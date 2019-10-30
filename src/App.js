import React, {useRef, useEffect, Component} from 'react';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import nasa from "./assets/nasa2.jpg";
// eslint-disable-next-line
import Hero from './components/Hero/Hero';
// import { slide as Menu } from 'react-burger-menu'
import './App.scss';


class App extends Component {
  constructor() {
    super()

    this.projects = React.createRef()
  }

 

  render() {
    return (
        <body>
      <div className="App" style={{ backgroundImage: `url(${nasa})` }}>
        {/* <Header project={this.projects}/> */}
        <Hero />
        <About />
        <Projects ref={this.projects} />
        <Skills />
        <Contact />
      </div>
        </body>
  )
}

}

export default App;
