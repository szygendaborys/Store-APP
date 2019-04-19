import React, { Component } from 'react'
import '../scss/Navbar.scss'
import '../scss/App.scss'

import Header from './Header'
import Headertop from './Headertop'

// Import react router

export default class Navbar extends Component {
  render() {
    return (
      <div className="navigation-bar">
        <Headertop />
        <Header />

        <ul> {/* Links would be the routing components */}

            <li className="navbar-link active"><p><span>Home</span></p></li>
            <li className="navbar-link"><p>Cart</p></li>
            <li className="navbar-link"><p>Contact</p></li>

        </ul>  
      </div>
    )
  }
}
