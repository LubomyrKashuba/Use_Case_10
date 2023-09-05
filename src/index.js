import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import testValidateText from './validation/__tests__/testValidateText';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log(testValidateText())