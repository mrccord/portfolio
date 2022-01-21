import { useState } from "react"
import "./mobile-nav.css"
import { MdMenu, MdClose  } from 'react-icons/md'
import NavList from "../navList/navList"


const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false)
  
  function handleMenu () {
    setShowMenu(!showMenu)
  }

  return(
    <div className="mobile">
      <button className={ showMenu ? "hide" : "" } onClick={()=>{ handleMenu(); }}>
        <MdMenu size="3em"/>
      </button>
      <div className={!showMenu ? "hide" : "mobile-nav"} >
        <div className="close-button">
          <button  className={!showMenu ? "hide" : ""} onClick={()=>{ handleMenu(); }}>
            <MdClose size="3em"/>
          </button>
        </div>
        <NavList type="mobile"/>
      </div>
    </div>
  ) 
}

export default MobileNav