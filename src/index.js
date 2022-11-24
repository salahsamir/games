import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import CounterContextProvider from './Context/Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.min.css';

import 'jquery/dist/jquery.min.js';
import './index.css';
import CounterContext1Provider from './catContext/Context2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterContext1Provider>

    <CounterContextProvider>
     <App />

     </CounterContextProvider>

    </CounterContext1Provider>
   
  </React.StrictMode>
);


reportWebVitals();
