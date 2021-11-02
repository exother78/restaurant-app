import React, { Suspense, lazy } from "react";
import "./Home.css";

// Sections
// import SlideFront from "./Sections/SlideFront";
import Footer from "./Sections/Footer";
import Loading from "../Global/Loading";

const Menu = lazy(() => import("./Sections/Menu"));
const ReserveSeat = lazy(() => import("./Sections/ReserveSeat"));
const Categories = lazy(() => import("./Sections/Categories"));
const SlideFront = lazy(() => import("./Sections/SlideFront"));
const Items = lazy(() => import("./Sections/Items"));

const Home = () => {
  return (
    <div className="Home">
      <SlideFront />

      <Suspense fallback={<Loading />}>
        <Categories />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Items />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Menu />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ReserveSeat />
      </Suspense>

      <Footer />
    </div>
  );
};

export default Home;
