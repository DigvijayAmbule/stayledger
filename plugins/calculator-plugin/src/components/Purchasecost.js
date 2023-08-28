import React, { useEffect, useState } from "react";

const Purchasecost = ({
  onPurchasePriceChange,
  onAppraisalFeesChange,
  onSurveysFeesChange,
  onClosingCostsChange,
  onIsClosingCostsAmmountChange,
}) => {
  const [purchasePrice, setPurchasePrice] = useState("");
  const [AppraisalFees, setAppraisalFees] = useState("");
  const [SurveysFees, setSurveysFees] = useState("");
  const [ClosingCosts, setClosingCosts] = useState("");
  const [ClosingCostsInputType, setClosingCostsInputType] = useState(0);

  const formatNumber = (value) => {
    // Remove existing commas and convert to a number
    const numericValue = parseFloat(value.replace(/,/g, ""));

    // Format the number with commas
    return numericValue.toLocaleString("en-US");
  };
  function handleClosingCostsInputType(e) {
    onIsClosingCostsAmmountChange(ClosingCostsInputType ? 0 : 1);
    setClosingCostsInputType(ClosingCostsInputType ? 0 : 1);
  }

  function handlePurchasePrice(e) {
    const val = e.target.value.replace(/\D/g, "");
    setPurchasePrice(val ? formatNumber(val) : "");
    onPurchasePriceChange(val.replace(/,/g, ""));
  }

  function handleAppraisalFees(e) {
    const val = e.target.value.replace(/\D/g, "");
    setAppraisalFees(val ? formatNumber(val) : "");
    onAppraisalFeesChange(val.replace(/,/g, ""));
  }

  function handleSurveysFees(e) {
    const val = e.target.value.replace(/\D/g, "");
    setSurveysFees(val ? formatNumber(val) : "");
    onSurveysFeesChange(val.replace(/,/g, ""));
  }

  function handleClosingCosts(e) {
    const val = e.target.value.replace(/[^\d.]+|(?<=\..*)\./g, "");
    if (ClosingCostsInputType) {
      setClosingCosts(val ? formatNumber(val) : "");
      onClosingCostsChange(val.replace(/,/g, ""));
    } else {
      setClosingCosts(val);
      onClosingCostsChange(val);
    }
  }

  return (
    <div>
      <div className="form-group">
        <h1 htmlFor="PurchaseCost" className="col-form-label mb-1 mt-2">
          Purchase Cost
        </h1>
      </div>
      <div>
        <div className="row">
          <div className="col-md-6 col-sm-12 mb-0">
            <label className="calculator-label" htmlFor="purchasePrice">
              Purchase price
            </label>
            <input
              className="form-control form-control-sm mb-1"
              type="text"
              id="purchasePrice"
              value={purchasePrice}
              onChange={handlePurchasePrice}
              placeholder="$000,000"
            />
          </div>
          <div className="col-md-6 col-sm-12 mb-0">
            <label className="calculator-label" htmlFor="AppraisalFees">
              Appraisal fees
            </label>
            <input
              className="form-control form-control-sm mb-1"
              type="text"
              id="AppraisalFees"
              value={AppraisalFees}
              onChange={handleAppraisalFees}
              placeholder="$000,000"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12 mb-0">
            <label className="calculator-label" htmlFor="SurveysFees">
              Inspection/ surveys fees
            </label>
            <input
              className="form-control form-control-sm mb-1"
              type="text"
              id="SurveysFees"
              value={SurveysFees}
              onChange={handleSurveysFees}
              placeholder="$000,000"
            />
          </div>
          <div className="col-md-6 col-sm-12 mb-0">
            <div className="row justify-content-between">
              <label
                className="col calculator-label"
                htmlFor="PurchaseClosingCosts"
              >
                Closing costs
              </label>
              <div className="col form-check form-switch toggle-button-container">
                <input
                  value={ClosingCostsInputType}
                  onChange={handleClosingCostsInputType}
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="PurchaseClosingCostsSwitchCheckChecked"
                />
              </div>
            </div>
            <input
              className="form-control form-control-sm mb-1"
              type="text"
              id="PurchaseClosingCosts"
              value={ClosingCosts}
              onChange={handleClosingCosts}
              placeholder={ClosingCostsInputType ? "$000,000" : "0.0%"}
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
    </div>
  );
};

export default Purchasecost;
