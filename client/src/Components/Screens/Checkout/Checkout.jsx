import React, { useState, useEffect } from "react";
import "./Checkout.css";
import { useStateValue } from "../../../StateProvider";
import CartProduct from "../Cart/Sections/CartProduct";
import { getBasketTotal } from "../../../reducer";
import axios from "axios";
import Paypal from "./Paypal/Paypal";

const Checkout = () => {
  const state = useStateValue();
  const { userAPI, token } = useStateValue();
  const [postalCode, setPostalCode] = userAPI.postalCode;
  const { email, lastName, name } = userAPI;
  const { userID } = userAPI;
  const [basket, setBasket] = state.basket;
  const [address, setAddress] = useState("");
  const [street, setStreet] = useState("");
  const [error, setError] = useState("");
  const [deferLoading, setDeferLoading] = useState(true);

  const transactionSuccess = async (data) => {
    const time = Date.now();

    try {
      if (!address) {
        setError("Please enter your address to continue order");
      }
      if (!userID) {
        setError("Please Login to continue");
      }

      if (!postalCode) {
        setError("Please Enter your postal code to continue");
      }
      if (userID && postalCode && address && basket.length > 0) {
        await axios
          .post(
            "/api/user/createorder",
            {
              orders: {
                orderNumber: time + 1983,
                userID,
                postalCode,
                address,
                street,
                basket,
                name,
                email,
                lastName,
                time,
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
      }
    } catch (error) {
      setError(error.response.data.error);
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

  const transactionError = async () => {
    setError("Transaction not successful");
  };

  const transactionCancel = async (data) => {
    console.log("cancelled: ", data);
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

  useEffect(() => {
    if (!userID || !postalCode || !address || !street || basket.length === 0) {
      setDeferLoading(true);
    }
    if (userID && postalCode && address && street && basket.length > 0) {
      setDeferLoading(false);
    }
  }, [street, userID, postalCode, basket, address, deferLoading]);

  return (
    <div className="checkout">
      {error && <div className="error__box">{error}</div>}
      <form>
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
                  required
                  value={address ? address : ""}
                  placeholder="eg. Dusseldorf"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="checkout__form-group">
                <label htmlFor="street">Enter Street No.</label>
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
                <label htmlFor="street">Postal Code</label>
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
              <div
                className="checkout__payment-section"
                style={{ width: "60%" }}>
                <h2 style={{ marginTop: "20px" }}>
                  Total <span style={{ marginLeft: "20px" }}></span>{" "}
                  {getBasketTotal(basket)} €
                </h2>
              </div>
            </div>
          </div>

          <button
            type="submit"
            onClick={(e) => e.preventDefault()}
            style={{ border: "none" }}>
            <Paypal
              total={getBasketTotal(basket)}
              onSuccess={transactionSuccess}
              onCancel={transactionCancel}
              onError={transactionError}
              setError={setError}
              loading={deferLoading}
            />
          </button>
          {/* </div> */}
          {/* <button className="paythebill__btn" onClick={transactionSuccess}>
            print the bill
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default Checkout;
