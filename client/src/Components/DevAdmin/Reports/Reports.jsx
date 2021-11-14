import React, { useState } from "react";
import jsPDF from "jspdf";
import axios from "axios";
import "./Reports.css";

const Reports = () => {
  const [error, setError] = useState(null);
  const [array, setArray] = useState([]);
  const [showContent, setShowContent] = useState(false);
  const generatePDF = async () => {
    // await getDate();
    var doc = new jsPDF("p", "pt", "a4");

    doc.html(document.querySelector("#content"), {
      callback: function (pdf) {
        pdf.save("mypdf.pdf");
      },
    });
  };

  // const arr = [
  //   "10/23/2021, 1:13:49 PM",
  //   "10/22/2021, 1:13:49 PM",
  //   "10/18/2021, 1:13:49 PM",
  //   "10/12/2021, 1:13:49 PM",
  //   "10/03/2021, 1:13:49 PM",
  //   "09/04/2021, 1:13:49 PM",
  //   "05/09/2021, 1:13:49 PM",
  //   "03/29/2021, 1:13:49 PM",
  //   "11/24/2021, 1:13:49 PM",
  //   "12/09/2021, 1:13:49 PM",
  //   "05/08/2021, 1:13:49 PM",
  //   "02/29/2021, 1:13:49 PM",
  //   "11/26/2021, 1:13:49 PM",
  //   "12/04/2021, 1:13:49 PM",
  //   "08/07/2021, 1:13:49 PM",
  // ];

  // const getDate = async () => {
  //   const date = new Date();

  //   console.log("check date: ", date < new Date(arr[0]));
  //   // console.log("date :", date.getMonth());
  //   const manualDate = "10/20/2021, 1:13:49 PM";
  //   var filteredArray = await arr.filter(
  //     (item) => new Date(item).getMonth() < date.getMonth()
  //   );
  //   await setArray(filteredArray);
  // };

  const getReport = async (month) => {
    try {
      const report = await axios.get("/api/dashboard/reports/11");
      setArray(report.data.array);
      setShowContent(true);
      return report;
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  if (error) {
    setTimeout(() => {
      setError(null);
    }, 2000);
  }

  return (
    <div className="dashboard__reports">
      {error && <div className="error__box">{error}</div>}

      <div className="dashboard__reports-buttons">
        {/* <button>get date</button> */}
        <button onClick={generatePDF} type="primary">
          Generate Pdf
        </button>
        <br />

        <button onClick={getReport}>Get report of November</button>
      </div>

      <div
        id="content"
        style={{ visibility: showContent ? "visible" : "hidden" }}>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>email</th>
              <th>amount</th>
            </tr>
          </thead>
          <tbody>
            {array.map((item, i) => (
              <tr key={i}>
                <td style={{ textTransform: "capitalize" }}>
                  {item.name + " " + item.lastName}
                </td>
                <td>{item?.email}</td>
                <td>{item?.total}</td>
              </tr>
            ))}
            <tr>
              <td>Total</td>
              <td
                colSpan={2}
                style={{
                  textAlign: "right",
                  paddingRight: "60px",
                  fontSize: "larger",
                }}>
                {76 * 3}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
