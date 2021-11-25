import './Nav.css'
import { useState } from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'

const StyledBurger = styled.div`
  display: none;
  height: 2em;
  margin-top: .75em;
  margin-right: 2.5em;
  right: 1.25em;
  width: 2em;
  z-index: 10;

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
  }

  div {
    background-color: #FFF;
    border-radius: 10px;
    height: 0.25em;
    transform-origin: 1px;
    transition: all 0.3s linear;
    width: 2em;
    
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export default function Burger() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurger 
        open={open} 
        onClick={() => setOpen(!open)} 
        className='BurgerContainer'
      >
        <div className='burgerbars'/>
        <div className='burgerbars'/>
        <div className='burgerbars'/>
      </StyledBurger>
      <NavBar open={open} />
    </>
  )
}
