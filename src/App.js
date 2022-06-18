import logo from './logo.svg';
import './App.css';
import './components/Header/header.css'
import UFO from './components/UFO/UfoAnim'
import Weather from './components/Weather/WeatherAnim'

function App() {
  return (
    <div className="App">
      <header className="App-header">  
        <UFO />
      </header>
      <div className='main-page'>
        <div className='main-page-title'>
          WELCOME  
        </div>
        <div className='weather-animation-container'>
          <Weather />
        </div>
        <div className='video-rocketeer-container'>
          Animate the border of this embed:
          <div className='video-rocketeer-embed'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/CG4hxngTPbY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
