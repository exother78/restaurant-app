import React from "react";
import "./Items.css";
import { useStateValue } from "../../../../StateProvider";
import ItemProduct from "./ItemsProduct/ItemProduct";
import Loading from "../../Global/Loading";
// import { FixedSizeList as List } from "react-window";
// import AutoSizer from "react-virtualized-auto-sizer";

const Items = () => {
  const { productsAPI } = useStateValue();
  const [products] = productsAPI.products;
  console.log("length: ", products.length);
  // const width = window.innerWidth;

  return (
    <>
      <div className="Items">
        <h1 className="items__title">Enjoy Your Meal Now!</h1>

        <div className="items__container">
          {products.map((p, i) => (
            <ItemProduct {...p} key={i} />
          ))}
        </div>
        {/* <div className="items__container"> */}

        {/* <List
          height={200}
          itemCount={1000}
          itemSize={35}
          width={width}
          layout="horizontal">
          {ItemProduct}
        </List> */}
      </div>
      {/* </div> */}

      {(!products || products.length === 0) && <Loading />}
    </>
  );
};

export default Items;
