import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function openInNewTab (path) {
  window.open(path, '_blank')
}

function redirectMail (event) {
  openInNewTab('mailto:phamduyhoan95@gmail.com')
}

class Contact extends React.Component {
  render () {
    return (
      <div onClick={redirectMail} target="_blank" rel="noopener noreferrer">
        <section className='page-section' id='contact'>
          <div className='container'>
            <h2 className='page-section-heading text-center text-uppercase'>Contact Me</h2>
            <div className='divider-custom divider-dark'>
              <div className='divider-custom-line' />
              <FontAwesomeIcon icon={faPaperPlane} size='5x' />
              <FontAwesomeIcon icon={faEnvelope} size='5x' />
              <div className='divider-custom-line' />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Contact
