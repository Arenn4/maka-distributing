
import React from "react";
import "../styles/home.css";
import logo from "../images/LogoSkullBones.jpg";


const HomeSide = () => {
  return (
    <div className="b">
      <div className="homeSide">
        <h4>GROWING YOUR CRAFT BEER BRAND THROUGHOUT CHICAGOLAND</h4>
        <p>Cook</p>
        <p>DuPage</p>
        <p>Will</p>
        <p>Lake</p>
        <p>Kane</p>
        <p>McHenry</p>
        <img className="logo" src={logo} />
      </div>
    </div>
  );
};

export default HomeSide;
