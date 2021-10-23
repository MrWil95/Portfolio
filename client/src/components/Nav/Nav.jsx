import './Nav.css'
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <div className='NavContainer'>
      <Link to='/home'>
        Alex Wilbur
      </Link >
      <Link to='/about'>
        About
      </Link>
      <Link to='/work'>
        Work
      </Link>
      <Link to='/contact'>
        Contact
      </Link>
    </div>
  )
}
