import './Resume.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { Document, Page } from 'react-pdf'

export default function Resume() {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(3)

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }
  return (
    <div className='ResumeShadow'>
      <div className='resumecontainer'>
        <Link to='/about'>
          <FaTimes />
        </Link>
        <Document 
          file='AlexW-Resume.pdf'
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
          <Page pageNumber={pageNumber} />
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    </div>
  )
}
