import React from "react";
import GoogleMapReact from "google-map-react";
import "./Location.css";
import Footer from './../Home/Sections/Footer';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SimpleMap = () => {
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  // const findLocation = (position) => {
  //   console.log(position.coords);
  // };

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(findLocation);
  // });

  return (
    // Important! Always set the container height explicitly
    <>
      <div className="main__location-screen">
        <div className="main__location-section">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyDJDYdZMb9a5MRNY2Lv9iK_Kw48-JBJGD8" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}>
            <AnyReactComponent
              lat={32.163333900000005}
              lng={74.19248639999999}
              text="Locate"
            />
          </GoogleMapReact>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SimpleMap;
