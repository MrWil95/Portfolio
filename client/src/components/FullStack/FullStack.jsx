import './FullStack.css'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'


export default function FullStack() {
  const [open, setOpen] = useState('false')
  const [fade, setFade] = useState('false')

  const handleOpen = () => {
    setOpen(prevState => {
      return !prevState
    })
  }

  const handleFade = () => {
    setFade(prevState => {
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
          <a 
            href='https://on-the-move.netlify.app' 
            target='_blank'
            rel='noopener noreferrer'
            onMouseEnter={handleFade}
            onMouseLeave={handleFade}
            className='projectcontainer'
          >
            <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1637444815/Wireframe/Portfolio/2021-11-20_7_z0vgsz.png' alt='On the Move Thumbnail' className='thumbnail' />
            <p className={fade ? null : 'fade'}><span>Description:</span> On the Move is a blog app for those who move frequently, made with React.js on the front-end and Ruby on Rails on the back-end. This app gives the user the ability to create a secured account with the use of Bcrypt and JWT to create for them a hashed password keeping their info safe. As of now the user has the ability to create, edit, and delete their own posts to share with others interested in the topic.</p>
          </a>
          <div className='tools'>
            <p>Made With:</p>
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
          <a 
            href='https://sound-2021.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
            onMouseEnter={handleFade}
            onMouseLeave={handleFade}
            className='projectcontainer'
          >
            <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1637444811/Wireframe/Portfolio/2021-11-20_8_kqhmbp.png' alt='Sound thumbnail' className={fade ? 'thumbnail' : 'scale'} />
            <p className={fade ? null : 'fade'}><span>Description:</span> On the Move is a blog app for those who move frequently, made with React.js on the front-end and Ruby on Rails on the back-end. This app gives the user the ability to create a secured account with the use of Bcrypt and JWT to create for them a hashed password keeping their info safe. As of now the user has the ability to create, edit, and delete their own posts to share with others interested in the topic.</p>
          </a>
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
          <a 
            href='https://poke-duel.netlify.app'
            target='_blank'
            rel='noopener noreferrer'
            className='projectlink'
          >
            <div className='projectcontainer'>
              <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1637183825/Wireframe/Portfolio/2021-11-17_3_vrjgrg.png' alt='Poke Duel thumbnail' className='thumbnail' />
              <p><span>Description:</span> On the Move is a blog app for those who move frequently, made with React.js on the front-end and Ruby on Rails on the back-end. This app gives the user the ability to create a secured account with the use of Bcrypt and JWT to create for them a hashed password keeping their info safe. As of now the user has the ability to create, edit, and delete their own posts to share with others interested in the topic.</p>
            </div>
          </a>
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
      <div className='BackFolder'></div>
    </div>
  )
}
