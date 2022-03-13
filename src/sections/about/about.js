import "./about.css"
import SectionTitle from "./../../components/section-title/section-title"
import { DEVICONS, DEVOPSICONS } from "../../utils/icons-utils"
import SkillList from "../../components/skill-list/skill-list"
import Profile from "../../components/profile/profile"

const About = () => {
  return (
    <section className="about">
      <div className="description">
        <div className="history">
        <SectionTitle title="About Me"/>
          <p>
            Hola! soy Mauricio, me gustá mucho la tecnologia y el desarollo de software, soy muy curioso y me gusta estar
            aprendiendo todo el tiempo, por eso cuando apareció la oportunidad de trabajar como DevOps la acepte y comence un nuevo
            camino de aprendizaje, hoy llevo 2 años como DevOps he aprendido y crecido bastante como Ingeniero, he logrado tener una mirada más amplia
            del desarrollo de aplicaciones y su puesta en marcha, desde su fase de plafinicación hasta que esta en producción.
          </p>
        </div>
        <Profile />
      </div>
      <div className="skills">
        <SectionTitle title="Skills" line={false}/>
        <div className="skill-description">
          <SkillList title="Dev" icons={DEVICONS} />
          <SkillList title="DevOps" icons={DEVOPSICONS} />
        </div>
      </div>
    </section>
  )
}

export default About