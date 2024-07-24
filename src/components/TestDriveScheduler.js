import React, { useContext, useState } from 'react';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import CarModelSelector from './CarModelSelector';
import CarAvailability from './CarAvailability';
import { AppContext } from '../context/AppContext';
import './TestDriveScheduler.css';

const TestDriveScheduler = () => {
  const { availableModels, setAvailableModels } = useContext(AppContext);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  return (
    <div>
      <h1>Schedule a Test Drive</h1>
      <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <TimePicker selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
      <CarModelSelector
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
        availableModels={availableModels}
      />
      <CarAvailability
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        availableModels={availableModels}
      />
      <button
        onClick={() => {
          if (selectedDate && selectedTime && selectedModel) {
            alert(`Test drive scheduled for ${selectedModel} on ${selectedDate} at ${selectedTime}`);
            setAvailableModels(availableModels.map(model =>
              model.name === selectedModel ? { ...model, available: false } : model
            ));
          } else {
            alert('Please select date, time, and car model');
          }
        }}
      >
        Schedule Test Drive
      </button>
    </div>
  );
};

export default TestDriveScheduler;
