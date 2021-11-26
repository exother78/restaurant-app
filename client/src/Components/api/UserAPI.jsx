import axios from "axios";
import { useState, useEffect, useCallback } from "react";

const UserAPI = (token) => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [postalCode, setPostalCode] = useState(null);
  const [data, setData] = useState({});
  const [minimumOrder, setMinimumOrder] = useState(null);

  const getPostalCode = async (postal) => {
    try {
      return await axios.get(`/api/dashboard/onepostalcode/${postal}`);
    } catch (error) {
      return error.response;
    }
  };

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const auth = {
            headers: { Authorization: `Bearer ${token}` },
          };

          const data = await axios.get("/api/private", auth);
          setUser(data.data.user);
          setIsLoggedIn(true);

          if (data.data.user.postalCode) {
            setPostalCode(data.data.user.postalCode);
          }
          data.data.user.role === 1 ? setIsAdmin(true) : setIsAdmin(false);
        } catch (err) {
          alert(err?.response?.data.error);
        }
      };
      getUser();
    }
  }, [token]);
  const runGetCode = useCallback(
    async (postal) => {
      await getPostalCode(postal)
        .then((response) => {
          if (response) {
            if (!postalCode) setPostalCode(postal);
            if (!response.data.code.active) {
              localStorage.removeItem("pcl");
              setData(null);
              setMinimumOrder(null);
              return;
            }
            if (response.data.code.active) {
              setData(response.data.code);
              setMinimumOrder(response.data.code.minOrder);
              localStorage.setItem("pcl", response.data.code.postalCode);
            }
          }
        })
        .catch((error) =>
          console.log("something wrong here: ", error.response)
        );
    },
    [postalCode]
  );

  const postal = localStorage.getItem("pcl");
  useEffect(() => {
    if (postalCode) {
      runGetCode(postalCode);
    }
    if (postal) {
      runGetCode(postal);
    }
  }, [postalCode, postal, runGetCode]);

  return {
    image: user?.images?.url,
    name: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    userAddress: user?.address,
    userStreet: user?.street,
    isAdmin: [isAdmin, setIsAdmin],
    isLoggedIn: [isLoggedIn, setIsLoggedIn],
    userID: user?._id,
    postalCode: [postalCode, setPostalCode],
    postalData: [data, setData],
    minOrder: [minimumOrder, setMinimumOrder],
  };
};

export default UserAPI;
