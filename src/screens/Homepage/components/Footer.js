import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component {
  render () {
    return (
      <div>
        <footer className='footer text-center'>
          <div className='container'>
            <div className='row'>
              {/* Footer Location */}
              <div className='col-lg-4 mb-5 mb-lg-0'>
                <h4 className='text-uppercase mb-4'>Location</h4>
                <p className='lead mb-0'>
                  Ha Dong District, Ha Noi
                  <br />
                  Viet Nam
                </p>
              </div>
              {/* Footer Social Icons */}
              <div className='col-lg-4 mb-5 mb-lg-0'>
                <h4 className='text-uppercase mb-4'>Around the Web</h4>
                <a className='btn btn-outline-light btn-social mx-1' href='https://www.facebook.com/hoan.phamduy.1 target="_blank"'><FontAwesomeIcon icon={faFacebook} /></a>
                <a className='btn btn-outline-light btn-social mx-1' href='#!'><i className='fab fa-fw fa-twitter' /></a>
                <a className='btn btn-outline-light btn-social mx-1' href='#!'><i className='fab fa-fw fa-linkedin-in' /></a>
                <a className='btn btn-outline-light btn-social mx-1' href='#!'><i className='fab fa-fw fa-dribbble' /></a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer
