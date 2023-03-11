import React from 'react'
import '../css/Homepage.css'
import '../css/styles.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

class WideSectionHeader extends React.Component {
  render () {
    return (
      <header className='masthead bg-primary text-white text-center'>
      <div className='container d-flex align-items-center flex-column'>
        {/* Masthead Avatar Image */}
        <img className='masthead-avatar mb-5' src='assets/img/avataaars.svg' alt='' />
        {/* Masthead Heading */}
        <h1 className='masthead-heading text-uppercase mb-0'>Pham Duy Hoan</h1>
        {/* Icon Divider */}
        <div className='divider-custom divider-light'>
          <div className='divider-custom-line' />
          {/* <div className='divider-custom-icon'><i className='fas fa-star' /></div> */}
          <FontAwesomeIcon icon={faStar} />
          <div className='divider-custom-line' />
        </div>
        {/* Masthead Subheading */}
        <p className='masthead-subheading font-weight-light mb-0'>AWS / Solution Architect / Backend / DevOps / Head of Software</p>
      </div>
    </header>
    )
  }
}

export default WideSectionHeader
