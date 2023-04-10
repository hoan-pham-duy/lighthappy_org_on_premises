import React, { useState } from 'react'
import { Document, Page } from 'react-pdf'
import ResumePdf from './Resume_DevOps_AWS_Resume_06_APR_2023.pdf'

import './AboutMe.css'

function AboutMe () {
  const [numPages, setNumPages] = useState(null)
  // const [pageNumber, setPageNumber] = useState(1)
  // const pageNumber = 1

  function onDocumentLoadSuccess ({ numPages }) {
    // setPageNumber(1)
    setNumPages(numPages)
  }

  return (
    <div className="Example__container__document">
      <Document file={ResumePdf} onLoadSuccess={onDocumentLoadSuccess} options={{ workerSrc: 'pdf.worker.js' }}>
      {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
      </Document>
    </div>
  )
}

export default AboutMe
