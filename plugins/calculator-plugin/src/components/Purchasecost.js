import React, { useState } from "react";

const Purchasecost = ({
  onPurchasePriceChange,
  onAppraisalFeesChange,
  onSurveysFeesChange,
  onClosingCostsChange,
}) => {
  const [purchasePrice, setPurchasePrice] = useState("");
  const [AppraisalFees, setAppraisalFees] = useState("");
  const [SurveysFees, setSurveysFees] = useState("");
  const [ClosingCosts, setClosingCosts] = useState("");

  function handlePurchasePrice(e) {
    const val = e.target.value;
    setPurchasePrice(val);
    onPurchasePriceChange(val);
  }

  function handleAppraisalFees(e) {
    const val = e.target.value;
    setAppraisalFees(val);
    onAppraisalFeesChange(val);
  }

  function handleSurveysFees(e) {
    const val = e.target.value;
    setSurveysFees(val);
    onSurveysFeesChange(val);
  }

  function handleClosingCosts(e) {
    const val = e.target.value;
    setClosingCosts(val);
    onClosingCostsChange(val);
  }

  return (
    <div>
      <div className="form-group">
        <h1 htmlFor="inputAddress" className="col-form-label mb-1 mt-2">
          Purchase Cost
        </h1>
      </div>
      <div>
        <div className="row">
          <div className="col">
            <label htmlFor="">Purchase price</label>
            <input
              className="form-control form-control-sm"
              type="text"
              id="purchasePrice"
              value={purchasePrice}
              onChange={handlePurchasePrice}
              placeholder="$000,000"
            />
          </div>
          <div className="col">
            <label htmlFor="">Appraisal fees</label>
            <input
              className="form-control form-control-sm"
              type="text"
              id="AppraisalFees"
              value={AppraisalFees}
              onChange={handleAppraisalFees}
              placeholder="$000,000"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="">Inspection/ surveys fees</label>
            <input
              className="form-control form-control-sm"
              type="text"
              id="SurveysFees"
              value={SurveysFees}
              onChange={handleSurveysFees}
              placeholder="$000,000"
            />
          </div>
          <div className="col">
            <label htmlFor="">Closing costs</label>
            <input
              className="form-control form-control-sm"
              type="text"
              id="ClosingCosts"
              value={ClosingCosts}
              onChange={handleClosingCosts}
              placeholder="$000,000"
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
