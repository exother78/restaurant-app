import React, { useState } from "react";
import "./ReserveSeat.css";
import axios from "axios";

const ReserveSeat = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    persons: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
  });

  const changed = (e) => {
    const { name, value } = e.target;

    setData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/reservoir", { ...data });

      setData({
        persons: "",
        date: "",
        time: "",
        name: "",
        phone: "",
        email: "",
      });

      // alert("Successfully Reserved your Seat...");
      window.location.href = "/";
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  if (error) {
    setTimeout(() => {
      setError(null);
    }, 2000);
  }

  return (
    <div className="reserve-seat">
      {error && <div className="error__box">{error}</div>}
      <h1 className="reserve-seat__title">Reserve Your Seat now</h1>

      <img
        src="https://images.pexels.com/photos/2923034/pexels-photo-2923034.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt=""
        className="reserve-seat__image"
      />

      <div className="reserve-seat__select">
        <form action="" onSubmit={handleSubmit}>
          <div className="people-form">
            <select name="persons" onChange={changed} required defaultValue="0">
              <option value="0" disabled>
                How many people?
              </option>

              <option value="1 Person">1 Person</option>
              <option value="2 People">2 People</option>
              <option value="3 People">3 People</option>
              <option value="4 People">4 People</option>
              <option value="5 People">5 People</option>
              <option value="6 People">5 People</option>

              <option value="7 People">6 People</option>
              <option value="8 People">7 People</option>
              <option value="9 People">8 People</option>
              <option value="10 People">9 People</option>
              <option value="11 People">10 People</option>
              <option value="12 People">11 People</option>
              <option value="13 People">12 People</option>
              <option value="14 People">13 People</option>
              <option value="15 People">14 People</option>
              <option value="Large Party">Large Party</option>
            </select>

            <input
              type="date"
              className="date-picker"
              value={data.date}
              onChange={changed}
              name="date"
            />

            <select
              id="select__reserve-seat"
              typeof="time"
              // value={data.time}
              onChange={changed}
              name="time">
              <option value="0">Select Time</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="3:30 PM">3:30 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="4:30 PM">4:30 PM</option>
              <option value="5:00 PM">5:00 PM</option>
              <option value="5:30 PM">5:30 PM</option>
              <option value="6:00 PM">6:00 PM</option>
              <option value="6:30 PM">6:30 PM</option>
              <option value="7:00 PM">7:00 PM</option>
              <option value="7:30 PM">7:30 PM</option>
              <option value="8:00 PM">8:00 PM</option>
              <option value="8:30 PM">8:30 PM</option>
              <option value="9:00 PM">9:00 PM</option>
              <option value="9:30 PM">9:30 PM</option>
              <option value="10:00 PM">10:00 PM</option>
              <option value="10:30 PM">10:30 PM</option>
              <option value="11:00 PM">11:00 PM</option>
            </select>
          </div>

          <div className="details-of-client">
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              value={data.name}
              onChange={changed}
            />
            <input
              type="phone"
              name="phone"
              placeholder="Phone Number"
              required
              value={data.phone}
              onChange={changed}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={changed}
            />
          </div>

          <div className="reserve-seat__submit-btn">
            <button type="submit" className="btn btn-primary btn-anim">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReserveSeat;
