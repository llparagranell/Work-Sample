import "./about.css";
import react from '../images/udemy react.pdf'
import node from '../images/udemy.pdf'


function About() {


  return (
    <div id="about">
      <div className="box">
        <h1>About</h1>
        <div className="about">
          <p className="about-p">Summary</p>
          <li className="about-li">Hi, I am Parag Rane, having experience in developing projects such
            as Portfolio Mangement and Community page, Room Booking website
            using technologies like React, express, node, mongodb. I love
            creating and designing Frontends and Backends. Love to face
            challenges and first time interactions with new practices and
            designs.
          </li>
          <p className="about-p">Education</p>
          <li className="about-li">Lakshmi Narain College of Technology & University 2021 - 2024</li>
          <li className="about-li">Samaritans English Medium Higher Secondary School (CBSE) 2021</li>

          <p className="about-p">Certifications</p>
          <li className="about-li"><a style={{textDecoration:"none",color:'#aba8f9'}} href={react}  download="parag_rane_react">Node.js, Express, MongoDB & More: The Complete Bootcamp 2023</a></li>
          <li className="about-li"><a style={{textDecoration:"none",color:'#aba8f9'}} href={node} download="parag_rane_node">React - The Complete Guide 2023 (incl. React Router & Redux)</a></li>

          <p className="about-p">Technical skills</p>
          <li className="about-li">JavaScript, Java, HTML/CSS, React.js, Express.js, Node.js, MongoDB, Sass, Bootstrap,
Figma, Git, Github</li>
<p className="about-p">Achievements</p>
          <li className="about-li">Proven problem-solving skills through successful completion of 200+ coding questions on GeeksforGeeks</li>
          <li className="about-li">Attained 5-star rating on HackerRank, showcasing elite problem-solving and algorithmic skills</li>

        </div>
        
        {/* <h1>Skills</h1>
        <div className="skills">
          <li><AiFillHtml5/></li>
          <li><BiLogoCss3/></li>
          <li><DiJavascript1/></li>
          <li><BiLogoMongodb/></li>
          <li><SiExpress/></li>
          <li><BiLogoReact/></li>
          <li><FaNodeJs/></li>
        </div> */}
      </div>

     

    </div>
  );
}

export default About;
