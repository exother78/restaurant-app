import React from "react";
import avatar from "../../../../Images/avatar.png";

const Category = ({ images, name }) => {
  return (
    <div className="category">
      <img loading="lazy" src={images ? images.url : avatar} alt="" />
      <h3 className="categories__category-name">{name}</h3>
    </div>
  );
};

export default Category;
