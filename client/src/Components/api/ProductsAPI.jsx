import { useEffect, useState } from "react";
import axios from "axios";

const ProductsAPI = () => {
  const [products, setProducts] = useState([]);
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("/api/products");
        if (!res) {
          console.log("not found something");
          return;
        }

        setProducts(res.data.products);
      } catch (err) {
        console.log("products API: ", err.response.data.error);
        // alert(err.response.data.error);
      }
    };

    getProducts();
  }, [callback]);

  // if (products) {
  //   products.forEach((product) => {
  //     product.checked = false;
  //     // console.log("product: ", product);
  //   });
  // }
  return {
    products: [products, setProducts],
    callback: [callback, setCallback],
  };
};

export default ProductsAPI;
