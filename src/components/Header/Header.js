import React, {useEffect} from "react";
// eslint-disable-next-line
import * as Scroll from 'react-scroll';
import { Link, Events, scrollSpy} from 'react-scroll'
import "./Header.css";

export default function Header() {

  // useEffect is a react Hook that directly hooks into
  // the Component Life Cycle method. useEffect is similar to using
  // componentDidMount in a normal react class. The code inside of the function
  // being returned is similar to using componentDidUnmount. Except in this case,
  // they work inside of a functional component!
  // useEffect(() => {
  //   // Events.scrollEvent.register('begin', function(to, element) {
  //   //   console.log("begin", arguments)
  //   // })

  //   Events.scrollEvent.register('end', function(to, element) {
  //     console.log("end", arguments)
  //   })

  //   scrollSpy.update()

  //   return () => {
  //     Events.scrollEvent.remove('begin');
  //     Events.scrollEvent.remove('end');
  //   }
  // }, []);


  return (
    <div className="Header">
        <div className="nameLogo">
            <h1>Benjamin Eccles</h1>
        </div>
      <div className="navBar">
      <Link activeClass="active" to="About" spy={true} smooth={true} duration={200}>
        About
      </Link>
      <Link activeClass="active" to="Projects" spy={true} smooth={true} duration={200}>
        Projects
      </Link>
      <Link activeClass="active" to="Contact" spy={true} smooth={true} duration={200}>
        Contact
      </Link>

      </div>
    </div>
  );
}
