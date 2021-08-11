import React from "react";
import "./CartProduct.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { useStateValue } from "../../../../StateProvider";

const CartProduct = ({ id, title, description, price, image, removeID }) => {
  // const [, dispatch] = useStateValue();
  const state = useStateValue();
  const [basket, setBasket] = state.basket;

  const removeItem = () => {
    // dispatch({
    //   type: "REMOVE_FROM_BASKET",
    //   removeIndex: removeID,
    // });

    basket.splice(removeID, 1);

    setBasket([...basket]);
  };

  return (
    <div className="cart__product">
      <div className="cart__product-container">
        <div className="cart__product-image-container">
          <img src={image} alt="" className="cart__product-image" />
        </div>
        <div className="cart__product-text-section">
          <h3 className="cart__product-title">{title}</h3>
          <div className="cart__product-price-incre">
            <p className="cart__product-price">€ {price}</p>
            <button className="cart__product-incre" onClick={removeItem}>
              <DeleteIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
