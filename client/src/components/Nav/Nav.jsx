import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Burger from './Burger'

const StyledNav = styled.nav`
  width: 100%;
  height: 3.4375em;
  box-shadow: 3px 3px 10px 0 #000;
  padding: 0 1.25em;
  display: flex;
  justify-content: space-between;
  background-color: #3884DA;

  .logo {
    padding: 1em 0;
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
