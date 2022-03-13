import "./experience-box.css"

const ExperienceBox = ({position, employee, time, description, img}) => (
  <div className="box">
    <div className="box-info">
      <div className="box-header">
        <span className="box-title">{position}</span>
        <span className="employee">{employee}</span>
        <span className="time">{time}</span>
      </div>
      <div className="img">
        <img src={img} alt={employee}/>
      </div>
    </div>
    <p>
      {description}
    </p>
  </div> 
)

export default ExperienceBox