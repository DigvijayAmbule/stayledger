import React, { useState } from "react";

const Propertyinfo = () => {
  return (
    <div>
      <div>
        <h1>Property Photo</h1>
      </div>
      <div>
        <h1>Property Info</h1>
        <div>
          <select name="Property Type">
            <option>Select property type</option>
            <option>Single family home</option>
            <option>Duplex</option>
            <option>Tri-plex</option>
            <option>Multifamily</option>
            <option>Raw land</option>
          </select>
          <select name="Property Type">
            <option>Number of bedrooms</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <select name="Property Type">
            <option>Number of bathrooms</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <input placeholder="Sq. ft" />
          <input placeholder="Lot size" />
          <input placeholder="Year built" />
        </div>
      </div>
    </div>
  );
};

export default Propertyinfo;
