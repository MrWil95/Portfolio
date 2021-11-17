import './Resume.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import AlexWResume from './AlexW-Resume.pdf'

export default function Resume() {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }

  return (
    <div className='ResumeShadow'>
      <div className='resumecontainer'>
        <Link to='/about' className='close'>
          <FaTimes />
        </Link>
        <Document
        file={AlexWResume}
        onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} numPages={numPages} className='page'/>
          <Page pageNumber={pageNumber + 1} numPages={numPages + 1} className='page'/>
          <Page pageNumber={pageNumber + 2} numPages={numPages + 2} className='page'/>
        </Document>
      </div>
    </div>
  )
}
