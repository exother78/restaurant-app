import React from "react";
import "./Order.css";
import Product from "./Sections/Product";
// import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
// import { useStateValue } from "../../StateProvider";
// import { getBasketTotal } from "../../reducer";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// import { Link, useHistory } from "react-router-dom";
import OrderTotal from "../Global/OrderTotal";
// import { axios } from "axios";
import { useStateValue } from "../../../StateProvider";
import Loading from "../Global/Loading";

const Order = () => {
  const { productsAPI, categoriesAPI } = useStateValue();
  const [categories] = categoriesAPI.categories;
  const [products] = productsAPI.products;

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const products = await axios.get("/api/products");
  //     } catch (err) {
  //       console.log("orderjsx: err: ", err);
  //     }
  //   };

  //   getProducts();
  // });

  // const history = useHistory();
  // const [{ basket }, dispatch] = useStateValue();

  // console.log(basket);

  document.addEventListener("scroll", (e) => {
    const banner = document.querySelector(".order__banner");
    const header = document.querySelector(".order__header");

    if (banner && header && window.scrollY > banner.clientHeight / 2.5 - 1) {
      header.style.position = "sticky";
    }
  });

  // const emptyBasket = () => {
  //   dispatch({
  //     type: "EMPTY_BASKET",
  //   });
  // };

  // const checkoutClick = () => {
  //   if (basket.length > 0) {
  //     history.push("/checkout");
  //   }
  // };

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
            {/* {(!categories || categories.length === 0) && <Loading />} */}

            {/* <p className="order__category">Sushi</p>
          <p className="order__category">Cake</p>
          <p className="order__category">Pizza</p>
          <p className="order__category">American</p>
          <p className="order__category">Asian</p>
          <p className="order__category">Burger</p> */}
          </div>
        </div>
        <div className="order__container">
          {/* <h2>
        <RestaurantMenuIcon className="restaurantMenuIcon" /> this is Order page
      </h2> */}
          {products.map((p, i) => {
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
          })}

          {/* {(!products || products.length === 0) && <Loading />} */}

          {/* <Product
          id="2234"
          title="Egg"
          description="Cucumber, tofu, sesame wasabi, chilli mayonnaise"
          price={23}
          image="https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        />
        <Product
          id="3432"
          title="Cake & honey"
          description="Cucumber, tofu, sesame wasabi, chilli mayonnaise"
          price={57}
          image="https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        />
        <Product
          id="4535"
          title="Mixed"
          description="Cucumber, tofu, sesame wasabi, chilli mayonnaise"
          price={89}
          image="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        />
        <Product
          id="5625"
          title="Salad"
          description="Cucumber, tofu, sesame wasabi, chilli mayonnaise"
          price={19}
          image="https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        />
        <Product
          id="6234"
          title="Fries & burger"
          description="Cucumber, tofu, sesame wasabi, chilli mayonnaise"
          price={59}
          image="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        />
        <Product
          id="7234"
          title="Sushi"
          description="Cucumber, tofu, sesame wasabi, chilli mayonnaise"
          price={99}
          image="https://images.pexels.com/photos/6984182/pexels-photo-6984182.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        />

        <Product
          id="7234"
          title="Burger"
          description="Cucumber, tofu, sesame wasabi, chilli mayonnaise"
          price={28}
          image="https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        />

        <Product
          id="7234"
          title="Pizza"
          description="Cucumber, tofu, sesame wasabi, chilli mayonnaise"
          price={100}
          image="https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        />

        <Product
          id="7234"
          title="Chinese"
          description="Cucumber, tofu, sesame wasabi, chilli mayonnaise"
          price={110}
          image="https://images.pexels.com/photos/3054690/pexels-photo-3054690.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        />

        <Product
          id="7234"
          title="Chinese Sea Food"
          description="Cucumber, tofu, sesame wasabi, chilli mayonnaise"
          price={30}
          image="https://images.pexels.com/photos/4993266/pexels-photo-4993266.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        />

        <Product
          id="7234"
          title="Roasted Chicken"
          description="Cucumber, tofu, sesame wasabi, chilli mayonnaise"
          price={70}
          image="https://images.pexels.com/photos/6163330/pexels-photo-6163330.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        />

        <Product
          id="7234"
          title="dabu"
          description="Cucumber, tofu, sesame wasabi, chilli mayonnaise"
          price={40}
          image="https://images.pexels.com/photos/6984182/pexels-photo-6984182.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        />

        <Product
          id="7234"
          title="Chicken Biryani"
          description="Cucumber, tofu, sesame wasabi, chilli mayonnaise"
          price={60}
          image="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        />

        <Product
          id="7234"
          title="Seekh kebab"
          description="Cucumber, tofu, sesame wasabi, chilli mayonnaise"
          price={20}
          image="https://images.pexels.com/photos/2689419/pexels-photo-2689419.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        />

        <Product
          id="7234"
          title="Nuggets"
          description="Cucumber, tofu, sesame wasabi, chilli mayonnaise"
          price={32}
          image="https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" */}
          {/* /> */}
        </div>
        <div className="order__right-section">
          <OrderTotal />
        </div>

        {/* <div className="order__right-section">
        <div className="order__right-section-content">
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}>
            {basket.length} items in Cart{" "}
            <ShoppingBasketIcon
              style={{ color: "#d70f64", fontSize: "xx-large" }}
            />
          </h2>
          {basket.map((item) => (
            <div className="order__total-list">
              <p className="order__total-title">{item.title}</p>
              <p className="order__total-price">{item.price}</p>
            </div>
          ))}
          <h3 className="order__total">
            <span> total </span>
            {getBasketTotal(basket)}
          </h3>
        </div>

        <button className="order__total-empty-button" onClick={emptyBasket}>
          Empty Cart
        </button>
        <button
          className="order__total-checkout-button"
          onClick={checkoutClick}>
          Checkout
        </button>
      </div> */}
      </div>
      {(!products || products.length === 0) && <Loading />}
    </>
  );
};

export default Order;
