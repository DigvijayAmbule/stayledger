import React, { useState } from "react";

const Sellingcost = ({
  onAfterRepairValueChange,
  onCommissionToAgentsChange,
  onSellingClosingCostsChange,
}) => {
  const [AfterRepairValue, setAfterRepairValue] = useState("");
  const [CommissionToAgents, setCommissionToAgents] = useState("");
  const [SellingClosingCosts, setSellingClosingCosts] = useState("");

  function handleAfterRepairValue(e) {
    const val = e.target.value;
    setAfterRepairValue(val);
    onAfterRepairValueChange(val);
  }

  function handleCommissionToAgents(e) {
    const val = e.target.value;
    setCommissionToAgents(val);
    onCommissionToAgentsChange(val);
  }

  function handleSellingClosingCosts(e) {
    const val = e.target.value;
    setSellingClosingCosts(val);
    onSellingClosingCostsChange(val);
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
            <label htmlFor="">After repair value (ARV)</label>
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
            <label htmlFor="">Commission to agents</label>
            <input
              type="text"
              id="CommissionToAgents"
              value={CommissionToAgents}
              onChange={handleCommissionToAgents}
              placeholder="$000,000"
              className="form-control form-control-sm"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="">Closing costs</label>
            <input
              type="text"
              id="SellingClosingCosts"
              value={SellingClosingCosts}
              onChange={handleSellingClosingCosts}
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
      </div>
    </div>
  );
};

export default Sellingcost;
