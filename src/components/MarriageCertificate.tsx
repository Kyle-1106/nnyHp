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
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    }, []);

  return (
    <div className="certificate-container">
      <section className="certificate-hero">
        <h1>Marriage Certificate</h1>
        <p className="subtitle">結婚証明書</p>
        <div className="hero-description">
          <p>
          今まで新郎新婦のおふたりが歩んだ来た道のりを、明るく暖かく照らしてくれたゲストの皆さまにロウソクに火を灯していただきます。<br />
          指でのスタンプ、筆でのペイント、どちらでも素敵に仕上がるデザインです。<br />
          道のりには、<br />
          ・おふたりの誕生日<br />
          ・おふたりがお付き合いを始めた日<br />
          ・プロポーズの日<br />
          ・入籍日<br />

          などの、大切な日をお入れする事で、その後お家でずっと大切な記念日を忘れないためのアドベントカレンダーにもなります<br />
          もちろん真ん中にはおふたりのイラストをお描きします<br />
          大切な日の思い出として、また特別なインテリアとしてもお楽しみいただけます。
          </p>
        </div>
      </section>


      <section className="certificate-price">
        <h2>料金</h2>
        <div className="price-content">
          <div className="price-item">
            <h3>データ納品</h3>
            <p className="price-amount">¥5,000~</p>
            <div className="price-description">
              <p>基本料金に含まれるもの：</p>
              <p>①おふたりのイラスト</p>
              <p>②おふたりの立っている場所と道のり部分</p>
              <p>③おふたりのお名前と日付入れ</p>

              <div className="option-section">
                <h3 className="option-title">①おふたりのイラスト</h3>
                <div className="option-description">
                  オプション：
                  <ul>
                    <li>・人物(ペット)の追加 <span className="option-price">¥1,000/1匹</span></li>
                    <li>・写真にないアイテムの追加 <span className="option-price">¥500/1つ</span></li>
                    <li>・和装 <span className="option-price">¥500</span></li>
                    <li>・ドレスのレースや和柄の細かい柄の描き込み <span className="option-price">¥1,000</span></li>
                  </ul>
                </div>

                <h3 className="option-title">②おふたりの立っている場所と道のり部分</h3>
                <div className="option-description">
                  ゲストの人数（ロウソクの数）に合わせて道幅の調整と、おふたりのイラストのシルエットに合わせて、立っている場所の形の調節も行います！
                </div>

                <h3 className="option-title">③おふたりのお名前と日付入れ</h3>
                <div className="option-description">
                  おふたりのお名前と、大切な日付を入れることができます。
                </div>
              </div>

              <div className="price-detail-item">
                <h4>キャンドル料金</h4>
                <p>基本料金に加えて、ゲストの人数に応じて以下の料金が加算されます：</p>
                <ul className="option-list">
                  <li>
                    <span className="option-name">0〜20名</span>
                    <span className="option-price">¥1,500</span>
                  </li>
                  <li>
                    <span className="option-name">21〜30名</span>
                    <span className="option-price">¥2,000</span>
                  </li>
                  <li>
                    <span className="option-name">31〜40名</span>
                    <span className="option-price">¥2,500</span>
                  </li>
                  <li>
                    <span className="option-name">41〜50名</span>
                    <span className="option-price">¥3,000</span>
                  </li>
                  <li>
                    <span className="option-name">51〜60名</span>
                    <span className="option-price">¥3,500</span>
                  </li>
                  <li>
                    <span className="option-name">61〜70名</span>
                    <span className="option-price">¥4,000</span>
                  </li>
                  <li>
                    <span className="option-name">71〜80名</span>
                    <span className="option-price">¥4,500</span>
                  </li>
                </ul>
              </div>

              <div className="price-example">
                <p>料金例：</p>
                <p>ゲストの人数が0〜20名の場合<br/>
                基本料金 ¥5,000(オプションなし) ＋ キャンドル料金 ¥1,500 ＝ <strong>¥6,500</strong></p>
              </div>
            </div>
          </div>

          <div className="price-item">
            <h3>現物納品</h3>
            <p className="price-amount">¥13,000~</p>
            <div className="price-description">
              <p>基本料金に含まれるもの：</p>
              <p>①データ納品の全内容</p>
              <p>②キャンバス印刷</p>
              <p className="price-note">※キャンバスサイズはA3,A4のどちらかをお選びいただきます。</p>
              <p>③送料</p>
              

              <div className="price-example">
                <p>料金例：</p>
                <p>基本料金(オプションなし)+A3サイズ+関東在住の方<br/></p>
                <strong>¥16,000</strong>
              </div>

              <p className="price-note">※現物納品の場合、お住まいの地域によって送料が追加される場合があります。</p>
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