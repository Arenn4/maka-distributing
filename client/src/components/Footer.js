import React from "react";
import "../styles/footer.css"

const Footer = () => {
  return (
    // <div className="e">
      <div className="footer">
        <div className="footerContact">
          <h3 className="footerh3">A.J. Maka Distributors</h3>

          <span>470 W Crossroads Pkwy #B, Bolingbrook, Illinois 60440</span>
          <span>  •  </span>
          <span>
            <i className="fas fa-phone fa-flip-horizontal" /> (630) 546-0663</span>
          <span>  •  </span>
          <span><i className="far fa-envelope" />ajmaka@ajmakadistributors.com
          </span>
        </div>

        <div className="admin"><a href="/admin" className="admin-link">
          <i className="fas fa-user-circle" />
          <span>Admin</span></a>
        </div>

        <div className="footerIcons">
          <a href="https://twitter.com/ajmakadistro?lang=en"><i className="fab fa-twitter-square" /></a>
          <a href="https://www.instagram.com/ajmakadistro/"><i className="fab fa-instagram" /></a>
          <a href="https://www.facebook.com/pages/A-J-Maka-Distributors/676586775809191"><i className="fab fa-facebook-square" /></a>
        </div>
      </div >
    // </div >
  );
};

export default Footer;
