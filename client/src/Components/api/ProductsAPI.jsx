import { useEffect, useState } from "react";
import axios from "axios";

const ProductsAPI = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("/api/products");

        setProducts(res.data.products);
      } catch (err) {
        console.log(err.response.data.msg);

        // alert(err.response.data.msg);
      }
    };

    getProducts();
  }, []);

  return {
    products: [products, setProducts],
  };
};

export default ProductsAPI;
