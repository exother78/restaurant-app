import React from "react";
import "./Footer.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <h1 className="footer__title">Know Us</h1>
        <div className="footer__container">
          <div className="footer__column">
            <h2 className="footer__column-title">Discover</h2>
            <Link to="/about" className="footer__column-subText">
              <span>About Us</span>
            </Link>
            <span className="footer__column-subText">Reserve Table</span>
          </div>

          <div className="footer__column">
            <h3 className="footer__column-title">Let Us know You</h3>
            <Link to="/login" className="footer__column-subText">
              <span>Login</span>
            </Link>
            <Link to="/register" className="footer__column-subText">
              <span>Register</span>
            </Link>
          </div>

          <div className="footer__column">
            <h3 className="footer__column-title">More</h3>
            <span className="footer__column-subText">Our Android App</span>
            <span className="footer__column-subText">Our IOS App</span>
          </div>

          <div className="footer__column">
            <h3 className="footer__column-title">Our Menu</h3>
            <span className="footer__column-subText">Sushi </span>
            <span className="footer__column-subText">Burger</span>
            <span className="footer__column-subText">Pizza</span>

            <span className="footer__column-subText">Chicken Karahi</span>
            <div className="menu-page" style={{ padding: "0 5px" }}>
              <h4>Order Food Now!</h4>
              <span
                className="menu-to-menuscreen-arrow"
                onClick={() => (window.location.href = "/order")}>
                <ArrowForwardIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__final-line">
        <span className="copyright-text">
          <span className="footer__copyright-icon"> © </span>Copyrights 2021.
        </span>
      </div>
    </>
  );
};

export default Footer;
