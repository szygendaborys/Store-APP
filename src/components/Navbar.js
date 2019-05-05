import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/actions'


import '../scss/Navbar.scss'
import '../scss/App.scss'


import Header from './Header'
import Headertop from './Headertop'

class Navbar extends Component {
  render() {
    return (
      <div className="navigation-bar">
        <Headertop />
        <Header />

        <ul className='navibar'> 

            <li className="navbar-link active"><p><span>Home</span></p></li>
            <li className="navbar-link"><p>Cart</p></li>
            <li className="navbar-link"><p>Contact</p></li>

        </ul>
        <div id='navibar-mobile' className='navibar-mobile'>
          <div id='backgr-cover' className='backgr-cover'></div>
          <i id='burger-open' onClick={() => this.props.showMenu(this.props.toggleMenu)} className="fas fa-bars burger"></i>
          <p id='burger-close' onClick={() => this.props.showMenu(this.props.toggleMenu)} className='burger burger-close hidden'>X</p>
            <ul id='navibar-mobile__list' className='navibar-mobile__list'>
              <li className="compact-link active"><p><span>Home</span></p></li>
              <li className="compact-link"><p>Cart</p></li>
              <li className="compact-link"><p>Contact</p></li>
            </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    toggleMenu: state.toggleMenu
  }
} 

const mapDispatchToProps = dispatch => {
  return {
    showMenu: toggleMenu => dispatch(actionCreator.showMenu(toggleMenu))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);

