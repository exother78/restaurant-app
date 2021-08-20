import React, { useEffect, useState } from "react";

import axios from "axios";
import Loading from "./../../Screens/Global/Loading";
import PostalCodeBox from "./PostalCodeBox/PostalCodeBox";

const PostalCodes = () => {
  const [createModalActive, setCreateModalActive] = useState(true);
  const [modalActive, setModalActive] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [allOffline, setAllOffline] = useState(false);
  const [error, setError] = useState("");
  const [codes, setCodes] = useState(null);
  const [showButtons, setShowButtons] = useState(false);
  const [callback, setCallback] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [postalData, setPostalData] = useState({
    postalCode: "",
    minOrder: "",
    deliveryPrice: "",
    estimatedTime: "",
  });

  const postalDataInit = () => {
    setPostalData({
      postalCode: "",
      minOrder: "",
      deliveryPrice: "",
      estimatedTime: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setPostalData((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const closeModal = () => {
    if (modalActive) {
      setModalActive(false);
      setEditModal(false);
      postalDataInit();
    }
  };

  const handlePostalCodeSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios
        .post("/api/dashboard/postalcodes", {
          ...postalData,
          active: createModalActive,
        })
        .then(() => {
          postalDataInit();
          closeModal();
          setCallback(!callback);
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
      setError(error.response.data.error);
    }
  };

  const handlePostalCodeUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios
        .patch(`/api/dashboard/postalcodes/${updateId}`, {
          ...postalData,
          active: createModalActive,
        })
        .then(() => {
          postalDataInit();
          closeModal();
          setCallback(!callback);
        });
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  useEffect(() => {
    const getCodes = async () => {
      try {
        return await axios.get("/api/dashboard/postalcodes");
      } catch (error) {
        setError(error.response.data.error);
      }
    };

    getCodes().then((response) => {
      setCodes(response.data.codes);
    });
  }, [callback]);

  useEffect(() => {
    if (modalActive) {
      const modal = document.querySelector(".create__postalCode-modal");

      document.onclick = (e) => {
        if (e.target === modal) {
          setModalActive(false);
          setEditModal(false);
          postalDataInit();
        }
      };
    }
  }, [modalActive]);

  if (loading) return <Loading />;

  return (
    <div className="manage__postalCodes">
      {error}

      <div className="manage__postalCodes-headers">
        <div className="postalCode__box-sec">
          <span className="postalCode__box-title">total postal codes</span>
          <span className="postalCode__box-value">20</span>
        </div>
        <div className="postalCode__box-sec">
          <span className="postalCode__box-title">active postal codes</span>
          <span className="postalCode__box-value">8/20</span>
        </div>
        <div className="postalCode__box-status-sec">
          <span className="postalCode__box-status-text">Status</span>
          <span
            className="postalCode__box-status"
            style={{
              background: allOffline ? "rgb(245, 41, 41)" : "#47a851",
              boxShadow: allOffline
                ? "0 0 15px 3px rgb(233, 32, 32)"
                : "0 0 15px 3px rgb(6, 167, 6)",
            }}></span>
        </div>
      </div>

      <div className="create__postalCode">
        <button
          className="create__postalCode-button"
          onClick={() => setShowButtons(!showButtons)}>
          Delete / Edit
        </button>
        <button
          className="create__postalCode-button"
          onClick={() => setModalActive(true)}>
          Add New
        </button>
      </div>

      <div
        className="postalCode__modalMain"
        style={{ display: modalActive ? "block" : "none" }}>
        <div className="create__postalCode-modal">
          <div className="postalCode__closeBtn" onClick={closeModal}>
            X
          </div>
          <form
            className="create__postalCode-modal-container"
            onSubmit={
              editModal ? handlePostalCodeUpdate : handlePostalCodeSubmit
            }>
            <label htmlFor="postalCode">Postal Code</label>
            <input
              name="postalCode"
              value={postalData.postalCode}
              onChange={handleInputChange}
              type="number"
              placeholder="Enter Postal Code"
              className="create_postalCode-modal-input"
            />

            <label htmlFor="minOrder">Minimum Order</label>
            <input
              name="minOrder"
              value={postalData.minOrder}
              onChange={handleInputChange}
              type="number"
              placeholder="Minimum Order"
              className="create_postalCode-modal-input"
            />

            <label htmlFor="deliveryPrice">Delivery Price</label>
            <input
              name="deliveryPrice"
              value={postalData.deliveryPrice}
              onChange={handleInputChange}
              type="number"
              placeholder="Delivery Price"
              className="create_postalCode-modal-input"
            />

            <label htmlFor="estimatedTime">Estimated Time</label>
            <input
              name="estimatedTime"
              value={postalData.estimatedTime}
              onChange={handleInputChange}
              type="number"
              placeholder="Estimated Time"
              className="create_postalCode-modal-input"
            />
            <div className="postalCode__box-btn-sec">
              <button
                type="button"
                onClick={() => setCreateModalActive(true)}
                style={{
                  background: createModalActive ? "green" : "#ddd",
                  color: createModalActive ? "white" : "black",
                }}>
                active
              </button>
              <button
                type="button"
                onClick={() => setCreateModalActive(false)}
                style={{
                  background: !createModalActive ? "red" : "#ddd",
                  color: !createModalActive ? "white" : "black",
                }}>
                offline
              </button>
            </div>
            {editModal ? (
              <div className="create__modal-submit">
                <button
                  type="submit"
                  className="create__modal-submit-button 
              create__postalCode-button">
                  Update
                </button>
              </div>
            ) : (
              <div className="create__modal-submit">
                <button
                  type="submit"
                  className="create__modal-submit-button 
                create__postalCode-button">
                  Submit
                </button>
              </div>
            )}
          </form>
        </div>
      </div>

      {codes ? (
        codes?.map((postalCode) => (
          <PostalCodeBox
            key={postalCode._id}
            {...postalCode}
            showButtons={showButtons}
            setCallback={setCallback}
            postalData={postalData}
            setPostalData={setPostalData}
            setModalActive={setModalActive}
            setCreateModalActive={setCreateModalActive}
            setEditModal={setEditModal}
            setUpdateId={setUpdateId}
          />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default PostalCodes;
