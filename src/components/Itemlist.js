import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../scss/Main.scss'
import Item from './Item'



class Itemlist extends Component {
   render() {

    const items = this.props.item;
    const item = items.map(el => <Item 
      id={el.id} 
      name={el.name} 
      price={el.price} 
      desc={el.desc} 
      key={el.id} 
      orderedNum={el.orderedNum} 
      wasLiked={el.wasLiked}/>)

    return (
      <div className="itemlist row">
          {item}      
      </div>
    )
  }

  
}

const mapStateToProps = state => {
    return {
        item:state.item
    }
}

export default  connect(mapStateToProps)(Itemlist);