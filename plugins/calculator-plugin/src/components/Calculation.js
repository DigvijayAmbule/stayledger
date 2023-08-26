import React from "react";
import "../assets/css/style.css";

const Calculation = ({
  finalProfit,
  pPrice,
  FinalPurchasecost,
  finalRehabCost,
  finalHoldingCost,
  loanAmount,
  Out_Of_Pocket_Costs,
  ROI,
  annualROI,
  IRR,
}) => {
  return (
    <>
      <div className="card-calculation">
        <h1 className="card-title">Gross Profit</h1>
        <select
          className="form-select card-dropdown home-select"
          aria-label="Default select example"
        >
          <option value="0">Home 1</option>
          <option value="1">Home 2</option>
          <option value="2">Home 3</option>
        </select>
        <p className="card-output">
          ${finalProfit ? finalProfit.toFixed(0) : "000,000"}
        </p>
        <div className="calculation-container">
          <div className="calculation">
            <p className="calculation-title">Expenses</p>
            <div className="calculation-box">
              <div className="result1">
                <p className="calculation-row-title">Purchase price</p>
                <p className="value">
                  {" "}
                  ${pPrice ? pPrice.toFixed(0) : "000,000"}
                </p>
              </div>
              <div className="result1">
                <p className="calculation-row-title">Purchase cost</p>
                <p className="value">
                  $
                  {FinalPurchasecost ? FinalPurchasecost.toFixed(0) : "000,000"}
                </p>
              </div>
              <div className="result1">
                <p className="calculation-row-title">Rehab cost</p>
                <p className="value">
                  ${finalRehabCost ? finalRehabCost.toFixed(0) : "000,000"}
                </p>
              </div>
              <div className="result1">
                <p className="calculation-row-title">Holding cost</p>
                <p className="value">
                  ${finalHoldingCost ? finalHoldingCost.toFixed(0) : "000,000"}
                </p>
              </div>

              <div className="result1">
                <p className="calculation-row-title">Loan Amount</p>
                <p className="value">
                  {" "}
                  ${loanAmount ? loanAmount.toFixed(0) : "000,000"}
                </p>
              </div>
              <div className="result1">
                <p className="calculation-row-title">Out Of Pocket Costs</p>
                <p className="value">
                  {" "}
                  $
                  {Out_Of_Pocket_Costs
                    ? Out_Of_Pocket_Costs.toFixed(0)
                    : "000,000"}
                </p>
              </div>
            </div>
          </div>
          <div className="calculation">
            <p className="calculation-title">Deal Outlook</p>
            <div className="calculation-box">
              <div className="result1">
                <p className="calculation-row-title">ROI</p>
                <p className="value">{ROI ? ROI.toFixed(2) : "00.00"}%</p>
              </div>
              <div className="result1">
                <p className="calculation-row-title">Annualised ROI</p>
                <p className="value">
                  {" "}
                  {annualROI ? annualROI.toFixed(2) : "00.00"}%
                </p>
              </div>
              <div className="result1">
                <p className="calculation-row-title">IRR</p>
                <p className="value">{IRR ? IRR.toFixed(2) : "00.00"}%</p>
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="btn w-100 calculator-btn-primary">
          Save & Share deals
        </button>
        <button
          type="button"
          className="btn w-100 btn-outlined calculator-btn-secondary"
        >
          Create a new deal
        </button>
      </div>
    </>
  );
};

export default Calculation;
