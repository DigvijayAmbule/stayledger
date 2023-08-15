import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const Holdingtime = ({ onStartDateChange, onEndDateChange }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div>
      <h1>Start Holding Time</h1>
      <div>
        <div>
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              onStartDateChange(date);
            }}
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => {
              setEndDate(date);
              onEndDateChange(date);
            }}
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
    </div>
  );
};

export default Holdingtime;
