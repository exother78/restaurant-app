import React, { useEffect, useState, lazy, Suspense, useCallback } from "react";
import "./ManageOrders.css";
import { useStateValue } from "./../../../../StateProvider";
import axios from "axios";
import Loading from "../../../Screens/Global/Loading";
import NotFound from "../../../Screens/Global/NotFound";
const Box = lazy(() => import("./../Box/Box"));

const ManageOrders = () => {
  const { userAPI } = useStateValue();
  const [isAdmin] = userAPI.isAdmin;
  const [error, setError] = useState(null);
  const { token } = useStateValue();
  const [orders, setOrders] = useState([]);

  const getOrders = useCallback(async () => {
    try {
      const auth = {
        headers: { Authorization: `Bearer ${ token[0] }` },
      };

      const orderr = await axios.get("/api/user/allorders", auth);


      setOrders(orderr.data.orders.reverse());

      return orderr;
    } catch (error) {
      setError(error.response.data.error);
    }
  }, [token]);

  useEffect(() => {
    if (token[0]) {
      getOrders()


    }
  }, [token, getOrders]);

  // useEffect(() => {
  //   if (orders) {

  // console.log('sorted: ', orders.sort())

  // const u = orders.filter((item, i) => {
  //   return (
  //     parseInt(new Date(item.createdAt).getMonth()) + 1 ===
  //     12
  //   );
  // });

  // console.log('u: ', u)
  //   }
  // })

  if (error) {
    setTimeout(() => {
      setError(null);
    }, 2000);
  }

  if (!isAdmin) {
    return <NotFound />;
  }

  return (
    <div className="manageOrders">
      {error && <div className="error__box">{error}</div>}
      <div className="manageOrders__container">
        {/* <table
          className="manageOrders__box-first-table">
          <thead>
            <tr>
              <th>name</th>
              <th>Amount</th>
              <th>Payment</th>
              <th>Status</th>
              <th>date</th>
              <th></th>
            </tr>
          </thead>
        </table> */}
        {orders?.map((order, i) => (
          <React.Fragment key={i}>
            {order?.basket?.length > 0 && (
              <Suspense fallback={<Loading />}>
                <Box {...order} />
              </Suspense>
            )}
          </React.Fragment>
        ))}
      </div>

    </div >
  );
};

export default ManageOrders;
