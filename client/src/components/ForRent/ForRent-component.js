import React from "react";
import Property from "../Property/Property";

import "./styles.scss";

export default function ForRentComponent() {
  return (
    <div id="forrent-houses">
      <h2>For Rent</h2>
      <Property />
      <Property />
      <Property />
    </div>
  );
}
