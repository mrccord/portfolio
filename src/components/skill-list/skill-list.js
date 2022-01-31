import './skill-list.css'

const SkillList = ({title, icons}) => {
  return (
  <div>
    <h1>{title}</h1>
    <div className="skill-icons">
      {
        icons.map(({id, icon}) => (
          <span key={id}>{icon}</span>
        ))
      }
    </div>
  </div>
  )
}

export default SkillList