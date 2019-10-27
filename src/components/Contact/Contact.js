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
        <a className="contactLink" href="https://github.com/beneccles" target="_blank">
      <img className="svgItem" src={github} alt="github logo" />
              https://github.com/beneccles
        </a>
      <a className="contactLink" href="https://www.linkedin.com/in/benjamin-grant-eccles" target="_blank">
      <img className="svgItem" src={linkedIn} alt="LinkedIn Logo" />
              https://www.linkedin.com/in/benjamin-grant-eccles
      </a>
      <a className="contactLink" href="mailto:ben.g.eccles@icloud.com?subject=Let's chat!" target="_blank">
      <img className="svgItem" src={mail} alt="Email Link"/>
              ben.g.eccles@icloud.com
      </a>
      <a className="contactLink" href="tel:1-703-589-4200" target="_blank">
              <img className="svgItem" src={phone} alt="Phone Link" />
              703-589-4200
      </a>
      </div>
    </div>
  );
}

export default Contact;
