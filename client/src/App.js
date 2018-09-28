import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Brands from './components/Brands'
import SocialMedia from './components/SocialMedia'
import Contact from './components/Contact'
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
      <div >
        <Navbar />
        <Home/>
        <Brands/>
        <SocialMedia/>
        <Contact/>
        <Footer/>

      </div>
    );
  }
}

export default App;
