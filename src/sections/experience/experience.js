import "./experience.css"
import SectionTitle from "../../components/section-title/section-title"
import ExperienceBox from "../../components/exp-box/experience-box"
import { EXPERIENCES } from "../../utils/experience-utils"

const Experience = () => (
  <section className="experience">
    <SectionTitle title="Experience"></SectionTitle>
    {
      EXPERIENCES.map(experience => (
        <ExperienceBox {...experience}/>
      ))
    }
    
  </section>
)

export default Experience