import React, { useState } from "react";

const Propertyinfo = () => {
  return (
    <div>
      <div className="form-group">
        <h1 className="col-form-label mb-1 mt-2">
          Property Info (All Optional)
        </h1>
        <div className="row">
          <div className="form-group col-md-4">
            <select
              name="Property Type"
              className="form-control form-control-sm"
            >
              <option>Select property type</option>
              <option>Single family home</option>
              <option>Duplex</option>
              <option>Tri-plex</option>
              <option>Multifamily</option>
              <option>Raw land</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <select
              name="Property Type"
              className="form-control form-control-sm"
            >
              <option>Number of bedrooms</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <select
              name="Property Type"
              className="form-control form-control-sm"
            >
              <option>Number of bathrooms</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <label htmlFor="inputAddress" className="col-form-label">
              Property Photo
            </label>
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="form-group col-md-4">
                <input
                  placeholder="Sq. ft"
                  className="form-control form-control-sm"
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  placeholder="Lot size"
                  className="form-control form-control-sm"
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  placeholder="Year built"
                  className="form-control form-control-sm"
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
