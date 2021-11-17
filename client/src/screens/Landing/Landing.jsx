import './Landing.css'
import LandingNav from '../../components/LandingNav/LandingNav'

export default function Landing() {
  return (
    <div className='LandingContainer'>
      <LandingNav />
      <div className='landingrise'>
        <ul className='landingtext'>
          <li className='landingli'>Software Engineer</li>
          <li className='landingli'>Graphic Designer</li>
          <li className='landingli'>Travel Enthusiast</li>
        </ul>
      </div>
      <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1634963343/Wireframe/Portfolio/portfolio_pic_ej0fre.png' alt='Alex Wilbur' className='alex' />
    </div>
  )
}
