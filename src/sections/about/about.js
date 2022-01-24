import "./about.css"
import Picture from "./../../assets/images/picture.png"

const About = () => {
  return (
    <section className="about">
      <div className="title">
        <h1>About Me</h1>
      </div>
      <div className="history">
        <p>
          Hola! soy Mauricio, me gustá mucho la tecnologia y el desarollo de software, soy muy curioso y me gusta estar
          aprendiendo todo el tiempo, por eso cuando apareció la oportunidad de trabajar como DevOps la acepte y comence un nuevo
          camino de aprendizaje, hoy llevo 2 años como DevOps he aprendido y crecido bastante como Ingeniero, he logrado tener una mirada más amplia
          del desarrollo de aplicaciones y su puesta en marcha, desde su fase de plafinicación hasta que esta en producción.
        </p>
      </div>
      <div className="picture" >
        <img src={Picture}  alt="profile-pic"/ >
      </div>
    </section>
  )
}

export default About