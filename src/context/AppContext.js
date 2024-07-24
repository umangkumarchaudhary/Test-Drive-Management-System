import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [availableModels, setAvailableModels] = useState([
    { name: 'A200', available: true, bookings: [] },
    { name: 'C200', available: true, bookings: [] },
    { name: 'C200d', available: true, bookings: [] },
  ]);

  return (
    <AppContext.Provider value={{ availableModels, setAvailableModels }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
