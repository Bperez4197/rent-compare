import React from "react";

import "./styles.scss";

export default function Property() {
  return (
    <div className="house-card">
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Farchello.s3.eu-central-1.amazonaws.com%2Fimages%2F2020%2F09%2F20%2Fkevan-hoertdoerfer-architects-black-house-private-houses-archello.1600558270.6177.jpg&f=1&nofb=1"
        alt="house img"
      />
      <div className="house-info">
        <h4>Address: 123 W Charter Oak rd</h4>
        <div className="content">
          <div className="info">
            <h5>Sqft: 1900</h5>
            <h5>Bedrooms: 3</h5>
            <h5>Bathrooms: 2.5</h5>
          </div>
          <div className="money">
            <h5>Nightly Price: $100</h5>
            <h5>Monthly Price: $1500</h5>
            <h5>Cash Flow: $1200</h5>
          </div>
        </div>
        <h5>Description:</h5>
        <p>
          Totally secluded down a long driveway with Catskill views on a large
          farm in Tivoli, this renovated barn is truly 'life off the grid'
          powered by the sun. Main floor has living room with
          fireplace/woodstove insert, dining room, eat-in kitchen, den and
          mudroom. Second level has master, addt. bedroom, 1.5 baths (laundry)
          and office. Enjoy south-facing, pastoral views off the rear deck.
          Minutes to Bard, Tivoli, Red Hook and Rhinebeck. Available furnished
          or unfurnished -- owner does spring/summer/fall grounds maintenance.
        </p>
      </div>
    </div>
  );
}
