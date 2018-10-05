import React, { Component } from 'react';

import Home from './components/Home'
import Operations from './components/Operations'
import Brands from './components/Brands'
import BrandsSide from './components/BrandsSide'
import SocialMedia from './components/SocialMedia'
import SocialMediaSide from './components/SocialMediaSide'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ContactSide from './components/ContactSide'


class App extends Component {
  render() {
    return (
      <div className="wrapper">

        <Home /><Operations />
        <BrandsSide /><Brands />
        <SocialMediaSide /><SocialMedia />
        <ContactSide /><Contact />
        <Footer />

      </div>
    );
  }
}

export default App;