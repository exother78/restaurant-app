import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
// import { useStateValue } from "../../../StateProvider";

const Login = () => {
  // const [{ isLoggedIn }, dispatch] = useStateValue();
  // const state = useStateValue();
  // const [isLoggedIn, setIsLoggedIn] = state.userAPI.isLoggedIn;

  // const [isLoggedIn, setIsLoggedIn] = userAPI;
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/user/login", {
        email: user.email,
        password: user.password,
      });

      localStorage.setItem("login", true);

      // setIsLoggedIn(true);
      // dispatch({
      //   type: "LOGGED_IN",
      // });

      // setIsLoggedIn(true);

      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <div className="login" onSubmit={handleSubmit}>
      <form className="login__form">
        <div className="login__input-group">
          <input
            type="email"
            name="email"
            className="login__email login__input"
            placeholder="Email"
            value={user.email}
            onChange={onChangeInput}
          />
        </div>

        <div className="login__input-group">
          <input
            type="password"
            name="password"
            className="login__password login__input"
            placeholder="Password"
            value={user.password}
            onChange={onChangeInput}
          />
        </div>
        <span className="login__register">
          Not a user? <Link to="/register"> Register here</Link>
        </span>
        <button type="submit" className="login__submit-button login__input">
          Submit
        </button>

        <span className="forgot-password">
          Forgot Password ? <Link to="/forgotpassword">Forgot Password</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
