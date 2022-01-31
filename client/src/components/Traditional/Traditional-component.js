import React from "react";
import Property from "../Property/Property";

import "./styles.scss";

export default function TraditionalComponent() {
  return (
    <div id="traditional-houses">
      <h2>Traditonal</h2>
      <Property />
      <Property />
      <Property />
    </div>
  );
}
