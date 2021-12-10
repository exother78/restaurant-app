import React, { useState, useEffect } from "react";
import "./Pay.css";
import OrderTotal from "./../Global/OrderTotal";
import { useStateValue } from "../../../StateProvider";
import { getBasketTotal } from "../../../reducer";
import Paypal from "./Paypal/Paypal";
import axios from "axios";
import Footer from "../Home/Sections/Footer";

const Pay = () => {
  const state = useStateValue();
  const { userAPI, token } = useStateValue();
  const { email, lastName, name, phone } = userAPI;
  const { userID } = userAPI;
  const [basket, setBasket] = state?.basket;
  const [postalCode] = userAPI?.postalCode;
  const [address] = userAPI?.address;
  const [building] = userAPI?.building;
  const [checkPhone] = userAPI?.checkPhone;
  const [checkEmail] = userAPI?.checkEmail;
  const [checkName] = userAPI?.checkName;
  const [error, setError] = useState("");
  const [deferLoading, setDeferLoading] = useState(true);

  const transactionSuccess = async (data, e) => {
    e.preventDefault();
    const time = Date.now();

    if (postalCode && address && basket.length > 0) {
      try {
        await axios
          .post(
            "/api/user/createorder",
            {
              orders: {
                orderNumber: time + 1983,
                userID,
                postalCode,
                address,
                paymentID: data.orderID,
                building,
                basket,
                name: name ? name : checkName,
                email: email ? email : checkEmail,
                lastName,
                phone: phone ? phone : checkPhone,
                time,
                total: getBasketTotal(basket),
              },
            },
            {
              headers: {
                Authorization: `Bearer ${token[0]}`,
              },
            }
          )
          .then(() => {
            setBasket([]);
            // window.location.href = "/";
          });
      } catch (error) {
        setError(error.response.data.error);
      }
    }
  };

  const transactionError = async () => {
    setError("Transaction not successful");
  };

  const transactionCancel = async (data) => {
    setError("Cancelled Transaction");
  };

  useEffect(() => {
    if (!postalCode || !address || !building || basket.length === 0) {
      setDeferLoading(true);
    }
    if (postalCode && address && building && basket.length > 0) {
      setDeferLoading(false);
    }
    if (basket?.length === 0) setError("No items in the cart");
  }, [building, userID, postalCode, basket, address, deferLoading]);

  if (error) {
    setTimeout(() => {
      setError(null);
    }, 2000);
  }
  return (
    <>
      <div className="paymentOptions">
        {error && <div className="error__box">{error}</div>}
        <OrderTotal />

        <div className="paymentOptions-Paypal-btn">
          {/* <button
          onClick={(e) => transactionSuccess({ orderID: "something now" }, e)}
          style={{ padding: "10px 15px", margin: "10px" }}>
          Pay the bill
        </button> */}
          <Paypal
            total={parseFloat(getBasketTotal(basket)).toFixed(2)}
            onSuccess={transactionSuccess}
            onCancel={transactionCancel}
            onError={transactionError}
            setError={setError}
            loading={deferLoading}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pay;
