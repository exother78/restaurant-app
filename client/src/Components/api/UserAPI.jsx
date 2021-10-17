import axios from "axios";
import { useState, useEffect } from "react";

const UserAPI = (token) => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [postalCode, setPostalCode] = useState(null);
  const [data, setData] = useState({});

  const getCode = async (postal) => {
    try {
      const data = await axios.get(`/api/dashboard/onepostalcode/${postal}`);
      if (data.data.code.active) {
        setData(data.data.code);
        setPostalCode(data.data.code.postalCode);
        return data.data.code;
      }
      if (!data.data.code.active) {
        setData(null);
        setPostalCode(null);
      }
    } catch (error) {
      console.log("error in up catc ", error.response.data.error);
      setPostalCode(null);
      // localStorage.removeItem("pcl");
      // return (
      //   error.response.data.error + ", please try with a different location"
      // );
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

  useEffect(() => {
    // to remove an element in the object not neccessary here
    // const queryObj = {
    //   page: "something",
    //   sort: "sort type",
    //   queryString: "queryString type",
    //   limit: "limit type",
    // }; //queryString = req.query

    // const excludedFields = ["page", "sort", "limit"];
    // excludedFields.forEach((el) => {
    //   console.log("el: ", el);
    //   console.log("queryObj: ", queryObj);
    //   delete queryObj[el];
    //   console.log("result: ", queryObj);
    // });

    if (postalCode) {
      localStorage.setItem("pcl", postalCode);
      getCode(postalCode);
      // .then((response) =>
      //   console.log("response postal: ", response.posta  lCode)
      // )
      // .catch((error) => console.log("error: ", error));
    }
    if (!postalCode) {
      const postal = localStorage.getItem("pcl");
      if (postal) {
        setPostalCode(postal);
        getCode(postal);
        // .then((response) => {
        //   console.log("somehting true:  ", response);
        // })
        // .catch((err) => {
        //   console.log("error in catch: ", err);
        //   localStorage.removeItem("pcl");
        // });
      }

      if (!postal) {
        localStorage.removeItem("pcl");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  };
};

export default UserAPI;
