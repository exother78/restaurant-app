import React, { useState, useEffect } from "react";
import "./Box.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Box = ({ basket, postalCode, address, email, name, lastName, time }) => {
  const [date, setDate] = useState(null);
  const [openBox, setOpenBox] = useState(false);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (time) {
      const orderTime = new Date(time).getTime();
      const nowTime = new Date().getTime() - 60 * 60 * 1000;

      // console.log("time: ", new Date(time).toLocaleString());

      const compare = orderTime > nowTime;
      setPending(compare);

      setDate(new Date(time).toLocaleString());

      // setDate(
      //   new Date(time).toLocaleString("en-US", {
      //     day: "numeric",
      //     month: "numeric",
      //     year: "numeric",
      //   })
      // );
    }
  }, [time]);

  // console.log("this is pending: ", pending);

  const handleClick = () => {
    setOpenBox(!openBox);
  };

  return (
    <>
      <div className="manageOrders__box" onClick={handleClick}>
        <table
          className="manageOrders__box-first-table"
          style={{ background: openBox ? "#ddd" : "#eee" }}>
          <thead>
            <tr>
              <td>name</td>
              <td>email</td>
              <td>address</td>
              <td>Postal Code</td>
              <td>date</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{name + " " + lastName} </th>
              <th style={{ textTransform: "lowercase" }}>{email}</th>
              <th>{address} </th>
              <th>{postalCode}</th>
              <th style={{ fontSize: "12px", letterSpacing: ".2px" }}>
                {time ? date : ""}
              </th>

              <th>
                <ArrowForwardIosIcon
                  style={{
                    transform: openBox ? "rotate(90deg)" : "none",
                    transition: "transform .3s ease",
                  }}
                />
              </th>
            </tr>
          </tbody>
        </table>

        <div
          className="manageOrders__box-description"
          style={{ display: openBox ? "block" : "none" }}>
          <table className="manageOrders__box-second-table">
            <thead>
              <tr>
                <td>Items</td>
                <td>Price</td>
                <td>instructions</td>
                <td>Quantity</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {basket?.map((item, i) => (
                <tr key={i}>
                  <th>{item.title}</th>
                  <th>{item.price}</th>
                  <th>{item.description}</th>
                  <th>{item.quantity}</th>
                  <th>{pending ? "Pending" : "Delivered"}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Box;
