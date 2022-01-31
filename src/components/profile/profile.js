import './profile.css'
import Picture from "./../../assets/images/picture.png"

const Profile = () => { 
  return (
    <div className="profile" >
      <img src={Picture}  alt="profile-pic"/>
    </div>
  )
}

export default Profile