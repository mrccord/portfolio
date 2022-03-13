import './App.css'
import MainContainer from './components/main-container/main-container'
import Header from './sections/header/header'
import Hero from './sections/hero/hero'
import About from './sections/about/about'
import Experience from './sections/experience/experience'
import Projects from './sections/projects/projects'
import FloatIcons from './components/float-icons/float-icons'
import { Element } from 'react-scroll'

function App() {
  return (
    <div className="App">
      <Header/>
      <MainContainer>
        <Element name="hero">
          <Hero/>
        </Element>
        <Element name="about">
          <About/>
        </Element>
        <Element name="experience" >
          <Experience/>
        </Element>
        <Element name="work" >
          <Projects/>
        </Element>
      </MainContainer>
      <FloatIcons float="left"/>
      <FloatIcons float="right"/>
    </div>
  );
}

export default App;
