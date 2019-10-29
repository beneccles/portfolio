import React from "react";
import jump from 'jump.js'
// eslint-disable-next-line
import "./Header.scss";
import '../../../node_modules/rc-menu/assets/index.css';


export default function Header() {
  
  // const titleRight = (<h1>Menu</h1>)



  return (
  //   <div className="MenuDiv" style={{ width: 200}}>
  //   {/* <Menu defaultActiveFirst id="Menu" >
  //   <SubMenu title="Menu" key="1">
  //   <MenuItem key="1-1"><a className="menu-item" href="#Hero">About</a></MenuItem>
  //   <MenuItem key="1-2"><a className="menu-item" href="#Projects">Projects</a></MenuItem>
  //   <MenuItem key="1-3"><a className="menu-item" href="#Contact">Contact</a></MenuItem>
  //   </SubMenu>
  //   </Menu> */}
  //   <Menu right customBurgerIcon={ <img src={web} /> }>
  // <a className="menu-item" href="#Hero">About</a>
  //  <a className="menu-item" href="#Projects">Projects</a>
  //   <a className="menu-item" href="#Contact">Contact</a>
  //   </Menu>
  //   </div>
    <div className="Header">
        {/* <div className="nameLogo">
            <h1>Benjamin Eccles</h1>
        </div> */}
      <div className="navBar">

      <a className="menu-item" href="#about">About</a>
      <a className="menu-item" href="#Projects">Projects</a>
      <a className="Menu-item" href="#Stack">Stack</a>
      <a className="menu-item" href="#Contact">Contact</a>
      </div>
    </div>
  );
}
