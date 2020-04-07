import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './container/MainPage/MainPage';
import mainReducer from './reducers/index';
import './App.css';

const store = createStore(mainReducer);

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <MainPage />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
