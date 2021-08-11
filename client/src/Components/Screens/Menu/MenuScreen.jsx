import React from "react";
import "./MenuScreen.css";

import image from "../../Images/white-wood-textures.jpg";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Footer from "../Home/Sections/Footer";

const MenuScreen = () => {
  return (
    <>
      <div className="menu-screen">
        <h1>Our Menu</h1>
        <img src={image} alt="" />

        <div className="menu-screen__content">
          <div className="menu-screen__group">
            <h3 className="menu-screen__group-title">Sushi</h3>
            <p className="menu-screen__group-subText">something </p>
            <p className="menu-screen__group-subText">Fish</p>
            <p className="menu-screen__group-subText">Crabs</p>
          </div>

          <div className="menu-screen__group">
            <h3 className="menu-screen__group-title">Pizza</h3>
            <p className="menu-screen__group-subText">something </p>
            <p className="menu-screen__group-subText">Fish</p>
            <p className="menu-screen__group-subText">Crabs</p>
          </div>

          <div className="menu-screen__group">
            <h3 className="menu-screen__group-title">Burger</h3>
            <p className="menu-screen__group-subText">something </p>
            <p className="menu-screen__group-subText">Fish</p>
            <p className="menu-screen__group-subText">Crabs</p>
          </div>

          <div className="menu-screen__group">
            <h3 className="menu-screen__group-title">Asian</h3>
            <p className="menu-screen__group-subText">something </p>
            <p className="menu-screen__group-subText">Fish</p>
            <p className="menu-screen__group-subText">Crabs</p>
          </div>

          <div className="menu-screen__group">
            <h3 className="menu-screen__group-title">German</h3>
            <p className="menu-screen__group-subText">something </p>
            <p className="menu-screen__group-subText">Fish</p>
            <p className="menu-screen__group-subText">Crabs</p>
          </div>

          <div className="menu-screen__group">
            <h3 className="menu-screen__group-title">Sushi</h3>
            <p className="menu-screen__group-subText">something </p>
            <p className="menu-screen__group-subText">Fish</p>
            <p className="menu-screen__group-subText">Crabs</p>
          </div>

          <div className="menu-screen__group">
            <h3 className="menu-screen__group-title">Sushi</h3>
            <p className="menu-screen__group-subText">something </p>
            <p className="menu-screen__group-subText">Fish</p>
            <p className="menu-screen__group-subText">Crabs</p>
          </div>
          <div className="menu-page">
            <h4>Get Your Favorite Food Now!</h4>
            <Link to="/order">
              <span
                className="menu-to-menuscreen-arrow"
                style={{ background: "darkgrey" }}>
                <ArrowForwardIcon />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MenuScreen;
