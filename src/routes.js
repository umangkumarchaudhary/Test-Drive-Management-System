import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ScheduleTestDrive from './pages/ScheduleTestDrive';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/schedule" component={ScheduleTestDrive} />
    </Switch>
  );
};

export default Routes;
