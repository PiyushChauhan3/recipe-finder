import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root')); // Create a root

root.render(
  <Router basename={process.env.PUBLIC_URL}>
    <App />
  </Router>
);
