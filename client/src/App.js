import React, { Component } from 'react';

import Header from './components/Header'
import Operations from './components/Operations'
import Brands from './components/Brands'
import SocialMedia from './components/SocialMedia'
import Contact from './components/Contact'
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Brands />
        <SocialMedia />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;