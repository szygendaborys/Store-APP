import React, { Component } from 'react';
import { connect } from 'react-redux';

import './scss/App.scss';

import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className='main-container'>
          <div className='container'>
            <Main />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect()(App);
