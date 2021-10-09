import React, { useState } from "react";
import "./Checkout.css";
import { useStateValue } from "../../../StateProvider";
import CartProduct from "../Cart/Sections/CartProduct";
import { getBasketTotal } from "../../../reducer";
import axios from "axios";
import Paypal from "./Paypal/Paypal";

const Checkout = () => {
  const state = useStateValue();
  const { userAPI } = useStateValue();
  const [postalCode, setPostalCode] = userAPI.postalCode;
  const { userID, email, lastName, name } = userAPI;
  const [basket, setBasket] = state.basket;
  const [address, setAddress] = useState("");
  const [street, setStreet] = useState("");
  const [error, setError] = useState("");

  const transactionSuccess = async (data) => {
    const time = Date.now();
    console.log("time: ", time + 23);
    if (userID && postalCode && address && basket.length > 0) {
      console.log("this is data: ", data);
      try {
        await axios
          .post("/api/users/createorder", {
            orders: {
              orderNumber: time,
              userID,
              postalCode,
              address,
              basket,
              // time,
            },
          })
          .then((data) => {
            setBasket([]);
            // window.location.href = "/";
            console.log("created order data: ", data.data.msg);
          });
      } catch (error) {
        setError(error.response.data.error);
      }
    }

    if (!address) {
      setError("Please enter your address to continue order");
    }
    if (!userID) {
      setError("Please Login to continue");
    }

    if (!postalCode) {
      setError("Please Enter your postal code to continue");
    }
  };

  // const transactionSuccesss = async (data) => {
  //   try {
  //     const time = new Date();
  //     if (userID) {
  //       if (postalCode) {
  //         if (basket.length > 0) {
  //           console.log("transaction Success: ", data);
  //           await axios
  //             .patch(`/api/user/updateorders/${userID}`, {
  //               orders: {
  //                 postalCode,
  //                 address,
  //                 email,
  //                 name,
  //                 lastName,
  //                 time,
  //                 userID,
  //                 basket,
  //               },
  //             })
  //             .then(() => {
  //               setBasket([]);
  //               window.location.href = "/";
  //             });
  //         }
  //       }
  //     }
  //     if (!postalCode) {
  //       setError("Please enter your postal code first");
  //     }
  //   } catch (error) {
  //     setError(error.response.data.error);
  //   }
  // };

  // const getPrint = async () => {
  //   try {
  //     const d = await axios.get("/api/print");
  //     console.log("this is all data: ", d);
  //   } catch (error) {
  //     console.log("this is error response: ", error.response.data.error);
  //   }
  //   console.log("print is done right, Shahid");
  // };

  const transactionError = async (data) => {
    console.log("Error Transaction: ", data);
  };

  const transactionCancel = async (data) => {
    console.log("cancelled: ", data);
  };

  const postalCodeChange = (e) => {
    setPostalCode(e.target.value);
    localStorage.setItem("pcl", e.target.value);
  };

  // console.log("address: ", address);
  // console.log("street: ", street);

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
                placeholder="eg. Dusseldorf"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="checkout__form-group">
              <label htmlFor="street">Enter Street No.</label>
              <input
                type="text"
                name="street"
                value={street}
                placeholder="eg. street no.6 house no.1"
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>

            <div className="checkout__form-group">
              <label htmlFor="street">Postal Code</label>
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

        <Paypal
          total={getBasketTotal(basket)}
          onSucccess={transactionSuccess}
          onCancel={transactionCancel}
          onError={transactionError}
        />
        <button className="paythebill__btn" onClick={transactionSuccess}>
          print the bill
        </button>
        {/* <Paypal
          transactionSuccess={transactionSuccess}
          transactionError={transactionError}
          transactionCancel={transactionCancel}
          total={getBasketTotal(basket)}
          something="something else"
        /> */}
        {/* Payment Button */}
      </div>
    </div>
  );
};

export default Checkout;
