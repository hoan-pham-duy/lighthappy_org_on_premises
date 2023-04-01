import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import AboutMeImg from '../assets/img/portfolio/AboutMe.png'
import ToolPdfImg from '../assets/img/portfolio/ToolPdf.png'
import RealTimeChatRoomImg from '../assets/img/portfolio/ChatRoom.png'
import HowIBuildImg from '../assets/img/portfolio/How_I_build.png'
import Book from '../assets/img/portfolio/Book.png'
import LH_NFT from '../assets/img/portfolio/LH_NFT.jpeg'
import LH_MEMORIES from '../assets/img/portfolio/LH_Memories.png'

function redirectTo (path) {
  window.location.href = path
}

function redirectAboutMe (event) {
  redirectTo('about-me')
}

function redirectToolPdf (event) {
  redirectTo('pdf-tools')
}

function redirectRealTimeChatRoom (event) {
  redirectTo('real-time-chat-room')
}

function redirectTechnicalDetails (event) {
  redirectTo('technical-details')
}

function redirectHappyTechnicalBook (event) {
  window.open(
    'https://techbook.lighthappy.org/',
    '_blank' // <- This is what makes it open in a new window.
  )
}

function redirectLhNft (event) {
  window.open(
    'https://sepolia.nft.lighthappy.org/fire-guys',
    '_blank' // <- This is what makes it open in a new window.
  )
}

function redirectLhMemoriesBlk (event) {
  window.open(
    'https://sepolia.nft.lighthappy.org/lh-memories',
    '_blank' // <- This is what makes it open in a new window.
  )
}

const imgPortfolioStyles = {
  width: '150px',
  height: '100%',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto'
}

const emptyVeritcalDivStyle = {
  height: '20px'
}

class PortfolioList extends React.Component {
  render () {
    return (
      <section className='page-section portfolio' id='portfolio'>
      <div className='container'>
        {/* Portfolio Section Heading */}
        <div style={emptyVeritcalDivStyle}> </div>
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
              <img style={imgPortfolioStyles} className='img-fluid' src={AboutMeImg} alt='' />
              <p className='text-center'> About Me </p>
            </div>
          </div>
          {/* Portfolio Item 2 */}
          <div className='col-md-6 col-lg-4 mb-5' onClick={redirectToolPdf}>
            <div className='portfolio-item mx-auto' data-toggle='modal' data-target='#portfolioModal2'>
              <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                <div className='portfolio-item-caption-content text-center text-white'><i className='fas fa-plus fa-3x' /></div>
              </div>
              <img style={imgPortfolioStyles} className='img-fluid' src={ToolPdfImg} alt='' />
              <p className='text-center'> Tools for PDF files </p>
            </div>
          </div>
          {/* Portfolio Item 3 */}
          <div className='col-md-6 col-lg-4 mb-5' onClick={redirectRealTimeChatRoom}>
            <div className='portfolio-item mx-auto' data-toggle='modal' data-target='#portfolioModal2'>
              <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                <div className='portfolio-item-caption-content text-center text-white'><i className='fas fa-plus fa-3x' /></div>
              </div>
              <img className='img-fluid' style={imgPortfolioStyles} src={RealTimeChatRoomImg} alt='' />
              <p className='text-center'> Realtime Chat Room </p>
            </div>
          </div>
          <div className='col-md-6 col-lg-4 mb-5' onClick={redirectTechnicalDetails}>
            <div className='portfolio-item mx-auto' data-toggle='modal' data-target='#portfolioModal2'>
              <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                <div className='portfolio-item-caption-content text-center text-white'><i className='fas fa-plus fa-3x' /></div>
              </div>
              <img style={imgPortfolioStyles} className='img-fluid' src={HowIBuildImg} alt='' />
              <p className='text-center'> How I develop this project </p>
            </div>
          </div>
          <div className='col-md-6 col-lg-4 mb-5' onClick={redirectHappyTechnicalBook}>
            <div className='portfolio-item mx-auto' data-toggle='modal' data-target='#portfolioModal2'>
              <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                <div className='portfolio-item-caption-content text-center text-white'><i className='fas fa-plus fa-3x' /></div>
              </div>
              <img style={imgPortfolioStyles} className='img-fluid' src={Book} alt='' />
              <p className='text-center'> My Technical Notes </p>
            </div>
          </div>
          <div className='col-md-6 col-lg-4 mb-5' onClick={redirectLhNft}>
            <div className='portfolio-item mx-auto' data-toggle='modal' data-target='#portfolioModal2'>
              <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                <div className='portfolio-item-caption-content text-center text-white'><i className='fas fa-plus fa-3x' /></div>
              </div>
              <img style={imgPortfolioStyles} className='img-fluid' src={LH_NFT} alt='' />
              <p className='text-center'> Use AWS CICD to deploy an sample NFT Solidity project to Sepolia TestNet <br/>
                  Refer Solidity source code from <a href='https://github.com/fireship-io/web3-nft-dapp-tutorial'> this repo </a>
                </p>
            </div>
          </div>
         <div className='col-md-6 col-lg-4 mb-5' onClick={redirectLhMemoriesBlk}>
            <div className='portfolio-item mx-auto' data-toggle='modal' data-target='#portfolioModal2'>
              <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                <div className='portfolio-item-caption-content text-center text-white'><i className='fas fa-plus fa-3x' /></div>
              </div>
              <img style={imgPortfolioStyles} className='img-fluid' src={LH_MEMORIES} alt='' />
              <p className='text-center'> Use AWS CICD to deploy my own smart contract call: Light Happy Memory, that allows users save their memories in blockchain.<br/>
              Current, the app is deployed in Sepolia ETH Network</p>
            </div>
          </div>
          {/* <div>
            <li><a href='/about-me'>About Me </a></li>
            <li><a href='/tool-pdf'>Tools for processing your PDF files </a></li>
            <li><a href='/classify-data'>Get Models to classify your data</a></li>
            <li><a href='/technical-details'>This is how I build this website! </a></li>
          </div> */}
        </div>
      </div>
    </section>
    )
  }
}

export default PortfolioList
