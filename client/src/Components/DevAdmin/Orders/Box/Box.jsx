import React, { useState, lazy, Suspense } from "react";
const ArrowForwardIosIcon = lazy(() =>
  import("@material-ui/icons/ArrowForwardIos")
);

const Box = () => {
  const [openBox, setOpenBox] = useState(false);
  const handleClick = () => {
    setOpenBox(!openBox);
    // const box = document.querySelector(".manageOrders__box-first-table");

    // box.style.background = "#ddd";
    // if (!openBox) box.style.background = "#ddd";
    // else box.style.background = "#eee";
    // openBox.style.display = "block";
    // const array = [
    //   4, 2, 892, 234, 235, 99815, 523, 5238, 358, 4562, 345, 63,   2, 67, 34,
    // ];
    // console.log(array.sort((a, b) => a - b));
    // const sortedArray = array.sort((a, b) => a - b);
    // console.log(sortedArray.join().replaceAll(",", " "));
    // const box = document.querySelector(".manageOrders__box");
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
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Asim Imam</th>
              <th style={{ textTransform: "lowercase" }}>admin@gmail.com</th>
              <th>Bellington Street </th>
              <th>522500</th>

              <th>
                <Suspense>
                  <ArrowForwardIosIcon
                    style={{
                      transform: openBox ? "rotate(90deg)" : "none",
                      transition: "transform .3s ease",
                    }}
                  />
                </Suspense>
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Pizza</th>
                <th>34</th>
                <th>with some extra cheese</th>
                <th>1</th>
              </tr>
              <tr>
                <th>Pizza</th>
                <th>34</th>
                <th>with some extra cheese</th>
                <th>1</th>
              </tr>
              <tr>
                <th>Pizza</th>
                <th>34</th>
                <th>with some extra cheese</th>
                <th>1</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Box;
