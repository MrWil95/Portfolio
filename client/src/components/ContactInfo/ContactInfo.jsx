import './ContactInfo.css'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function ContactInfo() {
  return (
    <div className='ContactInfoContainer'>
      <Link to='/contact'>
        <FaTimes />
      </Link>
      <div className='phone'><FaPhoneAlt />(404) 789-6237</div>
      <div className='envelope'><FaEnvelope />alexwilbur5991@gmail.com</div>
      <div className='mapmarker'><FaMapMarkerAlt />Austin, TX 78745</div>
    </div>
  )
}
