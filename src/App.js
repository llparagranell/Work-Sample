import Home from "./components/Home";
import About from "./components/About";

import './App.css'
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
      <footer style={{textAlign:"center",color:"white",padding:"10px 0"}}>
        @copyright-llparagranell
      </footer>
    </div>
  );
}

export default App;
