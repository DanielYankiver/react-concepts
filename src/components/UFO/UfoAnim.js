import ufoImage from '../../images/ufo.png'
import '../UFO/ufo.css'

export default function ufoAnim () {

  return (
    <div className='ufo'>
      <div className='ufo-animation-center'>
        <div className='ufo-animation'>
          <img className='ufo-png' src={ufoImage} /> 
        </div>
      </div>
    </div>
  )
}