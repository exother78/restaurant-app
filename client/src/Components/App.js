import React from "react";
import "./App.css";
import Home from "./Screens/Home/Home";
import Header from "./Screens/Header/Header";
import Login from "./Screens/Auth/Login";
import Register from "./Screens/Auth/Register";
import MenuScreen from "./Screens/Menu/MenuScreen";
import Order from "./Screens/Order/Order";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Orders from "./Screens/OrderHistory/Orders";
import Settings from "./Screens/Settings/Settings";
import About from "./Screens/About/About";
import Location from "./Screens/Location/Location";
import Cart from "./Screens/Cart/Cart";
import Checkout from "./Screens/Checkout/Checkout";
import Logout from "./Screens/Logout/Logout";
import Footer from "./Screens/Home/Sections/Footer";
import NotFound from "./Screens/Global/NotFound";
import Loading from "./Screens/Global/Loading";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import { useStateValue } from "../StateProvider";
import CreateProdcut from "./DevAdmin/Products/CreateProdcut";
import CreateCategory from "./DevAdmin/Categories/CreateCategory";
import { useStateValue } from "../StateProvider";

// import axios from "axios";

function App() {
  const { userAPI, productsAPI } = useStateValue();
  const [products] = productsAPI.products;
  const [isAdmin] = userAPI.isAdmin;
  const [isLoggedIn] = userAPI.isLoggedIn;
  const name = userAPI.name;
  // const [isLoggedIn, setIsLoggedIn] = userAPI.isLoggedIn;
  // const [{ ttgat }, dispatch] = useStateValue();
  // const promise = loadStripe(
  //   "pk_test_51J6Q5PHxn87IRRbE3Ymuv1lBstLRFjXZgAdC56ClExGrn2spfchYnXsmclXkeJuvHIoPuqEycODE1HFf73mSVNY10005LySMuc"
  // );

  // const { userAPI } = useStateValue();

  // const { data } = userAPI;

  // const getUser = async (token) => {
  //   const firstLogin = localStorage.getItem("login");
  //   if (firstLogin) {
  //     const auth = {
  //       headers: { Authorization: `Bearer ${token.data.accessToken}` },
  //     };
  //     await axios.get("/api/private", auth).then((data) => {
  // console.log("app.js data : ", data.data);
  // dispatch({
  //   type: "SET_USER",
  //   user: data.data.user,
  // });
  //     });
  //   }
  // };

  // useEffect(() => {
  //   console.log("appjs: toekn: ", ttgat);
  // }, [ttgat]);

  // useEffect(() => {
  //   if (!user || !isLoggedIn) {
  //     try {
  //       const handler = async () => {
  //         const res = await axios.get("/api/user/rtfat");

  //         // setTimeout(() => {
  //         //   handler();
  //         // }, 30 * 1000);
  //       };

  //       handler();
  //     } catch (err) {
  //       console.log("app.js caught error: ", err);
  //     }
  //   } else {
  //     localStorage.removeItem("login");
  //   }
  // }, [user, isLoggedIn]);

  // console.log("app.js: User: ", user);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/logout">
            <Logout />
          </Route>

          <Route path="/create_product">
            {isAdmin ? (
              <>
                <Header />
                <CreateProdcut />
              </>
            ) : (
              <>
                <Header />
                <NotFound />
              </>
            )}
          </Route>

          <Route path="/create_category">
            <Header />
            <CreateCategory />
          </Route>

          <Route path="/checkout">
            <Header />
            {/* <Elements stripe={promise}> */}
            <Checkout />
            {/* </Elements> */}
          </Route>

          <Route path="/cart">
            <Header />
            <Cart />
          </Route>
          <Route path="/about">
            <Header />
            <About />
          </Route>

          <Route path="/order">
            <Header />
            <Order />
          </Route>

          <Route path="/settings">
            <Header />
            <Settings />
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/menu">
            <Header />
            <MenuScreen />
          </Route>

          <Route path="/register">
            <Header />
            <Register />
          </Route>

          <Route path="/login">
            <Header disable={false} />
            <Login />
          </Route>

          <Route path="/find-us">
            <Header />
            <Location />
            <Footer />
          </Route>

          <Route path="/">
            {products ? (
              <>
                <Header />
                <Home />
              </>
            ) : (
              <Loading />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
