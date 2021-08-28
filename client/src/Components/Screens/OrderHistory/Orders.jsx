import React, { useEffect, useState } from "react";
import axios from "axios";
import { useStateValue } from "../../../StateProvider";

const Orders = () => {
  const { userAPI } = useStateValue();
  const userID = userAPI.userID;
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (userID) {
      const func = async () => {
        try {
          await axios.get(`/api/user/getorders/${userID}`).then((response) => {
            console.log("data: ", response.data.orders[0].orders);

            setOrders(response.data);
          });
        } catch (error) {
          console.log("error: ", error.response.data);
          setError(error.response.data.error);
        }
      };

      func();
    }
  }, [userID]);

  return (
    <div>
      {error && <div className="error__box">{error}</div>}

      <div className="ordersHistory">
        <div className="orderHistory__container"></div>
      </div>

      {!orders ? (
        <h1 style={{ color: "red", margin: "30px", letterSpacing: "1.2px" }}>
          You don't have any Orders yet!
        </h1>
      ) : (
        <h1>something</h1>
      )}
    </div>
  );
};

export default Orders;
