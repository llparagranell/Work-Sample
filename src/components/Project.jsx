import "./projects.css";
import img_1 from "../images/1.png";
import img_2 from "../images/2.png";
import img_3 from "../images/3.png";
import img_4 from "../images/4.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function Project() {
  return (
    <div id="project">
      <div className="project">
        <h1 className="white-font">Projects</h1>
      </div>
      <div className="project-container">
        <div className="flex">
          {" "}
          <div className="projects">
            <img src={img_1} alt=""  className="p-img"/>
            <img src={img_2} alt="" className="mar p-img" />
          </div>
          <div className="description">
            <h1 className="light-font"> 🌟 Introducing "Tour Booking" Project 🌍</h1>

            {/* <h3 className="light-font">Tech Stack: MERN (MongoDB, Express, React, Node.js)</h3> */}
            <li className="dark-font">🚀 Seamless booking experience for travelers</li>
            <li className="dark-font">🌐 Explore stunning destinations with ease</li>
            <li className="dark-font">🧳 Personalized itineraries for a unique adventure</li>
            <li className="dark-font">💻 Cutting-edge web development</li>
            <li className="dark-font">🌟 Join the journey of innovation!</li>
            {/* <p className="light-font">
              #TourBooking #MERNstack #TravelTech #WebDevelopment
              #InnovationInProgress
            </p> */}
            <a
              href="https://github.com/llparagranell/tourbooking"
              className="light-font a"
            >
              Github Link <BsFillArrowRightCircleFill />
            </a>
          </div>
        </div>
        <div
          className="flex fl"
          
        >
          <div className="projects">
            <img src={img_3} alt="" className="p-img" />
            <img src={img_4} alt="" className="mar p-img" />
          </div>
          <div className="description" style={{ color:"white" }}>
            <h1 className="light-font"> 🌟 Introducing "Chat App" Project 🌍</h1>

            {/* <p className="light-font">Tech Stack: MERN (MongoDB, Express, React, Node.js)</p> */}
            <li className="dark-font">🌍 Global connectivity</li>
            <li className="dark-font">🔄 Real-time messaging</li>
            <li className="dark-font">📱 Responsive design</li>
            <li className="dark-font">💬 Personalized chats</li>
            <li className="dark-font">💡 Developed on MERN stack</li>
            {/* <p className="light-font">#ChatApp #MERNstack #WebDevelopment #InnovationInProgress</p> */}
            <a
              href="https://github.com/llparagranell/tourbooking"
              className="light-font a"
            >
              Github Link <BsFillArrowRightCircleFill />
            </a>
          </div>
        </div>

      </div>
      <a href="https://github.com/llparagranell" style={{textDecoration:"none"}} className="light-font">More projects...</a>
    </div>
  );
}

export default Project;
