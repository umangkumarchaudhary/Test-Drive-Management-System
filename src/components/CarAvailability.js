import React from 'react';

const CarAvailability = ({ selectedDate, selectedTime, availableModels }) => {
  const availableCars = availableModels.filter(model => model.available);

  return (
    <div>
      <h3>Car Availability</h3>
      {availableCars.length > 0 ? (
        <ul>
          {availableCars.map(model => (
            <li key={model.name}>
              {model.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No cars available for the selected date and time.</p>
      )}
    </div>
  );
};

export default CarAvailability;
