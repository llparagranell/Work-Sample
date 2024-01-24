import { TiTick } from "react-icons/ti";
import "./contact.css";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub, BsInstagram } from "react-icons/bs";

function Contact() {
  return (
    <div id="contact">
      <div className="contact">
        <h1 className="white-font">Contact</h1>
        <div className="con">
          <p className="dark-font">Let's get connected...</p>
          <div className="search">
            <input type="text" placeholder="Enter your message" />
            <li>
            <TiTick />
            </li>
          </div>
        </div>
        <ul>
            <a href="https://www.linkedin.com/in/parag-rane-414089243/" className="light-font" style={{color:"blueviolet"}}><FaLinkedin/></a>
            <a href="https://github.com/llparagranell" className="light-font" style={{color:"blueviolet"}}><BsGithub/></a>
            <a href="https://www.instagram.com/___parag___rane___/" className="light-font" style={{color:"blueviolet"}}><BsInstagram/></a>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
