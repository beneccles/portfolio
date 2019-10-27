import React, {useRef, useEffect, Component} from 'react';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
// eslint-disable-next-line
import Hero from './components/Hero/Hero';
import './App.css';


class App extends Component {
  constructor() {
    super()

    this.projects = React.createRef()
  }

  render() {
    console.log(this.projects.current)
    return (
        <body>
      <div className="App" ref={this.projects}>
        <Header/>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
        </body>
  )
}

}

export default App;
