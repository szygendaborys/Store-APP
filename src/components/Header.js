import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreator from '../store/actions/actions'

import '../scss/Navbar.scss'

import Cart from './Cart'

class Header extends Component {

  render() {

    let style ='none';

    if(this.props.menuOpened) {
      style = 'block';
      
    }
    
    if(!this.props.menuOpened) {
       style = 'none';
       
    }

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
                <i onClick={() => this.props.toggleMenu(this.props.menuOpened)} className="fas fa-shopping-cart"></i>
                <div className='header-cart__desc'><p onClick={() => this.props.toggleMenu(this.props.menuOpened)}>Cart <i id='cartArrow' className="fas fa-angle-right"></i></p>
                <Cart style={style}/>
                </div>
                
            </div>
        </div>
      </div>
    )    
  }
}

const mapStateToProps = state => {
    return {
        liked:state.liked,
        cart:state.cart,
        menuOpened:state.menuOpened
    }
}

const mapDispatchToProps = dispatch => {
    return {
      toggleMenu: menuOpened => dispatch(actionCreator.toggleMenu(menuOpened))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
