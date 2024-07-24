import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ScheduleTestDrive from './pages/ScheduleTestDrive';
import AppContextProvider from './context/AppContext';

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<ScheduleTestDrive />} />
        </Routes>
      </Router>
    </AppContextProvider>
  );
};

export default App;
