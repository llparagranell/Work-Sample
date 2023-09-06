import "./home.css";
import { BsFillArrowDownCircleFill } from 'react-icons/bs';

function Home() {
  return (
    <div className="heading">
      <p id="name">Parag Rane</p> 
      <p id="pro">Full Stack Developer</p>
      <a href="#about"><BsFillArrowDownCircleFill/></a>
    </div>
  );
}

export default Home;
