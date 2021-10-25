import './Resume.css'
import {Link} from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

export default function Resume() {
  return (
    <div className='ResumeShadow'>
      <div className='resumecontainer'>
        <Link to='/about'>
          <FaTimes />
        </Link>
        <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1635054515/Wireframe/Portfolio/2021-10-20_6_fb05ly.png' alt='Resume Part 1' className='resumeprt1' />
        <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1635054520/Wireframe/Portfolio/2021-10-20_7_pqyipz.png' alt='Resume Part 2' className='resumeprt2' />
        <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1635054524/Wireframe/Portfolio/2021-10-20_8_mnsfk1.png' alt='Resume Part 3' className='resumeprt3' />
      </div>
    </div>
  )
}
