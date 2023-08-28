import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const Holdingtime = ({ onStartDateChange, onEndDateChange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const ExampleCustomInput = forwardRef(({ value, onClick, onChange }, ref) => (
    <input
      placeholder="Select Date"
      value={value}
      className="example-custom-input form-control form-control-sm mb-1"
      onClick={onClick}
      onChange={onChange}
      ref={ref}
    ></input>
  ));

  return (
    <div>
      <div className="form-group">
        <h1 htmlFor="HoldTime" className="col-form-label mb-1">
          Hold Time
        </h1>
        <p className="mb-1 calculator-label">
          Start date of loan / Payoff date of loan
        </p>
      </div>
      <div className="row">
        <div className="col-sm-3 w-50 mb-0">
          <DatePicker
            placeholder="Select date"
            selected={startDate}
            className="form-control form-control-sm mb-1"
            customInput={<ExampleCustomInput />}
            // dayClassName={() => "example-datepicker-day-class"}
            popperClassName="example-datepicker-class "
            onChange={(date) => {
              setStartDate(date);
              onStartDateChange(date);
            }}
          />
        </div>
        <div className="col-sm-3 w-50 mb-0">
          <DatePicker
            customInput={<ExampleCustomInput />}
            // dayClassName={() => "example-datepicker-day-class"}
            popperClassName="example-datepicker-class "
            selected={endDate}
            className="form-control form-control-sm mb-1"
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
