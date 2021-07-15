import React from 'react'
import './../static/css/styles.css'
import './../static/css/Homepage.css'
import './../ui_theme/freelancer/css/bootstrap.min.css'
import './../ui_theme/freelancer/css/freelancer.css'
import PortfolioListItem from './PortfolioListItem.jsx'

class PortfolioList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      portfolioList: [
        { id: 1, url: './../ui_theme/freelancer/img/portfolio/cabin.png' },
        { id: 2, url: './../ui_theme/freelancer/img/portfolio/cake.png' },
        { id: 3, url: './../ui_theme/freelancer/img/portfolio/circus.png' },
        { id: 4, url: './../ui_theme/freelancer/img/portfolio/game.png' },
        { id: 5, url: './../ui_theme/freelancer/img/portfolio/safe.png' },
        { id: 6, url: './../ui_theme/freelancer/img/portfolio/submarine.png' }
      ]
    }
  }

  render () {
    if (!this.state.portfolioList) {
      return <div>loading...</div>
    }

    return (
      <section id="portfolio">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <h2>Portfolio</h2>
                      <hr className="star-primary" />
                  </div>
              </div>
              <div className="row">
                {
                  this.state.portfolioList.map((list) => { return <PortfolioListItem imgUrl={list.url} key={list.id} modalName={'projmodal' + list.id} /> })
                }
              </div>
          </div>
      </section>
    )
  }
}

export default PortfolioList
