import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import './components/Layout.css';
import './components/Home.css';
import './components/About.css';
import './components/WeddingIllustration.css';
import './components/MarriageCertificate.css';
import './components/Modal.css';
import './components/CancellationPolicy.css';
import './components/NotFound.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 