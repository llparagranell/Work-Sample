import './navbar.css'
import resume from '../images/parag_rane_resume.pdf'

function Navbar() {
    return ( <nav>
        <ul>
            <a href='.heading' className='dark-font'>Home</a>
            <a href='#about' className='dark-font'>About</a>
            <a href='#project' className='dark-font'>Project</a>
            <a href='#contact' className='dark-font'>Contact</a>
            <a href={resume} download="parag_rane_resume" rel="noreferrer" className='dark-font'>Resume</a>
        </ul>
    </nav> );
}

export default Navbar;