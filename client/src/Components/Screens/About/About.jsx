import React from "react";
import Footer from "./../Home/Sections/Footer";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about__frontImg">
          <div className="about__frontImg-text">
            <h1>Get your favourite extra delicious food or Book table now!</h1>
          </div>
        </div>
        <div
          className="about__content"
          style={{ background: "#ccc", width: "100%" }}>
          <div
            className="about__content"
            style={{
              minHeight: "50vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              lineHeight: "1.2",
              fontFamily: "Montserrat",
              margin: "5px auto",
              width: "65vw",
              color: "rgb(54, 52, 52)",
            }}>
            <h1 style={{ fontFamily: "Montserrat" }}>
              This is the content Heading
            </h1>
            <br />
            <h3
              style={{
                fontFamily: "Montserrat",
                textAlign: "center",
                padding: "0 30px",
                lineHeight: "1.4",
                fontSize: "1.1rem",
              }}>
              If you want to immerse yourself in new and particular flavors,
              choose our Shahì restaurant in Soliera, in the province of Modena.
              We specialize in offering the best specialties of Indian and
              Pakistani cuisine based on rice, meat, vegetables, spices and
              legumes, but not only.
              <br />
              <br />
              We are also a pizzeria with a menu full of classic and original
              proposals, filled with always fresh ingredients of Emilian
              preference. Contact us to book a table or to request our take-away
              or home delivery ethnic cuisine.
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
