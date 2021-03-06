import './About.css'
import Layout from '../../components/Layout/Layout'
import Resume from '../../components/Resume/Resume'
import { useState } from 'react'

export default function About() {
  const [show, setShow] = useState('false')

  const handleShow = () => {
    setShow(prevState => {
      return !prevState
    })
  }

  return (
    <Layout>
      <div className='AboutContainer'>
        <h1 className='abouttitle'>Who I Am</h1>
        <div className='splitcontainer'>
          <div className='about1container'>
            <h3 className='about1'>Full-Stack Developer</h3>
            <p className='about1info'>As a full-stack developer I work hard every day to improve my expertise with the technologies that inspire me the most. From building beautiful front-end web applications in React.js and Vanilla JavaScript, to creating a reliable back-end database using Ruby & Rails. I am constantly pushing myself to go beyond my current skillset and learn all that I can, with the goal of bettering myself & this world.</p>
          </div>
          <div className='about2container'>
            <h3 className='about2'>Graphic Designer</h3>
            <p className='about2info'>Ever since I was a kid I’ve always taken an interest in drawing & designing my own creations. As I got older I moved my focus from pad & paper to digital media. Teaching myself how to use software like Krita, Blender, and Photoshop, I can create beautiful logos that will enhance the visual quality of your brand. I can also make stunning 3D models to use in your projects.</p>
          </div>
          <button className='showbtn' onClick={handleShow}>Resume</button>
        </div>
        <Resume show={show} handleShow={handleShow} />
      </div>
    </Layout>
  )
}
