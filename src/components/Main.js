import React, { Component } from 'react'

import Itemlist from './Itemlist'

import '../scss/Main.scss'


class Main extends Component {
  render() {
    return (
      <div className='main'>

        <Itemlist />

      </div>
    )
  }
}

export default Main;