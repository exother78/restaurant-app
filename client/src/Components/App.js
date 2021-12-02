import React, { lazy, Suspense, useEffect } from "react";
import * as PusherPushNotifications from "@pusher/push-notifications-web";
import "./App.css";
import Header from "./Screens/Header/Header";
import Login from "./Screens/Auth/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Screens/Home/Sections/Footer";
import Loading from "./Screens/Global/Loading";
import { useStateValue } from "../StateProvider";
import NotFound from "./Screens/Global/NotFound";
import AllProductsHeader from "./DevAdmin/Products/AllProductsHeader/AllProductsHeader";
import Home from "./Screens/Home/Home";
import Pay from "./Screens/Checkout/Pay";

const RegisteredUsers = lazy(() => import("./DevAdmin/users/RegisteredUsers"));
const Dashboard = lazy(() => import("./DevAdmin/Dashboard/Dashboard"));
const Location = lazy(() => import("./Screens/Location/Location"));
const Order = lazy(() => import("./Screens/Order/Order"));
const Cart = lazy(() => import("./Screens/Cart/Cart"));
const About = lazy(() => import("./Screens/About/About"));
const Orders = lazy(() => import("./Screens/OrderHistory/Orders"));
const Checkout = lazy(() => import("./Screens/Checkout/Checkout"));
const Settings = lazy(() => import("./Screens/Settings/Settings"));
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
const Reports = lazy(() => import("./DevAdmin/Reports/Reports"));

function App() {
  const { userAPI } = useStateValue();
  const [isAdmin] = userAPI.isAdmin;
  const { userID } = userAPI;

  useEffect(() => {
    if (isAdmin) {
      const beamsClient = new PusherPushNotifications.Client({
        instanceId: "db4a97cf-d521-4a2c-95ff-244e44360d69",
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
  }, [userID, isAdmin]);
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Route path="/dashboard/all_reservoirs">
            <Suspense fallback={<Loading />}>
              <Dashboard />
            </Suspense>
            <Suspense fallback={<Loading />}>
              <AllReservoirs />
            </Suspense>
          </Route> */}

          <Route path="/dashboard/reports">
            <Suspense fallback={<Loading />}>
              <Dashboard />
            </Suspense>
            <Suspense fallback={<Loading />}>
              <Reports />
            </Suspense>
          </Route>

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
              <>
                <Header /> <NotFound />
              </>
            )}
          </Route>

          <Route path="/paymentoptions">
            <Header />
            <Pay />
            <Footer />
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
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          </Route>

          <Route path="/order">
            <Header />
            <Suspense fallback={<Loading />}>
              <Order />
            </Suspense>
          </Route>

          <Route path="/settings">
            <Header />
            <Suspense fallback={<Loading />}>
              <Settings />
            </Suspense>
          </Route>

          <Route path="/orders">
            <Header />
            <Suspense fallback={<Loading />}>
              <Orders />
            </Suspense>
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
              <Footer />
            </Suspense>
          </Route>

          <Route path="/login">
            <Header />
            <Login />
            <Footer />
          </Route>

          <Route path="/find-us">
            <Header />
            <Suspense fallback={<Loading />}>
              <Location />
            </Suspense>
            <Footer />
          </Route>

          <Route path="/">
            <>
              <Header />

              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            </>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
