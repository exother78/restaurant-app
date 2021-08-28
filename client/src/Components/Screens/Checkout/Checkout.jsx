import React, { useState } from "react";
import "./Checkout.css";
import { useStateValue } from "../../../StateProvider";
import CartProduct from "../Cart/Sections/CartProduct";
import { getBasketTotal } from "../../../reducer";
import axios from "axios";

const Checkout = () => {
  const state = useStateValue();
  const { userAPI } = useStateValue();
  const userID = userAPI.userID;
  const [basket, setBasket] = state.basket;
  const [address, setAddress] = useState("Gujranwala");
  const [street, setStreet] = useState("6");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleClick = async () => {
    console.log(userID);

    try {
      if (userID) {
        await axios
          .patch(`/api/user/updateorders/${userID}`, {
            orders: basket,
          })
          .then((response) => {
            setSuccess(response.data.message);
            setBasket([]);
          });
      }
    } catch (error) {
      console.log("something errorish came here");
      console.log(error);
      setError(error.response.data.error);
    }
  };

  return (
    <div className="checkout">
      {error && <div className="error__box">{error}</div>}
      {success && <div className="success__box">{success}</div>}

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
