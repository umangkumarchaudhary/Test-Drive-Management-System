import React from 'react';

const CarAvailability = ({ selectedDate, selectedStartTime, selectedEndTime, availableModels, isCarAvailable }) => {
  return (
    <div>
      <h2>Available Cars</h2>
      <ul>
        {availableModels.map((model) => (
          <li key={model.name} style={{ backgroundColor: isCarAvailable(model, selectedDate, selectedStartTime, selectedEndTime) ? '#007bff' : '#ccc' }}>
            {model.name} {isCarAvailable(model, selectedDate, selectedStartTime, selectedEndTime) ? '(Available)' : '(Unavailable)'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarAvailability;
