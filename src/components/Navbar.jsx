import './navbar.css'
import resume from '../images/parag_rane_resume.pdf'

function Navbar() {
    return ( <nav>
        <ul>
            <a href='.heading'>Home</a>
            <a href='#about'>About</a>
            <a href='#project'>Project</a>
            <a href='#contact'>Contact</a>
            <a href={resume} download="parag_rane_resume" rel="noreferrer">Resume</a>
        </ul>
    </nav> );
}

export default Navbar;