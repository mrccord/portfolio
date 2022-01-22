import Logo from "../../components/logo/logo"
import Nav from "../../components/nav/nav"
import "./header.css"

const Header = () => (
  <header>
    <a href="/">
      <Logo size="small"/>
    </a>
    <Nav/>
  </header>
)

export default Header