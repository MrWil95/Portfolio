import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Burger from './Burger'

const StyledNav = styled.nav`
  width: 100vw;
  height: 5.75em;
  box-shadow: 3px 3px 10px 0 #000;
  padding: 0 1.25em;
  display: flex;
  justify-content: space-between;
  background-color: #3884DA;

  .logo {
    text-decoration: none;
    color: #D9A21B;
    font-family: 'Rock Salt', cursive;
    font-size: clamp(1.25em, 5vw, 3.25em);
    margin-left: 1em;
    -webkit-text-stroke: 1px white;
    text-shadow: 2px 3px rgba(0, 0, 0, 0.7);
    display: fixed;
    z-index: 2;
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
