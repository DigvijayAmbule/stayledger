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

  const formatNumber = (value) => {
    // Remove existing commas and convert to a number
    const numericValue = parseFloat(value.replace(/,/g, ""));

    // Format the number with commas
    return numericValue.toLocaleString("en-US");
  };

  function handlePropertyTaxes(e) {
    const val = e.target.value.replace(/\D/g, "");
    setPropertyTaxes(val ? formatNumber(val) : "");
    onPropertyTaxesChange(val.replace(/,/g, ""));
  }

  function handleInsurance(e) {
    const val = e.target.value.replace(/\D/g, "");
    setInsurance(val ? formatNumber(val) : "");
    onInsuranceChange(val.replace(/,/g, ""));
  }

  function handleUtilities(e) {
    const val = e.target.value.replace(/\D/g, "");
    setUtilities(val ? formatNumber(val) : "");
    onUtilitiesChange(val.replace(/,/g, ""));
  }

  function handleOther(e) {
    const val = e.target.value.replace(/\D/g, "");
    setOther(val ? formatNumber(val) : "");
    onOtherChange(val.replace(/,/g, ""));
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
          <div className="col-md-6 col-sm-12 mb-0">
            <label className="calculator-label" htmlFor="PropertyTaxes">
              Property taxes
            </label>
            <input
              type="text"
              id="PropertyTaxes"
              value={propertyTaxes}
              onChange={handlePropertyTaxes}
              placeholder="$000,000"
              className="form-control form-control-sm mb-1"
            />
          </div>

          <div className="col-md-6 col-sm-12 mb-0">
            <label className="calculator-label" htmlFor="Insurance">
              Insurance
            </label>
            <input
              type="text"
              id="Insurance"
              value={insurance}
              onChange={handleInsurance}
              placeholder="$000,000"
              className="form-control form-control-sm mb-1"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12 mb-0">
            <label className="calculator-label" htmlFor="Utilities">
              Utilities
            </label>
            <input
              type="text"
              id="Utilities"
              value={utilities}
              onChange={handleUtilities}
              placeholder="$000,000"
              className="form-control form-control-sm mb-1"
            />
          </div>

          <div className="col-md-6 col-sm-12 mb-0">
            <label className="calculator-label" htmlFor="Other">
              Other
            </label>
            <input
              type="text"
              id="Other"
              value={other}
              onChange={handleOther}
              placeholder="$000,000"
              className="form-control form-control-sm mb-1"
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
