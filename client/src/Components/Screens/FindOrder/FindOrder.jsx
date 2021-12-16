import React, { useState } from "react";
import "./FindOrder.css";
import SearchIcon from "@mui/icons-material/Search";
import Footer from "../Home/Sections/Footer";
import axios from 'axios';

const FindOrder = () => {
  const [ orderNumber, setOrderNumber ] = useState( null );
  const [ orderData, setOrderData ] = useState( {} );

  console.log( "order number : ", orderNumber );

  const findOrder = ( e ) => {
    e.preventDefault();

    try {
      console.log( 'axios: ', axios.VERSION )
    } catch ( error ) {

    }
  };

  return (
    <>
      <div className="findOrder">
        <div className="findOrder__container">
          <form className="findOrder__search-box" onSubmit={ findOrder }>
            <input
              type="text"
              className="findOrder__searchInput"
              placeholder="Order Number"
              value={ orderNumber }
              onChange={ ( e ) => setOrderNumber( e.target.value ) }
              required
            />
            <button type="submit" className="findOrder__searchButton">
              <SearchIcon style={ { fontSize: "2.6rem" } } />
            </button>
          </form>

          <div className="findOrder__foundedOrder">
            <a
              href={ `/findorder/${ orderNumber }` }
              className="findOrder__foundedOrder-number">
              Order found: 5454545345322
            </a>
            <p className="findOrder__foundedOrder-name">Name: Asim Imam</p>
            <p className="findOrder__foundedOrder-email">
              Email: asim@gmail.com
            </p>
            <p className="findOrder__foundedOrder-date">Date: 1/12/2021</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FindOrder;
