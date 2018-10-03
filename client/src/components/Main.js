import React, { Component } from "react";
import Home from "./Home";
import HomeSide from "./HomeSide";
import Brands from "./Brands";
import BrandsSide from "./BrandsSide";
import SocialMedia from "./SocialMedia";
import SocialMediaSide from "./SocialMediaSide";
import Contact from "./Contact";
import Footer from "./Footer";
import ContactSide from "./ContactSide";

class Main extends Component {
  render() {
    return (
      <div className="wrapper">
        <Home />
        <HomeSide />
        <BrandsSide />
        <Brands />
        <SocialMedia />
        <SocialMediaSide />
        <ContactSide />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Main;
