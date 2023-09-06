import { BiSearch } from "react-icons/bi";
import "./contact.css";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub, BsInstagram } from "react-icons/bs";

function Contact() {
  return (
    <div id="contact">
      <div className="contact">
        <h1>Contact</h1>
        <div className="con">
          <p>Let's get connected...</p>
          <div className="search">
            <input type="text" placeholder="Enter your message" />
            <li>
              <BiSearch />
            </li>
          </div>
        </div>
        <ul>
            <a href="https://www.linkedin.com/in/parag-rane-414089243/"><FaLinkedin/></a>
            <a href="https://github.com/llparagranell"><BsGithub/></a>
            <a href="https://www.instagram.com/___parag___rane___/"><BsInstagram/></a>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
