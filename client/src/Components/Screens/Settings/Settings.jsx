import React, { useState } from "react";
import { useStateValue } from "../../../StateProvider";
import Loading from "../Global/Loading";
import { Link } from "react-router-dom";
import "./Settings.css";

const Settings = () => {
  const { userAPI } = useStateValue();
  const userImage = userAPI.image;
  const firstName = userAPI.name;
  const lastName = userAPI.lastName;
  const userAddress = userAPI.userAddress;
  const userStreet = userAPI.userStreet;

  return (
    <div className="user__settings">
      <div className="user__settings-details">
        <div className="user__settings-details-image">
          {userImage ? <img src={userImage} alt="" /> : <Loading />}

          <h3>{firstName && lastName && firstName + " " + lastName}</h3>
        </div>
        <div className="sectionsOfUser">
          <p>
            <Link to="/orders">Your Orders</Link>
          </p>
          <p>
            <Link to="/order">Order Food Now</Link>
          </p>
          <p>
            <Link to="/menu">See Menu</Link>
          </p>
        </div>
      </div>

      <div className="user__settings-section">
        <div className="main__details">
          <div className="name">
            <p className="title">first name: </p>
            <p className="desc">{firstName && firstName}</p>
          </div>
          <div className="name">
            <p className="title">last name: </p>
            <p className="desc">{lastName && lastName}</p>
          </div>
          <div className="name">
            <p className="title">address: </p>
            <p className="desc">{userAddress && userAddress}</p>
          </div>

          <div className="name">
            <p className="title">street Address: </p>
            <p className="desc">{userStreet && userStreet}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
