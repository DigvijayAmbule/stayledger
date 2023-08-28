import React, { useState } from "react";

const Sellingcost = ({
  onAfterRepairValueChange,
  onCommissionToAgentsChange,
  onSellingClosingCostsChange,
  onIsSellingClosingCostsAmmountChange,
  onIsCommissionToAgentsAmmountChange,
}) => {
  const [AfterRepairValue, setAfterRepairValue] = useState("");
  const [CommissionToAgents, setCommissionToAgents] = useState("");
  const [SellingClosingCosts, setSellingClosingCosts] = useState("");
  const [ClosingCostsInputType, setClosingCostsInputType] = useState(0);
  const [CommissionToAgentsInputType, setCommissionToAgentsInputType] =
    useState(0);

  const formatNumber = (value) => {
    // Remove existing commas and convert to a number
    const numericValue = parseFloat(value.replace(/,/g, ""));

    // Format the number with commas
    return numericValue.toLocaleString("en-US");
  };

  function handleAfterRepairValue(e) {
    const val = e.target.value.replace(/\D/g, "");
    setAfterRepairValue(val ? formatNumber(val) : "");
    onAfterRepairValueChange(val.replace(/,/g, ""));
  }

  function handleCommissionToAgents(e) {
    const val = e.target.value.replace(/[^\d.]+|(?<=\..*)\./g, "");
    if (CommissionToAgentsInputType) {
      setCommissionToAgents(val ? formatNumber(val) : "");
      onCommissionToAgentsChange(val.replace(/,/g, ""));
    } else {
      setCommissionToAgents(val);
      onCommissionToAgentsChange(val);
    }
  }

  function handleSellingClosingCosts(e) {
    const val = e.target.value.replace(/[^\d.]+|(?<=\..*)\./g, "");
    if (ClosingCostsInputType) {
      setSellingClosingCosts(val ? formatNumber(val) : "");
      onSellingClosingCostsChange(val.replace(/,/g, ""));
    } else {
      setSellingClosingCosts(val);
      onSellingClosingCostsChange(val);
    }
  }

  function handleClosingCostInput(e) {
    onIsSellingClosingCostsAmmountChange(ClosingCostsInputType ? 0 : 1);
    setClosingCostsInputType(ClosingCostsInputType ? 0 : 1);
  }

  function handleCommissionToAgentsInputType(e) {
    onIsCommissionToAgentsAmmountChange(CommissionToAgentsInputType ? 0 : 1);
    setCommissionToAgentsInputType(CommissionToAgentsInputType ? 0 : 1);
  }

  return (
    <div>
      <div className="form-group">
        <h1 htmlFor="SellingCost" className="col-form-label mb-1 mt-2">
          Selling Cost
        </h1>
      </div>
      <div>
        <div className="row">
          <div className="col-md-6 col-sm-12 mb-0">
            <label className="calculator-label" htmlFor="AfterRepairValue">
              After repair value (ARV)
            </label>
            <input
              type="text"
              id="AfterRepairValue"
              value={AfterRepairValue}
              onChange={handleAfterRepairValue}
              placeholder="$000,000"
              className="form-control form-control-sm mb-1"
            />
          </div>

          <div className="col-md-6 col-sm-12 mb-0">
            <div className="row justify-content-between">
              <label
                className="col-md-7 col  calculator-label"
                htmlFor="CommissionToAgents"
              >
                Commission to agents
              </label>
              <div className="col form-check form-switch toggle-button-container">
                <input
                  value={CommissionToAgentsInputType}
                  onChange={handleCommissionToAgentsInputType}
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="CommissionToAgentsCheckChecked"
                />
              </div>
            </div>
            <input
              type="text"
              id="CommissionToAgents"
              value={CommissionToAgents}
              onChange={handleCommissionToAgents}
              placeholder={CommissionToAgentsInputType ? "$000,000" : "0.0%"}
              className="form-control form-control-sm mb-1"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 mb-1">
            <div className="row justify-content-between">
              <label
                className="col calculator-label"
                htmlFor="SellingClosingCosts"
              >
                Closing costs
              </label>
              <div className="col form-check form-switch toggle-button-container">
                <input
                  value={ClosingCostsInputType}
                  onChange={handleClosingCostInput}
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                />
              </div>
            </div>
            <input
              type="text"
              id="SellingClosingCosts"
              value={SellingClosingCosts}
              onChange={handleSellingClosingCosts}
              placeholder={ClosingCostsInputType ? "$000,000" : "0.0%"}
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
      </div>
    </div>
  );
};

export default Sellingcost;
