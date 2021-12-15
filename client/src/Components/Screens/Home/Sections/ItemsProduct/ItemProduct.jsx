import React from "react";
import "./ItemProduct.css";
import { Link } from "react-router-dom";

const ItemProduct = ({ title, description, price, images }) => {
  return (
    <Link to="/order" className="item__main">
      <div className="item">
        <img
          src={
            // images.url && images.url.endsWith("jpg")
            //   ? images.url.replace("jpg", "webp")
            //   : images.url
            images?.url
          }
          alt=""
          className="item__image"
          loading="lazy"
        />

        <div className="item__text">
          <span className="item__title">{title && title}</span>
          <br />
          <span className="item__description">
            {description?.substr(0, 60)}...
          </span>

          <div className="item__price-rating">
            <span className="item__price">€ {price && price}</span>
            <span className="item__button">
              <button className="">Order Now!</button>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemProduct;
