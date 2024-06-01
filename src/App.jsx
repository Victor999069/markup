/* eslint-disable no-unused-vars */

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;

