import React, { Component } from 'react'
import { connect } from 'react-redux'

import phoneImg from '../img/phone.jpg'
import * as actionCreator from '../store/actions/actions'

class Item extends Component {
  render() {
    return (
        <div className='item col-sm-9 col-md-4 col-lg-3 mx-4 mb-4'>
                <img 
                    className='item-image' 
                    src={phoneImg}
                    alt={this.props.name}
                />
                <span className='item-image__hover'>

                    <p className='item-desc'>{this.props.desc}</p>
                    <button id={this.props.id+'likebutton'} className='item-likebutton' onClick={() => this.props.addLike(this.props.id, this.props.wasLiked)}>
                        <i className="fas fa-heart"></i>
                    </button>

                    <div className='item-panel'>
                        <p className='item-paneldesc'>
                            {this.props.name} <span className='item-paneldesc__price'>{this.props.price} GBP</span>
                        </p>
                        <button onClick={() => this.props.addNum(this.props.id)} className='item-panel__addbutton'>+</button>
                    </div>
                    
                </span>
                <div className='item-panel'>
                    <p className='item-paneldesc'>
                        {this.props.name} <span className='item-paneldesc__price'>{this.props.price} GBP</span>
                    </p>
                    <button onClick={() => this.props.addNum(this.props.id)} className='item-panel__addbutton'>+</button>
                </div>
          </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    item: state.item
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNum: id => dispatch ({
      type: 'ADD_NUM',
      id,
      value: 1
    }),
    addLike: (id, wasLiked) => dispatch (actionCreator.addLike(id, wasLiked))
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);
