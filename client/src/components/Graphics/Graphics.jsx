
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'


export default function Graphics() {
  const [open, setOpen] = useState('false')

  const handleOpen = () => {
    setOpen(prevState => {
      return !prevState
    })
  }

  return (
    <div className='EngineerContainer'>
      <div className='Tab'>
        <button 
          onClick={handleOpen}
          className='openbtn'
        >
          Graphic Design
        </button>
      </div>
      <div className={open ? 'Paper' : 'PaperScale' && 'PaperScaleLeft'}>
        <button
          onClick={handleOpen}
          className={open ? 'closebtnhide' : 'closebtn'}
        >
          <FaTimes />
        </button>
        <div className='projects'>
          <h4>Drawing Alex Wilbur</h4>
          <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1634999516/Wireframe/Portfolio/Alex_Drawing_isbefe.png' alt='Cartoon rendering of Alex Wilbur' className='thumbnail' />
          <p className='description'><span>Description:</span> This piece was made entirely by free-hand using Krita's brush tool. It took a total of  one and a half hours to complete, using only the track pad to sketch.</p>
          <div className='tools'>
            <p>Made With:</p>
            <p>KRITA</p>
            <p>FREEHAND BRUSH</p>
          </div>
        </div>
      <div className='projects'>
        <h4>On the Move Logo</h4>
        <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1638346397/Wireframe/Portfolio/6290871299_a12ded4b-aebd-4a54-8cba-f869b55139f0_rs9bfc_kscxjt.png' alt='On the Move Logo' className='thumbnail' />
        <p className='description'><span>Description:</span> This logo was designed for my blog, On the Move. It was made in Krita using the freehand brush, the elipse tool, and SVG text editor. Made in under an hour.</p>
        <div className='tools'>
          <p>Made With:</p>
          <p>KRITA</p>
          <p>FREEHAND BRUSH</p>
          <p>ELIPSE TOOL</p>
          <p>SVG TEXT EDITOR</p>
        </div>
      </div>
      <div className='projects'>
        <h4>Alex Wilbur</h4>
        <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1638347635/Wireframe/Portfolio/profile_pic_background_eqk8jh.jpg' alt='Alex Wilbur' className='thumbnail' />
        <p className='description'><span>Description:</span>I edited this image with Krita's photo editing capabilities. Made with the contiguous selection tool, eraser tool, and transform tool this piece took roughly one hour to edit</p>
        <div className='tools'>
          <p>Made With:</p>
          <p>KRITA</p>
          <p>CONTIGUOUS SELECTION TOOL</p>
          <p>ERASER TOOL</p>
          <p>TRANSFORM TOOL</p>
        </div>
      </div>
    </div>
    <div className={open ? 'Folder' : 'FolderOpen'}></div>
    <div className='BackFolder'></div>
    </div>
  )
}
