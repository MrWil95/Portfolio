import './Nav.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Ul = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  list-style: none;

  li {
    padding: 1.125em 0.625em;
  }

  a {
    color: #FFF;
    text-decoration: none;
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    background-color: #3884DA;
    flex-flow: column nowrap;
    height: 95vh;
    position: fixed;
    right: 0;
    top: 2.75em;
    transform: ${({ open }) => open ? 'translateY(0%)' : 'translateY(-100%)'};
    transition: transform 0.3s ease-in-out; 
    width: 100vw;
    z-index: 2;

    a {
      animation: ${({ open }) => open ? 'fadein 1s ease-out 500ms forwards' : ''};
      opacity: 0;
    }
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
