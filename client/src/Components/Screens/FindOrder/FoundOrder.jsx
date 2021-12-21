import React, { useEffect, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../Home/Sections/Footer";
import "./FoundOrder.css";

const FoundOrder = () => {
   const { orderNumber } = useParams();
   const [error, setError] = useState(null);
   const [order, setOrder] = useState({});

   const getOrder = useCallback(async () => {
      try {
         const data = await axios.get(`/api/findorder/${ orderNumber }`);
         setOrder(data.data.order);
      } catch (error) {
         setError(error.response.data.error);
      }
   }, [orderNumber]);

   useEffect(() => {
      getOrder();
   }, [getOrder]);

   if (error) {
      setTimeout(() => {
         setError(null);
      }, 2000);
   }

   return (
      <>
         <div className="order__success">
            {error && <div className="error__box">{error}</div>}
            <a href="/" className="order__success-back-link">
               Go back to home page
            </a>

            <div className="order__success-container">
               <h3>Order Found!</h3>
               <br />

               <div className="foundOrder__page-customerInfo">
                  <h4>Customer Information</h4>

                  <div className="foundOrder__page-customerInfo-text">
                     <p>
                        <b>Name</b>: {`${ order?.name } ${ order?.lastName }`}
                     </p>
                     <p>
                        <b>Address</b>: {order?.address}
                     </p>
                     <p>
                        <b>building</b>: {order?.building}
                     </p>
                  </div>

                  <p className="foundOrder__page-order">Your Order</p>

                  <table className="foundOrder__page-basket">
                     <thead>
                        <tr>
                           <th>Title</th>
                           <th>Quantity</th>
                           <th>Price</th>
                        </tr>
                     </thead>
                     <tbody>
                        {order?.basket?.map((item, i) => (
                           <tr key={i}>
                              <td>{item?.title}</td>
                              <td>{item?.quantity}</td>
                              <td>{item?.price}</td>
                           </tr>
                        ))}
                        <tr className="foundOrder__page-table-total">
                           <td colSpan={2}>Total</td>
                           <td>{order?.total}</td>
                        </tr>
                     </tbody>
                  </table>

                  <p className="foundOrder__page-delivery">
                     Delivery Fee: <span>{order?.deliveryCharges}</span>
                  </p>
                  <h3 className="foundOrder__page-total">
                     Total: <span>{order?.deliveryCharges ? (order?.total + order?.deliveryCharges) : order?.total}</span>
                  </h3>
                  <p className="inconvenience-msg">
                     Please call on this number for any kind of inconvenience or
                     information:  +39 059 3968633
                  </p>
               </div>
            </div>
         </div>
         <Footer />
      </>
   );
};

export default FoundOrder;
