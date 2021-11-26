import './Nav.css'
import { Link } from 'react-router-dom'
import Burger from './Burger'

export default function Navbar() {
  return (
    <div className='NavContainer'>
      <Link to='/home' className='logo'>
        Alex Wilbur
      </Link >
      <Burger />
    </div>
  )
}
