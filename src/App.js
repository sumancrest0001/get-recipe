import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './container/MainPage/MainPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
