import axios from "axios";
import { useState, useEffect } from "react";

const UserAPI = (token) => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [postalCode, setPostalCode] = useState(null);

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
            localStorage.setItem("pcl", data.data.user.postalCode);
          }
          data.data.user.role === 1 ? setIsAdmin(true) : setIsAdmin(false);
        } catch (err) {
          console.log(err.response.data.error);
        }
      };
      getUser();
    }
  }, [token]);

  return {
    image: user?.images?.url,
    name: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    userAddress: user?.address,
    isAdmin: [isAdmin, setIsAdmin],
    isLoggedIn: [isLoggedIn, setIsLoggedIn],
    userID: user?._id,
    postalCode: [postalCode, setPostalCode],
  };
};

export default UserAPI;
