import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Card from './Card';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);

// Reassign properties (index.js) propertyName = {'one' + 'two'} ; (App.js) <tag>{this.props.propertyName}</tag>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
