import React from "react";
// import "./PostalCodes.css";

const PostalCodes = () => {
  return (
    <div className="manage__postalCodes">
      <div className="postalCode__box">
        <table>
          <thead>
            <tr>
              <th>Postal Code</th>
              <th>Min Order</th>
              <th>Delivery Price</th>
              <th>Estimated Time</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>52250</td>
              <td>20</td>
              <td>10</td>
              <td>35</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostalCodes;
