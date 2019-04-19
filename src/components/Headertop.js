import React, { Component } from 'react'

import '../scss/Navbar.scss'

export default class Headertop extends Component {
  render() {
    return (
      <div className='headertop'>
            <div className='headertop-box ml-5'>
                <i className="fas fa-phone"></i> <p>07 777 777 777</p>
                <i className="far fa-envelope"></i><p>mail@gmail.com</p>
                <i className="fas fa-map-marker-alt"></i><p>Flat 33, Ave rd., London</p>
            </div>
            <div className='headertop-box mr-5'>
            <i className="fas fa-pound-sign"></i> <p>GBP</p>
                <i className="far fa-user"></i> <p>My Account</p>
            </div>

      </div>
    )
  }
}
