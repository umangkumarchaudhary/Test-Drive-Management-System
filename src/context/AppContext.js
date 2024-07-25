import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [availableModels, setAvailableModels] = useState([
    { name: 'A200', available: true },
    { name: 'C200', available: true },
    { name: 'C200d', available: true },
  ]);

  return (
    <AppContext.Provider value={{ availableModels, setAvailableModels }}>
      {children}
    </AppContext.Provider>
  );
};
