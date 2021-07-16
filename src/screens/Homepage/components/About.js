import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

class About extends React.Component {
  render () {
    return (
      <div>
        <section className='page-section bg-primary text-white mb-0' id='about'>
          <div className='container'>
            {/* About Section Heading */}
            <h2 className='page-section-heading text-center text-uppercase text-white'>About Me</h2>
            {/* Icon Divider */}
            <div className='divider-custom divider-light'>
              <div className='divider-custom-line' />
              {/* <div className='divider-custom-icon'><i className='fas fa-star' /></div> */}
              <FontAwesomeIcon icon={faStar} />
              <div className='divider-custom-line' />
            </div>
            {/* About Section Content */}
            <div text-algin='center'>

              <div>Currently, I am working in a Healthcare Startup with multiple roles: <br />
                - R&D Engineer in Signal Processing with C/MATLAB<br />
                - Software Engineer in Backend with Python<br />
                - DevOps Engineer (CI/CD and Building Infrastructure in AWS)<br />
              </div>
            </div>
          </div>
        </section>
      </div>

    )
  }
}

export default About
