import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode renderiza duas vezes a aplicacao durante o desenvolvimento para ajudar na captura de erros de codigo
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
