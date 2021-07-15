import React from 'react'
import './css/Homepage.css'
import './css/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

import AboutMeImg from './assets/img/portfolio/AboutMe.png'
import ToolPdfImg from './assets/img/portfolio/ToolPdf.png'
import RealTimeChatRoomImg from './assets/img/portfolio/ChatRoom.png'

function redirectTo (path) {
  window.location.href = path
}

function redirectAboutMe (event) {
  redirectTo('about-me')
}

function redirectToolPdf (event) {
  redirectTo('tool-pdf')
}

function redirectRealTimeChatRoom (event) {
  redirectTo('real-time-chat-room')
}

const createReactClass = require('create-react-class')
const Homepage = createReactClass({
  render: function () {
    return (
      <div>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <meta name='description' content />
        <meta name='author' content />
        <title>Pham Duy Hoan Personal Website </title>
        {/* Favicon */}
        <link rel='icon' type='image/x-icon' href='assets/img/favicon.ico' />
        {/* Font Awesome icons (free version) */}
        {/* Google fonts */}
        <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css' />
        <link href='https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic' rel='stylesheet' type='text/css' />
        {/* Core theme CSS (includes Bootstrap) */}
        <link href='css/styles.css' rel='stylesheet' />
        {/* Navigation */}
        <nav className='navbar navbar-expand-lg bg-secondary text-uppercase fixed-top' id='mainNav'>
          <div className='container'>
            <a className='navbar-brand js-scroll-trigger' href='#page-top'>Hoan Website</a>
            <button className='navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
              Menu
              <i className='fas fa-bars' />
            </button>
            <div className='collapse navbar-collapse' id='navbarResponsive'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item mx-0 mx-lg-1'><a className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger' href='#portfolio'>My Projects</a></li>
                <li className='nav-item mx-0 mx-lg-1'><a className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger' href='#about'>About Me</a></li>
                <li className='nav-item mx-0 mx-lg-1'><a className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger' href='#contact'>Contact Me</a></li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Masthead */}
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
            <p className='masthead-subheading font-weight-light mb-0'>Software, Signal Processing, AWS DevOps Engineer </p>
          </div>
        </header>
        {/* Portfolio Section */}
        <section className='page-section portfolio' id='portfolio'>
          <div className='container'>
            {/* Portfolio Section Heading */}
            <h2 className='page-section-heading text-center text-uppercase text-secondary mb-0'>My Projects</h2>
            {/* Icon Divider */}
            <div className='divider-custom'>
              <div className='divider-custom-line' />
              <FontAwesomeIcon icon={faCoffee} />
              <div className='divider-custom-line' />
            </div>
            {/* Portfolio Grid Items */}
            <div className='row justify-content-center'>
              {/* Portfolio Item 1 */}
              <div className='col-md-6 col-lg-4 mb-5' onClick={redirectAboutMe}>
                <div className='portfolio-item mx-auto' data-toggle='modal' data-target='#portfolioModal1'>
                  <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                    <div className='portfolio-item-caption-content text-center text-white'><i className='fas fa-plus fa-3x' /></div>
                  </div>
                  <img className='img-fluid' src={AboutMeImg} alt='' />
                </div>
              </div>
              {/* Portfolio Item 2 */}
              <div className='col-md-6 col-lg-4 mb-5' onClick={redirectToolPdf}>
                <div className='portfolio-item mx-auto' data-toggle='modal' data-target='#portfolioModal2'>
                  <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                    <div className='portfolio-item-caption-content text-center text-white'><i className='fas fa-plus fa-3x' /></div>
                  </div>
                  <img className='img-fluid' src={ToolPdfImg} alt='' />
                </div>
              </div>
              {/* Portfolio Item 3 */}
              <div className='col-md-6 col-lg-4 mb-5' onClick={redirectRealTimeChatRoom}>
                <div className='portfolio-item mx-auto' data-toggle='modal' data-target='#portfolioModal2'>
                  <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                    <div className='portfolio-item-caption-content text-center text-white'><i className='fas fa-plus fa-3x' /></div>
                  </div>
                  <img className='img-fluid' src={RealTimeChatRoomImg} alt='' />
                </div>
              </div>
              <div>
                <li><a href='/about-me'>About Me </a></li>
                <li><a href='/tool-pdf'>Tools for processing your PDF files </a></li>
                <li><a href='/classify-data'>Get Models to classify your data</a></li>
                <li><a href='/technical-details'>This is how I build this website! </a></li>
              </div>
            </div>
          </div>
        </section>
        {/* About Section */}
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
            {/* About Section Button */}
            <div className='text-center mt-4'>
              <a className='btn btn-xl btn-outline-light' href='https://startbootstrap.com/theme/freelancer/'>
                <i className='fas fa-download mr-2' />
                Free Download!
              </a>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className='page-section' id='contact'>
          <div className='container'>
            {/* Contact Section Heading */}
            <h2 className='page-section-heading text-center text-uppercase text-secondary mb-0'>Contact Me</h2>
            {/* Icon Divider */}
            <div className='divider-custom'>
              <div className='divider-custom-line' />
              <div className='divider-custom-icon'><i className='fas fa-star' /></div>
              <div className='divider-custom-line' />
            </div>
            {/* Contact Section Form */}
            <div className='row'>
              <div className='col-lg-8 mx-auto'>
                {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                <form id='contactForm' name='sentMessage' noValidate='novalidate'>
                  <div className='control-group'>
                    <div className='form-group floating-label-form-group controls mb-0 pb-2'>
                      <label>Name</label>
                      <input className='form-control' id='name' type='text' placeholder='Name' required='required' data-validation-required-message='Please enter your name.' />
                      <p className='help-block text-danger' />
                    </div>
                  </div>
                  <div className='control-group'>
                    <div className='form-group floating-label-form-group controls mb-0 pb-2'>
                      <label>Email Address</label>
                      <input className='form-control' id='email' type='email' placeholder='Email Address' required='required' data-validation-required-message='Please enter your email address.' />
                      <p className='help-block text-danger' />
                    </div>
                  </div>
                  <div className='control-group'>
                    <div className='form-group floating-label-form-group controls mb-0 pb-2'>
                      <label>Phone Number</label>
                      <input className='form-control' id='phone' type='tel' placeholder='Phone Number' required='required' data-validation-required-message='Please enter your phone number.' />
                      <p className='help-block text-danger' />
                    </div>
                  </div>
                  <div className='control-group'>
                    <div className='form-group floating-label-form-group controls mb-0 pb-2'>
                      <label>Message</label>
                      <textarea className='form-control' id='message' rows={5} placeholder='Message' required='required' data-validation-required-message='Please enter a message.' defaultValue={''} />
                      <p className='help-block text-danger' />
                    </div>
                  </div>
                  <br />
                  <div id='success' />
                  <div className='form-group'><button className='btn btn-primary btn-xl' id='sendMessageButton' type='submit'>Send</button></div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
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
                <a className='btn btn-outline-light btn-social mx-1' href='https://www.facebook.com/hoan.phamduy.1'><FontAwesomeIcon icon={faFacebook} /></a>
                <a className='btn btn-outline-light btn-social mx-1' href='#!'><i className='fab fa-fw fa-twitter' /></a>
                <a className='btn btn-outline-light btn-social mx-1' href='#!'><i className='fab fa-fw fa-linkedin-in' /></a>
                <a className='btn btn-outline-light btn-social mx-1' href='#!'><i className='fab fa-fw fa-dribbble' /></a>
              </div>
              {/* Footer About Text */}
              {/* <div className='col-lg-4'>
                <h4 className='text-uppercase mb-4'>About Freelancer</h4>
                <p className='lead mb-0'>
                  Freelance is a free to use, MIT licensed Bootstrap theme created by
                  <a href='http://startbootstrap.com'>Start Bootstrap</a>
                  .
                </p>
              </div> */}
            </div>
          </div>
        </footer>
        {/* Copyright Section */}
        <div className='copyright py-4 text-center text-white'>
          <div className='container'><small>Copyright © 2021</small></div>
        </div>
        {/* Scroll to Top Button (Only visible on small and extra-small screen sizes) */}
        <div className='scroll-to-top d-lg-none position-fixed'>
          <a className='js-scroll-trigger d-block text-center text-white rounded' href='#page-top'><i className='fa fa-chevron-up' /></a>
        </div>
        {/* Portfolio Modals */}
        {/* Portfolio Modal 1 */}
        <div className='portfolio-modal modal fade' id='portfolioModal1' tabIndex={-1} role='dialog' aria-labelledby='portfolioModal1Label' aria-hidden='true'>
          <div className='modal-dialog modal-xl' role='document'>
            <div className='modal-content'>
              <button className='close' type='button' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'><i className='fas fa-times' /></span>
              </button>
              <div className='modal-body text-center'>
                <div className='container'>
                  <div className='row justify-content-center'>
                    <div className='col-lg-8'>
                      {/* Portfolio Modal - Title */}
                      <h2 className='portfolio-modal-title text-secondary text-uppercase mb-0' id='portfolioModal1Label'>Log Cabin</h2>
                      {/* Icon Divider */}
                      <div className='divider-custom'>
                        <div className='divider-custom-line' />
                        <div className='divider-custom-icon'><i className='fas fa-star' /></div>
                        <div className='divider-custom-line' />
                      </div>
                      {/* Portfolio Modal - Image */}
                      <img className='img-fluid rounded mb-5' src='assets/img/portfolio/cabin.png' alt='' />
                      {/* Portfolio Modal - Text */}
                      <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                      <button className='btn btn-primary' data-dismiss='modal'>
                        <i className='fas fa-times fa-fw' />
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio Modal 2 */}
        <div className='portfolio-modal modal fade' id='portfolioModal2' tabIndex={-1} role='dialog' aria-labelledby='portfolioModal2Label' aria-hidden='true'>
          <div className='modal-dialog modal-xl' role='document'>
            <div className='modal-content'>
              <button className='close' type='button' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'><i className='fas fa-times' /></span>
              </button>
              <div className='modal-body text-center'>
                <div className='container'>
                  <div className='row justify-content-center'>
                    <div className='col-lg-8'>
                      {/* Portfolio Modal - Title */}
                      <h2 className='portfolio-modal-title text-secondary text-uppercase mb-0' id='portfolioModal2Label'>Tasty Cake</h2>
                      {/* Icon Divider */}
                      <div className='divider-custom'>
                        <div className='divider-custom-line' />
                        <div className='divider-custom-icon'><i className='fas fa-star' /></div>
                        <div className='divider-custom-line' />
                      </div>
                      {/* Portfolio Modal - Image */}
                      <img className='img-fluid rounded mb-5' src='assets/img/portfolio/cake.png' alt='' />
                      {/* Portfolio Modal - Text */}
                      <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                      <button className='btn btn-primary' data-dismiss='modal'>
                        <i className='fas fa-times fa-fw' />
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio Modal 3 */}
        <div className='portfolio-modal modal fade' id='portfolioModal3' tabIndex={-1} role='dialog' aria-labelledby='portfolioModal3Label' aria-hidden='true'>
          <div className='modal-dialog modal-xl' role='document'>
            <div className='modal-content'>
              <button className='close' type='button' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'><i className='fas fa-times' /></span>
              </button>
              <div className='modal-body text-center'>
                <div className='container'>
                  <div className='row justify-content-center'>
                    <div className='col-lg-8'>
                      {/* Portfolio Modal - Title */}
                      <h2 className='portfolio-modal-title text-secondary text-uppercase mb-0' id='portfolioModal3Label'>Circus Tent</h2>
                      {/* Icon Divider */}
                      <div className='divider-custom'>
                        <div className='divider-custom-line' />
                        <div className='divider-custom-icon'><i className='fas fa-star' /></div>
                        <div className='divider-custom-line' />
                      </div>
                      {/* Portfolio Modal - Image */}
                      <img className='img-fluid rounded mb-5' src='assets/img/portfolio/circus.png' alt='' />
                      {/* Portfolio Modal - Text */}
                      <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                      <button className='btn btn-primary' data-dismiss='modal'>
                        <i className='fas fa-times fa-fw' />
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio Modal 4 */}
        <div className='portfolio-modal modal fade' id='portfolioModal4' tabIndex={-1} role='dialog' aria-labelledby='portfolioModal4Label' aria-hidden='true'>
          <div className='modal-dialog modal-xl' role='document'>
            <div className='modal-content'>
              <button className='close' type='button' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'><i className='fas fa-times' /></span>
              </button>
              <div className='modal-body text-center'>
                <div className='container'>
                  <div className='row justify-content-center'>
                    <div className='col-lg-8'>
                      {/* Portfolio Modal - Title */}
                      <h2 className='portfolio-modal-title text-secondary text-uppercase mb-0' id='portfolioModal4Label'>Controller</h2>
                      {/* Icon Divider */}
                      <div className='divider-custom'>
                        <div className='divider-custom-line' />
                        <div className='divider-custom-icon'><i className='fas fa-star' /></div>
                        <div className='divider-custom-line' />
                      </div>
                      {/* Portfolio Modal - Image */}
                      <img className='img-fluid rounded mb-5' src='assets/img/portfolio/game.png' alt='' />
                      {/* Portfolio Modal - Text */}
                      <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                      <button className='btn btn-primary' data-dismiss='modal'>
                        <i className='fas fa-times fa-fw' />
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio Modal 5 */}
        <div className='portfolio-modal modal fade' id='portfolioModal5' tabIndex={-1} role='dialog' aria-labelledby='portfolioModal5Label' aria-hidden='true'>
          <div className='modal-dialog modal-xl' role='document'>
            <div className='modal-content'>
              <button className='close' type='button' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'><i className='fas fa-times' /></span>
              </button>
              <div className='modal-body text-center'>
                <div className='container'>
                  <div className='row justify-content-center'>
                    <div className='col-lg-8'>
                      {/* Portfolio Modal - Title */}
                      <h2 className='portfolio-modal-title text-secondary text-uppercase mb-0' id='portfolioModal5Label'>Locked Safe</h2>
                      {/* Icon Divider */}
                      <div className='divider-custom'>
                        <div className='divider-custom-line' />
                        <div className='divider-custom-icon'><i className='fas fa-star' /></div>
                        <div className='divider-custom-line' />
                      </div>
                      {/* Portfolio Modal - Image */}
                      <img className='img-fluid rounded mb-5' src='assets/img/portfolio/safe.png' alt='' />
                      {/* Portfolio Modal - Text */}
                      <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                      <button className='btn btn-primary' data-dismiss='modal'>
                        <i className='fas fa-times fa-fw' />
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio Modal 6 */}
        <div className='portfolio-modal modal fade' id='portfolioModal6' tabIndex={-1} role='dialog' aria-labelledby='portfolioModal6Label' aria-hidden='true'>
          <div className='modal-dialog modal-xl' role='document'>
            <div className='modal-content'>
              <button className='close' type='button' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'><i className='fas fa-times' /></span>
              </button>
              <div className='modal-body text-center'>
                <div className='container'>
                  <div className='row justify-content-center'>
                    <div className='col-lg-8'>
                      {/* Portfolio Modal - Title */}
                      <h2 className='portfolio-modal-title text-secondary text-uppercase mb-0' id='portfolioModal6Label'>Submarine</h2>
                      {/* Icon Divider */}
                      <div className='divider-custom'>
                        <div className='divider-custom-line' />
                        <div className='divider-custom-icon'><i className='fas fa-star' /></div>
                        <div className='divider-custom-line' />
                      </div>
                      {/* Portfolio Modal - Image */}
                      <img className='img-fluid rounded mb-5' src='assets/img/portfolio/submarine.png' alt='' />
                      {/* Portfolio Modal - Text */}
                      <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                      <button className='btn btn-primary' data-dismiss='modal'>
                        <i className='fas fa-times fa-fw' />
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bootstrap core JS */}
        {/* Third party plugin JS */}
        {/* Contact form JS */}
        {/* Core theme JS */}
      </div>
    )
  }
})

export default Homepage
