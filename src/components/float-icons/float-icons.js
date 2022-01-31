import './float-icons.css'
import Linkedin from './../../assets/images/linkedin.svg'
import Github from './../../assets/images/github.svg'
import Sun from './../../assets/images/sun.svg'
import Moon from './../../assets/images/moon.svg'
import Lang from './../../assets/images/lang.svg'


const FloatIcons = ({float}) => {
  
  return(
    <div className="icons-section">
        { float === 'left' ? 
          <div className={`icons icons-${float}`}>
            <img src={Linkedin} alt="Linkedin" />
            <img src={Github} alt="Github" />
          </div>
        :
          <div className={`icons icons-${float}`}>
            <img src={Sun} alt="Linkedin" />
            <img src={Moon} alt="Linkedin" />
            <img src={Lang} alt="Linkedin" />
          </div>
        }
      <div className={`line line-${float}`}></div>
    </div>
  )
}

export default FloatIcons