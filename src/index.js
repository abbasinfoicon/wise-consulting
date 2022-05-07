import React from 'react';
import "react-toastify/dist/ReactToastify.css"
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ToastContainer} from 'react-toastify'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store'

createRoot(document.getElementById('root')).render(
  <Router>
    <ToastContainer />
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
