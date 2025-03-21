import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import topImage from '../assets/home/top.png';
import aboutImage from '../assets/home/about.webp';
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
      <div className="step-content">
        <div className="step-number">{number}</div>
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

  });
  
  // Voiceモーダルの状態管理
  const [voiceModalOpen, setVoiceModalOpen] = useState(false);
  const [voiceModalContent, setVoiceModalContent] = useState({
    image: '',
    title: '',
    description: '',
    category: '',
    images: [] as string[]
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
  const openWorksModal = (image: string, title: string, description: string
  ) => {
    console.log("モーダルを開きます:", image, title, description);
    setWorksModalContent({ image, title, description});
    setWorksModalOpen(true);
  };
  
  // Worksモーダルを閉じる関数
  const closeWorksModal = () => {
    console.log("モーダルを閉じます");
    setWorksModalOpen(false);
  };
  
  // Voiceモーダルを開く関数
  const openVoiceModal = (personId: string) => {
    const person = voiceData.find(v => v.id === personId);
    if (person) {
      console.log("Voiceモーダルを開きます:", person.id, person.title);
      setVoiceModalContent({
        image: person.image,
        title: person.title,
        description: person.description,
        images: person.images,
        category: person.category
      });
      setVoiceModalOpen(true);
    }
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
    for (let i = 0; i < 20; i++) {
      // 星のサイズをよりバリエーション豊かに
      const size = Math.random() * 3.5 + 0.5;
      const left = Math.random() * heroWidth;
      const top = Math.random() * heroHeight * 0.8; // 上部80%に配置
      // アニメーションの遅延をより分散
      const delay = Math.random() * 5;
      // アニメーションの持続時間もバリエーション豊かに
      const duration = Math.random() * 3 + 2;
      // ランダムで輝く強さも変える
      const opacity = 0.2 + Math.random() * 0.4;
      
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
            animationDuration: `${duration}s`,
            opacity: opacity
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
      title: "ブラックスタイルもカワイく！",
      description: "• ブラックスタイルもキャラクターチックなカワイイイラストに\n\n• サングラスの下も表情もしっかり描き込んでいるので、サングラスから透けて見えるおふたりの目がキュート",
    },
    {
      image: illust2,
      title: "こだわりの前撮り衣装を思い出に残す",
      description: "• 前撮りで着たポップな衣装をイラストに残しました。色味もこだわって忠実に再現。\n\n• 背景の色味は落ち着いた色味で、オシャレ感を演出",
    },
    {
      image: illust3,
      title: "おふたりの趣味やお気に入りのアイテムを取り入れて...",
      description: "• フーケは前撮りで実際に持っていた物そっくりに\n\n• おふたりが野球ファンとの事で、新郎さまの左手にはグロープを\n\n• 結婚式の日取りに合わせた春らしさとフーケの色味\n\nに合わせた、オレンジとピンクの淡いチェック柄",
    },
    {
      image: illust4,
      title: "愛するペットとのイラストもお任せください",
      description: "• お写真を元に少しポーズを変えて、キャラクター感のあるイラストに\n\n• 写真撮影で少し緊張ぎみのワンちゃんの表情も忠実に再現\n\n• ドレスのレース刺繍も丁寧に描き込み",
    },
    {
      image: illust5,
      title: "思い出の場所と思い入れのあるドレス…",
      description: "• 前撮りのロケーションを背景に。おふたりが際立つ色味に調整しました。\n\n• お母様の手作りドレスの思い出もイラストに閉じ込めるように、レース刺繍も丁寧に描き込み",
    },
    {
      image: illust6,
      title: "お写真では叶えられなかったシチュエーションをイラストで叶える",
      description: "月の上に乗って、こだわって選んだお気に入りのドレスとタキシード。\nロマンチックなシチュエーションをイラストで叶える。",
    }
  ];
  
  // Voiceデータ
  const voiceData = [
    {
      id: "A",
      image: voice1,
      category: "Aさま",
      title: "ウェルカムボード&サンキューカード",
      description: "なゆさん、素敵なイラストを本当にありがとうございました！\nおかげでとっても可愛い結婚式になりました！\nまた機会があればよろしくお願いします！\nこれからも可愛いイラスト投稿楽しみにしてます！",
      images: [voice1, voice2]
    },
    {
      id: "B",
      image: voice3,
      category: "Bさま",
      title: "ウェルカムボード&プロフィールブック",
      description: "めちゃくちゃ可愛くて\n2人でテンション上がってました！！\n\nドレスの裾が透けててほんとに可愛くてお気に入りです！\n裾のところめちゃくちゃ個人的に好きだったので、\nしっかり再現されててすごく嬉しいです！！\n\n絶対に同じポーズで写真撮りたいと思って、\n介添えの人にずっとお願いしてました！\n\nプロフィールブックにも使わせていただきました！\nいろんな人からかわいい！って言ってもらえて、\n大好評でした！！！\n本当にありがとうございました！！",
      images: [voice3, voice4, voice5]
    },
    {
      id: "C",
      image: voice6,
      category: "Cさま",
      title: "ウェルカムボード&サンキューシール",
      description: "丁寧に対応してくださって感謝でいっぱいです！\n息子も入れたイラストを描いていただくのが夢だったので、\nこういった形で描いていただけて本当に嬉しいです！\n\n無事結婚式終びました！\nサンキューシールとウェルカムボードに使わせていただきました！\n友達だけじゃなくてプランナーさんにまで\n「この絵誰ですね！似顔絵？可愛い！」って言って貰えました！\n\nなゆさんの絵可愛すぎて本当に書いていただけて嬉しかったです！",
      images: [voice6, voice7]
    },
    {
      id: "D",
      image: voice8,
      category: "Dさま",
      title: "ウェルカムボード",
      description: "ありがとうございます！\n旦那と2人で絶賛してます！！\n写真と比較してそのまますごすごいです顔は可愛くしてもらって感謝です",
      images: [voice8]
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
            <h3>nayu</h3>
            <p>
              福岡市出身、福岡市在住。<br />
              イラストレーターとして活動中。<br />
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
            <p className="concept-subtitle">
            「いつまでも甘いトキメキを忘れないように…」</p>
            <p>
イラストになったアナタに、きっと愛着が湧いちゃう "キャラクターチック" なイラストと、
"オトナカワイイ" を意識した、甘すぎず・シックすぎずなカラーリングで、
ずっとアナタの側に寄り添い続ける、愛おしいイラストを心を込めてお描きします。
<br />
<p className="concept-text">皆さまの「特別な日」だけでなく「何気ない日々」にも"甘い魔法"をかけるように、
願いを込めて…</p>


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
                onClick={() => openWorksModal(work.image, work.title, work.description)}
              >
                <img src={work.image} alt={work.title} />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="voice-preview" id="voice-section">
        <h2>Voice</h2>
        <p className="voice-subtitle">お客様から頂いたお写真や感謝のお言葉を掲載させていただいています。</p>
        <div className="voice-carousel">
          <Slider {...voiceSliderSettings}>
            {voiceData.map((voice) => (
              <div 
                className="carousel-item" 
                key={voice.id}
                onClick={() => openVoiceModal(voice.id)}
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
      />

      <VoiceModal
        isOpen={voiceModalOpen}
        onClose={closeVoiceModal}
        image={voiceModalContent.image}
        title={voiceModalContent.title}
        description={voiceModalContent.description}
        images={voiceModalContent.images}
        category={voiceModalContent.category}
      />
    </div>
  );
};

export default Home; 