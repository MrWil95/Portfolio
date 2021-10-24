import './Contact.css'
import { Link, Route } from 'react-router-dom'
import { FaAt, FaLinkedin, FaGithub } from 'react-icons/fa'
import Layout from '../../components/Layout/Layout'
import Form from '../../components/Form/Form'
import ContactInfo from '../../components/ContactInfo/ContactInfo'

export default function Contact() {
  return (
    <Layout>
      <Route path='/contact/contactinfo'>
        <ContactInfo />
      </Route>
      <Form />
      <div className='ContactContainer'>
        <a href='https://www.linkedin.com/in/alex-wilbur-034b85213'><FaLinkedin /></a>
        <Link to='/contact/contactinfo'>
          <FaAt />
        </Link>
        <a href='https://github.com/MrWil95'><FaGithub /></a>
      </div>
    </Layout>
  )
}
