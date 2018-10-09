import React from "react";
import "../styles/header.css";
// import logo from "../images/squareLogo.jpg";
import logo from "../images/ajMakaBlank.png"

const Header = () => {
  return (
    <div className="header">
        <img src={logo} className="logo" alt=""/>
        <div className="headerText">
            <span className="headerTitle">AJ Maka Distributing</span>
            <span className="headerSubTitle">Growing your Brand in ChicagoLand.</span>
        </div>
    </div>
  );
};

export default Header;
