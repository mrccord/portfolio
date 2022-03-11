import "./navList.css"
import { Link } from 'react-scroll'

const NavList = () => (
  <nav className="nav-list">
    <ul>
      <li><Link to="about" smooth={true}>About</Link></li>
      <li><Link to="experience" smooth={true}>Experience</Link></li>
      <li><Link to="about" smooth={true}>Work</Link></li>
      <li><Link to="about" smooth={true}>Contact</Link></li>
    </ul>
  </nav>
)

export default NavList