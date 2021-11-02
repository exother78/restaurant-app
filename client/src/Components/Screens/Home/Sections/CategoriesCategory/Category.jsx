import React from "react";
import avatar from "../../../../Images/avatar.png";

const Category = ({ images, name }) => {
  return (
    <div className="category">
      <img
        loading="lazy"
        src={
          images
            ? images.url.endsWith("jpg")
              ? images.url.replace("jpg", "webp")
              : images.url
            : avatar
        }
        alt=""
      />
      <p className="categories__category-name">{name}</p>
    </div>
  );
};

export default Category;
