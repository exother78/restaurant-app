import React from "react";
import "./Menu.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useStateValue } from "../../../../StateProvider";

const Menu = () => {
  const { menuAPI } = useStateValue();
  console.log("this is menu: ", menuAPI);
  return (
    <div className="menu">
      <h1 className="menu__title">Our Menu</h1>

      <div className="menu__categories">
        <div className="menu__category">
          <h2 className="menu__category-title">Asian</h2>

          <ul className="menu__category-list">
            <li>Sushi</li>
            <li>Chicken Karahi</li>
            <li>Tandoori Chicken</li>
            <li>Fried Rice</li>
          </ul>
        </div>

        <div className="menu__category">
          <h2 className="menu__category-title">European</h2>

          <ul className="menu__category-list">
            <li>Pizza</li>
            <li>Hot Dog</li>
            <li>Coffee</li>
            <li>Fried Rice</li>
          </ul>
        </div>

        <div className="menu__category">
          <h2 className="menu__category-title">Russian</h2>

          <ul className="menu__category-list">
            <li>Salad</li>
            <li>Fish</li>
            <li>Pasta</li>
            <li>Pizza</li>
          </ul>
        </div>

        <div className="menu__category">
          <h2 className="menu__category-title">Russian</h2>

          <ul className="menu__category-list">
            <li>Else</li>
            <li>Something</li>
            <li>Some Food</li>
            <li>Fried Rice</li>
          </ul>
        </div>

        <div className="menu__category">
          <h2 className="menu__category-title">Russian</h2>

          <ul className="menu__category-list">
            <li>Else</li>
            <li>Something</li>
            <li>Some Food</li>
            <li>Fried Rice</li>
          </ul>
        </div>

        <div className="menu-page">
          <h4>Click Here to See full menu</h4>
          {/* <Link to="/menu"> */}
          <span
            className="menu-to-menuscreen-arrow"
            onClick={() => (window.location.href = "/menu")}>
            <ArrowForwardIcon />
          </span>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Menu;
