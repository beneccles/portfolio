import React, {Component} from 'react';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import nasa from "./assets/nasa3.jpg";
import Hero from './components/Hero/Hero';
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
