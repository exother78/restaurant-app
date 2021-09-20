import React, { useState } from "react";
import "./OrderTotal.css";
import { getBasketTotal } from "../../../reducer";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../../../StateProvider";
import { useHistory } from "react-router-dom";

const OrderTotal = () => {
  const history = useHistory();
  const state = useStateValue();
  const { userAPI } = useStateValue();
  const [postalCode, setPostalCode] = userAPI.postalCode;
  const [basket, setBasket] = state.basket;
  const [error, setError] = useState(null);

  const emptyBasket = () => {
    setBasket([]);
  };

  const checkoutClick = () => {
    if (basket.length > 0) {
      history.push("/checkout");
    }
  };

  if (error) {
    setTimeout(() => {
      setError(null);
    }, 2000);
  }

  return (
    <div className="order__right-section">
      <div className="order__right-section-content">
        <h2
          className="orderTotal__title"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}>
          {basket?.length} items in Cart
          <ShoppingBasketIcon
            style={{ color: "#d70f64", fontSize: "xx-large" }}
          />
        </h2>
        {basket?.map((item, i) => (
          <div key={i} className="order__total-list">
            <p className="order__total-title">{item.title}</p>
            <p className="order__total-price">{item.price}</p>
          </div>
        ))}
        <h3 className="order__total">
          <span> total </span>
          {getBasketTotal(basket)}
        </h3>
      </div>

      <button className="order__total-empty-button" onClick={emptyBasket}>
        Empty Cart
      </button>
      <button className="order__total-checkout-button" onClick={checkoutClick}>
        Checkout
      </button>
    </div>
  );
};

export default OrderTotal;
