import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="h">
      <div className="footer">
        <div className="a">
          <div className="footerText">
            <p>
              <h3 className="headerText">A.J. Maka Distributors</h3>
              <br />
              <span>470 W Crossroads Pkwy #B, Bolingbrook, Illinois 60440</span>
              <br />
              <span>
                <i class="fas fa-phone fa-flip-horizontal" /> (630) 546-0663
              </span>
              <br />
              <span>Mon-Sun: By Appt.</span>
              <br />
              <span>
                <i class="far fa-envelope" />
                ajmaka@ajmakadistributors.com
              </span>
            </p>
          </div>
        </div>
        <div className="b">
          <div className="admin">
            <i class="fas fa-user-circle" />
            <span>admin</span>
          </div>
        </div>
        <div className="c">
          <div className="footerIcons">
            <i class="fab fa-twitter-square" />
            <i class="fab fa-instagram" />
            <i class="fab fa-facebook-square" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
