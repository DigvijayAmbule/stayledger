import React, { useState } from "react";
import DragDropFile from "./DragDropFile";
const Propertyinfo = () => {
  return (
    <div>
      <div className="row mt-3">
        <div className="col-md-5 mb-0">
          <div className="row h-75">
            <h1 className="col-form-label mb-1 pt-0">Property Photo</h1>
            <div className="col h-100">
              <DragDropFile></DragDropFile>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <h1 className="col-form-label mb-1 pt-0">
              Property Info (All Optional)
            </h1>
            <div className="row mb-0">
              <div className="form-group col-md-6 col-sm-12 mb-1">
                <select
                  name="Property Type"
                  className=" form-control form-control-sm form-select pb-0 pt-0 mb-2"
                >
                  <option>Select property type</option>
                  <option>Single family home</option>
                  <option>Duplex</option>
                  <option>Tri-plex</option>
                  <option>Multifamily</option>
                  <option>Raw land</option>
                </select>
              </div>
              <div className="form-group col-md-6 col-sm-12 mb-1">
                <select
                  name="Property Type"
                  className=" form-control form-control-sm form-select pb-0 pt-0 mb-2"
                >
                  <option>Bedrooms</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div className="row mb-0">
              <div className="form-group col-md-6 col-sm-12 mb-2">
                <select
                  name="Property Type"
                  className=" form-control form-control-sm form-select pb-0 pt-0 mb-2"
                >
                  <option>Bathrooms</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="form-group col-md-6 col-sm-12 mb-2">
                <input
                  id="Sq.ft"
                  placeholder="Sq. ft"
                  className="form-control mb-1"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6 col-sm-12 mb-2">
                <input
                  id="Lotsize"
                  placeholder="Lot size"
                  className="form-control mb-1"
                />
              </div>
              <div className="form-group col-md-6 col-sm-12 mb-2">
                <input
                  id="Yearbuilt"
                  placeholder="Year built"
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Propertyinfo;
