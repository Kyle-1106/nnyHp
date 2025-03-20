import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import topImage from '../assets/home/top.png';
import aboutImage from '../assets/home/about.png';
// イラスト画像のインポート
import illust1 from '../assets/home/illustrations/illust1.png';
import illust2 from '../assets/home/illustrations/illust2.png';
import illust3 from '../assets/home/illustrations/illust3.png';
import illust4 from '../assets/home/illustrations/illust4.png';
import illust5 from '../assets/home/illustrations/illust5.png';
import illust6 from '../assets/home/illustrations/illust6.png';
// Voice画像のインポート
import voice1 from '../assets/home/voices/voice1.png';
import voice2 from '../assets/home/voices/voice2.png';
import voice3 from '../assets/home/voices/voice3.png';
import voice4 from '../assets/home/voices/voice4.png';
import voice5 from '../assets/home/voices/voice5.png';
import voice6 from '../assets/home/voices/voice6.png';
import voice7 from '../assets/home/voices/voice7.png';
import voice8 from '../assets/home/voices/voice8.png';
// Service画像のインポート
import service1 from '../assets/home/services/service1.png';
import service2 from '../assets/home/services/service2.png';
// How to Order画像のインポート
import orderStep1 from '../assets/home/order/step1.png';
import orderStep2 from '../assets/home/order/step2.png';
import orderStep3 from '../assets/home/order/step3.png';
import orderStep4 from '../assets/home/order/step4.png';
import orderStep5 from '../assets/home/order/step5.png';

// モーダルコンポーネントのインポート
import WorksModal from './WorksModal';
import VoiceModal from './VoiceModal';

import './Home.css';
// FontAwesomeのインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft, faChevronRight, faChevronDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
// slickのCSSをインポート
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// カスタム矢印コンポーネント
const PrevArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow prev-arrow`} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
};

const NextArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow next-arrow`} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
};

// FAQアコーディオンコンポーネント
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="faq-question" onClick={onClick}>
        <span className="q-mark">Q.</span>
        <span className="question-text">{question}</span>
        <FontAwesomeIcon icon={faChevronDown} className="faq-icon" />
      </div>
      {isOpen && (
        <div className="faq-answer">
          <span className="a-mark">A.</span>
          <span className="answer-text">{answer}</span>
        </div>
      )}
    </div>
  );
};

// 注文ステップコンポーネント
interface OrderStepProps {
  number: string;
  title: string;
  description: string;
  image: string;
  isLast?: boolean;
}

const OrderStep: React.FC<OrderStepProps> = ({ number, title, description, image, isLast = false }) => {
  return (
    <div className="order-step">
      <div className="step-number">{number}</div>
      <div className="step-content">
        <div className="step-image">
          <img src={image} alt={`ステップ${number}: ${title}`} />
        </div>
        <h3 className="step-title">{title}</h3>
        <p className="step-description">{description}</p>
      </div>
      {!isLast && (
        <div className="step-arrow">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      )}
    </div>
  );
};

