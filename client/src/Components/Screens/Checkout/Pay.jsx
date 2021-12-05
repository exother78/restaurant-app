import React, { useState, useEffect } from "react";
import "./Pay.css";
import OrderTotal from "./../Global/OrderTotal";
import { useStateValue } from "../../../StateProvider";
import { getBasketTotal } from "../../../reducer";
import Paypal from "./Paypal/Paypal";
import axios from "axios";

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

    if (!address) {
      setError("Please enter your address to continue order");
    }
    // if (!userID) {
    //   setError("Please Login to continue");
    // }

    if (!postalCode) {
      setError("Please Enter your postal code to continue");
    }

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
            window.location.href = "/";
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
    console.log("cancelled: ", data);
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
    <div className="paymentOptions">
      {error && <div className="error__box">{error}</div>}
      <OrderTotal />

      <div
        className="paymentOptions-Paypal-btn"
        style={{
          width: "100%",
          padding: "10px",
          textAlign: "center",
        }}>
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
  );
};

export default Pay;
