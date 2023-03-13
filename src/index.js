import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import './index.css';
// import HomePage from './HomePage/HomePage';


ReactDOM.render(
  <React.StrictMode>
    <div>
    <Login />
    {/* <HomePage /> */}
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
