import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/header/header";
import Navigation from "./components/navigation/Navigation";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

