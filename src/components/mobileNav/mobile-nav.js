import { useState } from "react"
import "./mobile-nav.css"
import { MdMenu, MdClose  } from 'react-icons/md'


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
      <button  className={!showMenu ? "hide" : ""} onClick={()=>{ handleMenu(); }}>
        <MdClose size="3em"/>
      </button>
      <div className={!showMenu ? "hide" : "mobile-nav"} > 
        hola
      </div>
    </div>
  ) 
}

export default MobileNav