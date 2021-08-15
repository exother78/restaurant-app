import React, { useState } from "react";
import { useStateValue } from "../../../../StateProvider";
import Loading from "../../../Screens/Global/Loading";
import AllProductsProduct from "./AllProducts-Product/AllProductsProduct";
import "./AllProducts.css";

const AllProducts = () => {
  const { productsAPI, userAPI, token } = useStateValue();
  const [isAdmin] = userAPI.isAdmin;
  const [callback, setCallback] = productsAPI.callback;
  const [products, setProducts] = productsAPI.products;
  const [loading, setLoading] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const checkAll = () => {
    products.forEach((product) => {
      product.checked = !isCheck;
    });

    setProducts([...products]);
    setIsCheck(!isCheck);
  };

  if (success || error) {
    setTimeout(() => {
      setSuccess(null);
      setError(null);
    }, 4000);
  }

  // const deleteAll = () => {
  //   products.forEach((product) => {
  //     if (product.checked) deleteProduct(product._id, product.images.public_id);
  //   });
  //   setIsCheck(false);
  // };

  if (loading) return <Loading />;

  if (!loading)
    return (
      <div className="allproducts">
        {success && <div className="success__box">{success}</div>}
        {error && <div className="error__box">{error}</div>}

        {isAdmin && (
          <div className="delete-all">
            <span>Select all</span>
            <input type="checkbox" checked={isCheck} onChange={checkAll} />
            <button>Delete All</button>
          </div>
        )}
        <div className="allproducts__container">
          {products.map((product) => (
            <AllProductsProduct
              {...product}
              token={token}
              loading={loading}
              setLoading={setLoading}
              success={success}
              setSuccess={setSuccess}
              key={product._id}
              error={error}
              setError={setError}
              callback={callback}
              setCallback={setCallback}
            />
          ))}
        </div>
      </div>
    );
};

export default AllProducts;
