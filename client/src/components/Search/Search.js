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
        <input type="text" name="sqft" id="sqft" placeholder="Square Footage" />
      </div>

      {/* Bedroom Label and Input ///////////////////////////////////////////////////////////////////// */}
      <div>
        <label for="bedrooms">Bedrooms: </label>
        <input
          type="text"
          name="bedrooms"
          id="bedrooms"
          placeholder="Number of Bedrooms"
        />
      </div>

      {/* Bathroom Label and Input ///////////////////////////////////////////////////////////////////// */}
      <div>
        <label for="bathrooms">Bathrooms: </label>
        <input
          type="text"
          name="bathrooms"
          id="bathrooms"
          placeholder="Number of Bathrooms"
        />
      </div>
    </div>
  );
}
