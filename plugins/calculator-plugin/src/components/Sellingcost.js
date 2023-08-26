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

  function handleAfterRepairValue(e) {
    const val = e.target.value.replace(/\D/g, "");
    setAfterRepairValue(val);
    onAfterRepairValueChange(val);
  }

  function handleCommissionToAgents(e) {
    const val = e.target.value.replace(/[^\d.]+|(?<=\..*)\./g, "");
    setCommissionToAgents(val);
    onCommissionToAgentsChange(val);
  }

  function handleSellingClosingCosts(e) {
    const val = e.target.value.replace(/[^\d.]+|(?<=\..*)\./g, "");
    setSellingClosingCosts(val);
    onSellingClosingCostsChange(val);
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
          <div className="col">
            <label className="calculator-label" htmlFor="AfterRepairValue">
              After repair value (ARV)
            </label>
            <input
              type="text"
              id="AfterRepairValue"
              value={AfterRepairValue}
              onChange={handleAfterRepairValue}
              placeholder="$000,000"
              className="form-control form-control-sm"
            />
          </div>

          <div className="col">
            <div className="row justify-content-between">
              <label
                className="col-md-7 calculator-label"
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
              className="form-control form-control-sm"
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
      </div>
    </div>
  );
};

export default Sellingcost;
