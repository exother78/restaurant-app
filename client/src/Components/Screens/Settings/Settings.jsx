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
    </div>
  );
};

export default Settings;
