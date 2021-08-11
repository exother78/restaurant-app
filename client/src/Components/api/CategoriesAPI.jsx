import axios from "axios";
import { useEffect, useState } from "react";

const CategoriesAPI = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const categories = await axios.get("/api/category");

        setCategories(categories.data.categories);
      } catch (err) {
        console.log(err.response.data.msg);
        // alert(err.response.data.msg);
      }
    };

    getCategories();
  }, []);

  return {
    categories: [categories, setCategories],
  };
};

export default CategoriesAPI;
