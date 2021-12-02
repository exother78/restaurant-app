import React, { useEffect, useState } from "react";
import axios from "axios";
import { useStateValue } from "../../../StateProvider";
import Box from "./Box/Box";

const Orders = () => {
  const { userAPI } = useStateValue();
  const { userID } = userAPI;

  const [orders, setOrders] = useState(null);
  const [error, setError] = useState("");
  const [pendingOrders, setPendingOrders] = useState(null);

  // const s = 5.43;
  // console.log("number : ", parseFloat(s).toFixed(2));

  useEffect(() => {
    if (userID) {
      const func = async () => {
        try {
          await axios.get(`/api/user/getorders/${userID}`).then((response) => {
            setOrders(response?.data?.orders);
            console.log("orders: ", response?.data?.orders);
          });
        } catch (error) {
          setError(error.response.data.error);
        }
      };

      func();
    }
  }, [userID]);

  useEffect(() => {
    if (orders) {
      orders?.forEach((item) => {
        if (new Date(item.time) > Date.now()) {
          console.log("order is pending");
          return;
        }
      });
    }
  });

  return (
    <div>
      {error && <div className="error__box">{error}</div>}

      <div
        className="ordersHistory__front-boxes"
        style={{
          display: "flex",
          width: "100%",
          minHeight: "400px",
          flexWrap: "wrap",
          marginTop: "30px",
        }}>
        <div
          className="orders__pending-box"
          style={{
            background: "#FCCD0F",
            flex: "1 1 30%",
            margin: "0 5px",
            minWidth: "300px",
            height: "60%",
            minHeight: "300px",
            maxHeight: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <p
            style={{
              color: "white",
              fontFamily: "Montserrat",
              textAlign: "center",
            }}>
            <span style={{ fontFamily: "Montserrat" }}>Pending Orders</span>
            <br />
            <span
              style={{
                fontSize: "xx-large",
                textAlign: "center",
                padding: "10px",
              }}>
              2
            </span>
          </p>
        </div>

        <div
          className="orders__completed-box"
          style={{
            background: "green",
            flex: "1 1 30%",
            margin: "0 5px",
            minWidth: "300px",
            height: "60%",
            minHeight: "300px",
            maxHeight: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <p
            style={{
              color: "white",
              fontFamily: "Montserrat",
              textAlign: "center",
            }}>
            <span style={{ fontFamily: "Montserrat" }}>Completed Orders</span>
            <br />
            <span
              style={{
                fontSize: "xx-large",
                textAlign: "center",
                padding: "10px",
              }}>
              0
            </span>
          </p>
        </div>

        <div
          className="orders__cancelled-box"
          style={{
            background: "red",
            flex: "1 1 30%",
            margin: "0 5px",
            minWidth: "300px",
            height: "60%",
            minHeight: "300px",
            maxHeight: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <p
            style={{
              color: "white",
              fontFamily: "Montserrat",
              textAlign: "center",
            }}>
            <span style={{ fontFamily: "Montserrat" }}>Cancelled Orders</span>
            <br />
            <span
              style={{
                fontSize: "xx-large",
                textAlign: "center",
                padding: "10px",
              }}>
              1
            </span>
          </p>
        </div>
      </div>

      {orders?.length > 0 ? (
        orders?.map((order, i) => <Box {...order} key={i} />)
      ) : (
        <h1 style={{ color: "red", margin: "30px", letterSpacing: "1.2px" }}>
          You don't have any Orders yet!
        </h1>
      )}
    </div>
  );
};

export default Orders;
