import React, { useState } from "react";
import "../../../DevAdmin/Orders/Box/Box.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Box = ({ basket, postalCode, address, email, name, lastName }) => {
  const [openBox, setOpenBox] = useState(false);

  const handleClick = () => {
    setOpenBox(!openBox);
  };

  return (
    <>
      <div
        className="manageOrders__box"
        onClick={handleClick}
        style={{ userSelect: "none" }}>
        <table
          className="manageOrders__box-first-table"
          style={{ background: openBox ? "#ddd" : "#eee" }}>
          <thead>
            <tr>
              <td>name</td>
              <td>email</td>
              <td>address</td>
              <td>Postal Code</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{name + " " + lastName} </th>
              <th style={{ textTransform: "lowercase" }}>{email}</th>
              <th>{address} </th>
              <th>{postalCode}</th>

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
          // style={{ display: openBox ? "block" : "none" }}>
          style={{ maxHeight: openBox ? "400px" : "0" }}>
          <table className="manageOrders__box-second-table">
            <thead>
              <tr>
                <td>Items</td>
                <td>Price</td>
                <td>instructions</td>
                <td>Quantity</td>
              </tr>
            </thead>
            <tbody>
              {basket?.map((item, i) => (
                <tr key={i}>
                  <th>{item.title}</th>
                  <th>{item.price}</th>
                  <th>{item.description}</th>
                  <th>{item.quantity}</th>
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
