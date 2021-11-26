import './Nav.css'
import { Link } from 'react-router-dom'
  
export default function NavBar(props) {
  const { open } = props

  return (
    <ul 
      className={open ? 'UlContainer' : 'UlContainerOpen'}
    >
      <Link to='/home' className={ open ? 'navLinkContainer' : 'navLinkContainerOpen'}>
        <li className='navlink'>Home</li>
      </Link>
      <Link to='/about' className={ open ? 'navLinkContainer' : 'navLinkContainerOpen'}>
        <li className='navlink'>About</li>
      </Link>
      <Link to='/work' className={ open ? 'navLinkContainer' : 'navLinkContainerOpen'}>
        <li className='navlink'>Projects</li>
      </Link>
      <Link to='/contact' className={ open ? 'navLinkContainer' : 'navLinkContainerOpen'}>
        <li className='navlink'>Contact</li>
      </Link>
    </ul>
  )
}
