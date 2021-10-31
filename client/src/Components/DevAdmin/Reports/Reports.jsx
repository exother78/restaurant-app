import React, { useState } from "react";
import jsPDF from "jspdf";

const Reports = () => {
  const [array, setArray] = useState([]);
  const generatePDF = async () => {
    await getDate();
    var doc = new jsPDF("p", "pt", "a4");

    doc.html(document.querySelector("#content"), {
      callback: function (pdf) {
        pdf.save("mypdf.pdf");
      },
    });
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

  const getDate = async () => {
    const date = new Date();
    console.log("date :", date.getMonth());
    const manualDate = "10/20/2021, 1:13:49 PM";
    const mDate = new Date(manualDate);

    // arr.every((item, s) => console.log("item: ", item, " s: ", s));
    var filteredArray = await arr.filter(
      (item) => new Date(item).getMonth() < date.getMonth()
    );
    console.log("filtered array: ", filteredArray);
    await setArray(filteredArray);

    const check = date > mDate;
    console.log("check if old date is less than date now : ", check);
  };
  console.log("array: ", array);

  return (
    <div>
      <button onClick={getDate}>get date</button>
      <button onClick={generatePDF} type="primary">
        Generate Pdf
      </button>
      <br />

      <div id="content">
        <h3>something in here</h3>
        {array.map((item) => (
          <h3>{item}</h3>
        ))}
      </div>
    </div>
  );
};

export default Reports;
