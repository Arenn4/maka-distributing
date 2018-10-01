import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import HomeSide from './components/HomeSide'
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
        
        <Home/><HomeSide/>
        <BrandsSide/><Brands/>
        <SocialMedia/><SocialMediaSide/>
        <ContactSide/><Contact/>
        {/* <Footer/>  */}

      </div>
    );
  }
}

export default App;
