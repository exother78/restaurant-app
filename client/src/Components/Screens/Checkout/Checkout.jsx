import React, { useState } from "react";
import "./Checkout.css";
import { useStateValue } from "../../../StateProvider";
import CartProduct from "../Cart/Sections/CartProduct";
import { getBasketTotal } from "../../../reducer";
import axios from "axios";

const Checkout = () => {
  const state = useStateValue();
  const { userAPI } = useStateValue();
  const [postalCode, setPostalCode] = userAPI.postalCode;
  const { userID, email, lastName, name } = userAPI;
  const [basket, setBasket] = state.basket;
  const [address, setAddress] = useState("Gujranwala");
  const [street, setStreet] = useState("6");
  const [error, setError] = useState("");

  const handleClick = async () => {
    try {
      const time = new Date();
      if (userID) {
        if (postalCode) {
          if (basket.length > 0) {
            await axios
              .patch(`/api/user/updateorders/${userID}`, {
                orders: {
                  postalCode,
                  address,
                  email,
                  name,
                  lastName,
                  time,
                  userID,
                  basket,
                },
              })
              .then(() => {
                setBasket([]);
                window.location.href = "/";
              });
          }
        }
      }
      if (!postalCode) {
        setError("Please enter your postal code first");
      }
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  const postalCodeChange = (e) => {
    setPostalCode(e.target.value);
    localStorage.setItem("pcl", e.target.value);
  };

  if (error) {
    setTimeout(() => {
      setError(null);
    }, 2000);
  }

  return (
    <div className="checkout">
      {error && <div className="error__box">{error}</div>}

      <div className="checkout__categories">
        <div className="checkout__category">
          <div className="checkout__category-title">
            <h2>Delivery Address</h2>
          </div>

          <div className="checkout__category-details">
            <div className="checkout__form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                value={address}
                placeholder="Gujranwala"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="checkout__form-group">
              <label htmlFor="street">Enter Street No.</label>
              <input
                type="text"
                name="street"
                value={street}
                placeholder="street no.6 house no.1"
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>

            <div className="checkout__form-group">
              <label htmlFor="street">Enter Street No.</label>
              <input
                type="text"
                name="postalCode"
                value={postalCode ? postalCode : ""}
                placeholder="Postal Code"
                onChange={postalCodeChange}
              />
            </div>
          </div>
        </div>

        <div className="checkout__category">
          <div className="checkout__category-title">
            <h2>Review Items and Delivery</h2>
          </div>

          <div
            className="checkout__category-details"
            style={{ flexWrap: "wrap" }}>
            {basket?.map((item, i) => (
              <CartProduct {...item} removeID={i} key={i} />
            ))}
          </div>
        </div>

        <div className="checkout__category">
          <div className="checkout__category-title">
            <h2>Payment Methods</h2>
          </div>

          <div className="checkout__category-details">
            <div className="checkout__payment-section" style={{ width: "60%" }}>
              <h2 style={{ marginTop: "20px" }}>
                Total <span style={{ marginLeft: "20px" }}></span>{" "}
                {getBasketTotal(basket)} €
              </h2>
            </div>
          </div>
        </div>
        <button className="paythebill__btn" onClick={handleClick}>
          Pay the bill
        </button>
      </div>
    </div>
  );
};

export default Checkout;
