import React from 'react';

const TimePicker = ({ selectedTime, setSelectedTime }) => {
  return (
    <div>
      <label htmlFor="time">Select Time:</label>
      <input
        type="time"
        id="time"
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
      />
    </div>
  );
};

export default TimePicker;
