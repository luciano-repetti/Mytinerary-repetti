import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux'
import { configureStore as createStore } from '@reduxjs/toolkit'
import mainReducer from './redux/reducers/mainReducer'

const reduxStore = createStore( { reducer: mainReducer })


document.title = "MyTinerary"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
