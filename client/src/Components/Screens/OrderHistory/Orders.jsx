import React, { useEffect, useState } from "react";
import axios from "axios";
import { useStateValue } from "../../../StateProvider";
import Box from "./Box/Box";

const Orders = () => {
  const { userAPI } = useStateValue();
  const { userID } = userAPI;

  const [orders, setOrders] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (userID) {
      const func = async () => {
        try {
          await axios.get(`/api/user/getorders/${userID}`).then((response) => {
            // console.log("reponse.data: ", response.data);
            setOrders(response.data.orders);
          });
        } catch (error) {
          setError(error.response.data.error);
        }
      };

      func();
    }
  }, [userID]);

  return (
    <div>
      {error && <div className="error__box">{error}</div>}

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
