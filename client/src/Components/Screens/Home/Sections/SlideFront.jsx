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
  const [data, setData] = userAPI.postalData;
  const [loading, setLoading] = useState(false);
  const [postalCodeChange, setPostalCodeChange] = useState("");
  const [error, setError] = useState(null);
  // const [data, setData] = useState({});

  const getCode = async (postal) => {
    try {
      const data = await axios.get(`/api/dashboard/onepostalcode/${postal}`);
      setData(data.data.code);
      return data.data.code;
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  // useEffect(() => {
  //   // to remove an element in the object not neccessary here
  //   // const queryObj = {
  //   //   page: "something",
  //   //   sort: "sort type",
  //   //   queryString: "queryString type",
  //   //   limit: "limit type",
  //   // }; //queryString = req.query

  //   // const excludedFields = ["page", "sort", "limit"];
  //   // excludedFields.forEach((el) => {
  //   //   console.log("el: ", el);
  //   //   console.log("queryObj: ", queryObj);
  //   //   delete queryObj[el];
  //   //   console.log("result: ", queryObj);
  //   // });

  //   if (postalCode) {
  //     localStorage.setItem("pcl", postalCode);
  //     getCode(postalCode);
  //   }
  //   if (!postalCode) {
  //     const postal = localStorage.getItem("pcl");
  //     if (postal) {
  //       setPostalCode(postal);
  //       getCode(postal)
  //         .then((response) => {
  //           setPostalCode(response.postalCode);
  //         })
  //         .catch((err) => localStorage.removeItem("pcl"));
  //     }

  //     // if (!postal) {
  //     //   localStorage.removeItem("pcl");
  //     // }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const handlePostalFind = async () => {
    getCode(postalCodeChange)
      .then((response) => {
        setLoading(false);
        localStorage.setItem("pcl", response.postalCode);
        setPostalCode(response.postalCode);
      })
      .catch(() => {
        return;
      });
  };

  if (error) {
    setTimeout(() => {
      setError(null);
    }, 2000);
  }

  return (
    <div className="home__slider-front">
      {error && <div className="error__box">{error}</div>}

      {/* <div className="home__slider">
        <img
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt=""
        />
      </div> */}

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

        <div className="sliderFront__sidebox-btn">
          <Link to="/order" className="sliderFront__order-btn">
            Order Now!
          </Link>
        </div>
      </div>

      <div
        className="home__address-postal-field"
        style={{ display: !postalCode ? "flex" : "none" }}>
        <h3 className="sliderPostal__title">Find Your Postal Code</h3>

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
            style={{ maxHeight: "40px" }}
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
        <div className="home__location">
          <input
            type="text"
            className="location__field"
            name="location"
            placeholder="Enter Address"
            spellCheck="false"
          />
          <button className="location__field-btn btn-primary btn-anim">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideFront;
