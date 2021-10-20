import React, { lazy, Suspense, useEffect } from "react";
// import ReactGa from "react-ga";
import * as PusherPushNotifications from "@pusher/push-notifications-web";
// import { ClientOptions } from "@pusher/push-notifications-web";

// import axios from "axios";
import "./App.css";
import Home from "./Screens/Home/Home";
import Header from "./Screens/Header/Header";
import Login from "./Screens/Auth/Login";
// import Register from "./Screens/Auth/Register";
// import MenuScreen from "./Screens/Menu/MenuScreen";
// import Order from "./Screens/Order/Order";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Orders from "./Screens/OrderHistory/Orders";
import Settings from "./Screens/Settings/Settings";
import About from "./Screens/About/About";
// import Location from "./Screens/Location/Location";
// import Cart from "./Screens/Cart/Cart";
// import Checkout from "./Screens/Checkout/Checkout";
import Logout from "./Screens/Logout/Logout";
import Footer from "./Screens/Home/Sections/Footer";
import Loading from "./Screens/Global/Loading";
// import Pusher from "pusher-js";

// import CreateCategory from "./DevAdmin/Categories/CreateCategory";
import { useStateValue } from "../StateProvider";
import NotFound from "./Screens/Global/NotFound";
// import Dashboard from "./DevAdmin/Dashboard/Dashboard";
import AllProductsHeader from "./DevAdmin/Products/AllProductsHeader/AllProductsHeader";
// import AllReservoirs from "./DevAdmin/Reservoirs/AllReservoirs";
// import ManageOrders from "./DevAdmin/Orders/Orders/ManageOrders";
// import RegisteredUsers from "./DevAdmin/users/RegisteredUsers";
// import CreateProduct from "./DevAdmin/Products/CreateProduct";
// import AllProducts from "./DevAdmin/Products/Products/AllProducts";
// import RegisteredUsers from "./DevAdmin/users/RegisteredUsers";
// import Orders from "./DevAdmin/Orders/Orders/Orders";
const RegisteredUsers = lazy(() => import("./DevAdmin/users/RegisteredUsers"));
const Dashboard = lazy(() => import("./DevAdmin/Dashboard/Dashboard"));
const Location = lazy(() => import("./Screens/Location/Location"));
const Order = lazy(() => import("./Screens/Order/Order"));
const Cart = lazy(() => import("./Screens/Cart/Cart"));
const Checkout = lazy(() => import("./Screens/Checkout/Checkout"));
const CreateCategory = lazy(() =>
  import("./DevAdmin/Categories/CreateCategory")
);
const MenuScreen = lazy(() => import("./Screens/Menu/MenuScreen"));
const CreateProduct = lazy(() => import("./DevAdmin/Products/CreateProduct"));
const Register = lazy(() => import("./Screens/Auth/Register"));
const AllProducts = lazy(() =>
  import("./DevAdmin/Products/Products/AllProducts")
);
const PostalCodes = lazy(() =>
  import("./DevAdmin/ManagePostalCodes/PostalCodes")
);
const ManageOrders = lazy(() =>
  import("./DevAdmin/Orders/Orders/ManageOrders")
);
const DashboardHome = lazy(() => import("./DevAdmin/Dashboard/Home/Home"));
// import * as PusherPushNotifications from "@pusher/push-notifications-web";

