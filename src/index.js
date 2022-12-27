import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LoaderState from './context/loadercontext/LoaderState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoaderState>
    <App />
  </LoaderState>
);
