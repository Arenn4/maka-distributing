import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="h">
      <div className="footer">
        <div className="x">
          <div className="footerText">
            <div>
              <h3 className="footerh3">A.J. Maka Distributors</h3>
              <br />
              <span5>470 W Crossroads Pkwy #B, Bolingbrook, Illinois 60440</span5>
              <br />
              <span5>
                <i className="fas fa-phone fa-flip-horizontal" /> (630) 546-0663
              </span5>
              <br />
              <span5>Mon-Sun: By Appt.</span5>
              <br />
              <span5>
                <i className="far fa-envelope" />
                ajmaka@ajmakadistributors.com
              </span5>
            </div>
          </div>
        </div>
        <div className="y">
          <div className="admin">
            <i className="fas fa-user-circle" />
            <span>admin</span>
          </div>
        </div>
        <div className="z">
          <div className="footerIcons">
            <a href="https://twitter.com/ajmakadistro?lang=en"><i className="fab fa-twitter-square" /></a>
            <a href="https://www.instagram.com/ajmakadistro/"><i className="fab fa-instagram" /></a>
            <a href="https://www.facebook.com/pages/A-J-Maka-Distributors/676586775809191"><i className="fab fa-facebook-square" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
