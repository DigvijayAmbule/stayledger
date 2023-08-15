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
      <h1>Purchase Costs</h1>
      <div>
        <div>
          <label htmlFor="">Purchase price</label>
          <input
            type="text"
            id="purchasePrice"
            value={purchasePrice}
            onChange={handlePurchasePrice}
            placeholder="$000,000"
          />
          <label htmlFor="">Appraisal fees</label>
          <input
            type="text"
            id="AppraisalFees"
            value={AppraisalFees}
            onChange={handleAppraisalFees}
            placeholder="$000,000"
          />
        </div>
        <div>
          <label htmlFor="">Inspection/ surveys fees</label>
          <input
            type="text"
            id="SurveysFees"
            value={SurveysFees}
            onChange={handleSurveysFees}
            placeholder="$000,000"
          />
          <label htmlFor="">Closing costs</label>
          <input
            type="text"
            id="ClosingCosts"
            value={ClosingCosts}
            onChange={handleClosingCosts}
            placeholder="$000,000"
          />
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
        velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate
        commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed
        eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam
        nec dui. Quisque
      </p>
    </div>
  );
};

export default Purchasecost;
