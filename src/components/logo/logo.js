import Log from "../../assets/images/logo.png"
import "./logo.css"

const Logo = ({size}) => (
  <img className={`logo ${size}`} src={Log} alt="Macord" />
)

export default Logo