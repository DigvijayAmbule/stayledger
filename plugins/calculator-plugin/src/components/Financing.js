import React, { useState } from "react";

const Financing = ({
  onLoanOriginationCostChange,
  onInterestRateChange,
  onLoanAmountChange,
  onIsInterestRateAmmountChange,
}) => {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanOriginationCost, setLoanOriginationCost] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [interestRateInputType, setInterestRateInputType] = useState(0);
  const formatNumber = (value) => {
    // Remove existing commas and convert to a number
    const numericValue = parseFloat(value.replace(/,/g, ""));

    // Format the number with commas
    return numericValue.toLocaleString("en-US");
  };
  function handleInterestRateInputType(e) {
    onIsInterestRateAmmountChange(interestRateInputType ? 0 : 1);
    setInterestRateInputType(interestRateInputType ? 0 : 1);
  }

  function handleLoanAmount(e) {
    const val = e.target.value.replace(/\D/g, "");
    setLoanAmount(val ? formatNumber(val) : "");
    onLoanAmountChange(val.replace(/,/g, ""));
  }

  function handleLoanOriginationCost(e) {
    const val = e.target.value.replace(/\D/g, "");
    setLoanOriginationCost(val ? formatNumber(val) : "");
    onLoanOriginationCostChange(val.replace(/,/g, ""));
  }

  function handleInterestRate(e) {
    const val = e.target.value.replace(/[^\d.]+|(?<=\..*)\./g, "");
    if (interestRateInputType) {
      setInterestRate(val ? formatNumber(val) : "");
      onInterestRateChange(val.replace(/,/g, ""));
    } else {
      setInterestRate(val);
      onInterestRateChange(val);
    }
  }

  return (
    <>
      <div className="form-group">
        <h1 htmlFor="Financing" className="col-form-label mb-1 mt-2">
          Financing
        </h1>
      </div>

      <div className="row">
        <div className="col-md-6 col-sm-12 mb-0">
          <label className="calculator-label" htmlFor="LoanAmount">
            Loan amount
          </label>
          <input
            type="text"
            id="LoanAmount"
            value={loanAmount}
            onChange={handleLoanAmount}
            placeholder="$000,000"
            className="form-control form-control-sm mb-1"
          />
        </div>
        <div className="col-md-6 col-sm-12 mb-1">
          <label className="calculator-label" htmlFor="LoanOriginationCost">
            Loan origination cost
          </label>
          <input
            type="text"
            id="LoanOriginationCost"
            value={loanOriginationCost}
            onChange={handleLoanOriginationCost}
            placeholder="$000,000"
            className="form-control form-control-sm mb-1"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12 mb-0">
          <div className="row justify-content-between">
            <label className="col calculator-label" htmlFor="InterestRate">
              Interest rate
            </label>
            <div className="col form-check form-switch toggle-button-container">
              <input
                value={interestRateInputType}
                onChange={handleInterestRateInputType}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="InterestRateSwitchCheckChecked"
              />
            </div>
          </div>
          <input
            type="text"
            id="InterestRate"
            value={interestRate}
            onChange={handleInterestRate}
            placeholder={interestRateInputType ? "$000,000" : "0.0%"}
            className="form-control form-control-sm mb-1"
          />
        </div>
        <small id="passwordHelpBlock" className="form-text text-muted">
          Lorem ipsum dolor sit amet consectetur. Duis varius massa eu donec
          odio adipiscing id quis penatibus. Lectus nec vitae varius tellus
          commodo vel praesent. Eget nisi ornare tristique sapien lorem id
          imperdie.
        </small>
      </div>
    </>
  );
};

export default Financing;
