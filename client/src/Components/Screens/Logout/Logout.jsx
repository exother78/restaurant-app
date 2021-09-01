import axios from "axios";
import React, { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    const logout = async () => {
      await axios.get("/api/user/logout");
      localStorage.removeItem("login");
    };

    window.location.href = "/";
    logout();
  }, []);
  return <div></div>;
};

export default Logout;
