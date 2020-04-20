import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Solution from './pages/Solution';
import Business from './pages/Business';

const App = () => {
  return (
    <>
      <Route component={Home} path="/" exact />
      <Route component={Contacts} path="/contacts" />
      <Route component={Solution} path="/solution" />
      <Route component={Business} path="/business" />
    </>
  );
};

export default App;