import './FullStack.css'
import { useState } from 'react'
import { FaTimes, FaGithub } from 'react-icons/fa'


export default function FullStack() {
  const [open, setOpen] = useState('false')
  const [onthemove, setOnTheMove] = useState('false')
  const [sound, setSound] = useState('false')
  const [pokeduel, setPokeDuel] = useState('false')

  const handleOpen = () => {
    setOpen(prevState => {
      return !prevState
    })
  }

  const handleOnTheMove = () => {
    setOnTheMove(prevState => {
      return !prevState
    })
  }

  const handleSound = () => {
    setSound(prevState => {
      return !prevState
    })
  }

  const handlePokeDuel = () => {
    setPokeDuel(prevState => {
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
          className={open ? 'closebtnhide' : 'closebtn'}
        >
          <FaTimes />
        </button>
        <div className='projects'>
          <h4>On the Move</h4>
          <a 
            href='https://on-the-move.netlify.app' 
            target='_blank'
            rel='noopener noreferrer'
            onMouseEnter={handleOnTheMove}
            onMouseLeave={handleOnTheMove}
            className='projectcontainer'
          >
            <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1637444815/Wireframe/Portfolio/2021-11-20_7_z0vgsz.png' alt='On the Move Thumbnail' className={onthemove ? 'thumbnail' : 'scale'} />
            <p className={onthemove ? null : 'fade'}><span>Description:</span> On the Move is a blog app for those who move frequently, made with React.js on the front-end and Ruby on Rails on the back-end. This app gives the user the ability to create a secured account with the use of Bcrypt and JWT to create for them a hashed password keeping their info safe. As of now the user has the ability to create, edit, and delete their own posts to share with others interested in the topic.</p>
          </a>
          <p className='description'><span>Description:</span> On the Move is a blog app for those who move frequently, made with React.js on the front-end and Ruby on Rails on the back-end. This app gives the user the ability to create a secured account with the use of Bcrypt and JWT to create for them a hashed password keeping their info safe. As of now the user has the ability to create, edit, and delete their own posts to share with others interested in the topic.</p>
          <div className='tools'>
            <p>Made With:</p>
            <p>RUBY ON RAILS</p>
            <p>REACT JS</p>
            <p>REACT ICONS</p>
            <p>POSTGRESQL</p>
            <p>CSS</p>
            <p>BCRYPT</p>
            <p>JWT</p>
            <p>HEROKU</p>
            <p>NETLIFY</p>
          </div>
          <div className='github'>
            <a 
              href='https://github.com/MrWil95/On-the-Move-'
              target='_blank'
              rel='noopener noreferrer'
              className='githublink'
            >
              <FaGithub />
            </a>
          </div>
        </div>
      <div className='projects'>
        <h4>Sound</h4>
        <a 
          href='https://sound-2021.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
          onMouseEnter={handleSound}
          onMouseLeave={handleSound}
          className='projectcontainer'
        >
          <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1637444811/Wireframe/Portfolio/2021-11-20_8_kqhmbp.png' alt='Sound thumbnail' className={sound ? 'thumbnail' : 'scale'} />
          <p className={sound? null : 'fade'}><span>Description:</span> Sound is a marketplace like Etsy where musicians can sell their audio equipment at a fair price. Built with React and Express, just signup and signin with a secure password hased using JWT and Bcrypt to keep everyone safe. A team full of talented engineers came together and deployed this project using Heroku for the back-end and Netlify for the front.</p>
        </a>
        <p className='description'><span>Description:</span> Sound is a marketplace like Etsy where musicians can sell their audio equipment at a far price. Built with React and Express, just signup and signin with a secure password hased using JWT and Bcrypt to keep everyone safer. A team full of talented engineers came together and deployed this project using Heroku for the back-end and Netlify for the front.</p>
        <div className='tools'>
          <p>Made With:</p>
          <p>EXPRESS JS</p>
          <p>REACT JS</p>
          <p>REACT ICONS</p>
          <p>MONGODB</p>
          <p>NODE JS</p>
          <p>CSS</p>
          <p>BCRYPT</p>
          <p>JWT</p>
          <p>HEROKU</p>
          <p>NETLIFY</p>
        </div>
        <div className='github'>
          <a 
            href='https://github.com/Bri-Gonzalez/Sound'
            target='_blank'
            rel='noopener noreferrer'
            className='githublink'
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div className='projects'>
        <h4>Poke Duel</h4>
        <a 
          href='https://poke-duel.netlify.app'
          target='_blank'
          rel='noopener noreferrer'
          onMouseEnter={handlePokeDuel}
          onMouseLeave={handlePokeDuel}
          className='projectcontainer'
        >
          <img 
            src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1637183825/Wireframe/Portfolio/2021-11-17_3_vrjgrg.png' 
            alt='Poke Duel thumbnail' 
            className={pokeduel ? 'thumbnail' : 'scale'}
          />
          <p className={pokeduel ? null : 'fade'}><span>Description:</span> Poke Duel was built with npx create-react-app, using Airtable's API to create a database to store a list of Poekmon added by the user. Every Pokemon can be edited by their name attacks and types, or deleted as anyone sees fit. Select your favorite and move on to the battle field to face your opponents. This app was made with asynchronous functionality and functional components using state to update the characters health and determine a winner.</p>
        </a>
        <p className='description'><span>Description:</span> Poke Duel was built with npx create-react-app, using Airtable's API to create a database to store a list of Poekmon added by the user. Every Pokemon can be edited by their name attacks and types, or deleted as anyone sees fit. Select your favorite and move on to the battle field to face your opponents. This app was made with asynchronous functionality and functional components using state to update the characters health and determine a winner.</p>
        <div className='tools'>
          <p>Made With:</p>
          <p>REACT JS</p>
          <p>ASYNC/AWAIT</p>
          <p>FUNCTIONAL COMPONENTS</p>
          <p>HOOKS</p>
          <p>AIRTABLE</p>
          <p>CSS</p>
          <p>NETLIFY</p>
        </div>
        <div className='github'>
          <a 
            href='https://github.com/MrWil95/poke-duel'
            target='_blank'
            rel='noopener noreferrer'
            className='githublink'
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
    <div className={open ? 'Folder' : 'FolderOpen'}></div>
    <div className='BackFolder'></div>
    </div>
  )
}
