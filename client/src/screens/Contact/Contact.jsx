import './Contact.css'
import { useState } from 'react'
import { FaAt, FaLinkedin, FaGithub } from 'react-icons/fa'
import Layout from '../../components/Layout/Layout'
import Form from '../../components/Form/Form'
import ContactInfo from '../../components/ContactInfo/ContactInfo'

export default function Contact() {
  const [fade, setfade] = useState('false')

  const handleFade = () => {
    setfade(prevState => {
      return !prevState
    })
  }

  return (
    <Layout>
      <div className='ContactContainer'>
        <Form />
        <div className='icons'>
          <a 
            href='https://www.linkedin.com/in/alex-wilbur-034b85213'
            target='_blank'
            rel='noopener noreferrer'
            className='iconlink'
          >
            <FaLinkedin className='icon' />
          </a>
          <FaAt onClick={handleFade} className='icon' />
          <a 
            href='https://github.com/MrWil95'
            target='_blank' 
            rel='noopener noreferrer'
            className='iconlink'
          >
              <FaGithub className='icon' />
          </a>
        </div>
        <ContactInfo fade={fade} handleFade={handleFade} />
      </div>
    </Layout>
  )
}
