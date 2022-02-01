import React from "react";
import Property from "../Property/Property";

import "./styles.scss";

export default function ForSaleComponent() {
  return (
    <div id="forsale-houses">
      <h2>For Sale</h2>
      <Property />
      <Property />
      <Property />
    </div>
  );
}
