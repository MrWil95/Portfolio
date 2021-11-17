import './FullStack.css'
import { Link } from 'react-router-dom'

export default function FullStack() {
  return (
    <>
      <div className='EngineerContainer'>
        <div className='Tab'>
          <Link to='./work/engineer'>
            Software Engineer
          </Link>
        </div>
        <div className='Paper'>
          <div className='projects'>
            <h4>On the Move</h4>
            <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1637181833/Wireframe/Portfolio/2021-11-17_1_ga4ccn.png' alt='On the Move Thumbnail' className='thumbnail' />
            <div className='tools'>
              <p>Made With:</p>
              <div>RUBY ON RAILS</div>
              <div>REACT JS</div>
              <div>REACT ICONS</div>
              <div>POSTGRESQL</div>
              <div>VANILLA CSS</div>
              <div>BCRYPT</div>
              <div>JWT</div>
              <div>HEROKU</div>
              <div>NETLIFY</div>
            </div>
          </div>
          <div className='projects'>
            <h4>Sound</h4>
            <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1637182854/Wireframe/Portfolio/2021-11-17_2_hpbhk2.png' alt='Sound thumbnail' className='thumbnail' />
            <div className='tools'>
              <p>Made With:</p>
              <div>EXPRESS JS</div>
              <div>REACT JS</div>
              <div>REACT ICONS</div>
              <div>MONGODB</div>
              <div>NODE JS</div>
              <div>VANILLA CSS</div>
              <div>BCRYPT</div>
              <div>JWT</div>
              <div>HEROKU</div>
              <div>NETLIFY</div>
            </div>
          </div>
          <div className='projects'>
            <h4>Poke Duel</h4>
            <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1637183825/Wireframe/Portfolio/2021-11-17_3_vrjgrg.png' alt='Poke Duel thumbnail' className='thumbnail' />
            <div className='tools'>
              <p>Made With:</p>
              <div>REACT JS</div>
              <div>AIRTABLE</div>
              <div>VANILLA CSS</div>
              <div>NETLIFY</div>
            </div>
          </div>
        </div>
        <div className='Folder'></div>
      </div>
    </>
  )
}
