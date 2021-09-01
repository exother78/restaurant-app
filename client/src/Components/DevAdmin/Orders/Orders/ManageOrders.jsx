import React, { useEffect, useState, lazy, Suspense } from "react";
import "./ManageOrders.css";
import { useStateValue } from "./../../../../StateProvider";
import axios from "axios";
import Loading from "../../../Screens/Global/Loading";
const OneUser = lazy(() => import("../User/OneUser"));

const ManageOrders = () => {
  const [error, setError] = useState(null);
  const { token } = useStateValue();
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const auth = {
        headers: { Authorization: `Bearer ${token[0]}` },
      };

      return await axios.get("/api/user/allorders", auth);
    } catch (error) {
      setError(error.response.data.error);
    }
  };
  useEffect(() => {
    if (token[0]) {
      getOrders().then((response) => {
        setOrders(response.data.orders);
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  if (error) {
    setTimeout(() => {
      setError(null);
    }, 2000);
  }

  return (
    <div className="manageOrders">
      {error && <div className="error__box">{error}</div>}
      <div className="manageOrders__container">
        {orders?.map((order, i) => (
          <React.Fragment key={i}>
            {order.orders.length > 0 && (
              <Suspense fallback={<Loading />}>
                <OneUser {...order} />
              </Suspense>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ManageOrders;
