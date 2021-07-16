import React from 'react'
import { Helmet } from 'react-helmet'

import './css/Homepage.css'
import './css/styles.css'

import NavBar from './components/NavBar'
import WideSectionHeader from './components/WideSectionHeader'
import PortfolioList from './components/PortfolioList'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Copyright from './components/Copyritgh'

const createReactClass = require('create-react-class')

const Homepage = createReactClass({
  render: function () {
    return (
      <div>
        <Helmet>
          <title>Pham Duy Hoan Personal Website </title>
        </Helmet>

        <NavBar />
        <WideSectionHeader />
        <PortfolioList />
        <About />
        <Contact />
        <Footer />
        <Copyright />
      </div>
    )
  }
})

export default Homepage
