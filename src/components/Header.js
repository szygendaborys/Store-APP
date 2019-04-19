import React, { Component } from 'react'
import '../scss/Navbar.scss'

import { connect } from 'react-redux'

class Header extends Component {
  render() {
    return (
      <div className='container header'>
        <h1 className='logo'>e<span className='logo__primary'>Company</span></h1>

        <form className='searchbar'>
            <select className="searchbar-selectbar">
                <option value="">Select category</option>
                <option value="Phones">Phones</option>
                <option value="Phones">Laptops</option>
                <option value="Phones">Tablets</option>
            </select>
            <input className='searchbar-input' type='text' placeholder='Search for an item...'/>
            <button className='searchbar-submit' type='submit'>Search</button>
        </form>

        <div className="header-other">
            <div className='header-likes'>
                <span>{this.props.liked}</span>
                <i className="fas fa-heart"></i>
                <p>Liked</p>
                
            </div>
            <div className='header-cart'>
                <span>{this.props.cart}</span>
                <i className="fas fa-shopping-cart"></i>
                <p>Cart</p>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        liked:state.liked,
        cart:state.cart
    }
}

export default connect(mapStateToProps)(Header);
