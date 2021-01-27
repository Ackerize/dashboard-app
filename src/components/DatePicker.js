import React from "react";
import { enGB } from "date-fns/locale";
import { DateRangePicker, START_DATE, END_DATE } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import './date-picker-style.css'

const DatePicker = ({ startDate, setStartDate, endDate, setEndDate }) => {
  return (
    <DateRangePicker
      startDate={startDate}
      endDate={endDate}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
      minimumDate={new Date(1900, 1, 1)}
      minimumLength={1}
      format="dd/MMMM/yyyy"
      locale={enGB}
    >
      {({ startDateInputProps, endDateInputProps, focus }) => (
        <div className="example_preview">
          <div className="nice-dates">
            <div className="date-range">
              <input
                className={"input" + (focus === START_DATE ? " -focused" : "")}
                {...startDateInputProps}
                placeholder="Fecha inicial"
              />
              <span className="date-range_arrow" />
              <input
                className={"input" + (focus === END_DATE ? " -focused" : "")}
                {...endDateInputProps}
                placeholder="Fecha final"
              />
            </div>
          </div>
        </div>
      )}
    </DateRangePicker>
  );
};

export default DatePicker;
