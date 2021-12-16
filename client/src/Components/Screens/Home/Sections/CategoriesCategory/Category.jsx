import React from "react";
import avatar from "../../../../Images/avatar.png";
import "./Category.css";

const Category = ({ images, name }) => {
  return (
    <div className="category">
      <img
        loading="lazy"
        src={
          images
            ? images.url.endsWith( "webp" )
              ? images.url.replace( "webp", "jpg" )
              : images.url
            : avatar
          // images?.url
        }
        alt=""
      />
      <p className="categories__category-name">{name}</p>
    </div>
  );
};

export default Category;
