import React from "react";
import "../styles/home.css";
import blank from "../images/ajMakaBlank.png";

const HomeSide = () => {
  return (
    <div className="b">
      <div className="homeSide">
        <img className="blank" src={blank} />
        {/* <img className="logo" src={logo} /> */}
      </div>
    </div>
  );
};

export default HomeSide;
