import './FullStack.css'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'


export default function FullStack() {
  const [open, setOpen] = useState('false')

  const handleOpen = () => {
    setOpen(prevState => {
      return !prevState
    })
  }

  return (
    <div className='EngineerContainer'>
      <div className='Tab'>
        <button 
          onClick={handleOpen}
          className='openbtn'
        >
          Software Engineer
        </button>
      </div>
      <div className={open ? 'Paper' : 'PaperScale'}>
        <button
          onClick={handleOpen}
          className='closebtn'
        >
          <FaTimes />
        </button>
        <div className='projects'>
          <h4>On the Move</h4>
          <a href='https://on-the-move.netlify.app'><img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1637181833/Wireframe/Portfolio/2021-11-17_1_ga4ccn.png' alt='On the Move Thumbnail' className='thumbnail' /></a>
          <div className='tools'>
            <p className='madewith'>Made With:</p>
            <p>RUBY ON RAILS</p>
            <p>REACT JS</p>
            <p>REACT ICONS</p>
            <p>POSTGRESQL</p>
            <p>VANILLA CSS</p>
            <p>BCRYPT</p>
            <p>JWT</p>
            <p>HEROKU</p>
            <p>NETLIFY</p>
          </div>
        </div>
        <div className='projects'>
          <h4>Sound</h4>
          <a href='https://sound-2021.netlify.app/'><img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1637182854/Wireframe/Portfolio/2021-11-17_2_hpbhk2.png' alt='Sound thumbnail' className='thumbnail' /></a>
          <div className='tools'>
            <p>Made With:</p>
            <p>EXPRESS JS</p>
            <p>REACT JS</p>
            <p>REACT ICONS</p>
            <p>MONGODB</p>
            <p>NODE JS</p>
            <p>VANILLA CSS</p>
            <p>BCRYPT</p>
            <p>JWT</p>
            <p>HEROKU</p>
            <p>NETLIFY</p>
          </div>
        </div>
        <div className='projects'>
          <h4>Poke Duel</h4>
          <a href='https://poke-duel.netlify.app'><img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1637183825/Wireframe/Portfolio/2021-11-17_3_vrjgrg.png' alt='Poke Duel thumbnail' className='thumbnail' /></a>
          <div className='tools'>
            <p>Made With:</p>
            <p>REACT JS</p>
            <p>AIRTABLE</p>
            <p>VANILLA CSS</p>
            <p>NETLIFY</p>
          </div>
        </div>
      </div>
      <div className={open ? 'Folder' : 'FolderOpen'}></div>
    </div>
  )
}
