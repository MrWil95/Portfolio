import './ContactInfo.css'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaTimes } from 'react-icons/fa'

export default function ContactInfo(props) {
  const { fade, handleFade } = props

  return (
    <div className={fade ? 'ContactInfoContainer' : 'ContactInfoContainerFade'}>
      <FaTimes onClick={handleFade} className='closecontact' />
      <div className='contactinfo'>
        <p className='contact'><FaPhoneAlt /> (404) 789-6237</p>
        <p className='contact'><FaEnvelope /> alexwilbur5991@gmail.com</p>
        <p className='contact'><FaMapMarkerAlt /> Austin, TX 78745</p>
      </div>
    </div>
  )
}
