import React from "react";

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
    <div>
      <div>
        <h1>Gross Profit</h1>
        <h1>${finalProfit ? finalProfit.toFixed(2) : "0000"}</h1>
      </div>
      <div>
        <div className="row">
          <div className="col">
            <h3>Expenses</h3>
            <div>
              <h6>Purchase price</h6>
              <h6>${pPrice ? pPrice : "0000"}</h6>
              <h6>Purchase cost</h6>
              <h6>${FinalPurchasecost ? FinalPurchasecost : "0000"}</h6>
              <h6>Rehab cost</h6>
              <h6>${finalRehabCost ? finalRehabCost : "0000"}</h6>
              <h6>Holding cost</h6>
              <h6>${finalHoldingCost ? finalHoldingCost : "0000"}</h6>
              <h6>Loan Amount</h6>
              <h6>${loanAmount ? loanAmount : "0000"}</h6>
              <h6>Out Of Pocket Costs</h6>
              <h6>
                ${Out_Of_Pocket_Costs ? Out_Of_Pocket_Costs.toFixed(2) : "0000"}
              </h6>
            </div>
          </div>
          <div className="col">
            <h3>Deal Outlook</h3>
            <div>
              <h6>ROI</h6>
              <h6>{ROI ? ROI.toFixed(2) : "00.00"}%</h6>
              <h6>Annualised ROI</h6>
              <h6>{annualROI ? annualROI.toFixed(2) : "00.00"}%</h6>
              <h6>IRR</h6>
              <h6>{IRR ? IRR.toFixed(2) : "00.00"}%</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculation;
