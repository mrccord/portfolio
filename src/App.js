import './App.css'
import MainContainer from './components/main-container/main-container'
import Header from './sections/header/header'
import Hero from './sections/hero/hero'
import About from './sections/about/about'

function App() {
  return (
    <div className="App">
      <Header/>
      <MainContainer>
        <Hero/>
        <About/>
      </MainContainer>
    </div>
  );
}

export default App;
