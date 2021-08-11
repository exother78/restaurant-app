import React, { useState } from "react";
import "./Checkout.css";
import { useStateValue } from "../../../StateProvider";
import CartProduct from "../Cart/Sections/CartProduct";
// import { CardElement } from "@stripe/react-stripe-js";
import { getBasketTotal } from "../../../reducer";

const Checkout = () => {
  // const [{ basket }] = useStateValue();
  const state = useStateValue();
  const [basket] = state.basket;
  const [address, setAddress] = useState("Gujranwala");
  const [street, setStreet] = useState("6");

  return (
    <div className="checkout">
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
              {/* <CardElement style={{ width: "60%" }} /> */}
              <h2 style={{ marginTop: "20px" }}>
                Total <span style={{ marginLeft: "20px" }}></span>{" "}
                {getBasketTotal(basket)} €
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
