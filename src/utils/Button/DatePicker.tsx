import React from "react";

const DatePicker = ({ startDate, setStartDate, endDate, setEndDate }: any) => {
  return (
    <div className="flex space-x-4">
      <div>
        <input
          value={startDate}
          type="date"
          id="start-date"
          name="start-date"
          className="border border-gray-300 rounded-xl px-2 py-1.5"
          onChange={(event) => setStartDate(event.target.value)}
        />
      </div>
      <h2 className="py-1">to</h2>
      <div>
        <input
          value={endDate}
          type="date"
          id="end-date"
          name="end-date"
          className="border border-gray-300 rounded-xl px-2 py-1.5"
          onChange={(event) => setEndDate(event.target.value)}
        />
      </div>
    </div>
  );
};

export default DatePicker;
