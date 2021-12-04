import './Contact.css'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { send } from 'emailjs-com'
import { FaAt, FaLinkedin, FaGithub } from 'react-icons/fa'
import Layout from '../../components/Layout/Layout'
import ContactInfo from '../../components/ContactInfo/ContactInfo'

export default function Contact() {
  const [fade, setfade] = useState('false')
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to:'',   
  })
  const history = useHistory()

  const handleFade = () => {
    setfade(prevState => {
      return !prevState
    })
  }

  const handleMessage = (e) => {
    e.preventDefault()
    send(
      'service_316gric',
      'template_j9lh5lr',
      toSend,
      'user_WQeWNR3BOHjZxcF3KttGs'
    )
    .then((response) => {
      console.log('Success!', response.status, response.text)
      history.push('/contact')
    })
    .catch((error) => {
      console.log('Failed...', error)
    })
  }
  
  const handleChange = (e) => {
    setToSend({...toSend, [e.target.name]: e.target.value})
  }

  return (
    <Layout>
      <div className='ContactContainer'>
        <form onSubmit={handleMessage} className='send-message'>
          <input 
            type='text'
            name='from_name'
            placeholder='Your name'
            value={send.from_name}
            onChange={handleChange}
            className='info'
          />
          <br />
          <input 
            type='email'
            name='reply_to'
            placeholder='Your email'
            value={send.reply_to}
            onChange={handleChange}
            className='info'
          />
          <br />
          <textarea
            type='text'
            name='message'
            placeholder='Your message'
            value={send.message}
            onChange={handleChange}
            className='info'
            style={{height: "8em"}}
          />
          <br />
          <button type='submit' className='send' disabled={!toSend.from_name ||!toSend.reply_to || !toSend.message}>Send</button>
        </form>
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
