import React from "react";
import "./SlideFront.css";

const SlideFront = () => {
  return (
    <div className="home__slider-front">
      <div className="home__slider">
        <img
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt=""
        />
      </div>

      <div className="home__address-field">
        <h1 className="slider__title">The Food You Love</h1>
        <div className="home__location">
          <input
            type="text"
            className="location__field"
            name="location"
            placeholder="Enter your full address"
          />
          <button className="location__field-btn btn-primary btn-anim">
            Delivery
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideFront;
