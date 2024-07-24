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
  const [selectedStartTime, setSelectedStartTime] = useState('');
  const [selectedEndTime, setSelectedEndTime] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  const isCarAvailable = (model, date, startTime, endTime) => {
    const bookings = model.bookings || [];
    return bookings.every(booking => {
      return booking.date !== date || booking.endTime <= startTime || booking.startTime >= endTime;
    });
  };

  return (
    <div>
      <h1>Schedule a Test Drive</h1>
      <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <TimePicker
        selectedStartTime={selectedStartTime}
        setSelectedStartTime={setSelectedStartTime}
        selectedEndTime={selectedEndTime}
        setSelectedEndTime={setSelectedEndTime}
      />
      <CarModelSelector
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
        availableModels={availableModels}
      />
      <CarAvailability
        selectedDate={selectedDate}
        selectedStartTime={selectedStartTime}
        selectedEndTime={selectedEndTime}
        availableModels={availableModels}
        isCarAvailable={isCarAvailable}
      />
      <button
        onClick={() => {
          if (selectedDate && selectedStartTime && selectedEndTime && selectedModel) {
            const updatedModels = availableModels.map(model => {
              if (model.name === selectedModel) {
                const newBookings = model.bookings ? [...model.bookings] : [];
                newBookings.push({
                  date: selectedDate,
                  startTime: selectedStartTime,
                  endTime: selectedEndTime,
                });
                return { ...model, bookings: newBookings };
              }
              return model;
            });
            setAvailableModels(updatedModels);
            alert(`Test drive scheduled for ${selectedModel} on ${selectedDate} from ${selectedStartTime} to ${selectedEndTime}`);
          } else {
            alert('Please select date, time range, and car model');
          }
        }}
      >
        Schedule Test Drive
      </button>
    </div>
  );
};

export default TestDriveScheduler;
