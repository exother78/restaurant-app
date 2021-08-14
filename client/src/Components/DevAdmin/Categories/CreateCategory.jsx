import axios from "axios";
import React, { useState } from "react";
import "./CreateCategory.css";
import { useStateValue } from "../../../StateProvider";
import Loading from "../../Screens/Global/Loading";

const CreateCategory = () => {
  const { categoriesAPI, userAPI, token } = useStateValue();
  const [categories] = categoriesAPI.categories;
  const [callback, setCallback] = categoriesAPI.callback;
  const [isAdmin] = userAPI.isAdmin;

  const [categoryForm, setCategoryForm] = useState({
    name: "",
    images: "",
  });

  const [fileImage, setFileImage] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [loading, setLoading] = useState(false);
  const [createCategoryLoading, setCreateCategoryLoading] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const [catid, setCatid] = useState("");

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

  const upload = async () => {
    try {
      if (isAdmin) {
        const res = await axios.post("/api/upload", imageUpload, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token[0]}`,
          },
        });

        return res;
      }
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCreateCategoryLoading(true);

    // const upload = async () => {
    //   try {
    //     const res = await axios.post("/api/upload", imageUpload, {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     });

    //     return res;
    //   } catch (error) {
    //     console.log(error.response.data.error);
    //   }
    // };

    const categoryUpload = async (d) => {
      try {
        if (d) {
          const res = await axios.post(
            "/api/category",
            {
              ...categoryForm,
              images: { public_id: d.data.public_id, url: d.data.url },
            },
            {
              headers: {
                Authorization: `Bearer ${token[0]}`,
              },
            }
          );

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
          const res = await axios.post(
            "/api/category",
            {
              ...categoryForm,
            },
            {
              headers: {
                Authorization: `Bearer ${token[0]}`,
              },
            }
          );

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

  const deleteCategoryImage = async (pub_id) => {
    try {
      if (pub_id) {
        await axios.post(
          "/api/destroy",
          {
            public_id: pub_id,
          },
          {
            headers: {
              Authorization: `Bearer ${token[0]}`,
            },
          }
        );
      }

      if (!pub_id) {
        await axios.post(
          "/api/destroy",
          {
            public_id: categoryForm.images.public_id,
          },
          {
            headers: {
              Authorization: `Bearer ${token[0]}`,
            },
          }
        );
      }
      // console.log("delete Image ran: and data ", res);
    } catch (err) {
      console.log("delete category image error: ", err.response.data);
    }
  };

  const clearAll = () => {
    setOnEdit(false);
    setCreateCategoryLoading(false);
    setCallback(!callback);
    setFileImage(null);
    setImageUpload(null);
    setCategoryForm({ images: "", name: "" });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setCreateCategoryLoading(true);

    const categoryUpdate = async (y) => {
      try {
        if (y) {
          await axios.patch(
            `/api/category/${catid}`,
            {
              name: categoryForm.name,
              images: { public_id: y.data.public_id, url: y.data.url },
            },
            {
              headers: {
                Authorization: `Bearer ${token[0]}`,
              },
            }
          );
          clearAll();
          return;
        }
        if (!y) {
          await axios.patch(
            `/api/category/${catid}`,
            {
              name: categoryForm.name,
              images: categoryForm.images,
            },
            {
              headers: {
                Authorization: `Bearer ${token[0]}`,
              },
            }
          );
          clearAll();
          return;
        }
      } catch (err) {
        console.log("categoryUpdate error: ");
        return;
      }
    };

    if (imageUpload) {
      deleteCategoryImage().then(upload).then(categoryUpdate);
    }
    if (!imageUpload) {
      categoryUpdate();
    }
  };

  const handleEdit = (category) => {
    setOnEdit(true);
    setCategoryForm({
      ...categoryForm,
      images: category.images,
      name: category.name,
    });
    setFileImage(category.images.url);
    setCatid(category._id);
  };

  const handleDelete = async (category, e) => {
    setLoading(true);

    const deleteCategory = async () => {
      return await axios.delete(`/api/category/${category._id}`, {
        headers: {
          Authorization: `Bearer ${token[0]}`,
        },
      });
    };
    try {
      // const res = await axios.delete(`/api/category/${id}`);
      // Promise.resolve(res).then(() => {
      //   setCallback(!callback);
      //   setLoading(false);
      //   return;
      // });

      deleteCategoryImage(category.images.public_id)
        .then(deleteCategory)
        .then(() => {
          setCallback(!callback);
          setLoading(false);
          return;
        });
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  if (!categories) return <Loading />;
  if (categories) {
    return (
      <div className="categories__screen">
        {createCategoryLoading ? (
          <Loading />
        ) : (
          <div className="create__category">
            <form onSubmit={onEdit ? handleEditSubmit : handleSubmit}>
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

              {onEdit ? (
                <button className="category__submit-button" type="submit">
                  Update
                </button>
              ) : (
                <button className="category__submit-button" type="submit">
                  Submit
                </button>
              )}
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
                    <button onClick={(e) => handleEdit(category)}>Edit</button>
                    <button onClick={(e) => handleDelete(category)}>
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
