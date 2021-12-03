import './Home.css'
import Layout from '../../components/Layout/Layout'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Layout>
      <div className='HomeContainer'>
        <div className='homerise'>
          <ul className='hometext'>
            <li className='homeli'>Software Engineer</li>
            <li className='homeli'>Graphic Designer</li>
            <li className='homeli'>Travel Enthusiast</li>
          </ul>
        </div>
        <div className='splitgrid'>
          <p className='intro'>I am a software engineer leveraging experience in the construction industry: building, assembling, electrical, and design. This methodical attention to detail and problem-solving skills helps get me to the finish line and provide the best service for my clients. On top of coding your product I offer graphic design input and aid as well. Passionate about elevating products to the top of the pack with quality and code.</p>
          <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1634999516/Wireframe/Portfolio/Alex_Drawing_isbefe.png' alt='Alex Wilbur drawing' className='alexdrawing'/>
          <Link to='/about' className='link'>
            <button className='linkbtn'>Learn More</button>
          </Link>
        </div>
        
      </div>
    </Layout>
  )
}
