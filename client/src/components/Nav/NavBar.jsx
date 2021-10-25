import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 1.125em 0.625em;
  }

  a {
    text-decoration: none;
    color: #FFF;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #3884DA;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0
    right: 0
    height: 100vh;
    width: 250px;
    padding-top: 3.5em;
    transition: transform 0.3s ease-in-out; 
  }
`;

export default function NavBar({ open }) {
  return (
    <Ul open={open}>
      <Link to='/home'>
        <li>Home</li>
      </Link>
      <Link to='/about'>
        <li>About</li>
      </Link>
      <Link to='/work'>
        <li>Work</li>
      </Link>
      <Link to='/contact'>
        <li>Contact</li>
      </Link>
    </Ul>
  )
}
