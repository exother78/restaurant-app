import React, { useState, useEffect } from "react";
import "./Pay.css";
import Paypal from "./Paypal/Paypal";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import OrderTotal from "./../Global/OrderTotal";
import { useStateValue } from "../../../StateProvider";
import { getBasketTotal } from "../../../reducer";
import Footer from "../Home/Sections/Footer";

const Pay = () => {
  const navigate = useNavigate()
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
  const [data] = userAPI.postalData
  const [paymentOption] = userAPI.paymentOption
  const [deliveryOption] = userAPI.deliveryOption
  const [error, setError] = useState("");
  const [deferLoading, setDeferLoading] = useState(true);
  const [totalWithDelivery, setTotalWithDelivery] = useState(null)

  console.log('delivery option: ', deliveryOption)


  useEffect(() => {
    setTotalWithDelivery((parseFloat(getBasketTotal(basket)) + parseFloat(data?.deliveryPrice)))
  }, [basket, data?.deliveryPrice])

  const transactionSuccess = async (paymentData) => {
    const time = Date.now() + 1983;
    try {

      await axios
        .post(
          "/api/user/createorder",
          {
            orders: {
              orderNumber: time,
              userID,
              postalCode,
              address,
              paymentID: paymentData.orderID,
              building,
              basket,
              name: name ? name : checkName,
              email: email ? email : checkEmail,
              lastName,
              phone: phone ? phone : checkPhone,
              time, total: getBasketTotal(basket),
              deliveryCharges: data?.deliveryPrice, deliveryOption, paymentOption, paymentStatus: 'received'
            },
          },
          {
            headers: {
              Authorization: `Bearer ${ token[0] }`,
            },
          }
        )
        .then(() => {
          setBasket([]);
          navigate(`/checkout/ordersuccess/${ time }`)
        });
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  const transactionSuccessTakeaway = async (paymentData) => {

    const time = Date.now() + 1983;
    try {

      await axios
        .post(
          "/api/user/createorder",
          {
            orders: {
              orderNumber: time,
              userID,
              paymentID: paymentData.orderID,
              basket,
              name: name ? name : checkName,
              email: email ? email : checkEmail,
              lastName,
              phone: phone ? phone : checkPhone,
              time, total: getBasketTotal(basket),
              deliveryOption, paymentOption, paymentStatus: 'received'
            },
          },
          {
            headers: {
              Authorization: `Bearer ${ token[0] }`,
            },
          }
        )
        .then(() => {
          setBasket([]);
          navigate(`/checkout/ordersuccess/${ time }`)
        });
    } catch (error) {
      setError(error.response.data.error);
    }
  }

  const transactionError = async () => {
    setError("Transaction not successful");
  };

  const transactionCancel = async (data) => {
    setError("Cancelled Transaction");
  };


  useEffect(() => {
    if (
      !postalCode ||
      !address ||
      !building ||
      !checkName ||
      !checkEmail ||
      !checkPhone || parseFloat(getBasketTotal(basket))?.toFixed(2) < parseFloat(deliveryOption === 'takeaway' ? '10' : data?.minOrder) ||
      basket.length === 0
    ) {
      setDeferLoading(true);
    }
    if (
      postalCode &&
      address &&
      building &&
      checkName &&
      checkEmail &&
      checkPhone &&
      parseFloat(getBasketTotal(basket))?.toFixed(2) >= parseInt(deliveryOption === 'takeaway' ? '10' : data?.minOrder) &&
      basket.length > 0
    ) {
      setDeferLoading(false);
    }
    if (basket?.length === 0) setError("No items in the cart");
  }, [building, postalCode, basket, address, deferLoading, checkName, checkEmail, checkPhone, data?.minOrder, deliveryOption]);


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
          <button
            onClick={(e) => transactionSuccess({ orderID: "something now" }, e)}
            style={{ padding: "10px 15px", margin: "10px" }}>
            Pay the bill
          </button>
          <Paypal
            total={deliveryOption === 'takeaway' ? getBasketTotal(basket) : totalWithDelivery}
            onSuccess={deliveryOption === 'homedelivery' ? transactionSuccess : transactionSuccessTakeaway}
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
