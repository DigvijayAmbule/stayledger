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
    <div>
      <h1>Financing</h1>
      <div>
        <div className="input-group">
          <label htmlFor="">Loan amount</label>
          <input
            type="text"
            id="LoanAmount"
            value={loanAmount}
            onChange={handleLoanAmount}
            placeholder="$000,000"
          />
        </div>
        <div>
          <label htmlFor="">Loan origination cost</label>
          <input
            type="text"
            id="LoanOriginationCost"
            value={loanOriginationCost}
            onChange={handleLoanOriginationCost}
            placeholder="$000,000"
          />
          <label htmlFor="">Interest rate</label>
          <input
            type="text"
            id="InterestRate"
            value={interestRate}
            onChange={handleInterestRate}
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

export default Financing;
