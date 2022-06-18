import weatherImage from '../../images/weather.png'
import '../Weather/weather.css'

export default function weatherAnim () {

  return (
    <div className='weather-animation-center'>
      <div className='weather-animation'>
        <img className='weather-png' src={weatherImage} /> 
      </div>
    </div>
  )
}