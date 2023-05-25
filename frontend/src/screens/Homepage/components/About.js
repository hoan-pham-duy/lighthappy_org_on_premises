import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const emptyVeritcalDivStyle = {
  height: '20px'
}
const embeddedLinkStyle = {
  color: 'white',
  textDecoration: 'underline'
}
class About extends React.Component {
  render () {
    return (
      <div>
        <section className='page-section bg-primary text-white mb-0' id='about'>
          <div style={emptyVeritcalDivStyle}></div>
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
            <div>
              <div>
              Hoan is a developer that wants to join all aspects of technical products from end to end <br />
              He had more than 5 years of experience in complicated projects working embedded devices (<a style={embeddedLinkStyle} href="https://www.mobileworldlive.com/asia/asia-news/viettel-builds-5g-base-stations-with-amd-chips/" target="_blank" rel="noreferrer">5G BaseStation Viettel</a> and <a style={embeddedLinkStyle} href="https://www.bio-rithm.com/" target="_blank" rel="noreferrer">Biorithm Femom</a>) <br />
              He is working as Solution Architect / Backend / DevOps / Head of Software to obtain high qualities technical products. <br />
              He is keen on Cloud technologies, especially with AWS and Serverless to have the most sutiable solutions for startup, and uses them in most projects he joined. <br />
              </div>
            </div>
          </div>
        </section>
      </div>

    )
  }
}

export default About
