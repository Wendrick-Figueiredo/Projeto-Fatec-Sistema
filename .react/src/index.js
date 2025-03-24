import { React, StrictMode } from 'react';
import { ReactDom, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import './i18n';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <BrowserRouter basename="/demo/corona-react-free/template/demo_1/preview">
      <App />
    </BrowserRouter>
  </StrictMode>
);

reportWebVitals();



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
