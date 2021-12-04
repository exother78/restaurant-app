import React, { useState, useEffect } from "react";
import "./Checkout.css";
import { useStateValue } from "../../../StateProvider";
import CartProduct from "../Cart/Sections/CartProduct";
import { getBasketTotal } from "../../../reducer";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Checkout = () => {
  const state = useStateValue();
  const { userAPI } = useStateValue();
  const [postalCode, setPostalCode] = userAPI.postalCode;
  const [basket] = state.basket;
  const [address, setAddress] = userAPI.address;
  const [building, setBuilding] = userAPI.building;
  const [checkEmail, setCheckEmail] = userAPI.checkEmail;
  const [checkName, setCheckName] = userAPI.checkName;
  const [checkPhone, setCheckPhone] = userAPI.checkPhone;

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
    if (!postalCode || !address || !building || basket.length === 0) {
      setDeferLoading(true);
    }
    if (postalCode && address && building && basket.length > 0) {
      setDeferLoading(false);
    }
  }, [building, postalCode, basket, address, deferLoading]);

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
                <label htmlFor="building">
                  Enter Building name or Apartment, floor
                  <span
                    className="checkout__form-group-span"
                    style={{
                      display: building?.length === 0 ? "block" : "none",
                    }}>
                    Enter Building, floor*
                  </span>
                </label>
                <input
                  type="text"
                  name="building"
                  required
                  value={building ? building : ""}
                  placeholder="eg. building #01 floor 2, flat 34"
                  onChange={(e) => setBuilding(e.target.value)}
                />
              </div>

              <div className="checkout__form-group">
                <label htmlFor="postalCode">
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

              <div className="checkout__form-group">
                <label htmlFor="checkName">
                  Full Name
                  <span
                    className="checkout__form-group-span"
                    style={{
                      display: checkName?.length === 0 ? "block" : "none",
                    }}>
                    Enter Full Name*
                  </span>
                </label>
                <input
                  type="text"
                  name="checkName"
                  required
                  value={checkName ? checkName : ""}
                  placeholder="Full Name"
                  onChange={(e) => setCheckName(e.target.value)}
                />
              </div>
              <div className="checkout__form-group">
                <label htmlFor="checkEmail">
                  Email
                  <span
                    className="checkout__form-group-span"
                    style={{
                      display: checkEmail?.length === 0 ? "block" : "none",
                    }}>
                    Enter Email*
                  </span>
                </label>
                <input
                  type="text"
                  name="checkEmail"
                  required
                  value={checkEmail ? checkEmail : ""}
                  placeholder="Postal Code"
                  onChange={(e) => setCheckEmail(e.target.value)}
                />
              </div>
              <div className="checkout__form-group">
                <label htmlFor="checkPhone">
                  Phone Number
                  <span
                    className="checkout__form-group-span"
                    style={{
                      display: checkPhone?.length === 0 ? "block" : "none",
                    }}>
                    Enter Your Phone Number*
                  </span>
                </label>
                <input
                  type="text"
                  name="checkPhone"
                  required
                  value={checkPhone ? checkPhone : ""}
                  placeholder="Phone Number"
                  onChange={(e) => setCheckPhone(e.target.value)}
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

          <button
            type="button"
            onClick={(e) => e.preventDefault()}
            className="checkout__proceedToPay">
            <Link className="checkout__proceedToPay-link" to="/paymentoptions">
              Proceed To Pay
              <span>
                <ArrowForwardIosIcon />
              </span>
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
