import React, { useState } from "react";

const Rehabcosts = ({ onMaterialsChange, onContractorChange }) => {
  const [Materials, setMaterials] = useState("");
  const [Contractor, setContractor] = useState("");

  function handleMaterials(e) {
    const val = e.target.value.replace(/\D/g, "");
    setMaterials(val);
    onMaterialsChange(val);
  }

  function handleContractor(e) {
    const val = e.target.value.replace(/\D/g, "");
    setContractor(val);
    onContractorChange(val);
  }

  return (
    <div>
      <div className="form-group">
        <h1 htmlFor="RehabCosts" className="col-form-label mb-1 mt-2">
          Rehab Costs
        </h1>
      </div>
      <div className="row">
        <div className="col">
          <label className="calculator-label" htmlFor="Materials">
            Materials
          </label>
          <input
            type="text"
            id="Materials"
            value={Materials}
            onChange={handleMaterials}
            placeholder="$000,000"
            className="form-control form-control-sm"
          />
        </div>
        <div className="col">
          <label className="calculator-label" htmlFor="Contractor">
            Contractor / Labor
          </label>
          <input
            type="text"
            id="Contractor"
            value={Contractor}
            onChange={handleContractor}
            placeholder="$000,000"
            className="form-control form-control-sm"
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
