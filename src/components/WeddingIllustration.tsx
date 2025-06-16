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
import voice1 from '../assets/home/voices/voice1.png';
import voice2 from '../assets/home/voices/voice2.png';

const WeddingIllustration: React.FC = () => {
  // モーダル状態管理
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    image: '',
    description: ''
  });

  // コンポーネントがマウントされたときに画面の一番上にスクロール
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, []);

  // モーダルを開く関数
  const openModal = (title: string, image: string, description: string = '') => {
    setModalContent({ title, image, description });
    setModalOpen(true);
  };

  // モーダルを閉じる関数
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="wedding-illustration-container">
      <section className="wedding-hero">
        <h1>Wedding Illustration</h1>
        <p className="subtitle">ウェディングイラスト</p>
        <div className="hero-description">
          <p>
          nayuの温かみのある手描きイラストで、愛着の湧いちゃうキャラクターになったおふたりを残しませんか？<br />
          ウェルカムボードやサンキューカードなど、様々な用途でご利用いただけます。<br />
          データで納品して、お客様で印刷を行なっていただくことも、印刷まで行って発送することも可能です。
          </p>
        </div>
        <div className="wedding-illustration-image">
          <div className="sample-container">
            <div className="sample-item">
              <h3>ウェルカムボード</h3>
              <div className="sample-image">
                <img src={voice1} alt="ウェルカムボードサンプル" />
              </div>
              <p className="sample-description">
              ゲストの皆さまの目を引く、イラストのウェルカムボード。<br />
              ウェルカムボードにオススメのイラストは、ウェディングドレスのイラストです。<br />
イラストのウェルカムボードなら結婚式後もインテリアとしてご自宅に飾りやすいです。  
              </p>
            </div>
            <div className="sample-item">
              <h3>サンキューカード</h3>
              <div className="sample-image">
                <img src={voice2} alt="サンキューカードサンプル" />
              </div>
              <p className="sample-description">
              サンキューカードには、ゲストの皆さまがワクワクしていたお色直し後のイラストになったおふたりを描くと、ゲストの皆さまにお色直し後の印象を残しつつ、イラストになったおふたりを連れて帰っていただけます。<br />
