import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './MarriageCertificate.css';
import WeddingOptionModal from './WeddingOptionModal';

// サンプル画像のインポート
// import certificateSample1 from '../assets/service/certificate/sample1.jpeg';
// import certificateSample2 from '../assets/service/certificate/sample2.jpeg';
// import customDesignSample from '../assets/service/certificate/custom_design.jpeg';
// import frameSample from '../assets/service/certificate/frame.jpeg';

const MarriageCertificate: React.FC = () => {
  // モーダル状態管理
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    image: '',
    description: ''
  });

  // モーダルを開く関数
  const openModal = (title: string, image: string, description: string = '') => {
    setModalContent({ title, image, description });
    setModalOpen(true);
  };

  // モーダルを閉じる関数
  const closeModal = () => {
    setModalOpen(false);
  };

    // コンポーネントがマウントされたときに画面の一番上にスクロール
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="certificate-container">
      <section className="certificate-hero">
        <h1>Marriage Certificate</h1>
        <p className="subtitle">結婚証明書</p>
        <div className="hero-description">
          <p>
            お二人の誓いを形に残す、世界に一つだけの結婚証明書をお作りします。<br />
            大切な日の思い出として、また特別なインテリアとしてもお楽しみいただけます。
          </p>
        </div>
      </section>

      <section className="certificate-features">
        <h2>結婚証明書の特徴</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>世界に一つだけのデザイン</h3>
            <p>お二人の好みやウェディングテーマに合わせたオリジナルデザインで、世界に一つだけの結婚証明書をお作りします。</p>
          </div>
          <div className="feature-item">
            <h3>記念日の思い出に</h3>
            <p>大切な結婚の日を形に残すことで、いつまでも特別な日の思い出を振り返ることができます。</p>
          </div>
          <div className="feature-item">
            <h3>インテリアとしても</h3>
            <p>美しくデザインされた結婚証明書は、お部屋に飾るインテリアとしても素敵です。</p>
          </div>
          <div className="feature-item">
            <h3>贈り物としても</h3>
            <p>大切な方へのウェディングギフトとしても喜ばれます。</p>
          </div>
        </div>
      </section>


      <section className="certificate-samples">
        <h2>作品例</h2>
        <div className="samples-grid">
          <div className="sample-item">
            <button 
              className="sample-image-button" 
              onClick={() => openModal(
                "結婚証明書サンプル1", 
                // certificateSample1, 
                "シンプルで上品なデザインの結婚証明書です。お二人のお名前と挙式日を美しく記載します。"
              )}
            >
              {/* <img src={certificateSample1} alt="結婚証明書サンプル1" /> */}
            </button>
            <p>シンプルデザイン</p>
          </div>
          <div className="sample-item">
            <button 
              className="sample-image-button" 
              onClick={() => openModal(
                "結婚証明書サンプル2", 
                // certificateSample2, 
                "花や装飾を取り入れた華やかなデザインの結婚証明書です。お二人の雰囲気に合わせてカスタマイズできます。"
              )}
            >
              {/* <img src={certificateSample2} alt="結婚証明書サンプル2" /> */}
            </button>
            <p>フローラルデザイン</p>
          </div>
        </div>
      </section>

      <section className="certificate-price">
        <h2>料金</h2>
        <div className="price-content">
          <div className="price-details">
            <div className="price-item">
              <h3>基本料金</h3>
              <p className="price-amount">¥6,500〜</p>
              <div className="price-description">
                <p>お二人のお名前、挙式日、会場名などを美しくレイアウトした結婚証明書です。</p>
                <p className="price-detail-item">サイズ…A4またはA3</p>
                <p className="price-detail-item">納品方法…データ納品または印刷物</p>
                <p className="price-detail-item">納期…約3週間</p>
              </div>
            </div>

            <div className="price-item">
              <h3>オプション</h3>
              <ul className="option-list">
                <li>
                  <span className="option-name">①カスタムデザイン</span>
                  <span className="option-price">+¥3,000〜</span>
                </li>
                <p className="option-description">
                  お二人のイメージやウェディングテーマに合わせたオリジナルデザインをご提案します。
                  <button 
                    className="sample-link" 
                    onClick={() => openModal(
                      "カスタムデザインサンプル", 
                      // customDesignSample, 
                      "お二人だけのオリジナルデザインで特別な証明書を作成します。"
                    )}
                  >
                    Sample
                  </button>
                </p>
                <li>
                  <span className="option-name">②高級紙印刷</span>
                  <span className="option-price">+¥2,000</span>
                </li>
                <p className="option-description">
                  上質な和紙や特殊紙に印刷することで、より高級感のある仕上がりになります。
                </p>
                <li>
                  <span className="option-name">③額装</span>
                  <span className="option-price">+¥5,000〜</span>
                </li>
                <p className="option-description">
                  美しい額に入れてお届けします。木製フレームやアクリルフレームなど、様々なタイプをご用意しています。
                  <button 
                    className="sample-link" 
                    onClick={() => openModal(
                      "額装サンプル", 
                      // frameSample, 
                      "高級感のある額装で、そのまま飾ることができます。"
                    )}
                  >
                    Sample
                  </button>
                </p>
                <li>
                  <span className="option-name">④お急ぎ対応</span>
                  <span className="option-price">+¥3,000</span>
                </li>
                <p className="option-description">
                  通常3週間の納期を、10日程度に短縮します。（状況により対応できない場合もございます）
                </p>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="certificate-flow">
        <h2>ご注文の流れ</h2>
        <div className="flow-content">
          <div className="flow-steps">
            <div className="flow-step">
              <div className="step-number">1</div>
              <div className="step-details">
                <h3>お問い合わせ</h3>
                <p>InstagramのDMよりお問い合わせください。ご希望のデザインや内容、納期などをお伝えください。</p>
              </div>
            </div>
            <div className="flow-step">
              <div className="step-number">2</div>
              <div className="step-details">
                <h3>お見積り・ご契約</h3>
                <p>ご要望に基づいてお見積りをご提示します。ご納得いただけましたら、契約内容の確認と入金をお願いします。</p>
              </div>
            </div>
            <div className="flow-step">
              <div className="step-number">3</div>
              <div className="step-details">
                <h3>デザイン案作成</h3>
                <p>お二人のイメージに合わせたデザイン案を作成し、ご確認いただきます。</p>
              </div>
            </div>
            <div className="flow-step">
              <div className="step-number">4</div>
              <div className="step-details">
                <h3>修正・確定</h3>
                <p>デザイン案に対するご要望があれば修正し、最終デザインを確定します。</p>
              </div>
            </div>
            <div className="flow-step">
              <div className="step-number">5</div>
              <div className="step-details">
                <h3>納品</h3>
                <p>完成した結婚証明書をデータまたは印刷物でお届けします。額装オプションをご選択の場合は、額に入れてお届けします。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="certificate-contact">
        <h2>お問い合わせ</h2>
        <p>結婚証明書のご依頼・ご質問は、InstagramのDMよりお気軽にお問い合わせください。</p>
        <a href="https://www.instagram.com/nny.illustration/" target="_blank" rel="noopener noreferrer" className="instagram-link">
          <FontAwesomeIcon icon={faInstagram} /> @nny.illustration
        </a>
      </section>

      {/* オプションモーダル */}
      <WeddingOptionModal
        isOpen={modalOpen}
        onClose={closeModal}
        title={modalContent.title}
        image={modalContent.image}
        description={modalContent.description}
      />
    </div>
  );
};

export default MarriageCertificate; 