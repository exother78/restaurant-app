import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "./Product.css";
import { useStateValue } from "../../../../StateProvider";

const Product = ({ id, title, description, price, image }) => {
  // const [, dispatch] = useStateValue();

  const state = useStateValue();
  const [basket, setBasket] = state.basket;

  const addToBasket = (e) => {
    setBasket([
      ...basket,
      {
        id,
        title,
        description,
        price,
        image,
      },
    ]);
    // dispatch({
    //   type: "ADD_TO_BASKET",
    //   item: {
    //     id,
    //     title,
    //     description,
    //     price,
    //     image,
    //   },
    // });
  };

  return (
    <div className="product">
      {title && (
        <div className="product__container">
          <div className="product__left-section">
            <h3 className="product__title">{title}</h3>
            <p className="product__details">{description}</p>

            <div className="product__price">
              Rs. <span className="product__price-subText">{price}</span>
            </div>
          </div>
          <div className="product__right-section">
            <img className="product__image" src={image} alt="" />

            <button className="product__add-button" onClick={addToBasket}>
              <AddIcon className="addIcon" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
