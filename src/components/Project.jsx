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
        <h1>Projects</h1>
      </div>
      <div className="project-container">
        <div className="flex">
          {" "}
          <div className="projects">
            <img src={img_1} alt=""  className="p-img"/>
            <img src={img_2} alt="" className="mar p-img" />
          </div>
          <div className="description" style={{ color: "white" }}>
            <h1> 🌟 Introducing "Tour Booking" Project 🌍</h1>

            <h3>Tech Stack: MERN (MongoDB, Express, React, Node.js)</h3>
            <li>🚀 Seamless booking experience for travelers</li>
            <li>🌐 Explore stunning destinations with ease</li>
            <li>🧳 Personalized itineraries for a unique adventure</li>
            <li>💻 Cutting-edge web development</li>
            <li>🌟 Join the journey of innovation!</li>
            <h2>
              #TourBooking #MERNstack #TravelTech #WebDevelopment
              #InnovationInProgress
            </h2>
            <a
              href="https://github.com/llparagranell/tourbooking"
              className="a"
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
            <h1> 🌟 Introducing "Chat App" Project 🌍</h1>

            <h3>Tech Stack: MERN (MongoDB, Express, React, Node.js)</h3>
            <li>🌍 Global connectivity</li>
            <li>🔄 Real-time messaging</li>
            <li>📱 Responsive design</li>
            <li>💬 Personalized chats</li>
            <li>💡 Developed on MERN stack</li>
            <h2>#ChatApp #MERNstack #WebDevelopment #InnovationInProgress</h2>
            <a
              href="https://github.com/llparagranell/tourbooking"
              className="a"
            >
              Github Link <BsFillArrowRightCircleFill />
            </a>
          </div>
        </div>

      </div>

      {/* <div className="card-container"> */}
      {/* <div className="card"> */}

      {/* Portfolio Management{" "} */}
      {/* <a href="https://github.com/llparagranell/Portfolio-Management" >
            <BsFillArrowRightCircleFill />
          </a> */}
      {/* </div> */}
      {/* <div className="card">
          Tourbooking{" "}
          <a href="https://github.com/llparagranell/tourbooking">
            <BsFillArrowRightCircleFill />
          </a>
        </div>
        <div className="card">
          Bookstore{" "}
          <a href="https://github.com/llparagranell/bookstore">
            <BsFillArrowRightCircleFill />
          </a>
        </div>
        <div className="card">
          News App{" "}
          <a href="https://github.com/llparagranell/react-news-app">
            <BsFillArrowRightCircleFill />
          </a>
        </div> */}
      {/* </div> */}
      <a href="https://github.com/llparagranell" style={{color:"white",textDecoration:"none"}}>More projects...</a>
    </div>
  );
}

export default Project;
