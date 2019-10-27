import React from "react";
import "./Contact.scss";
import linkedIn from '../../assets/iconmonstr-linkedin-5.svg'
import mail from '../../assets/mail.svg'
import phone from '../../assets/phone_iphone-24px.svg'
import github from '../../assets/github.svg'

function Contact() {
  // clip-rule="evenodd"
  return (
    <div id="Contact">
      <h1>Contact</h1>
      <div className="contactInfo">
      <img className="svgItem" src={github} alt="github logo" />
      <img className="svgItem" src={linkedIn} alt="LinkedIn Logo" />
      <img className="svgItem" src={mail} alt="Email Link"/>
      <img className="svgItem" src={phone} alt="Phone Link" />
      </div>
    </div>
  );
}

export default Contact;
