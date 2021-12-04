import './ContactInfo.css'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaTimes } from 'react-icons/fa'

export default function ContactInfo(props) {
  const { fade, handleFade } = props

  return (
    <div className={fade ? 'ContactInfoContainer' : 'ContactInfoContainerFade'}>
      <FaTimes onClick={handleFade} className='closecontact' />
      <div className='contactinfo'>
        <p className='contact'><FaPhoneAlt className='contacticon' /> (404) 789-6237</p>
        <p className='contact'><FaEnvelope className='contacticon' /> alexwilbur5991@gmail.com</p>
        <p className='contact'><FaMapMarkerAlt className='contacticon' /> Austin, TX 78745</p>
      </div>
    </div>
  )
}
