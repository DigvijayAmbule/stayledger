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
      <h1>Selling Cost</h1>
      <div>
        <div>
          <label htmlFor="">After repair value (ARV)</label>
          <input
            type="text"
            id="AfterRepairValue"
            value={AfterRepairValue}
            onChange={handleAfterRepairValue}
            placeholder="$000,000"
          />
          <label htmlFor="">Commission to agents</label>
          <input
            type="text"
            id="CommissionToAgents"
            value={CommissionToAgents}
            onChange={handleCommissionToAgents}
            placeholder="$000,000"
          />
        </div>
        <div>
          <label htmlFor="">Closing costs</label>
          <input
            type="text"
            id="SellingClosingCosts"
            value={SellingClosingCosts}
            onChange={handleSellingClosingCosts}
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

export default Sellingcost;
