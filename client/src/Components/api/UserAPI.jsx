import axios from "axios";
import { useState, useEffect } from "react";

const UserAPI = (token) => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [postalCode, setPostalCode] = useState(null);
  const [data, setData] = useState({});
  // const [street, setStreet] = useState(null);
  // const [address, setAddress] = useState(null);

  const getCode = async (postal) => {
    try {
      if (postal === "undefined") {
        return;
      }
      const data = await axios.get(`/api/dashboard/onepostalcode/${postal}`);
      setData(data.data.code);
      setPostalCode(data.data.code.postalCode);
      return data.data.code;
    } catch (error) {
      setPostalCode(null);
      localStorage.removeItem("pcl");
    }
  };

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
            // localStorage.setItem("pcl", data.data.user.postalCode);
            // const item = localStorage.getItem("pcl");
            // console.log("check here: ", item);
          }
          // setAddress(data?.data?.user?.address);
          // setStreet(data?.data?.user?.street);
          data.data.user.role === 1 ? setIsAdmin(true) : setIsAdmin(false);
        } catch (err) {
          alert(err.response.data.error);
        }
      };
      getUser();
    }
  }, [token]);

  const runGetCode = async (postal) => {
    await getPostalCode(postal)
      .then((response) => {
        // console.log("response: ", response);
        setData(response.data.code);
        localStorage.setItem("pcl", response.data.code.postalCode);
      })
      .catch((error) => console.log("something wrong here: ", error.response));
  };

  useEffect(() => {
    if (postalCode) {
      runGetCode(postalCode);
    }
  }, [postalCode]);

  // useEffect(() => {
  //   if (postalCode) {
  //     console.log("came in useeffect2");
  //     getCode(postalCode);
  //     console.log("passed useeffect2");
  //     console.log("check the postal code here: ", localStorage.getItem("pcl"));
  //     return;
  //   }
  //   if (!postalCode) {
  //     // console.log("came in useeffect2 down");

  //     const postal = localStorage.getItem("pcl");
  //     // console.log("useeffect2 down passed: ", postal);

  //     if (postal) {
  //       setPostalCode(postal);
  //       getCode(postal);
  //       return;
  //     }

  //     if (!postal || postal === "undefined") {
  //       localStorage.removeItem("pcl");
  //     }
  //     return;
  //   }
  // }, [postalCode]);

  return {
    image: user?.images?.url,
    name: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    userAddress: user?.address,
    userStreet: user?.street,
    // address: [address, setAddress],
    // street: [street, setStreet],
    isAdmin: [isAdmin, setIsAdmin],
    isLoggedIn: [isLoggedIn, setIsLoggedIn],
    userID: user?._id,
    postalCode: [postalCode, setPostalCode],
    postalData: [data, setData],
  };
};

export default UserAPI;
