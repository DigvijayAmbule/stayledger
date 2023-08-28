import React, { useState } from "react";

const Rehabcosts = ({ onMaterialsChange, onContractorChange }) => {
  const [Materials, setMaterials] = useState("");
  const [Contractor, setContractor] = useState("");

  const formatNumber = (value) => {
    // Remove existing commas and convert to a number
    const numericValue = parseFloat(value.replace(/,/g, ""));

    // Format the number with commas
    return numericValue.toLocaleString("en-US");
  };

  function handleMaterials(e) {
    const val = e.target.value.replace(/\D/g, "");
    setMaterials(val ? formatNumber(val) : "");
    onMaterialsChange(val.replace(/,/g, ""));
  }

  function handleContractor(e) {
    const val = e.target.value.replace(/\D/g, "");
    setContractor(val ? formatNumber(val) : "");
    onContractorChange(val.replace(/,/g, ""));
  }

  return (
    <div>
      <div className="form-group">
        <h1 htmlFor="RehabCosts" className="col-form-label mb-1 mt-2">
          Rehab Costs
        </h1>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12 mb-0">
          <label className="calculator-label" htmlFor="Materials">
            Materials
          </label>
          <input
            type="text"
            id="Materials"
            value={Materials}
            onChange={handleMaterials}
            placeholder="$000,000"
            className="form-control form-control-sm mb-1"
          />
        </div>
        <div className="col-md-6 col-sm-12 mb-0">
          <label className="calculator-label" htmlFor="Contractor">
            Contractor / Labor
          </label>
          <input
            type="text"
            id="Contractor"
            value={Contractor}
            onChange={handleContractor}
            placeholder="$000,000"
            className="form-control form-control-sm mb-1"
          />
        </div>
        <small id="passwordHelpBlock" className="form-text text-muted">
          Lorem ipsum dolor sit amet consectetur. Duis varius massa eu donec
          odio adipiscing id quis penatibus. Lectus nec vitae varius tellus
          commodo vel praesent. Eget nisi ornare tristique sapien lorem id
          imperdie.
        </small>
      </div>
    </div>
  );
};

export default Rehabcosts;
