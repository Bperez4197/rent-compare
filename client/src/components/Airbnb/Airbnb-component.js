import React from "react";
import Property from "../Property/Property";

import "./styles.scss";

export default function AirbnbComponent() {
  return (
    <div id="airbnb-houses">
      <h2>Airbnb</h2>
      <Property />
      <Property />
      <Property />
    </div>
  );
}
