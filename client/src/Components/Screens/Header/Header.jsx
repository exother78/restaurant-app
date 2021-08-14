import React, { useState } from "react";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { Link } from "react-router-dom";
import { useStateValue } from "../../../StateProvider";
import axios from "axios";

// import image from "../../Images/my.jpeg";
import avatar from "../../Images/avatar.png";
import arrow from "../../Images/chevron-down-solid.svg";

const Header = () => {
  const state = useStateValue();

  const [isLoggedIn] = state.userAPI.isLoggedIn;
  const [isAdmin] = state.userAPI.isAdmin;
  const userImage = state.userAPI.image;
  const name = state.userAPI.name;
  const [avatarOpen, setAvatarOpen] = useState(false);
  const [basket] = state.basket;
  document.addEventListener("scroll", (e) => {
    const header = document.querySelector(".Header");

    if (header && window.scrollY > 5) {
      header.classList.add("white");
    }
    if (
      header &&
      header.classList.value.includes("white") &&
      window.scrollY < 5
    ) {
      header.classList.remove("white");
    }
  });

  const handleBarsClick = () => {
    const bars = document.querySelector(".header__bars");
    const sideNav = document.querySelector(".header__side-nav");

    if (!bars.classList.value.includes("bars-opened") && sideNav) {
      bars.classList.add("bars-opened");

      sideNav.style.left = "0";
    } else {
      bars.classList.remove("bars-opened");
      if (sideNav) {
        sideNav.style.left = "-100%";
      }
    }
  };

  const removeSideNav = () => {
    const bars = document.querySelector(".header__bars");
    const sideNav = document.querySelector(".header__side-nav");
    if (sideNav && bars.classList.value.includes("bars-opened") && bars) {
      bars.classList.remove("bars-opened");

      sideNav.style.left = "-100%";
    }
  };

  const logoutUser = async () => {
    try {
      await axios.get("/api/user/logout");
      localStorage.removeItem("login");
      // // console.log(localStorage.clear());
      // setIsLoggedIn(false);
      // console.log("logout");

      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <div className="Header">
      <div className="header__container">
        <div className="bars">
          <div className="header__bars" onClick={handleBarsClick}>
            <div className="header__bar"></div>
          </div>
        </div>

        <Link className="header__logo" to="/">
          <h1>LOGO</h1>
        </Link>

        <nav>
          {isLoggedIn && (
            <div
              className="header__user-nav"
              onClick={() => setAvatarOpen(!avatarOpen)}>
              <div className="header__user-nav-img">
                <img
                  src={userImage ? userImage : avatar}
                  alt=""
                  className="avatar__img"
                />
                <span className="text">Hi, {name}</span>
                <img src={arrow} alt="" className="avatar__arrow" />
              </div>
              <ul
                className="avatar__list"
                style={{
                  opacity: !avatarOpen ? "0" : "1",
                }}>
                <Link to="/orders">
                  <li>Pending Orders</li>
                </Link>
                <Link to="/orders">
                  <li>Order History</li>
                </Link>
                <Link to="/settings">
                  <li>Settings</li>
                </Link>
                <li onClick={logoutUser}>Logout</li>
              </ul>
            </div>
          )}

          {!isLoggedIn ? (
            <div className="header__login">
              <Link to="/login">
                <span
                  className="header__loginText btn-anim btn btn-dark btn-main"
                  style={{ letterSpacing: "2px" }}>
                  Login
                </span>
              </Link>
            </div>
          ) : (
            <div className="header__login">
              <Link to="/" onClick={logoutUser}>
                <span
                  className="header__loginText btn-anim btn btn-dark btn-main"
                  style={{ letterSpacing: "2px" }}>
                  Logout
                </span>
              </Link>
            </div>
          )}

          <Link to="/cart" className="header__cart btn-anim">
            <ShoppingBasketIcon />
            <span className="header__cart-subText">{basket.length}</span>
          </Link>
        </nav>
      </div>

      <div className="header__side-nav">
        <div className="header__side-nav__container">
          {!isLoggedIn && (
            <div className="header__side-nav-upper-section">
              <div className="header__side-nav-upper-section-btns">
                <Link to="/login">
                  <button className="header__side-nav-button">Sign in</button>
                </Link>
                <Link to="/register">
                  <button className="header__side-nav-button">Sign up</button>
                </Link>
              </div>
            </div>
          )}
          <div className="header__side-nav-main-section">
            <Link
              to="/"
              className="header__side-nav-text"
              onClick={removeSideNav}>
              <span>Home</span>
            </Link>

            {isAdmin && (
              <Link
                to="/dashboard"
                className="header__side-nav-text"
                onClick={removeSideNav}>
                <span>Dashboard</span>
              </Link>
            )}

            <Link
              to="/menu"
              className="header__side-nav-text"
              onClick={removeSideNav}>
              <span>Menu</span>
            </Link>

            <Link
              onClick={removeSideNav}
              to="/order"
              className="header__side-nav-text header__side-nav-text-order">
              <span>Order Now !</span>
            </Link>

            {isLoggedIn && (
              <Link
                onClick={removeSideNav}
                to="/orders"
                className="header__side-nav-text">
                <span>Orders</span>
              </Link>
            )}

            <Link
              to="find-us"
              className="header__side-nav-text"
              onClick={removeSideNav}>
              <span>Location</span>
            </Link>

            <Link
              to="/about"
              className="header__side-nav-text"
              onClick={removeSideNav}>
              <span>About</span>
            </Link>

            {isLoggedIn && (
              <Link
                to="/settings"
                className="header__side-nav-text"
                onClick={removeSideNav}>
                <span>Settings</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
