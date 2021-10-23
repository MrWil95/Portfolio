import './Landing.css'
import '../../components/LandingNav/LandingNav'
import LandingNav from '../../components/LandingNav/LandingNav'

export default function Landing() {
  return (
    <div className='LandingContainer'>
      <LandingNav />
      <div className='landingtext'>
        <h2 className='fullstack'>Full-Stack Developer</h2>
        <h2 className='graphics'>Graphic Designer</h2>
        <h2 className='travel'>Travel Enthusiast</h2>
      </div>
      <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1634963343/portfolio_pic_ej0fre.png' alt='Alex Wilbur' className='alex' />
    </div>
  )
}
