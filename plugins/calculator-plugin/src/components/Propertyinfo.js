import React, { useState } from "react";
import DragDropFile from "./DragDropFile";
const Propertyinfo = () => {
  return (
    <div>
      <div className="row mt-3">
        <div className="col-md-5 mb-0">
          <DragDropFile></DragDropFile>
        </div>
        <div className="col">
          <div className="form-group">
            <h1 className="col-form-label mb-1 pt-0">
              Property Info (All Optional)
            </h1>
            <div className="row mb-3">
              <div className="form-group col">
                <select name="Property Type" className="form-control">
                  <option>Select property type</option>
                  <option>Single family home</option>
                  <option>Duplex</option>
                  <option>Tri-plex</option>
                  <option>Multifamily</option>
                  <option>Raw land</option>
                </select>
              </div>
              <div className="form-group col">
                <select name="Property Type" className="form-control">
                  <option>Bedrooms</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="form-group col">
                <select name="Property Type" className="form-control">
                  <option>Bathrooms</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="form-group col">
                <input id="Sq.ft" placeholder="Sq. ft" className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="form-group col">
                <input id="Lotsize" placeholder="Lot size" className="form-control" />
              </div>
              <div className="form-group col">
                <input id="Yearbuilt" placeholder="Year built" className="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Propertyinfo;
