import './section-title.css'

const SectionTitle = ({title, line=true}) => {
  return (
    <div className="title">
      <h1>{title}</h1>
      {line ?
        <div className="title-line"></div>
      :
        ""
      }
    </div>
  )
}

export default SectionTitle