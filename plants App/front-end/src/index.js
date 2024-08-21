import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './state/AuthContext';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
  </React.StrictMode>
);


