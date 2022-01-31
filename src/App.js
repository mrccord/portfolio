import './App.css'
import MainContainer from './components/main-container/main-container'
import Header from './sections/header/header'
import Hero from './sections/hero/hero'
import About from './sections/about/about'
import FloatIcons from './components/float-icons/float-icons'

function App() {
  return (
    <div className="App">
      <Header/>
      <MainContainer>
        <Hero/>
        <About/>
      </MainContainer>
      <FloatIcons float="left"/>
      <FloatIcons float="right"/>
    </div>
  );
}

export default App;
