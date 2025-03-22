import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import WeddingIllustration from './components/WeddingIllustration';
import MarriageCertificate from './components/MarriageCertificate';
import CancellationPolicy from './components/CancellationPolicy';
import NotFound from './components/NotFound';
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<WeddingIllustration />} />
          <Route path="service/wedding-illustration" element={<WeddingIllustration />} />
          <Route path="service/marriage-certificate" element={<MarriageCertificate />} />
          <Route path="policy" element={<CancellationPolicy />} />
          {/* キャンセルポリシーのルートは残しておく（直接URLでアクセス可能） */}
          <Route path="cancellation-policy" element={<CancellationPolicy />} />
          {/* 他のルートは実装されていない場合はコメントアウトする */}
          {/* <Route path="/faq" element={<FAQ />} />
          <Route path="/policy" element={<Policy />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App; 