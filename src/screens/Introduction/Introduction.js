import React from 'react'

import NavBar from './components/NavBar'
import WideSectionHeader from './components/WideSectionHeader'
import PortfolioList from './components/PortfolioList'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const Introduction = () => {
  return (
    <div>
      <div>
        <NavBar />
        <WideSectionHeader />
        <PortfolioList />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default Introduction
