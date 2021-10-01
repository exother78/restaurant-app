import React from "react";
import "./MenuScreen.css";

import image from "../../Images/white-wood-textures.jpg";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Footer from "../Home/Sections/Footer";
import { useStateValue } from "../../../StateProvider";

const MenuScreen = () => {
  const { menuAPI } = useStateValue();
  return (
    <>
      <div className="menu-screen">
        <h1>Our Menu</h1>
        <img src={image} alt="" />

        <div className="menu-screen__content">
          {/* <div className="menu-screen__group">
            <h3 className="menu-screen__group-title">Sushi</h3>
            <p className="menu-screen__group-subText">something </p>
            <p className="menu-screen__group-subText">Fish</p>
            <p className="menu-screen__group-subText">Crabs</p>
          </div> */}

          {menuAPI?.menu?.map((item, i) => (
            <div className="menu-screen__group" key={i}>
              <h3 className="menu-screen__group-title">{item.category}</h3>
              {item?.products?.map((product, index) => (
                <div className="subText__group" key={index}>
                  <div className="subText__group-container">
                    <p className="menu-screen__group-subText">{product.name}</p>
                    <p className="menu-screen__group-subText-short">
                      ({product.whisper})
                    </p>
                  </div>
                </div>
              ))}
              {/* <p className="menu-screen__group-subText">something </p>
              <p className="menu-screen__group-subText">Fish</p>
              <p className="menu-screen__group-subText">Crabs</p> */}
            </div>
          ))}

          {/* <div className="menu-screen__group">
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
          </div> */}
          <div className="menu-page">
            <h4>Get Your Favorite Food Now!</h4>
            <span
              onClick={() => (window.location.href = "/order")}
              className="menu-to-menuscreen-arrow"
              style={{ background: "darkgrey" }}>
              <ArrowForwardIcon />
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MenuScreen;
