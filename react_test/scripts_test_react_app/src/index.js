import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Image from "./scripts_func_createElem_react";
// импорт для теста
// import Menu from './scripts_jsx_train_react';
// import data from './scripts_jsx_train_react';
import Cat from './CatComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Menu title="Delicious Recipes" recipes={data} /> */}
    <Image />
    <Cat name='Anton'/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
