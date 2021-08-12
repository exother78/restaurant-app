import React, { useState } from "react";
import axios from "axios";
import { useStateValue } from "../../../StateProvider";
import "./CreateProduct.css";

const CreateProdcut = () => {
  const { categoriesAPI } = useStateValue();
  const [categories] = categoriesAPI.categories;
  const [imageUpload, setImageUpload] = useState(false);
  const [imageShow, setImageShow] = useState();

  const [data, setData] = useState({
    product_id: "",
    title: "",
    description: "",
    price: "",
    category: "",
    images: "",
  });

  const handleFileChange = async (e) => {
    const getFile = e.target.files[0];
    if (!getFile) return alert("File Doesn't exist");

    let formData = new FormData();
    formData.append("file", getFile);
    setImageUpload(formData);
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageShow(reader.result);
    };

    reader.readAsDataURL(getFile);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const cancelImage = () => {
    setImageShow(null);
    setImageUpload(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/upload", imageUpload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const productFunc = async (d) => {
        console.log("image data", d);
        console.log(d.data.url);
        const product = await axios.post("/api/products", {
          ...data,
          images: { public_id: d.data.public_id, url: d.data.url },
        });

        console.log("all data", product);
      };

      Promise.resolve(res)
        .then(productFunc)
        .then(() => {
          console.log("product's here");
        });

      window.location.href = "/create_product";
    } catch (err) {
      console.log("err: ", err);
    }
  };

  return (
    <div className="create__product">
      <h1 style={{ margin: "0 30px " }}>Create Product</h1>

      {/* <div className="create__product-container"> */}
      <form onSubmit={handleSubmit} className="create__product-form">
        <div className="create__product-container-leftSection">
          {!imageShow && (
            <input
              required
              type="file"
              name="file"
              onChange={handleFileChange}
              className="create__product-leftSection-image-input"
            />
          )}
          {imageShow && (
            <div className="create__product-image-preview">
              <img
                required
                src={imageShow}
                alt=""
                width="100%"
                height="100%"
                style={{ objectFit: "cover" }}
              />

              <div
                className="create__product-cancel-image"
                onClick={cancelImage}>
                X
              </div>
            </div>
          )}
        </div>

        <div className="create__product-container-rightSection">
          <div className="create__product-input">
            <input
              required
              type="text"
              placeholder="Product Id"
              value={data.product_id}
              onChange={handleChange}
              name="product_id"
            />
          </div>

          <div className="create__product-input">
            <input
              required
              type="text"
              name="title"
              placeholder="Title"
              value={data.title}
              onChange={handleChange}
            />
          </div>

          <div className="create__product-input">
            <input
              required
              type="text"
              placeholder="Description"
              value={data.description}
              onChange={handleChange}
              name="description"
            />
          </div>

          <div className="create__product-input">
            <input
              required
              type="text"
              placeholder="Price"
              value={data.price}
              onChange={handleChange}
              name="price"
            />
          </div>
          <div className="create__product-input">
            <select name="category" onChange={handleChange} required>
              {categories.map((category, i) => (
                <option key={i} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <button className="create__product-form-button">Submit</button>
        </div>
      </form>
      {/* </div> */}
    </div>
  );
};

export default CreateProdcut;
