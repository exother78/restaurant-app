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
import Loading from "./Screens/Global/Loading";

import CreateProdcut from "./DevAdmin/Products/CreateProdcut";
import CreateCategory from "./DevAdmin/Categories/CreateCategory";
import { useStateValue } from "../StateProvider";

function App() {
  const { productsAPI } = useStateValue();
  const [products] = productsAPI.products;
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/logout">
            <Logout />
          </Route>

          <Route path="/create_product">
            {/* {isAdmin ? (
              <>
                <Header />
                <CreateProdcut />
              </>
            ) : (
              <>
                <Header />
                <NotFound />
              </>
            )} */}

            <Header />
            <CreateProdcut />
          </Route>

          <Route path="/create_category">
            <Header />
            <CreateCategory />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
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
            {!products ? (
              <Loading />
            ) : (
              <>
                <Header />
                <Home />
              </>
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
