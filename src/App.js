import './App.css';
import MainContainer from './components/main-container/main-container';
import Header from './sections/header/header';
import Hero from './sections/hero/hero';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainContainer>
        <Hero/>
      </MainContainer>
    </div>
  );
}

export default App;
