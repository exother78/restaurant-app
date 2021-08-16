import React, { Suspense, lazy } from "react";
import "./Home.css";

// Sections
import SlideFront from "./Sections/SlideFront";
import Menu from "./Sections/Menu";
import ReserveSeat from "./Sections/ReserveSeat";
import Footer from "./Sections/Footer";
import Loading from "../Global/Loading";

const Categories = lazy(() => import("./Sections/Categories"));
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
      <Menu />
      <ReserveSeat />

      <Footer />
    </div>
  );
};

export default Home;
