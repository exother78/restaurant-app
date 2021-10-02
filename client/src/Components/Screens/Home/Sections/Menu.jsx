import React from "react";
import "./Menu.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useStateValue } from "../../../../StateProvider";

const Menu = () => {
  const { menuAPI } = useStateValue();

  return (
    <div className="menu">
      <h1 className="menu__title">Our Menu</h1>

      <div className="menu__categories">
        {menuAPI?.menu?.slice(0, 5).map((item, i) => (
          <div className="menu__category" key={i}>
            <h2 className="menu__category-title">{item.category}</h2>

            <ul className="menu__category-list">
              {item?.products?.slice(0, 5).map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="menu-page">
          <h4>Click Here to See full menu</h4>
          <span
            className="menu-to-menuscreen-arrow"
            onClick={() => (window.location.href = "/menu")}>
            <ArrowForwardIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
