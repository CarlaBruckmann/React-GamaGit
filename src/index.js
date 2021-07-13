import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
     <App title = "GamaGit" />  
     {/* ADICIONA titulo ao documento - pode ser sem atributo/ propriedade - ver App.js */}
  </React.StrictMode>,
  document.getElementById('root')
);


