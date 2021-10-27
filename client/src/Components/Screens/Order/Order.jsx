import React from "react";
import Product from "./Sections/Product";

import OrderTotal from "../Global/OrderTotal";
import { useStateValue } from "../../../StateProvider";

import Loading from "../Global/Loading";

const Order = () => {
  const { productsAPI, categoriesAPI } = useStateValue();
  const [categories] = categoriesAPI.categories;
  const [products] = productsAPI.products;

  document.addEventListener("scroll", (e) => {
    const banner = document.querySelector(".order__banner");
    const header = document.querySelector(".order__header");

    if (banner && header && window.scrollY > banner.clientHeight / 2.5 - 1) {
      header.style.position = "sticky";
    }
  });

  const func = () => {
    var arr = products.filter((item) => item.category === "antipasti");
    console.log("arr: ", arr);
  };

  if (!products) {
    return <Loading />;
  }

  return (
    <>
      <div className="order">
        <div className="order__banner">
          <img
            src="https://images.pexels.com/photos/3758133/pexels-photo-3758133.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt=""
          />
        </div>
        <div className="order__header">
          <div className="order__categories">
            {categories.map((category, i) => (
              <p className="order__category" key={i}>
                {category.name}
              </p>
            ))}
          </div>
        </div>
        <div className="order__allContainer">
          {categories?.map((item) => (
            <div className="order__container-category">
              <h2
                className="order__container-category-text"
                style={{ padding: "7px 0" }}>
                {item?.name}
              </h2>
              <img
                src={item?.images?.url}
                width="100%"
                height="150"
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>
          ))}

          {/* {products.map((p, i) => {
            return (
              <Product
                key={i}
                id={p.product_id}
                title={p.title}
                description={p.description}
                price={p.price}
                image={p.images.url}
              />
            );
          })} */}
          {/* <button onClick={func}>click to check</button> */}
        </div>
      </div>
      <div className="order__right-section-order">
        <OrderTotal />
      </div>
      {(!products || products.length === 0) && <Loading />}
    </>
  );
};

export default Order;