ウェルカムボードとの統一感もあり、オシャレ度がアップします。
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="wedding-price">
        <h2>料金</h2>

          <div className="price-content">
          <div className="price-details">
            <div className="price-item">
              <h3>データ納品</h3>
              <p className="price-amount">¥6,000〜</p>
              <p>ウェルカムボード、サンキューカードなど、様々な用途でご利用いただけます。印刷するボードの質感やサイズをご自身で選びたい方におすすめです</p>
              <div className="price-description">
                <p className="price-detail-item">内容：おふたりのイラスト</p>
                <p className="price-detail-item">納品形式：</p>
                <p>JPG形式でのデータ納品</p>
                <p className="price-detail-item">※お客様ご自身で印刷していただく形となります</p>
              </div>
            </div>

            <div className="price-item">
              <h3>現物納品</h3>
              <p className="price-description">印刷するボードの選び方がわからなかったり、ご自身での印刷が不安な方におすすめです。<br />
                お住まいの地域やキャンバスのサイズ、印刷枚数に応じて料金が変動しますので、詳しくはInstagramのDMよりお問い合わせください。</p>
              <p className="price-welcome-board">⚪︎ウェルカムボード</p>
              <p className="price-amount">¥16,000〜</p>
              <p>※こちらの料金はイラスト代+印刷代+送料のお値段です。</p>
              <div className="price-description">
                <p className="price-detail-item">内容：おふたりのイラスト,オプション設定の背景や文字</p>
                <p className="price-detail-item">納品形式：キャンバスプリント</p>
                <ul className="price-detail-list">
                  <li>サイズ：A4 / A3 </li>
                </ul>
              </div>
              <p className="price-thankyou-card">⚪︎サンキューカード</p>
              <p className="price-amount">¥11,000〜</p>
              <p>※こちらの料金はイラスト代+印刷代+送料のお値段です。</p>
              <div className="price-description">
                <p className="price-detail-item">内容：おふたりのイラスト,オプション設定の背景や文字</p>
                <p className="price-detail-item">納品形式：ケント紙(厚め)※ボールペンなどで筆記可能</p>
                <ul className="price-detail-list">
                  <li>サイズ：91×55mm(一般的な名刺サイズ)</li>
                  <li>印刷枚数は~100枚からお選びいただけます。<br />100枚以上をご希望の場合は、InstagramのDMよりお問い合わせください。</li>
                </ul>
              </div>
            </div>

            <div className="price-item">
              <h3>オプション</h3>
              <ul className="option-list">
                <li>
                  <span className="option-name">①お急ぎコース</span>
                  <span className="option-price">+¥2,000〜</span>
                </li>
                <p className="option-description">
                  他のお客様よりも優先的に制作させていただきます。ただし、他のお客様とのスケジュールとの兼ね合いにより、お受けできない場合もございますので、あらかじめご了承ください。InstagramのDMにてお問い合わせください。
                </p>
                <li>
                  <span className="option-name">②人物、ペットの追加</span>
                  <span className="option-price">+¥2,000/人</span>
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
                  <span className="option-price">+¥1,000</span>
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
                  <span className="option-price">+¥1,000/人〜</span>
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
                      "お名前やメッセージなどの文字入れと、思い出の場所などをイラストの背景としてお描きします。"
                    )}
                  >
                    Sample Image
                  </button>
                </p>
                <li>
                  <span className="option-name">⑨ブーケ</span>
                  <span className="option-price">+¥1,000〜</span>
                </li>
                
                <li>
                  <span className="option-name">⑩おふたりのイラストのみを背景透過データで納品</span>
                  <span className="option-price">+¥500</span>
                </li>   
              </ul>
            </div>
            <div className="example">
              <div className="popular-plans">
                <div className="plan-item">
                  <h4>人気プラン</h4>
                  <p className="plan-name">ウェルカムボード＆サンキューカード 現物納品セット</p>
                  
                  <p className="plan-price">¥20,000〜</p>
                  <div className="plan-details">
                    <p>セット内容：</p>
                    <ul>
                      <li>ウェルカムボード <br />印刷：キャンバスプリント <br />サイズ：A4,A3サイズ</li>
                      <li>サンキューカード ~100枚（91×55mmサイズ）<br />※ 100枚以上をご希望の方は個別にInstagramのDMよりお問い合わせください</li>
                    </ul>
                    <p className="plan-description">
                    ウェルカムボード（¥16,000〜）とサンキューカード（¥11,000〜）をセットでご依頼いただくと ¥20,000〜のご案内になります。<br />
個別にご注文いただくよりも、お得な価格でご案内しております。<br />
統一感のあるデザインで、特別な一日をより心に残るものに。<br />
                    印刷するボードの選び方がわからなかったり、ご自身での印刷が不安な方、
忙しくてなかなか結婚式の準備ができない方にオススメです。<br />
nayuがイラスト作成からイラストの印刷までまるっとお手伝いし、おふたりの一生に一度の日を仕上げます。

                    </p>
                    <p className="plan-note">※こちらの料金はウェルカムボードとサンキューカードを同じイラストを使用した場合です。異なるイラストを使用する場合は2枚分のイラスト料金が発生するため、25,000円~となります。</p>
                  </div>
                </div>
              </div>
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
                <p>InstagramのDMよりお問い合わせください。</p>
                <p>DM例)<br />
見積もり依頼<br />
・ご希望納期<br />
・結婚式の日取り<br />
・イラストにしたいお写真<br />
（まだ決まっていない場合や迷っている場合などはそのようにお伝えいただければ、お写真選びから一緒にさせていただきます）</p>
              </div>
            </div>
            <div className="flow-step">
              <div className="step-number">2</div>
              <div className="step-details">
                <h3>お見積り・ご契約</h3>
                <p>ご要望に基づいてお見積りをご提示します。<br />
                  ご納得いただけましたら、内容の確認と入金をお願いします。<br />
先払いの銀行振込、また、手数料に関しましてはお客様ご負担でお願いしております。</p>
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
                <p>ラフ案をもとに本制作を行います。<br />
                ポーズや構図などをご確認いただきます。</p>
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
        images={[modalContent.image]}
        description={modalContent.description}
      />
    </div>
  );
};

export default WeddingIllustration; 