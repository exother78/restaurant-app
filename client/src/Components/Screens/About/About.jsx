import React from "react";
import Footer from "./../Home/Sections/Footer";
import "./About.css";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import FacebookIcon from "../../Images/facebookicon.png";
import InstagramIcon from "../../Images/instagramicon.png";
import TripAdvisorIcon from "../../Images/tripadvisor.png";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import logo from '../Header/newlogoblack.png'

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about__frontImg">
          <div className="about__frontImg-text">
            <h1>Get your favourite extra delicious food or Book table now!</h1>
          </div>
        </div>
        <div className="about__content">
          <br />
          <h3>
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

        <div className="about__details">
          <div className="about__logo-name">
            <img
              className="about__details-logoImg"
              src={logo}
              alt=""
              width="280"
            />
            <div className="about__details-field">
              <h3>Pakistani Indian Shahì Restaurant</h3>
            </div>
          </div>

          <div className="about__details-flex">
            <div className="about__details-flex-field">
              <div className="about__details-flex-field-icon">
                <FmdGoodRoundedIcon className="about__details-flex-field-icon-svg" />
              </div>
              <p>Via Carpi Ravarino 124/126 41019 Soliera (MO)</p>
            </div>
            <div className="about__details-flex-field">
              <div className="about__details-flex-field-icon">
                <EmailRoundedIcon className="about__details-flex-field-icon-svg" />
              </div>
              <p>ristorante.shahi@gmail.com</p>
            </div>
            <div className="about__details-flex-field">
              <div className="about__details-flex-field-icon">
                <PhoneRoundedIcon className="about__details-flex-field-icon-svg" />
              </div>
              <p>+39 059 3968633</p>
            </div>
            <div className="about__details-flex-field">
              <div className="about__details-flex-field-icon">
                <CancelRoundedIcon className="about__details-flex-field-icon-svg" />
              </div>
              <p>
                <span>Monday:</span> <span>Closed</span>
              </p>
            </div>

            <div className="about__details-flex-field">
              <div className="about__details-flex-field-icon">
                <FmdGoodRoundedIcon className="about__details-flex-field-icon-svg" />
              </div>
              <p>
                <span>Tue - Sun:</span> <span>7:00 AM - 11:00 PM</span>
              </p>
            </div>

            <div className="about__details-flex-field socialIcons">
              <a href="https://www.facebook.com/shahiristorante">
                <img src={FacebookIcon} alt="" className="socialLinksIcons" />
              </a>
              <a href="https://www.instagram.com/shahi_ristorante/">
                <img src={InstagramIcon} alt="" className="socialLinksIcons" />
              </a>
              <a href="https://www.tripadvisor.it/Restaurant_Review-g1931037-d15662862-Reviews-Shahi_Ristorante_Pizzeria-Soliera_Province_of_Modena_Emilia_Romagna.html">
                <img
                  src={TripAdvisorIcon}
                  alt=""
                  className="socialLinksIcons"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
