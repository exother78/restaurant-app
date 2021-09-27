import React, { useState, useEffect, useCallback } from "react";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { Link } from "react-router-dom";
import { useStateValue } from "../../../StateProvider";
import axios from "axios";

// import image from "../../Images/my.jpeg";
import avatar from "../../Images/avatar.png";
import arrow from "../../Images/chevron-down-solid.svg";
import Bars from "./HeaderComponents/Bars";

const Header = ({ dashboard }) => {
  const state = useStateValue();

  const [isLoggedIn] = state.userAPI.isLoggedIn;
  const [isAdmin] = state.userAPI.isAdmin;
  const userImage = state.userAPI.image;
  const name = state.userAPI.name;
  const [avatarOpen, setAvatarOpen] = useState(false);
  const [basket] = state.basket;
  const [y, setY] = useState(window.scrollY);
  const [displayMobileCartButton, setDisplayMobileCartButton] = useState(true);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        // console.log("scrolling up");
        setDisplayMobileCartButton(true);
      } else if (y < window.scrollY) {
        // console.log("scrolling down");
        setDisplayMobileCartButton(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);
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
    // const sideNav = document.querySelector(".header__side-nav");

    let sideNav;

    if (dashboard) {
      sideNav = document.querySelector(".dashboard");
    }

    if (!dashboard) {
      sideNav = document.querySelector(".header__side-nav");
    }

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

    let sideNav;

    if (dashboard) {
      sideNav = document.querySelector(".dashboard");
    }
    if (!dashboard) {
      sideNav = document.querySelector(".header__side-nav");
    }

    // const sideNav = document.querySelector(".header__side-nav");
    if (sideNav && bars.classList.value.includes("bars-opened") && bars) {
      bars.classList.remove("bars-opened");

      sideNav.style.left = "-100%";
    }
  };

  const logoutUser = async () => {
    try {
      await axios.get("/api/user/logout");
      localStorage.removeItem("login");
      localStorage.removeItem("pcl");
      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <div className="Header">
      <div className="header__container">
        <Bars handleBarsClick={handleBarsClick} />
        {/* <div className="bars">
          <div className="header__bars" onClick={handleBarsClick}>
            <div className="header__bar"></div>
          </div>
        </div> */}

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
                <span className="text header__user-nav-text">Hi, {name}</span>
                <img src={arrow} alt="" className="avatar__arrow" />
              </div>
              <ul
                className="avatar__list"
                style={{
                  display: !avatarOpen ? "none" : "block",
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

      <div
        className="header__mobile__cart-btn"
        // style={{ display: displayMobileCartButton ? "block" : "none" }}
        style={{ maxHeight: displayMobileCartButton ? "70px" : "0" }}>
        <button>
          <Link to="/cart">
            <ShoppingBasketIcon style={{ marginRight: "20px" }} />
            Go to Cart
          </Link>
          <span className="header__mobile__cart-btn-length">
            {basket.length}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
