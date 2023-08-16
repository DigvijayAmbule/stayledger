import React, { useState } from "react";

const Rehabcosts = ({ onMaterialsChange, onContractorChange }) => {
  const [Materials, setMaterials] = useState("");
  const [Contractor, setContractor] = useState("");

  function handleMaterials(e) {
    const val = e.target.value;
    setMaterials(val);
    onMaterialsChange(val);
  }

  function handleContractor(e) {
    const val = e.target.value;
    setContractor(val);
    onContractorChange(val);
  }

  return (
    <div>
      <h1>Rehab Costs</h1>
      <div>
        <label htmlFor="">Materials</label>
        <input
          type="text"
          id="Materials"
          value={Materials}
          onChange={handleMaterials}
          placeholder="$000,000"
        />
        <label htmlFor="">Contractor / Labor</label>
        <input
          type="text"
          id="Contractor"
          value={Contractor}
          onChange={handleContractor}
          placeholder="$000,000"
        />
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

export default Rehabcosts;
