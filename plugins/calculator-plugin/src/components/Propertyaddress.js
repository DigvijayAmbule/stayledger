import React, { useState } from "react";

const Propertyaddress = () => {
  const [usStates, setUsStates] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  function handleUsStates(e) {
    const val = e.target.value;
    setUsStates(val);
  }

  function handleZipcode(e) {
    const val = e.target.value;
    setZipcode(val);
  }
  function handleAddress(e) {
    const val = e.target.value;
    setAddress(val);
  }

  function handleCity(e) {
    const val = e.target.value;
    setCity(val);
  }
  return (
    <>
      <div className="form-group">
        <h1 htmlFor="inputAddress" className="col-form-label mb-1 mt-2">
          Property Address
        </h1>
        <input
          placeholder="Enter Address"
          value={address}
          onChange={handleAddress}
          className="form-control form-control-sm"
        />
      </div>

      <div className="row mt-2">
        <div className="form-group col">
          <input
            placeholder="city"
            value={city}
            onChange={handleCity}
            className="form-control form-control-sm"
          />
        </div>
        <div className="form-group col">
          <select
            name="us-states"
            value={usStates}
            onChange={handleUsStates}
            id="us-states"
            className="form-control form-control-sm"
          >
            <option value="">Select a state</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </div>
        <div className="form-group col">
          <input
            value={zipcode}
            onChange={handleZipcode}
            placeholder="zipcode"
            className="form-control form-control-sm"
          />
        </div>
      </div>
    </>
  );
};

export default Propertyaddress;
