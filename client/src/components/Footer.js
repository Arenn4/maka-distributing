import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="h">
      <div className="footer">
        <div className="x">
          <div className="footerText">
            <div>
              <h3 className="headerText">A.J. Maka Distributors</h3>
              <br />
              <span>470 W Crossroads Pkwy #B, Bolingbrook, Illinois 60440</span>
              <br />
              <span>
                <i className="fas fa-phone fa-flip-horizontal" /> (630) 546-0663
              </span>
              <br />
              <span>Mon-Sun: By Appt.</span>
              <br />
              <span>
                <i className="far fa-envelope" />
                ajmaka@ajmakadistributors.com
              </span>
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
            <i className="fab fa-twitter-square" />
            <i className="fab fa-instagram" />
            <i className="fab fa-facebook-square" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
