import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import RoutesApp from './routes';

function App() {
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  );
}

export default App;
