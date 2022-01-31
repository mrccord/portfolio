import Logo from "../../components/logo/logo"
import Nav from "../../components/nav/nav"
import "./header.css"
import {Link} from "react-scroll"

const Header = () => (
  <header>
    <Link to="hero" smooth={true}>
      <Logo size="small"/>
    </Link>
    <Nav/>
  </header>
)

export default Header