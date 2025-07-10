import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import ProductPage from './pages/ProductPage/index';

const App = () => {
  return (
    <Router>
      <div className="App">
        <ProductPage />
      </div>
    </Router>
  );
};

export default App;