function App() {
  const { userAPI } = useStateValue();

  // const [products] = productsAPI.products;
  // const [isLoggedIn] = userAPI.isLoggedIn;
  const [isAdmin] = userAPI.isAdmin;
  const { userID } = userAPI;

  // const getorders = async () => {
  //   if (isAdmin) {
  //     try {
  //       console.log("ran get orders");
  //       const auth = {
  //         headers: { Authorization: `Bearer ${token[0]}` },
  //       };

  //       await axios
  //         .get("/api/user/allorders", auth)
  //         .then((data) => console.log("data: ", data));
  //     } catch (error) {
  //       // setError(error.response.data.error);
  //       console.log("error: ", error.response.data);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   getorders();
  // });

  // var noti = new Notification("New Order", { body: "something added" });

  // console.log("noti: ", noti.onshow());
  // noti.onshow = (sh) => {
  //   console.log("soemthin to show: ", sh);

  //   console.log("something notificationist happened");
  // };

  // console.log("service: ", ServiceWorkerContainer);
  // console.log("something: happenening: ", navigator.serviceWorker.controller);
  // navigator.serviceWorker.register("/service-worker.js");
  // // console.log("navigator: ", navigator.serviceWorker.getRegistration());
  // navigator.serviceWorker
  //   .getRegistration()
  //   .then((data) => console.log("data: ", data));

  // navigator.serviceWorker.ready

  // console.log("controller: ", navigator.serviceWorker.onmessage());
  // navigator.serviceWorker.onmessage = () =>
  //   console.log("something gonna happen");
  // PusherPushNotifications.onNotificationReceived = ({ pushEvent, payload }) => {
  //   console.log("something:", payload);
  // };
  // console.log("pusherpush: ", PusherPushNotifications);

  // const func = async () => {
  //   return await fetch("http://localhost:5376/api/print/receipt", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  // };

  // useEffect(() => {
  //   Promise.resolve(func())
  //     .then((data) => data.json())
  //     .then((response) => console.log("this is fetched data: ", response));
  // });

  useEffect(() => {
    if (isAdmin) {
      const beamsClient = new PusherPushNotifications.Client({
        instanceId: "1e7b4671-5b27-48ae-bc5c-6cdb11b0a197",
      });

      beamsClient
        .start()
        .then(() => beamsClient.addDeviceInterest("hello_" + userID))
        .then(() => console.log("successfully registered and subscribed"))
        .catch((err) => {
          Notification.requestPermission();
          console.log("error: ", err);
        });
    }
  });

  // const notify = (message) => {
  //   var notification = new Notification("New Order!", {
  //     body: message,
  //   });

  //   notification.onClick = () => {
  //     window.open("www.google.com");
  //     window.location.href = "https://asims-restaurant.herokuapp.com";
  //   };

  //   setTimeout(notification.close.bind(notification), 1000 * 60 * 60);
  // };

  // const checkNotification = (message) => {
  //   if (Notification.permission === "granted") notify(message);

  //   if (Notification.permission !== "granted") {
  //     Notification.requestPermission((permission) => {
  //       if (permission === "granted") {
  //         notify();
  //       }
  //     });
  //   }
  // };

  // useEffect(() => {
  //   //   console.log("this is the admin id: ", userID);

  //   // console.log("navigator: ", navigator.serviceWorker.register("/sw.js"));
  //   // console.log('navigator: ', navigator.serviceWorker.controller)

  //   if (isAdmin) {
  //     // Pusher.logToConsole = true;

  //     const pusher = new Pusher("0c82d85a358b4a26fd15", {
  //       cluster: "ap2",
  //     });

  //     const channel = pusher.subscribe("hello_" + userID);
  //     channel.bind("inserted", (message) => {
  //       // console.log("message arrived: ", message);
  //       // alert(JSON.stringify(message));
  //     });

  //     // return () => {
  //     //   console.log("ran unbinde");
  //     //   channel.unbind_all();
  //     //   channel.unsubscribe();
  //     //   console.log("ran unbind again");
  //     // };
  //     checkNotification("this is the new order that you can never know");
  //   }

  // console.log("permission: ", Notification.permission);
  // });
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/logout">
            <Logout />
          </Route>

          {/* <Route path="/dashboard/all_reservoirs">
            <Suspense fallback={<Loading />}>
              <Dashboard />
            </Suspense>
            <Suspense fallback={<Loading />}>
              <AllReservoirs />
            </Suspense>
          </Route> */}

          <Route path="/dashboard/postalcodes">
            {isAdmin ? (
              <>
                <Suspense fallback={<Loading />}>
                  <Dashboard />
                </Suspense>
                <Suspense fallback={<Loading />}>
                  <PostalCodes />
                </Suspense>
              </>
            ) : (
              <>
                <Suspense fallback={<Loading />}>
                  <Header />
                </Suspense>
                <NotFound />
              </>
            )}
          </Route>

          <Route path="/dashboard/all_orders">
            {isAdmin ? (
              <>
                <Suspense fallback={<Loading />}>
                  <Dashboard />
                </Suspense>
                <Suspense fallback={<Loading />}>
                  <ManageOrders />
                </Suspense>
              </>
            ) : (
              <>
                <Suspense fallback={<Loading />}>
                  <Header />
                </Suspense>
                <NotFound />
              </>
            )}
          </Route>

          <Route path="/dashboard/all_users">
            {isAdmin ? (
              <>
                <Suspense fallback={<Loading />}>
                  <Dashboard />
                </Suspense>
                <Suspense fallback={<Loading />}>
                  <RegisteredUsers />
                </Suspense>
              </>
            ) : (
              <>
                <Suspense fallback={<Loading />}>
                  <Header />
                </Suspense>
                <NotFound />
              </>
            )}
          </Route>

          <Route path="/dashboard/products/create_product">
            {isAdmin ? (
              <>
                <Suspense fallback={<Loading />}>
                  <Dashboard />
                </Suspense>
                <AllProductsHeader />
                <Suspense fallback={<Loading />}>
                  <CreateProduct />
                </Suspense>
              </>
            ) : (
              <>
                <Header />
                <NotFound />
              </>
            )}
          </Route>

          <Route path="/dashboard/products">
            {isAdmin ? (
              <>
                <Suspense fallback={<Loading />}>
                  <Dashboard />
                </Suspense>
                <AllProductsHeader />
                <Suspense fallback={<Loading />}>
                  <AllProducts />
                </Suspense>
              </>
            ) : (
              <>
                <Suspense fallback={<Loading />}>
                  <Header />
                </Suspense>
                <NotFound />
              </>
            )}
          </Route>

          <Route path="/dashboard/create_category">
            {isAdmin ? (
              <>
                <Suspense fallback={<Loading />}>
                  <Dashboard />
                </Suspense>

                <Suspense fallback={<Loading />}>
                  <CreateCategory />
                </Suspense>
              </>
            ) : (
              <>
                <Suspense fallback={<Loading />}>
                  <Header />
                </Suspense>
                <NotFound />
              </>
            )}
          </Route>

          <Route path="/dashboard">
            {isAdmin ? (
              <Suspense fallback={<Loading />}>
                <Dashboard />
                <DashboardHome />
              </Suspense>
            ) : (
              // <Redirect to={{ pathname: "/login" }} />
              <>
                <Header /> <NotFound />
              </>
            )}
          </Route>

          <Route path="/checkout">
            <Header />

            <Suspense fallback={<Loading />}>
              <Checkout />
            </Suspense>
          </Route>

          <Route path="/cart">
            <Header />
            <Suspense fallback={<Loading />}>
              <Cart />
            </Suspense>
          </Route>
          <Route path="/about">
            <Header />

            <About />
          </Route>

          <Route path="/order">
            <Header />
            <Suspense fallback={<Loading />}>
              <Order />
            </Suspense>
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

            <Suspense fallback={<Loading />}>
              <MenuScreen />
            </Suspense>
          </Route>

          <Route path="/register">
            <Header />

            <Suspense fallback={<Loading />}>
              <Register />
            </Suspense>
          </Route>

          <Route path="/login">
            <Header disable={false} />
            <Login />
          </Route>

          <Route path="/find-us">
            <Header />
            <Suspense fallback={<Loading />}>
              <Location />
            </Suspense>
            <Footer />
          </Route>

          <Route path="/">
            {/* {!products ? (
              <Loading />
            ) : ( */}
            <>
              <Header />
              <Home />
            </>
            {/* )} */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
