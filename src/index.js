import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Intro from "./intro.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Intro />
  </React.StrictMode>
);
