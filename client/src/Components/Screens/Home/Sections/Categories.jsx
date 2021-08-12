import React from "react";
import "./Categories.css";
import { useStateValue } from "../../../../StateProvider";
import Category from "./CategoriesCategory/Category";
import Loading from "../../Global/Loading";

const Categories = () => {
  const { categoriesAPI } = useStateValue();
  const [categories] = categoriesAPI.categories;

  return (
    <>
      <div className="Categories">
        <h1 className="category__title">Categories</h1>
        <div className="categories">
          {categories.map((cat, i) => (
            <Category {...cat} key={i} />
          ))}

          {/* <div className="category">
          <img
            src="https://images.pexels.com/photos/286283/pexels-photo-286283.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt=""
          />
          <h3 className="categories__category-name">Asian Food</h3>
        </div>

        <div className="category">
          <img
            src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt=""
          />
          <h3 className="categories__category-name">Pizza</h3>
        </div>

        <div className="category">
          <img
            src="https://images.pexels.com/photos/2613471/pexels-photo-2613471.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt=""
          />
          <h3 className="categories__category-name">Pan Cakes</h3>
        </div>

        <div className="category">
          <img
            src="https://images.pexels.com/photos/1833337/pexels-photo-1833337.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt=""
          />
          <h3 className="categories__category-name">Breakfast</h3>
        </div> */}
        </div>
      </div>
      {(!categories || categories.length === 0) && <Loading />}
    </>
  );
};

export default Categories;
