import "./home.css";
// import { BsFillArrowDownCircleFill } from 'react-icons/bs';
// import user_img from "../images/user_img.png";
import user_img from "../images/Blogging (1).gif";

import { FaLinkedin } from "react-icons/fa";
import { BsGithub, BsInstagram } from "react-icons/bs";
function Home() {
  return (
    <div className="heading">
      <div className="ex">
        <p className="white-font" style={{lineHeight:"1",marginBottom:"20px"}}> Parag Rane</p>
        <p className="light-font" >Full Stack Developer</p>
        {/* <p className="dark-font">MERN stack developer with expertise in building dynamic and responsive <br /> web applications using MongoDB, Express.js, React.js, and Node.js.</p> */}
        <p className="dark-font">#MongoDB  #Express.js  #React.js  #Node.js</p>
        <ul style={{marginTop:"30px"}}>
          <a href="https://www.linkedin.com/in/parag-rane-414089243/" className="light-font" style={{color:"blueviolet"}}>
            <FaLinkedin />
          </a>
          <a href="https://github.com/llparagranell" style={{padding:"0 25px",color:"blueviolet"}} className="light-font">
            <BsGithub />
          </a>
          <a href="https://www.instagram.com/___parag___rane___/" className="light-font" style={{color:"blueviolet"}}>
            <BsInstagram />
          </a>
        </ul>
        {/* <a href="#about"><BsFillArrowDownCircleFill/></a> */}
      </div>
      <div>
        <img id="h-img" src={user_img} alt="img"/>
      </div>
    </div>
  );
}

export default Home;
