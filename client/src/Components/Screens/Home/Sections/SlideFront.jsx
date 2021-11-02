import React, { useState } from "react";
import "./SlideFront.css";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import ScheduleIcon from "@material-ui/icons/Schedule";
import AirlineSeatReclineNormalIcon from "@material-ui/icons/AirlineSeatReclineNormal";
import EuroIcon from "@material-ui/icons/Euro";
import axios from "axios";
import { useStateValue } from "./../../../../StateProvider";
import { Link } from "react-router-dom";

const SlideFront = () => {
  const { userAPI } = useStateValue();
  const [postalCode, setPostalCode] = userAPI.postalCode;
  const [, setMinimumOrder] = userAPI.minOrder;
  const [data, setData] = userAPI.postalData;
  const [loading, setLoading] = useState(false);
  const [postalCodeChange, setPostalCodeChange] = useState("");
  const [error, setError] = useState(null);

  const getPostalCode = async (postal) => {
    try {
      return await axios.get(`/api/dashboard/onepostalcode/${postal}`);
    } catch (error) {
      setLoading(false);
      setPostalCode(null);
      setData(null);
      localStorage.removeItem("pcl");
    }
  };

  const handlePostalFind = async () => {
    setLoading(true);
    getPostalCode(postalCodeChange)
      .then((response) => {
        if (response) {
          if (!response.data.code.active) {
            localStorage.removeItem("pcl");
            setData(null);
            setMinimumOrder(null);
            setLoading(false);
            setError(
              "Delivery is currently not available at your location right now"
            );
            return;
          }
          if (response.data.code.active) {
            setData(response.data.code);
            setMinimumOrder(response.data.code.minOrder);
            localStorage.setItem("pcl", response.data.code.postalCode);
            setLoading(false);
            setPostalCode(postalCodeChange);
          }
        }
      })
      .catch((error) => console.log("error: ", error));
  };

  if (error) {
    setTimeout(() => {
      setError(null);
    }, 2000);
  }

  return (
    <div className="home__slider-front">
      {error && <div className="error__box">{error}</div>}

      <div
        className="sliderFront__sidebox"
        style={{ display: postalCode ? "block" : "none" }}>
        <div className="sliderFront__sidebox-line">
          <EuroIcon /> <span>Delivery Price: {data?.deliveryPrice}</span>
        </div>
        <div className="sliderFront__sidebox-line">
          <DriveEtaIcon /> <span>Delivery: {data?.estimatedTime} minutes</span>
        </div>
        <div className="sliderFront__sidebox-line">
          <ScheduleIcon /> <span>11:00 AM - 10:00 PM</span>
        </div>
        <div className="sliderFront__sidebox-line">
          <AirlineSeatReclineNormalIcon /> <span>Takeaway: 30 minutes</span>
        </div>

        <Link to="/order" className="sliderFront__sidebox-btn">
          <div className="sliderFront__order-btn">Order Now!</div>
        </Link>
      </div>

      <div
        className="home__address-postal-field"
        style={{ display: !postalCode ? "flex" : "none" }}>
        <h2 className="sliderPostal__title">Find Your Postal Code</h2>

        <div className="sliderPostalCode__field">
          <input
            type="text"
            className="sliderPostalCode__input-field"
            placeholder="Postal Code"
            name="postalCode"
            value={postalCodeChange}
            onChange={(e) => setPostalCodeChange(e.target.value)}
          />
          <button
            style={{
              maxHeight: "40px",
            }}
            className="sliderPostalCode__find-btn"
            onClick={!loading ? handlePostalFind : null}>
            {loading ? (
              <div className="loadings">
                <div></div>
              </div>
            ) : (
              "find"
            )}
          </button>
        </div>
      </div>

      <div
        className="home__address-field"
        style={{ display: postalCode ? "flex" : "none" }}>
        <h1 className="slider__title">The Food You Love</h1>

        <div className="home__location-buttons">
          <Link to="/order" className="home__location-buttons-link">
            <button className="home__location-buttons-button">
              Order Now!
            </button>
          </Link>
          <Link to="/menu" className="home__location-buttons-link">
            <button className="home__location-buttons-button">
              Visit Menu!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SlideFront;
