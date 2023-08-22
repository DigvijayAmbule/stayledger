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
      <div className="row">
        <div className="col text-center">
          <h4 className="calc_output_title">Gross Profit</h4>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <h4 className="sub-title">
            ${finalProfit ? finalProfit.toFixed(2) : "0000"}
          </h4>
        </div>
      </div>

      <div className="row cal_col_header">
        <div className="col text-center">
          <h4 className="calc_output_title_sec">Expenses</h4>
        </div>
        <div className="col text-center">
          <h4 className="calc_output_title_sec">Deal Outlook</h4>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <h6 className="calc_output_title_ter">Purchase price</h6>
            </div>
            <div className="col">
              <p className="calc_output_value_ter">
                ${pPrice ? pPrice : "0000"}
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <h6 className="calc_output_title_ter">ROI</h6>
            </div>
            <div className="col">
              <p className="calc_output_value_ter">
                {ROI ? ROI.toFixed(2) : "00.00"}%
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <h6 className="calc_output_title_ter">Purchase cost</h6>
            </div>
            <div className="col">
              <p className="calc_output_value_ter">
                ${FinalPurchasecost ? FinalPurchasecost : "0000"}
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <h6 className="calc_output_title_ter">Annualised ROI</h6>
            </div>
            <div className="col">
              <p className="calc_output_value_ter">
                {annualROI ? annualROI.toFixed(2) : "00.00"}%
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <h6 className="calc_output_title_ter">Rehab cost</h6>
            </div>
            <div className="col">
              <p className="calc_output_value_ter">
                ${finalRehabCost ? finalRehabCost : "0000"}
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <h6 className="calc_output_title_ter">IRR</h6>
            </div>
            <div className="col">
              <p className="calc_output_value_ter">
                {IRR ? IRR.toFixed(2) : "00.00"}%
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <h6 className="calc_output_title_ter">Holding cost</h6>
            </div>
            <div className="col">
              <p className="calc_output_value_ter">
                ${finalHoldingCost ? finalHoldingCost.toFixed(2) : "0000"}
              </p>
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
              <h6 className="calc_output_title_ter">Loan Amount</h6>
            </div>
            <div className="col">
              <p className="calc_output_value_ter">
                ${loanAmount ? loanAmount : "0000"}
              </p>
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
              <h6 className="calc_output_title_ter">Out Of Pocket Costs</h6>
            </div>
            <div className="col">
              <p className="calc_output_value_ter">
                ${Out_Of_Pocket_Costs ? Out_Of_Pocket_Costs.toFixed(2) : "0000"}
              </p>
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
