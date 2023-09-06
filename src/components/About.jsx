import "./about.css";
import { BiLogoMongodb } from 'react-icons/bi';
import { SiExpress } from 'react-icons/si';
import { BiLogoReact } from 'react-icons/bi';
import { FaNodeJs } from 'react-icons/fa';
import {AiFillHtml5} from 'react-icons/ai';
import {DiJavascript1} from 'react-icons/di'
import {BiLogoCss3} from 'react-icons/bi'

function About() {
  return (
    <div id="about">
      <div className="box">
        <h1>About</h1>
        <div className="about">
          <li>Hi, I am Parag Rane, having experience in developing projects such
            as Portfolio Mangement and Community page, Room Booking website
            using technologies like React, express, node, mongodb. I love
            creating and designing Frontends and Backends. Love to face
            challenges and first time interactions with new practices and
            designs.
          </li>
        </div>
        <h1>Skills</h1>
        <div className="skills">
          <li><AiFillHtml5/></li>
          <li><BiLogoCss3/></li>
          <li><DiJavascript1/></li>
          <li><BiLogoMongodb/></li>
          <li><SiExpress/></li>
          <li><BiLogoReact/></li>
          <li><FaNodeJs/></li>
        </div>
      </div>
    </div>
  );
}

export default About;
