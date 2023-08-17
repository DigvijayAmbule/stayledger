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
    <>
      <div className="row">
        <div className="col text-center">
          <h3 className="sub-title">Gross Profit</h3>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <h3 className="sub-title">
            ${finalProfit ? finalProfit.toFixed(2) : "0000"}
          </h3>
        </div>
      </div>

      <div className="row">
        <div className="col text-center">
          <h3 className="sub-title">Expenses</h3>
        </div>
        <div className="col text-center">
          <h3 className="sub-title">Deal Outlook</h3>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <h6>Purchase price</h6>
            </div>
            <div className="col">
              <h6>${pPrice ? pPrice : "0000"}</h6>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <h6>ROI</h6>
            </div>
            <div className="col">
              <h6>{ROI ? ROI.toFixed(2) : "00.00"}%</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <h6>Purchase cost</h6>
            </div>
            <div className="col">
              <h6>${FinalPurchasecost ? FinalPurchasecost : "0000"}</h6>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <h6>Annualised ROI</h6>
            </div>
            <div className="col">
              <h6>{annualROI ? annualROI.toFixed(2) : "00.00"}%</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <h6>Rehab cost</h6>
            </div>
            <div className="col">
              <h6>${finalRehabCost ? finalRehabCost : "0000"}</h6>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <h6>IRR</h6>
            </div>
            <div className="col">
              <h6>{IRR ? IRR.toFixed(2) : "00.00"}%</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <h6>Holding cost</h6>
            </div>
            <div className="col">
              <h6>
                ${finalHoldingCost ? finalHoldingCost.toFixed(2) : "0000"}
              </h6>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col"></div>
            <div className="col"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <h6>Loan Amount</h6>
            </div>
            <div className="col">
              <h6>${loanAmount ? loanAmount : "0000"}</h6>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col"></div>
            <div className="col"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <h6>Out Of Pocket Costs</h6>
            </div>
            <div className="col">
              <h6>
                ${Out_Of_Pocket_Costs ? Out_Of_Pocket_Costs.toFixed(2) : "0000"}
              </h6>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col"></div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculation;