const Home: React.FC = () => {
  const moonRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // FAQの状態管理
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  // Worksモーダルの状態管理
  const [worksModalOpen, setWorksModalOpen] = useState(false);
  const [worksModalContent, setWorksModalContent] = useState({
    image: '',
    title: '',
    description: '',
    category: ''
  });
  
  // Voiceモーダルの状態管理
  const [voiceModalOpen, setVoiceModalOpen] = useState(false);
  const [voiceModalContent, setVoiceModalContent] = useState({
    image: '',
    title: '',
    description: '',
    category: ''
  });
  
  // FAQの開閉を切り替える関数
  const toggleFAQ = (index: number) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };
  
  // Worksモーダルを開く関数
  const openWorksModal = (image: string, title: string, description: string, category: string) => {
    console.log("モーダルを開きます:", image, title, description, category);
    setWorksModalContent({ image, title, description, category });
    setWorksModalOpen(true);
  };
  
  // Worksモーダルを閉じる関数
  const closeWorksModal = () => {
    console.log("モーダルを閉じます");
    setWorksModalOpen(false);
  };
  
  // Voiceモーダルを開く関数
  const openVoiceModal = (image: string, title: string, description: string, category: string) => {
    console.log("Voiceモーダルを開きます:", image, title, description, category);
    setVoiceModalContent({ image, title, description, category });
    setVoiceModalOpen(true);
  };
  
  // Voiceモーダルを閉じる関数
  const closeVoiceModal = () => {
    console.log("Voiceモーダルを閉じます");
    setVoiceModalOpen(false);
  };
  
  // 星を生成する関数
  const generateStars = () => {
    const stars = [];
    const hero = heroRef.current;
    if (!hero) return [];
    
    const heroWidth = hero.offsetWidth;
    const heroHeight = hero.offsetHeight;
    
    // 通常の星
    for (let i = 0; i < 50; i++) {
      const size = Math.random() * 3 + 1;
      const left = Math.random() * heroWidth;
      const top = Math.random() * heroHeight * 0.7; // 上部70%に配置
      const delay = Math.random() * 4;
      const duration = Math.random() * 2 + 3;
      
      stars.push(
        <div
          key={`star-${i}`}
          className="star"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}px`,
            top: `${top}px`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`
          }}
        />
      );
    }
    
    return stars;
  };
  
  // カルーセル設定
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  // Voiceスライダー設定
  const voiceSliderSettings = {
    ...carouselSettings,
    autoplaySpeed: 4000
  };
  
  // 注文ステップデータ
  const orderSteps = [
    {
      number: "1",
      title: "お問い合わせ",
      description: "DMからご連絡",
      image: orderStep1
    },
    {
      number: "2",
      title: "ヒアリング",
      description: "ご要望確認",
      image: orderStep2
    },
    {
      number: "3",
      title: "お見積り",
      description: "料金・納期案内",
      image: orderStep3
    },
    {
      number: "4",
      title: "制作",
      description: "イラスト作成",
      image: orderStep4
    },
    {
      number: "5",
      title: "納品",
      description: "データ/印刷物",
      image: orderStep5
    }
  ];
  
  // FAQデータ
  const faqData = [
    {
      question: "注文から納品までどのくらいの期間がかかりますか？",
      answer: "通常、ご注文確定から2週間程度でデータ納品となります。印刷をご希望の場合は、さらに2週間ほどお時間をいただいております。お急ぎの場合はお問い合わせください。"
    },
    {
      question: "支払い方法は何がありますか？",
      answer: "銀行振込のみとなっております。お見積り後、お支払い情報をお送りいたします。"
    },
    {
      question: "キャンセルはできますか？",
      answer: "制作開始前であればキャンセル可能です。ただし、制作開始後のキャンセルについては、進行状況に応じてキャンセル料が発生いたします。詳しくはキャンセルポリシーをご確認ください。"
    },
    {
      question: "修正は可能ですか？",
      answer: "はい、修正は可能です。完成イラストに対して、色味や細部の調整など、2回までの修正を無料で承っております。大幅な変更や追加の修正については、別途料金が発生する場合があります。"
    }
  ];
  
  // Worksデータ
  const worksData = [
    {
      image: illust1,
      title: "ウェディングイラスト",
      description: "新郎新婦様の特徴を捉えた温かみのあるイラストです。結婚式当日のウェルカムボードとして使用されました。お二人のこだわりのポーズや小物も取り入れ、世界に一つだけの作品に仕上げています。",
      category: "ウェディング"
    },
    {
      image: illust2,
      title: "結婚証明書",
      description: "結婚式で使用される結婚証明書です。お二人とゲストの皆様の署名スペースを設けつつ、装飾的なデザインで華やかに仕上げました。フレームに入れて飾ることができるサイズで制作しています。",
      category: "ウェディング"
    },
    {
      image: illust3,
      title: "ペットとの記念イラスト",
      description: "大切なペットと一緒の記念イラストです。飼い主様とペットの絆が伝わるような温かい雰囲気で描いています。記念日のプレゼントや思い出として喜ばれています。",
      category: "ペット"
    },
    {
      image: illust4,
      title: "家族イラスト",
      description: "ご家族全員が揃った記念イラストです。それぞれの個性や特徴を大切にしながら、家族の温かさが伝わるように描いています。記念日や贈り物として人気があります。",
      category: "ファミリー"
    },
    {
      image: illust5,
      title: "アニバーサリーイラスト",
      description: "結婚記念日や特別な記念日のためのイラストです。思い出の場所や大切な瞬間を背景に、お二人の姿を描いています。時間が経っても色あせない思い出として残ります。",
      category: "アニバーサリー"
    },
    {
      image: illust6,
      title: "サンキューカード",
      description: "結婚式の引き出物に添えるサンキューカードです。新郎新婦様のイラストと共に、感謝の気持ちを伝えるメッセージを入れることができます。ゲストへの心のこもった贈り物になります。",
      category: "ウェディング"
    }
  ];
  
  // Voiceデータ
  const voiceData = [
    {
      image: voice1,
      title: "Aさん（30代女性）",
      description: "結婚式のウェルカムボードをお願いしました。私たちの雰囲気をとても良く捉えていて、当日はゲストの皆さんにも大好評でした。思い出に残る素敵な一枚をありがとうございました！",
      category: "ウェディングイラスト"
    },
    {
      image: voice2,
      title: "Bさん（20代カップル）",
      description: "結婚証明書を作っていただきました。シンプルながらも温かみのあるデザインで、一生の宝物になりました。細かい要望にも丁寧に対応していただき感謝しています。",
      category: "結婚証明書"
    },
    {
      image: voice3,
      title: "Cさん（40代男性）",
      description: "妻への結婚記念日のプレゼントとして依頼しました。想像以上の出来栄えで、妻も大変喜んでくれました。思い出の場所を背景に入れていただいたのが特に良かったです。",
      category: "アニバーサリーイラスト"
    },
    {
      image: voice4,
      title: "Dさん（30代女性）",
      description: "愛犬との思い出のイラストをお願いしました。犬の表情や仕草まで細かく再現していただき感動しました。リビングに飾って毎日眺めています。",
      category: "ペットイラスト"
    },
    {
      image: voice5,
      title: "Eさん（20代女性）",
      description: "両親への贈り物として家族全員のイラストをお願いしました。一人一人の個性が出ていて、両親も涙を流して喜んでくれました。素敵な思い出をありがとうございます。",
      category: "ファミリーイラスト"
    },
    {
      image: voice6,
      title: "Fさん（30代カップル）",
      description: "サンキューカードを作っていただきました。ゲストの皆さんからも「素敵」「温かみがある」と好評でした。短納期にも関わらず対応いただき本当にありがとうございました。",
      category: "サンキューカード"
    },
    {
      image: voice7,
      title: "Gさん（40代女性）",
      description: "子供たちへのプレゼントとして家族イラストを依頼しました。子供たちの特徴をよく捉えていて、とても喜んでもらえました。また機会があればお願いしたいです。",
      category: "ファミリーイラスト"
    },
    {
      image: voice8,
      title: "Hさん（20代男性）",
      description: "彼女へのプロポーズの際に使用するイラストをお願いしました。イメージ通りの素敵な仕上がりで、プロポーズも成功しました！一生の思い出に残る作品をありがとうございます。",
      category: "カップルイラスト"
    }
  ];
  
  useEffect(() => {
    // 月のイラストを上から下ろすアニメーション
    const moon = moonRef.current;
    if (moon) {
      // 初期位置（画面外上部）
      moon.style.transform = 'translateY(-120vh)';
      
      // アニメーションで下ろす（少し高い位置に）
      setTimeout(() => {
        moon.style.transition = 'transform 1.5s ease-out';
        moon.style.transform = 'translateY(-40px)'; // 上に配置
      }, 500);
    }
    
    // モーダルの状態をログに出力（デバッグ用）
    console.log("初期状態 - worksModalOpen:", worksModalOpen);
  }, []);
  
  // worksModalOpenの変更を監視
  useEffect(() => {
    console.log("worksModalOpenが変更されました:", worksModalOpen);
  }, [worksModalOpen]);
  
  // voiceModalOpenの変更を監視
  useEffect(() => {
    console.log("voiceModalOpenが変更されました:", voiceModalOpen);
  }, [voiceModalOpen]);

  return (
    <div className="home-container">
      <section className="hero" ref={heroRef}>
        {generateStars()}
        <div className="hero-image swing-animation" ref={moonRef}>
          <img src={topImage} alt="nny.illustration" />
        </div>
      </section>
      
      <section className="about-preview" id="about-section">
        <h2>About</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>nny.illustration</h3>
            <p>
              はじめまして。イラストレーターのnayuです。<br />
              結婚式のウェルカムボードや結婚証明書など、ブライダル関連のイラストを中心に活動しています。
            </p>
            <p>
              お二人の大切な日のお手伝いができることを嬉しく思います。<br />
              心を込めて制作いたしますので、お気軽にご相談ください。
            </p>
            <div className="social-links-home">
              <a href="https://www.instagram.com/nny.illustration/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} /> Instagram: @nny.illustration
              </a>
              <a href="https://www.tiktok.com/@nny.illustration" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTiktok} /> TikTok: @nny.illustration
              </a>
            </div>
            <h3 className="concept-title">Illustration Concept</h3>
            <p>
              温かみのある手描き風のイラストで、お二人らしさを大切にした作品を制作します。<br />
              シンプルながらも個性が光る、世界に一つだけの特別なイラストをお届けします。
            </p>
            <Link to="/about" className="read-more">Read more</Link>
          </div>
          <div className="about-image">
            <img src={aboutImage} alt="イラストレーターの写真" />
          </div>
        </div>
      </section>

      <section className="works-preview" id="works-section">
        <h2>Works</h2>
        <p>過去の作品を紹介しています。</p>
        <p>作品をクリックしていただくとイラストに込めた想いやこだわりポイントもご覧いただけます。</p>
        <div className="works-carousel">
          <Slider {...carouselSettings}>
            {worksData.map((work, index) => (
              <div 
                className="carousel-item" 
                key={index}
                onClick={() => openWorksModal(work.image, work.title, work.description, work.category)}
              >
                <img src={work.image} alt={work.title} />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="voice-preview" id="voice-section">
        <h2>Voice</h2>
        <p>お客様から頂いたお写真や感謝のお言葉を掲載させていただいています。</p>
        <div className="voice-carousel">
          <Slider {...voiceSliderSettings}>
            {voiceData.map((voice, index) => (
              <div 
                className="carousel-item" 
                key={index}
                onClick={() => openVoiceModal(voice.image, voice.title, voice.description, voice.category)}
              >
                <img src={voice.image} alt={voice.title} />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="service-preview" id="service-section">
        <h2>SERVICE</h2>
        <div className="service-content">
          <div className="service-menu">
            <h3>Menu</h3>
            <ul className="service-list">
              <li>○ウェディングイラスト：¥3,000〜</li>
              <li>○結婚証明書：¥6,500〜</li>
            </ul>
            <p className="service-note">
              ※こちらはデータ納品でのお値段です。印刷までをご希望の方は別途料金がかかります。<br />
              InstagramのDMよりご相談ください。
            </p>
          </div>
          
          <div className="service-example">
            <div className="service-image">
              <img src={service1} alt="ウェディングイラスト例" />
            </div>
            <div className="service-info">
              <h3>ウェディングイラスト</h3>
              <p className="service-description">
                オーダーメイドでイラストをお描きします。ウェルカムボードやサンキューカードに人気です。
              </p>
              <Link to="/service/wedding-illustration" className="service-read-more">Read more</Link>
            </div>
          </div>
          
          <div className="service-example">
            <div className="service-image">
              <img src={service2} alt="結婚証明書例" />
            </div>
            <div className="service-info">
              <h3>結婚証明書</h3>
              <p className="service-description">
                お二人だけの特別な結婚証明書をデザインします。思い出に残る一生の宝物になります。
              </p>
              <Link to="/service/marriage-certificate" className="service-read-more">Read more</Link>
            </div>
          </div>
          
          <div className="order-step">
            <h2>HOW TO ORDER</h2>
            <div className="order-steps">
              {orderSteps.map((step, index) => (
                <OrderStep
                  key={index}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  image={step.image}
                  isLast={index === orderSteps.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQセクション */}
      <section className="faq-section" id="faq-section">
        <h2>
          FAQ
          <span className="faq-subtitle">- よくあるご質問 -</span>
        </h2>
        <div className="faq-container">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFAQ === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
        <div className="faq-contact">
          <p>
            その他ご不明な点がございましたら、<br />
            InstagramのDMよりお問い合わせください！
          </p>
        </div>
      </section>

      {/* 外部モーダルコンポーネントを使用 */}
      <WorksModal
        isOpen={worksModalOpen}
        onClose={closeWorksModal}
        image={worksModalContent.image}
        title={worksModalContent.title}
        description={worksModalContent.description}
        category={worksModalContent.category}
      />

      <VoiceModal
        isOpen={voiceModalOpen}
        onClose={closeVoiceModal}
        image={voiceModalContent.image}
        title={voiceModalContent.title}
        description={voiceModalContent.description}
        category={voiceModalContent.category}
      />
    </div>
  );
};

export default Home; 