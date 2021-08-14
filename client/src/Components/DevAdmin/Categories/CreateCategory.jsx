import axios from "axios";
import React, { useState } from "react";
import "./CreateCategory.css";
import { useStateValue } from "../../../StateProvider";
import Loading from "../../Screens/Global/Loading";

const CreateCategory = () => {
  const { categoriesAPI } = useStateValue();
  const [categories] = categoriesAPI.categories;
  const [callback, setCallback] = categoriesAPI.callback;

  const [categoryForm, setCategoryForm] = useState({
    name: "",
    images: "",
  });

  const [fileImage, setFileImage] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [loading, setLoading] = useState(false);
  const [createCategoryLoading, setCreateCategoryLoading] = useState(false);

  const handleFileChange = (e) => {
    const getFile = e.target.files[0];
    if (!getFile) return alert("File Doesn't exist");

    let formData = new FormData();
    formData.append("file", getFile);
    setImageUpload(formData);

    const reader = new FileReader();

    reader.readAsDataURL(getFile);
    reader.onloadend = () => {
      setFileImage(reader.result);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCreateCategoryLoading(true);

    const upload = async () => {
      const res = await axios.post("/api/upload", imageUpload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return res;
    };

    const categoryUpload = async (d) => {
      try {
        if (d) {
          const res = await axios.post("/api/category", {
            ...categoryForm,
            images: { public_id: d.data.public_id, url: d.data.url },
          });

          Promise.resolve(res).then(() => {
            setCallback(!callback);
            setCreateCategoryLoading(false);
            setCategoryForm({
              name: "",
              images: "",
            });
            setFileImage(null);
            setImageUpload(null);
          });
        }

        if (!d) {
          const res = await axios.post("/api/category", {
            ...categoryForm,
          });

          Promise.resolve(res).then(() => {
            setCallback(!callback);
            setCreateCategoryLoading(false);
            setCategoryForm({
              name: "",
              images: "",
            });
          });
        }
      } catch (err) {
        alert(err.response.data.error);
        return;
      }
    };

    try {
      if (fileImage) {
        upload().then(categoryUpload);
      }
      if (!fileImage) {
        categoryUpload();
      }
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategoryForm((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const clearImage = () => {
    setImageUpload(null);
    setFileImage(null);
  };

  const handleEdit = () => {};

  const handleDelete = async (id, e) => {
    setLoading(true);
    try {
      const res = await axios.delete(`/api/category/${id}`);

      Promise.resolve(res).then(() => {
        setCallback(!callback);
        setLoading(false);

        return;
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  console.log("categories: ", categories);

  if (categories.length === 0) return <Loading />;
  if (categories) {
    return (
      <div className="categories__screen">
        {createCategoryLoading ? (
          <Loading />
        ) : (
          <div className="create__category">
            <form onSubmit={handleSubmit}>
              <div className="category__img">
                <h3
                  style={{
                    letterSpacing: "1.3px",
                    padding: "10px 20px",
                    userSelect: "none",
                  }}>
                  Add a Category
                </h3>
                {!fileImage && (
                  <input
                    type="file"
                    className="category__img-input"
                    onChange={handleFileChange}
                  />
                )}
                {fileImage && (
                  <img style={{ userSelect: "none" }} src={fileImage} alt="" />
                )}
                {fileImage && (
                  <span
                    className="category__form-clear-img"
                    onClick={clearImage}>
                    Clear Image
                  </span>
                )}
              </div>

              <div className="category__input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  required
                  className="category__input"
                  value={categoryForm.name}
                  onChange={handleInputChange}
                />
              </div>

              <button className="category__submit-button" type="submit">
                Submit
              </button>
            </form>
          </div>
        )}

        {loading ? (
          <Loading />
        ) : (
          <div className="get__categories">
            <h3
              style={{
                letterSpacing: "1.3px",
                padding: "10px 0",
                userSelect: "none",
              }}>
              All Categories
            </h3>
            <div className="get__categories-container">
              {categories?.map((category, i) => (
                <div key={category._id} className="categories__screen-category">
                  <div className="get__categories-txt-img">
                    <div className="categories__screen-category-img">
                      <img src={category.images.url} alt="Category" />
                    </div>

                    <div className="categories__screen-category-text">
                      {category.name}
                    </div>
                  </div>

                  <div className="categories__screen-category-btns">
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={(e) => handleDelete(category._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default CreateCategory;
