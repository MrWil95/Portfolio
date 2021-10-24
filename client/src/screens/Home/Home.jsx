import './Home.css'
import Layout from '../../components/Layout/Layout'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <Layout>
      <div className='HomeContainer'>
        <div className="homeslide">
          <div className='hometext'>
            <h2 className='homefullstack'>Full-Stack Developer</h2>
            <h2 className='homegraphics'>Graphic Designer</h2>
            <h2 className='hometravel'>Travel Enthusiast</h2>
          </div>
        </div>
        <p>I am a software engineer bringing 2 ½ years in the construction industry: building, assembling, electrical, and design. This methodical attention to detail and problem-solving skills helps get me to the finish line and provide the best service for my clients. On top of coding your product I offer graphic design input and aid as well. Passionate about elevating products to the top of the pack with quality and code.</p>
        <Link to='/about'>
          <button>Learn More</button>
        </Link>
        <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1634999516/Alex_Drawing_isbefe.png' alt='Alex Wilbur drawing'/>
      </div>
    </Layout>
  )
}
