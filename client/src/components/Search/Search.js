import React from "react";

import "./styles.scss";

export default function Search() {
  return (
    <div id="search">
      {/* City Label and Input ///////////////////////////////////////////////////////////////////// */}
      <div>
        <label for="city">City: </label>
        <input type="search" name="city" id="city" placeholder="City Name" />
      </div>

      {/* State Label and Input ///////////////////////////////////////////////////////////////////// */}
      <div>
        <label for="stateList">State: </label>
        <select name="stateList" id="stateList">
          <option value="AL">AL</option>
          <option value="AK">AK</option>
          <option value="AZ" selected>
            AZ
          </option>
          <option value="AR">AR</option>
          <option value="CA">CA</option>
          <option value="CO">CO</option>
          <option value="CT">CT</option>
          <option value="DE">DE</option>
          <option value="FL">FL</option>
          <option value="GA">GA</option>
          <option value="HI">HI</option>
          <option value="ID">ID</option>
          <option value="IL">IL</option>
          <option value="IN">IN</option>
          <option value="IA">IA</option>
          <option value="KS">KS</option>
          <option value="KY">KY</option>
          <option value="LA">LA</option>
          <option value="ME">ME</option>
          <option value="MD">MD</option>
          <option value="MA">MA</option>
          <option value="MI">MI</option>
          <option value="MN">MN</option>
          <option value="MS">MS</option>
          <option value="MO">MO</option>
          <option value="MT">MT</option>
          <option value="NE">NE</option>
          <option value="NV">NV</option>
          <option value="NH">NH</option>
          <option value="NJ">NJ</option>
          <option value="NM">NM</option>
          <option value="NY">NY</option>
          <option value="NC">NC</option>
          <option value="ND">ND</option>
          <option value="OH">OH</option>
          <option value="OK">OK</option>
          <option value="OR">OR</option>
          <option value="PA">PA</option>
          <option value="RI">RI</option>
          <option value="SC">SC</option>
          <option value="SD">SD</option>
          <option value="TN">TN</option>
          <option value="TX">TX</option>
          <option value="UT">UT</option>
          <option value="VT">VT</option>
          <option value="VA">VA</option>
          <option value="WA">WA</option>
          <option value="WV">WV</option>
          <option value="WI">WI</option>
          <option value="WY">WY</option>
        </select>
      </div>

      {/* Square Footage Label and Input ///////////////////////////////////////////////////////////////////// */}
      <div>
        <label for="sqft">Sqft: </label>
        <select name="sqft" id="sqft">
          <option value="any" selected disabled invisible>
            Any
          </option>
          <option value="750+">750+</option>
          <option value="1000+">1000+</option>
          <option value="1250+">1250+</option>
          <option value="1500+">1500+</option>
          <option value="1750+">1750+</option>
          <option value="2000+">2000+</option>
          <option value="2250+">2250+</option>
          <option value="2500+">2500+</option>
          <option value="2750+">2750+</option>
          <option value="3000+">3000+</option>
          <option value="3250+">3250+</option>
          <option value="3500+">3500+</option>
          <option value="3750+">3750+</option>
          <option value="5000+">5000+</option>
          <option value="7500+">7500+</option>
        </select>
      </div>

      {/* Bedroom Label and Input ///////////////////////////////////////////////////////////////////// */}
      <div>
        <label for="bedrooms">Bedrooms: </label>
        <select name="bedrooms" id="bedrooms">
          <option value="any" selected disabled invisible>
            Any
          </option>
          <option value="1+">1+</option>
          <option value="2+">2+</option>
          <option value="3+">3+</option>
          <option value="4+">4+</option>
          <option value="5+">5+</option>
        </select>
      </div>

      {/* Bathroom Label and Input ///////////////////////////////////////////////////////////////////// */}
      <div>
        <label for="bathrooms">Bathrooms: </label>
        <select name="bathrooms" id="bathrooms">
          <option value="any" selected disabled invisible>
            Any
          </option>
          <option value="1+">1+</option>
          <option value="2+">2+</option>
          <option value="3+">3+</option>
          <option value="4+">4+</option>
          <option value="5+">5+</option>
        </select>
      </div>
    </div>
  );
}
