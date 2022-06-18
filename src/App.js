import logo from './logo.svg';
import './App.css';
import weather from './weather.png'
import ufo from './ufo.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src="https://imagedelivery.net/nADYkEXSJPd0UjYrv7RXLw/73a53668-b492-41a1-6180-358d39776000/public" className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a> */}
         <div className='animation-2-center'>
            <div className='animation-2'>
              <img className='ufo-png' src={ufo} /> 
            </div>
          </div>
      </header>
      <div className='main-page'>
        <div className='main-page-title'>
          WELCOME  
        </div>
        <div className='animation-1-container'>
          {/* <div className='animation-1-title'>ANIMATION I</div> */}
          
          {/* <div className='animation-1-ideas'>
            <div>Elevator doors...</div>
            <div>Garage door....</div>
            <div>Space Ship door...</div>
            <div>Rumble door..</div>
          </div> */}
          <div className='animation-1-center'>
            <div className='animation-1'>
              <img className='weather-png' src={weather} /> 
            </div>
          </div>
         
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
