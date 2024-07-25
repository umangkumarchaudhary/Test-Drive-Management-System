import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Home from './pages/Home';
import ScheduleTestDrive from './pages/ScheduleTestDrive';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<ScheduleTestDrive />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
