import "./projects.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function Project() {
  return (
    <div id="project">
      <div className="project">
        <h1>Projets</h1>
      </div>
      <div className="card-container">
        <div className="card">
          Portfolio Management{" "}
          <a href="https://github.com/llparagranell/Portfolio-Management" >
            <BsFillArrowRightCircleFill />
          </a>
        </div>
        <div className="card">
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
        </div>
      </div>
    </div>
  );
}

export default Project;
