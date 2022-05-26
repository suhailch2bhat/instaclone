import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Postview from './Postview';
import reportWebVitals from './reportWebVitals';
// import Posttop from "./post/Posttop";
import App from './App';
import "./post/imagetop.png"





ReactDOM.render(
  <React.StrictMode>
   
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
