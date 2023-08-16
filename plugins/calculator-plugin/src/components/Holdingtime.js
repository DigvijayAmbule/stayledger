import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const Holdingtime = ({ onStartDateChange, onEndDateChange }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div>
      <div className="form-group">
        <h1 htmlFor="inputAddress" className="col-form-label mb-1 mt-2">
          Hold Time
        </h1>
        <p className="mb-1">Start date of loan / Payoff date of loan</p>
      </div>
      <div className="row">
        <div className="form-group col">
          <DatePicker
            selected={startDate}
            className="form-control form-control-sm"
            onChange={(date) => {
              setStartDate(date);
              onStartDateChange(date);
            }}
          />
        </div>
        <div className="form-group col">
          <DatePicker
            selected={endDate}
            className="form-control form-control-sm"
            onChange={(date) => {
              setEndDate(date);
              onEndDateChange(date);
            }}
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
  );
};

export default Holdingtime;
