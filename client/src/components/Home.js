import React from "react";
import "../styles/home.css";
// import logo from "../images/squareLogo.jpg";
import logo from "../images/ajMakaBlank.png"

const Home = () => {
  return (
    <div className="a">
      <div className="home">
        <img className="homeImg" src={logo} width={200}></img>
        <h1 className="homeh1">AJ Maka Distributing</h1>
        <h4 className="homeh4">GROWING YOUR BRAND IN CHICAGOLAND</h4>
      </div>
    </div>
  );
};

export default Home;
