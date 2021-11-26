import './Nav.css'
import { useState } from 'react'
import NavBar from './NavBar'

export default function Burger() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(prevState => {
      return !prevState
    })
  }

  return (
    <>
      <div  
        onClick={handleOpen} 
        className='BurgerContainer'
      >
        <div className={open ? 'burgeropen' : 'burgerbars' } />
      </div>
      <NavBar open={open} />
    </>
  )
}
