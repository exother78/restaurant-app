import React, { useState } from "react";
import "./Register.css";

import { Link } from "react-router-dom";
import avatar from "../../Images/avatar.png";
import axios from "axios";
// import { useStateValue } from "../../../StateProvider";

const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // const state = useStateValue();
  // const [isLoggedIn, setIsLoggedIn] = state.userAPI.isLoggedIn;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (registerForm.password !== registerForm.confirmPassword) {
      alert("Passwords doesn't match");
      return;
    }

    try {
      await axios.post("/api/user/register", { ...registerForm });

      localStorage.setItem("login", true);
      // setIsLoggedIn(true);
      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="register">
      <form className="register__form">
        <div className="register__img">
          <h3 style={{ letterSpacing: "1.2px" }}>Choose Profile </h3>
          <input type="file" />
          <img src={avatar} alt="" />
        </div>

        <div className="register__user">
          <h3 style={{ letterSpacing: "1.2px" }}>Please Provide Your Info </h3>

          <div className="register__input-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              className="register__input"
              value={registerForm.firstName}
              onChange={handleInputChange}
            />
          </div>

          <div className="register__input-group">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              className="register__input"
              value={registerForm.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="register__input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="register__input"
              value={registerForm.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="register__input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="register__input"
              value={registerForm.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="register__input-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              className="register__input"
              value={registerForm.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="register__address">
          <h3 style={{ letterSpacing: "1.2px" }}>Provide Address </h3>

          <div className="register__input-group">
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="register__input"
              value={registerForm.address}
              onChange={handleInputChange}
            />
          </div>

          <div className="register__input-group">
            <input
              type="text"
              name="address_line_2"
              placeholder="Address line 1"
              className="register__input"
              value={registerForm.address_line_2}
              onChange={handleInputChange}
            />
          </div>

          <div className="register__input-group">
            <input
              type="text"
              name="city"
              placeholder="City"
              className="register__input"
              value={registerForm.city}
              onChange={handleInputChange}
            />
          </div>

          <div className="register__input-group">
            <input
              type="text"
              name="country"
              placeholder="Country"
              className="register__input"
              value="Germany"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>

      {/* <form className="register__form" onSubmit={handleSubmit}>
        <div className="register__input-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            className="register__input"
            value={registerForm.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="register__input-group">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            className="register__input"
            value={registerForm.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="register__input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="register__input"
            value={registerForm.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="register__input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="register__input"
            value={registerForm.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="register__input-group">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            className="register__input"
            value={registerForm.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="register__submit-button register__input">
          Submit
        </button>

        <span className="register-login">
          Already have an account? <Link to="/login">login</Link>
        </span>
      </form> */}
    </div>
  );
};

export default Register;
