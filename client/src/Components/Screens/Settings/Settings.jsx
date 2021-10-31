import React from "react";
import { useStateValue } from "../../../StateProvider";
import Loading from "../Global/Loading";
import { Link } from "react-router-dom";
import "./Settings.css";

const Settings = () => {
  const { userAPI } = useStateValue();
  const userImage = userAPI.image;
  const firstName = userAPI.name;
  const lastName = userAPI.lastName;
  const userAddress = userAPI.userAddress;
  const userStreet = userAPI.userStreet;
  const email = userAPI.email;
  const postalCode = userAPI.postalCode;

  return (
    <div className="user__settings">
      <div className="user__settings-details">
        <div className="user__settings-details-image">
          {userImage ? <img src={userImage} alt="" /> : <Loading />}

          <h3>{firstName && lastName && firstName + " " + lastName}</h3>
        </div>
        <div className="sectionsOfUser sectionsOfUser1">
          <p>
            <Link to="/orders">Your Orders</Link>
          </p>
          <p>
            <Link to="/order">Order Food Now</Link>
          </p>
          <p>
            <Link to="/menu">See Menu</Link>
          </p>
        </div>
      </div>

      <div className="user__settings-section">
        <div className="main__details">
          <div className="name">
            <p className="title">first name: </p>
            <p className="desc">{firstName && firstName}</p>
          </div>
          <div className="name">
            <p className="title">last name: </p>
            <p className="desc">{lastName && lastName}</p>
          </div>
          <div className="name">
            <p className="title">Email: </p>
            <p className="desc">{email && email}</p>
          </div>
          <div className="name">
            <p className="title">password: </p>
            <p className="desc"></p>
          </div>
          <div className="name">
            <p className="title">Postal code: </p>
            <p className="desc">{postalCode && postalCode}</p>
          </div>

          <div className="name">
            <p className="title">address: </p>
            <p className="desc">{userAddress && userAddress}</p>
          </div>

          <div className="name">
            <p className="title">street Address: </p>
            <p className="desc">{userStreet && userStreet}</p>
          </div>
        </div>
        <div className="sectionsOfUser sectionsOfUser2">
          <p>
            <Link to="/orders">Your Orders</Link>
          </p>
          <p>
            <Link to="/order">Order Food Now</Link>
          </p>
          <p>
            <Link to="/menu">See Menu</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;

// import React from "react";
// import { FixedSizeList as List } from "react-window";

// const Row = ({ index, style }) => (
//   <div style={style}>
//     Row {index}
//     <img src="https://picsum.photos/200/300" alt="" width="20" height="20" />
//   </div>
// );

// const Settings = () => {
//   // const container = document.querySelector(".items__container");
//   // const width = container.clientWidth;
//   // console.log("width: ", width);

//   const width = window.innerWidth;

//   return (
//     <List
//       height={200}
//       itemCount={1000}
//       itemSize={35}
//       width={width}
//       layout="horizontal">
//       {Row}
//     </List>
//   );
// };

// export default Settings;
