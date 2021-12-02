import React, { useState, useEffect } from "react";
import "./Checkout.css";
import { useStateValue } from "../../../StateProvider";
import CartProduct from "../Cart/Sections/CartProduct";
import { getBasketTotal } from "../../../reducer";
import { Link } from "react-router-dom";

const Checkout = () => {
  const state = useStateValue();
  const { userAPI } = useStateValue();
  const [postalCode, setPostalCode] = userAPI.postalCode;
  const [basket] = state.basket;
  const [address, setAddress] = userAPI.address;
  const [street, setStreet] = userAPI.street;
  const [error, setError] = useState("");
  const [deferLoading, setDeferLoading] = useState(true);

  const postalCodeChange = (e) => {
    setPostalCode(e.target.value);
  };

  if (error) {
    setTimeout(() => {
      setError(null);
    }, 2000);
  }

  useEffect(() => {
    if (!postalCode || !address || !street || basket.length === 0) {
      setDeferLoading(true);
    }
    if (postalCode && address && street && basket.length > 0) {
      setDeferLoading(false);
    }
  }, [street, postalCode, basket, address, deferLoading]);

  return (
    <div className="checkout">
      {error && <div className="error__box">{error}</div>}

      <div
        className="errorShowPayment"
        style={{
          position: "relative",
          display: deferLoading ? "flex" : "none",
          justifyContent: "center",
          color: "red",
          fontWeight: "600",
          letterSpacing: ".7px",
          transition: "all .3s ease-in",
        }}>
        <p>* Please fill the Complete details to proceed payment </p>
      </div>
      <form>
        <div className="checkout__categories" style={{ marginTop: "20px" }}>
          <div className="checkout__category">
            <div className="checkout__category-title">
              <h2>Delivery Address</h2>
            </div>

            <div className="checkout__category-details">
              <div className="checkout__form-group">
                <label
                  htmlFor="address"
                  style={{ display: "flex", justifyContent: "space-between" }}>
                  Address
                  <span
                    className="checkout__form-group-span"
                    style={{
                      display: address?.length === 0 ? "block" : "none",
                    }}>
                    Enter Address*
                  </span>
                </label>

                <input
                  type="text"
                  name="address"
                  required
                  value={address ? address : ""}
                  placeholder="eg. Dusseldorf"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="checkout__form-group">
                <label htmlFor="street">
                  Enter Street No.
                  <span
                    className="checkout__form-group-span"
                    style={{
                      display: street?.length === 0 ? "block" : "none",
                    }}>
                    Enter Street*
                  </span>
                </label>
                <input
                  type="text"
                  name="street"
                  required
                  value={street ? street : ""}
                  placeholder="eg. street no.6 house no.1"
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>

              <div className="checkout__form-group">
                <label htmlFor="street">
                  Postal Code
                  <span
                    className="checkout__form-group-span"
                    style={{
                      display: postalCode?.length === 0 ? "block" : "none",
                    }}>
                    Enter Postal Code*
                  </span>
                </label>
                <input
                  type="text"
                  name="postalCode"
                  required
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
              <div className="checkout__payment-section">
                <h2>
                  Total
                  <span className="checkout__payment-section-total"></span>
                  {parseFloat(getBasketTotal(basket))?.toFixed(2)} €
                </h2>
              </div>
            </div>
          </div>

          <div className="checkout__proceedToPay">
            <Link className="checkout__proceedToPay-link" to="/paymentoptions">
              Proceed To Pay
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
