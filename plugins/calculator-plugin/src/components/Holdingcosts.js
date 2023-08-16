import React, { useState } from "react";

const Holdingcosts = ({
  onPropertyTaxesChange,
  onInsuranceChange,
  onUtilitiesChange,
  onOtherChange,
}) => {
  const [propertyTaxes, setPropertyTaxes] = useState("");
  const [insurance, setInsurance] = useState("");
  const [utilities, setUtilities] = useState("");
  const [other, setOther] = useState("");

  function handlePropertyTaxes(e) {
    const val = e.target.value;
    setPropertyTaxes(val);
    onPropertyTaxesChange(val);
  }

  function handleInsurance(e) {
    const val = e.target.value;
    setInsurance(val);
    onInsuranceChange(val);
  }

  function handleUtilities(e) {
    const val = e.target.value;
    setUtilities(val);
    onUtilitiesChange(val);
  }

  function handleOther(e) {
    const val = e.target.value;
    setOther(val);
    onOtherChange(val);
  }

  return (
    <div>
      <div className="form-group">
        <h1 htmlFor="HoldingCosts" className="col-form-label mb-1 mt-2">
        Holding Costs
        </h1>
      </div>
      <div>
        <div className="row">
          <div className="col">
            <label htmlFor="">Property taxes</label>
            <input
              type="text"
              id="PropertyTaxes"
              value={propertyTaxes}
              onChange={handlePropertyTaxes}
              placeholder="$000,000"
              className="form-control form-control-sm"
            />
          </div>

          <div className="col">
            <label htmlFor="">Insurance</label>
            <input
              type="text"
              id="Insurance"
              value={insurance}
              onChange={handleInsurance}
              placeholder="$000,000"
              className="form-control form-control-sm"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="">Utilities</label>
            <input
              type="text"
              id="Utilities"
              value={utilities}
              onChange={handleUtilities}
              placeholder="$000,000"
              className="form-control form-control-sm"
            />
          </div>

          <div className="col">
            <label htmlFor="">Other</label>
            <input
              type="text"
              id="Other"
              value={other}
              onChange={handleOther}
              placeholder="$000,000"
              className="form-control form-control-sm"
            />
          </div>
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

export default Holdingcosts;
