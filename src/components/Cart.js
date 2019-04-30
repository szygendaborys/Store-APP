import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../scss/Cartlist.scss'

class Cart extends Component {
  render() {
    const cartItems = this.props.item;
    const cartList = cartItems.map( el =>
      <li id={'item'+el.id} key={el.id} className='cart-list__item' style={{display:'none'}} >{el.orderedNum}x {el.name} | {(el.orderedNum * el.price)} GBP <button className='cart-list__deletebutton'>-</button></li>
    )

    cartList.forEach(el => {
      if(this.props.item[(el.key-1)].orderedNum > 0) {
        document.getElementById(el.props.id).style.display = 'block';
      }
      // } else {
      //   document.getElementById(el.props.id).style.display = 'none';
      // }
    })

    return (
        <div className='cart' style={{display:this.props.style}}> 
          <p>Your order:</p>
          <div className='cart-list'>
              <ul>
                {cartList}
              </ul>
          </div>
          <div className='cart-buttons'>
              <button className='cart-buttons__cancel'>Cancel Order</button>
              <button className='cart-buttons__checkout'>Checkout &rarr;</button>
          </div>
        </div>
      )
    }
  }


const mapStateToProps = state => {
  return {
      item:state.item
  }
}

export default connect(mapStateToProps)(Cart);