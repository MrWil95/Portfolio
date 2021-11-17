import './LandingNav.css'
import { Link } from 'react-router-dom'

export default function LandingNav() {
  return (
    <div className='LandingNavContainer'>
      <Link to='/home' className='landingnavlink'>
        Alex Wilbur
      </Link>
    </div>
  )
}
