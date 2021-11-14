import React, { useEffect, useState } from "react";
import "./RegisteredUsers.css";
import axios from "axios";
import { useStateValue } from "../../../StateProvider";
import Loading from "../../Screens/Global/Loading";

const RegisteredUsers = () => {
  const { token } = useStateValue();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (token[0]) {
      const getUsers = async () => {
        try {
          await axios
            .get("/api/users", {
              headers: {
                Authorization: `Bearer ${token[0]}`,
              },
            })
            .then((response) => {
              setUsers(response.data.users);
            });
        } catch (error) {
          console.log("message: ", error.response.data.error);
        }
      };
      getUsers();
    }
  }, [token]);

  if (users.length === 0) return <Loading />;

  return (
    <div className="registeredUsers">
      <h1>this is all users</h1>

      {users?.map((user, i) => (
        <div className="registeredUser__box" key={i}>
          <div className="registeredUser__name registeredUser__flex">
            <span className="registeredUser__subText">Name</span>
            <span className="registeredUser__boldText">
              {user.firstName} {user.lastName}
            </span>
          </div>

          <div className="registeredUser__email registeredUser__flex">
            <span className="registeredUser__subText">email</span>
            <span className="registeredUser__boldText">{user.email}</span>
          </div>

          <div className="registeredUser__name registeredUser__flex">
            <span className="registeredUser__subText">Address</span>
            <span className="registeredUser__boldText">bellingon Street</span>
          </div>

          <div className="registeredUser__orders registeredUser__flex">
            <span className="registeredUser__subText">Orders</span>
            <span className="registeredUser__boldText">
              {user?.orders?.length}
            </span>
          </div>

          <div className="registeredUser__pendingOrder registeredUser__flex">
            <span className="registeredUser__subText">pending</span>
            <span className="registeredUser__boldText">
              {user?.pendingOrders.length}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RegisteredUsers;
