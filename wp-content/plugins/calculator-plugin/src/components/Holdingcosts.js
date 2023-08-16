import React, { useState } from "react";

const Holdingcosts = ({
  onPropertyTaxesChange,
  onInsuranceChange,
  onUtilitiesChange,
  onOtherChange,
}) => {
  const [propertyTaxes, setPropertyTaxes] = useState("");
  const [insurance, setInsurance] = useState("");
  const [utilities, setUtilities] = useState("");
  const [other, setOther] = useState("");

  function handlePropertyTaxes(e) {
    const val = e.target.value;
    setPropertyTaxes(val);
    onPropertyTaxesChange(val);
  }

  function handleInsurance(e) {
    const val = e.target.value;
    setInsurance(val);
    onInsuranceChange(val);
  }

  function handleUtilities(e) {
    const val = e.target.value;
    setUtilities(val);
    onUtilitiesChange(val);
  }

  function handleOther(e) {
    const val = e.target.value;
    setOther(val);
    onOtherChange(val);
  }

  return (
    <div>
      <h1>Holding Costs</h1>
      <div>
        <div>
          <label htmlFor="">Property taxes</label>
          <input
            type="text"
            id="PropertyTaxes"
            value={propertyTaxes}
            onChange={handlePropertyTaxes}
            placeholder="$000,000"
          />
          <label htmlFor="">Insurance</label>
          <input
            type="text"
            id="Insurance"
            value={insurance}
            onChange={handleInsurance}
            placeholder="$000,000"
          />
        </div>
        <div>
          <label htmlFor="">Utilities</label>
          <input
            type="text"
            id="Utilities"
            value={utilities}
            onChange={handleUtilities}
            placeholder="$000,000"
          />
          <label htmlFor="">Other</label>
          <input
            type="text"
            id="Other"
            value={other}
            onChange={handleOther}
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

export default Holdingcosts;
