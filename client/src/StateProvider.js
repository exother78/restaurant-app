import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import UserAPI from "./Components/api/UserAPI";
import ProductsAPI from "./Components/api/ProductsAPI";
import CategoriesAPI from "./Components/api/CategoriesAPI";

// Prepares the datalayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const firstLogin = localStorage.getItem("login");
    if (firstLogin) {
      try {
        const refreshToken = async () => {
          const res = await axios.get("/api/user/rtfat");
          setToken(res.data.accessToken);

          setTimeout(() => {
            refreshToken();
          }, 10 * 60 * 1000);
        };
        refreshToken();
      } catch (err) {
        alert("Please Login or regitser");
        localStorage.removeItem("login");
      }
    }
  }, []);

  const state = {
    token: [token, setToken],
    basket: [basket, setBasket],
    userAPI: UserAPI(token),
    productsAPI: ProductsAPI(),
    categoriesAPI: CategoriesAPI(),
  };

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
