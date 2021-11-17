import Logo from "../logo/logo"
import Nav from "../nav/nav"
import "./header.css"

const Header = () => (
  <header>
    <a href="#">
      <Logo size="small"/>
    </a>
    <Nav/>
  </header>
)

export default Header