import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound: React.FC = () => {
  // コンポーネントがマウントされたときにスクロール位置をトップにリセット
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>ページが見つかりません</h2>
        <p>
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Link to="/" className="home-button">
          ホームに戻る
        </Link>
      </div>
    </div>
  );
};

export default NotFound; 