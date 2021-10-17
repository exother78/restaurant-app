import React from "react";
import Box from "./../Box/Box";

const OneUser = ({ orders }) => {
  return (
    <div style={{ margin: "20px 0" }}>
      {/* {orders?.length > 0 ? (
        orders?.map((order, i) => <Box {...order} key={i} />)
      ) : (
        <h1>No Orders Yet!</h1>
      )} */}

      <Box {...orders} />

      <hr
        style={{
          width: "80%",
          margin: "30px auto",
          background: "transparent",
          border: "none",
          borderBottom: "1px solid #ccc",
        }}
      />
    </div>
  );
};

export default OneUser;
