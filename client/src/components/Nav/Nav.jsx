import './Nav.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Burger from './Burger'

const StyledNav = styled.nav`
  background-color: #3884DA;
  box-shadow: 3px 3px 10px 0 #000;
  display: flex;
  font-family: 'Raleway', sans-serif;
  font-size: clamp(1.5em, 8vw, 2em);
  height: 5em;
  justify-content: space-between;
  padding: 0 .75em 0 0;
  width: 100vw;

  .logo {
    color: #D9A21B;
    display: fixed;
    font-family: 'Rock Salt', cursive;
    font-size: clamp(1.10em, 5vw, 3.25em);
    height: max-content;
    margin-left: 1em;
    text-decoration: none;
    text-shadow: 2px 3px rgba(0, 0, 0, 0.7);
    -webkit-text-stroke: 1px white;
    z-index: 3;
  }

  @media (max-width: 500px) {
    .logo {
      margin-bottom: 1em;
      margin-left: '.25em;
    }
  }
`;

export default function Navbar() {
  return (
    <StyledNav className='NavContainer'>
      <Link to='/home' className='logo'>
        Alex Wilbur
      </Link >
      <Burger />
    </StyledNav>
  )
}
