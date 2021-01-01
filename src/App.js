import React from 'react';
import Navbar from './components/Navbar/Navbar';
import GlobalStyles from './components/globalStyles';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
    </Router>
  );
}

export default App;
