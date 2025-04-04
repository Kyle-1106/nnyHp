import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// グローバルスタイルを最初にインポート
import './styles.css';

// コンポーネント別のスタイルをインポート
import './components/Layout.css';
import './components/Home.css';
import './components/About.css';
import './components/WeddingIllustration.css';
import './components/MarriageCertificate.css';
import './components/WeddingOptionModal.css';
import './components/CancellationPolicy.css';
import './components/NotFound.css';

// サードパーティのスタイルをインポート
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 