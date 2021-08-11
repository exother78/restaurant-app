import React from "react";
import { useStateValue } from "../../../StateProvider";
// import Product from "./Order-Components/Product";
import CartProduct from "./Sections/CartProduct";
import "./Cart.css";
import OrderTotal from "../Global/OrderTotal";

const Cart = () => {
  // const [{ basket }] = useStateValue();

  // const [basketItems, setBasketItems] = useState([]);

  const state = useStateValue();
  const [basket] = state.basket;

  // useEffect(() => {
  //   return () => {
  //     setBasketItems(basket);
  //   };
  // }, [basket]);
  return (
    <div className="cart">
      <div className="cart__container">
        {basket?.length === 0 ? (
          <h1 style={{ color: "red", marginLeft: "40px" }}>
            Your cart is empty!
          </h1>
        ) : (
          basket?.map((item, i) => (
            <CartProduct {...item} removeID={i} key={i} />
          ))
        )}
      </div>

      <div className="cart__right-section">
        <OrderTotal />
      </div>

      {/* {basket ? (
        basket.map((item) => {
          return <Product {...item} />;
        })
      ) : (
        <h1 style={{ color: "red" }}>Your cart is empty!</h1>
      )} */}
      {/* {basket ?
      <h1>This is Cart Component</h1>
      {basket.map((item) => {
        console.log(item);
        return <Product {...item} />;
      })}
      :
      <h1 style={{'color': 'red'}}>Your cart is empty!</h1>
    } */}
    </div>
  );
};

export default Cart;
