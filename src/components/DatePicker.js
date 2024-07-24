import React from 'react';

const DatePicker = ({ selectedDate, setSelectedDate }) => {
  return (
    <div>
      <label htmlFor="date">Select Date:</label>
      <input
        type="date"
        id="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
    </div>
  );
};

export default DatePicker;
