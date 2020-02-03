import React, { useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import PropTypes from "prop-types";

import "./MapISSlocation.scss";

const styles = {
  gridColumnStart: 1,
  gridColumnEnd: 1,
  gridRowStart: 1,
  gridRowEnd: 1,
  width: "798px",
  height: "597px",
  borderRadius: "5px",
};

function MapISSlocation({ errorISSlocation, loadData, ISSlocation, google }) {
  useEffect(() => {
    if (!ISSlocation) {
      loadData("ISSlocation", "http://api.open-notify.org/iss-now.json");
    }
    const timer = setTimeout(() => {
      loadData("ISSlocation", "http://api.open-notify.org/iss-now.json");
    }, 5000);
    return () => clearTimeout(timer);
  }, [ISSlocation, loadData]);

  if (errorISSlocation) {
    return (
      <>
        <div className={"ISSlocation__title"}>
          <h1>error name: {errorISSlocation.toString()}</h1>
        </div>
        <div className={"ISSlocation__infoText"}>
          <h1>can't load map(( <br/> error name: {errorISSlocation.toString()}</h1>
        </div>
      </>
    );
  }

  if (!ISSlocation) {
    return (
      <>
        <div className={"ISSlocation__title"}>
          <h1>Loading...</h1>
        </div>
        <div className={"ISSlocation__infoText"} style={styles}>
          <h1>Loading...</h1>
        </div>
      </>
    );
  }

  const { latitude, longitude } = ISSlocation.iss_position;

  return (
    <>
      <div className={"ISSlocation__title"}>
        <b>ISS is now located at:</b>
        <p>{`latitude ${latitude}, longitude ${longitude}`}</p>
      </div>
      <div className={"ISSlocation__map"}>
        <Map
          google={google}
          zoom={10}
          style={styles}
          initialCenter={{ lat: latitude, lng: longitude }}
        >
          <Marker position={{ lat: latitude, lng: longitude }} />
        </Map>
      </div>
    </>
  );
}

MapISSlocation.propTypes = {
  error: PropTypes.string,
  loadData: PropTypes.func.isRequired,
  ISSlocation: PropTypes.object
};

const LoadingContainer = () => <div>loading...</div>;

export default GoogleApiWrapper({
  apiKey: "AIzaSyCCtSbr_ijznQUZyg_wyYM-5R4Jc3PejFU",
  LoadingContainer: LoadingContainer
})(MapISSlocation);
