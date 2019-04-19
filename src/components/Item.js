import React, { Component } from 'react'

import phoneImg from '../img/phone.jpg'

class Item extends Component {
  render() {
    return (
        <div className='item col-sm-9 col-md-4 col-lg-3 mx-3 mb-4'>
                <img 
                    className='item-image' 
                    src={phoneImg}
                    alt={this.props.name}
                />
                <span className='item-image__hover'>

                    <p className='item-desc'>{this.props.desc}</p>
                    <button className='item-likebutton'>
                        <i className="fas fa-heart"></i>
                    </button>

                    <div className='item-panel'>
                        <p className='item-paneldesc'>
                            {this.props.name} <span className='item-paneldesc__price'>{this.props.price} GBP</span>
                        </p>
                        <button className='item-panel__addbutton'>+</button>
                    </div>
                    
                </span>
                <div className='item-panel'>
                    <p className='item-paneldesc'>
                        {this.props.name} <span className='item-paneldesc__price'>{this.props.price} GBP</span>
                    </p>
                    <button className='item-panel__addbutton'>+</button>
                </div>
          </div>
    )
  }
}



export default Item;
