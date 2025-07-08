import './App.css';
import AppRoutes from './routes/AppRoutes';
import Header from './components/header';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <Header /> 
      <div className="container mt-4">
        <AppRoutes /> 
      </div>
    </div>
  );
}

export default App;
