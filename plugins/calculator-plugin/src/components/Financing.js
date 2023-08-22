import React, { useState } from "react";

const Financing = ({
  onLoanOriginationCostChange,
  onInterestRateChange,
  onLoanAmountChange,
}) => {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanOriginationCost, setLoanOriginationCost] = useState("");
  const [interestRate, setInterestRate] = useState("");

  function handleLoanAmount(e) {
    const val = e.target.value;
    setLoanAmount(val);
    onLoanAmountChange(val);
  }

  function handleLoanOriginationCost(e) {
    const val = e.target.value;
    setLoanOriginationCost(val);
    onLoanOriginationCostChange(val);
  }

  function handleInterestRate(e) {
    const val = e.target.value;
    setInterestRate(val);
    onInterestRateChange(val);
  }

  return (
    <>
      <div className="form-group">
        <h1 htmlFor="Financing" className="col-form-label mb-1 mt-2">
          Financing
        </h1>
      </div>

      <div className="row">
        <div className="col">
          <label htmlFor="LoanAmount">Loan amount</label>
          <input
            type="text"
            id="LoanAmount"
            value={loanAmount}
            onChange={handleLoanAmount}
            placeholder="$000,000"
            className="form-control form-control-sm"
          />
        </div>
        <div className="col">
          <label htmlFor="LoanOriginationCost">Loan origination cost</label>
          <input
            type="text"
            id="LoanOriginationCost"
            value={loanOriginationCost}
            onChange={handleLoanOriginationCost}
            placeholder="$000,000"
            className="form-control form-control-sm"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4 mb-1">
          <label htmlFor="InterestRate">Interest rate</label>
          <input
            type="text"
            id="InterestRate"
            value={interestRate}
            onChange={handleInterestRate}
            placeholder="$000,000"
            className="form-control form-control-sm"
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
