import {useState} from "react"
import "./nav.css"
import { MdMenu, MdClose  } from 'react-icons/md'
import NavList from "../navList/navList"


const Nav = () => { 
  const [showMenu, setShowMenu] = useState(false)
  
  function handleMenu () {
    setShowMenu(!showMenu)
  }
  
  return(
  <div>
    <div className="mobile-buttons mobile" >
      <button onClick={()=>{ handleMenu(); }}>
        {
          !showMenu ? 
          <MdMenu size="3em"/> 
          : 
          <MdClose size="3em"/>
        }
      </button>
    </div>
    <div className={!showMenu ? "show-menu" : "" } >
      <NavList/>
    </div>
  </div>
)
}

export default Nav