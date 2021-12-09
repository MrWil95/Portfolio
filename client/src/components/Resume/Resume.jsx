import './Resume.css'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import AlexWilburResume from './Alex-Wilbur-Resume.pdf'

export default function Resume(props) {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(null);
  const { show, handleShow } = props

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
    setPageNumber(0)
  }

  return (
    <div className={show ? 'ResumeShadow' : 'ResumeShadowShow'}>
      <div className='resumecontainer'>
        <FaTimes onClick={handleShow} className='close' />
        <Document
        file={AlexWilburResume}
        onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber + 1} numPages={numPages} className='page'/>
          <Page pageNumber={pageNumber + 2} numPages={numPages + 1} className='page'/>
          <Page pageNumber={pageNumber + 3} numPages={numPages + 2} className='page'/>
        </Document>
      </div>
    </div>
  )
}
