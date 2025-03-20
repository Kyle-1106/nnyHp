import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './WeddingIllustration.css';
import WeddingOptionModal from './WeddingOptionModal';

// サンプル画像のインポート
import addItemSample from '../assets/service/illustration/addItem.jpeg';
import backIllustSample from '../assets/service/illustration/backIllust.jpeg';
import backOneColorSample from '../assets/service/illustration/backOneColor.jpeg';
import carSample from '../assets/service/illustration/car.jpeg';
import petSample from '../assets/service/illustration/pet.jpeg';
import kimonoSample from '../assets/service/illustration/kimono.jpeg';
import detailSample from '../assets/service/illustration/detail.jpeg';

const WeddingIllustration: React.FC = () => {
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
    <div className="wedding-illustration-container">
      <section className="wedding-hero">
        <h1>Wedding Illustration</h1>
        <p className="subtitle">ウェディングイラスト</p>
        <div className="hero-description">
          <p>
            お二人の大切な瞬間を、温かみのある手描き風イラストで残します。<br />
            ウェルカムボードやサンキューカードなど、様々な用途でご利用いただけます。
          </p>
        </div>
      </section>

      <section className="wedding-samples">
        <h2>作品例</h2>
        <div className="samples-grid">
          <div className="sample-item">
            <p>ウェルカムボード用イラスト</p>
          </div>
          <div className="sample-item">
            <p>サンキューカード用イラスト</p>
          </div>
          <div className="sample-item">
            <p>プロフィールブック用イラスト</p>
          </div>
        </div>
      </section>

      <section className="wedding-price">
        <h2>料金</h2>
        <div className="price-content">
          <div className="price-details">
            <div className="price-item">
              <h3>基本料金</h3>
              <p className="price-amount">¥3,000</p>
              <div className="price-description">
                <p>納期は、イラストの内容や背景オプションの有無などに応じて異なります。2〜3週間でのデータ送付となります。</p>
                <p className="price-detail-item">内容…おふたりのイラスト</p>
                <p className="price-detail-item">納品方法…データ納品</p>
              </div>
            </div>

            <div className="price-item">
              <h3>オプション</h3>
              <ul className="option-list">
                <li>
                  <span className="option-name">①お急ぎコース</span>
                  <span className="option-price">+¥2,000</span>
                </li>
                <p className="option-description">
                  1週間程度での納品をご希望の場合、こちらを選択してください。他のお客様とのスケジュールとの兼ね合いにより、お受けできない場合もございますので、あらかじめご了承ください。
                </p>
                <li>
                  <span className="option-name">②人物、ペットの追加</span>
                  <span className="option-price">+¥1,000/人</span>
                </li>
                <p className="option-description">
                  <button 
                    className="sample-link" 
                    onClick={() => openModal(
                      "人物・ペットの追加サンプル", 
                      petSample, 
                      "ご家族やペットも一緒にイラストに入れることができます。"
                    )}
                  >
                    Sample Image 
                  </button>
                </p>
                <li>
                  <span className="option-name">③お写真にないアイテムの追加</span>
                  <span className="option-price">+¥500/個〜</span>
                </li>
                <p className="option-description">
                  (追加アイテムによりお値段が変動しますので、ご相談ください)
                  <button 
                    className="sample-link" 
                    onClick={() => openModal(
                      "アイテム追加サンプル", 
                      addItemSample, 
                      "お写真にない小物や思い出のアイテムを追加できます。"
                    )}
                  >
                    Sample Image
                  </button>
                </p>
                <li>
                  <span className="option-name">④お車の追加</span>
                  <span className="option-price">+¥2,000</span>
                </li>
                <p className="option-description">
                  <button 
                    className="sample-link" 
                    onClick={() => openModal(
                      "お車追加サンプル", 
                      carSample, 
                      "思い出の車や愛車をイラストに追加できます。"
                    )}
                  >
                    Sample Image
                  </button>
                </p>
                <li>
                  <span className="option-name">⑤和装</span>
                  <span className="option-price">+¥500</span>
                </li>
                <p className="option-description">
                  <button 
                    className="sample-link" 
                    onClick={() => openModal(
                      "和装サンプル", 
                      kimonoSample, 
                      "和装での描写も可能です。細かい柄などは別途料金がかかります。"
                    )}
                  >
                    Sample Image
                  </button>
                </p>
                <li>
                  <span className="option-name">⑥服装の細かい柄の描き込み</span>
                  <span className="option-price">+¥1,000/人</span>
                </li>
                <p className="option-description">
                  (ドレスのレースやタキシードのチェック柄、和装の柄など)
                  <button 
                    className="sample-link" 
                    onClick={() => openModal(
                      "服装の細かい柄サンプル", 
                      detailSample, 
                      "ドレスのレースやタキシードのチェック柄、和装の柄など細かいディテールを描き込みます。"
                    )}
                  >
                    Sample Image
                  </button>
                </p>
                <li>
                  <span className="option-name">⑦文字入れと背景単色</span>
                  <span className="option-price">+¥500</span>
                </li>
                <p className="option-description">
                  <button 
                    className="sample-link" 
                    onClick={() => openModal(
                      "文字入れと背景単色サンプル", 
                      backOneColorSample, 
                      "お名前やメッセージなどの文字入れと、単色の背景を追加できます。"
                    )}
                  >
                    Sample Image
                  </button>
                </p>
                <li>
                  <span className="option-name">⑧文字入れと背景イラスト</span>
                  <span className="option-price">+¥1,500〜</span>
                </li>
                <p className="option-description">
                  (内容によりお値段が変動しますので、お問い合わせください)
                  <button 
                    className="sample-link" 
                    onClick={() => openModal(
                      "文字入れと背景イラストサンプル", 
                      backIllustSample, 
                      "お名前やメッセージなどの文字入れと、花や風景などのイラストを背景に追加します。"
                    )}
                  >
                    Sample Image
                  </button>
                </p>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="wedding-flow">
        <h2>ご注文の流れ</h2>
        <div className="flow-content">
          <div className="flow-steps">
            <div className="flow-step">
              <div className="step-number">1</div>
              <div className="step-details">
                <h3>お問い合わせ</h3>
                <p>InstagramのDMよりお問い合わせください。ご希望の内容や納期などをお伝えください。</p>
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
                <h3>ラフ案作成</h3>
                <p>お写真を元にラフ案を作成します。ポーズや構図などをご確認いただきます。</p>
              </div>
            </div>
            <div className="flow-step">
              <div className="step-number">4</div>
              <div className="step-details">
                <h3>本制作・修正</h3>
                <p>ラフ案をもとに本制作を行います。完成後、必要に応じて2回まで無料で修正対応いたします。</p>
              </div>
            </div>
            <div className="flow-step">
              <div className="step-number">5</div>
              <div className="step-details">
                <h3>納品</h3>
                <p>完成したイラストをデータで納品いたします。印刷をご希望の場合は別途ご相談ください。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wedding-contact">
        <h2>お問い合わせ</h2>
        <p>ご不明な点がございましたら、InstagramのDMよりお問い合わせください。</p>
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

export default WeddingIllustration; 