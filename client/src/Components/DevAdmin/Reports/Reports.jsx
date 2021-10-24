import React from "react";
import axios from "axios";
import jsPDF from "jspdf";

const Reports = () => {
  const generatePDF = () => {
    console.log("came here");
    var doc = new jsPDF("p", "pt", "a4");
    // console.log("jsPDF:", jsPDF);

    doc.html(document.querySelector("#content"), {
      callback: function (pdf) {
        pdf.save("mypdf.pdf");
      },
    });
    console.log("came here too");
  };

  const arr = [
    "10/23/2021, 1:13:49 PM",
    "10/22/2021, 1:13:49 PM",
    "10/18/2021, 1:13:49 PM",
    "10/12/2021, 1:13:49 PM",
    "10/03/2021, 1:13:49 PM",
    "09/04/2021, 1:13:49 PM",
    "05/09/2021, 1:13:49 PM",
    "03/29/2021, 1:13:49 PM",
    "11/24/2021, 1:13:49 PM",
    "12/09/2021, 1:13:49 PM",
    "05/08/2021, 1:13:49 PM",
    "02/29/2021, 1:13:49 PM",
    "11/26/2021, 1:13:49 PM",
    "12/04/2021, 1:13:49 PM",
    "08/07/2021, 1:13:49 PM",
  ];

  const getDate = () => {
    const date = new Date();
    console.log("date :", date.getMonth());
    const manualDate = "10/20/2021, 1:13:49 PM";
    const mDate = new Date(manualDate);

    // arr.every((item, s) => console.log("item: ", item, " s: ", s));
    var filteredArray = arr.filter(
      (item) => new Date(item).getMonth() < date.getMonth()
    );
    console.log("filtered array: ", filteredArray);

    const check = date > mDate;
    console.log("check if old date is less than date now : ", check);
  };

  const getCode = async (postal) => {
    try {
      const data = await axios.get(`/api/dashboard/onepostalcode/${postal}`);
      console.log("data: ", data);
      // setData(data.data.code);
      return data.data.code;
    } catch (error) {
      console.log("error up: ", error.response);
      // setError(error.response.data.error);
    }
  };

  const handlePostalFind = async () => {
    getCode("52250")
      .then((response) => {
        console.log("response: ", response);
        // setLoading(false);
        // localStorage.setItem("pcl", response.postalCode);
        // setPostalCode(response.postalCode);
      })
      .catch(() => {
        return;
      });
  };

  return (
    <div>
      <button onClick={getDate}>get date</button>
      <button onClick={generatePDF} type="primary">
        Generate Pdf
      </button>
      <br />
      <button
        onClick={handlePostalFind}
        style={{ padding: "20px 40px", margin: "10px" }}>
        get postal
      </button>
    </div>
  );
};

export default Reports;
