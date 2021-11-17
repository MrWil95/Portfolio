import './Form.css'
import { useState } from 'react'
import { send } from 'emailjs-com'
import { useHistory } from 'react-router'

export default function Form() {
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to:'',   
 })
 const history = useHistory()

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
    <div className='FormContainer'>
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
            />
            <br />
            <button type='submit' className='send' disabled={!toSend.from_name || !toSend.reply_to || !toSend.message}>Send</button>
         </form>
    </div>
  )
}
