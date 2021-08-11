import React from "react";
import "./Home.css";

// Sections
import SlideFront from "./Sections/SlideFront";
import Categories from "./Sections/Categories";
import Items from "./Sections/Items";
import Menu from "./Sections/Menu";
import ReserveSeat from "./Sections/ReserveSeat";
import Footer from "./Sections/Footer";

const Home = () => {
  return (
    <div className="Home">
      <SlideFront />
      <Categories />
      <Items />
      <Menu />
      <ReserveSeat />

      <Footer />
    </div>
  );
};

export default Home;
