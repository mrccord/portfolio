import Logo from "../../components/logo/logo"
import MobileNav from "../../components/mobileNav/mobile-nav"
import DesktopNav from "../../components/desktopNav/desktop-nav"
import "./header.css"

const Header = () => (
  <header>
    <a href="/">
      <Logo size="small"/>
    </a>
    <DesktopNav />
    <MobileNav />
  </header>
)

export default Header