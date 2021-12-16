import React, { useEffect, useState } from "react";
import axios from "axios";
import { useStateValue } from "../../../StateProvider";
import Box from "./Box/Box";
import "./Orders.css";

const Orders = () => {
  const { userAPI } = useStateValue();
  const { userID } = userAPI;

  const [orders, setOrders] = useState(null);
  const [error, setError] = useState("");
  const [pendingOrders, setPendingOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  useEffect(() => {
    if (userID) {
      const func = async () => {
        try {
          await axios.get(`/api/user/getorders/${userID}`).then((response) => {
            setOrders(response?.data?.orders);
          });
        } catch (error) {
          setError(error.response.data.error);
        }
      };

      func();
    }
  }, [userID]);

  console.log('date: ', new Date(Date.now()).getMonth())

  useEffect(() => {
    if (orders) {
      orders.forEach((item) => {
        const orderDate = new Date(item.time).valueOf() + 45 * 60 * 1000;
        if (new Date(orderDate) > new Date(Date.now())) {
          setPendingOrders((data) => [...data, item]);
          return;
        }

        if (new Date(Date.now()) > new Date(orderDate)) {
          setCompletedOrders((data) => [...data, item]);
          return;
        }
      });
    }
  }, [orders]);

  return (
    <div className="order__history">
      {error && <div className="error__box">{error}</div>}

      <div className="ordersHistory__front-boxes">
        <div className="orders__box">
          <p className="orders__box-text">
            <span className="orders__box-text-subText1">Pending Orders</span>
            <span className="orders__box-text-subText">
              {pendingOrders?.length > 0 ? pendingOrders?.length : "0"}
            </span>
          </p>
        </div>

        <div className="orders__box" style={{ background: "#15ff00" }}>
          <p className="orders__box-text">
            <span className="orders__box-text-subText1">Completed Orders</span>

            <span className="orders__box-text-subText">
              {completedOrders?.length > 0 ? completedOrders?.length : "0"}
            </span>
          </p>
        </div>

        <div className="orders__box" style={{ background: "red" }}>
          <p className="orders__box-text">
            <span className="orders__box-text-subText1">Cancelled Orders</span>

            <span className="orders__box-text-subText">1</span>
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
