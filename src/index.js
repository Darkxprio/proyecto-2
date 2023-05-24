import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Memory from './services/Memory';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Memory>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Memory>
  </React.StrictMode>
);
