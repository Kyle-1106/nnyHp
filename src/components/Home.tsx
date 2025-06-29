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
import illust7 from '../assets/home/illustrations/illust7.png';
import illust8 from '../assets/home/illustrations/illust8.png';
import illust9 from '../assets/home/illustrations/illust9.png';
import illust10 from '../assets/home/illustrations/illust10.png';
import illust11 from '../assets/home/illustrations/illust11.png';
// Voice画像のインポート
import voice1 from '../assets/home/voices/voice1.png';
import voice2 from '../assets/home/voices/voice2.png';
import voice3 from '../assets/home/voices/voice3.png';
import voice4 from '../assets/home/voices/voice4.png';
import voice5 from '../assets/home/voices/voice5.png';
import voice6 from '../assets/home/voices/voice6.png';
import voice7 from '../assets/home/voices/voice7.png';
import voice8 from '../assets/home/voices/voice8.png';
import voice9 from '../assets/home/voices/voice9.png';
import voice10 from '../assets/home/voices/voice10.png';
import voice11 from '../assets/home/voices/voice11.png';
import voice12 from '../assets/home/voices/voice12.png';
import voice13 from '../assets/home/voices/voice13.png';
import voice14 from '../assets/home/voices/voice14.png';
import voice15 from '../assets/home/voices/voice15.png';
import voice16 from '../assets/home/voices/voice16.png';
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
  answer: React.ReactNode;
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
    <div className="flow-step">
      <div className="step-number">{number}</div>
      <div className="step-details">
        <h3>{title}</h3>
        <p>{description}</p>
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [starsVisible, setStarsVisible] = useState(false);
  
  // FAQの状態管理
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  // Worksモーダルの状態管理
  const [worksModalOpen, setWorksModalOpen] = useState(false);
  const [worksModalContent, setWorksModalContent] = useState({
    image: '',
    title: '',
    description: '',
    highlightPoints: [] as string[]
  });
  
  // Voiceモーダルの状態管理
  const [voiceModalOpen, setVoiceModalOpen] = useState(false);
  const [voiceModalContent, setVoiceModalContent] = useState({
    image: '',
    title: '',
    description: '',
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
  const openWorksModal = (image: string, title: string, description: string, highlightPoints: string[]) => {
    console.log("モーダルを開きます:", image, title, description);
    setWorksModalContent({ image, title, description, highlightPoints });
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
      });
      setVoiceModalOpen(true);
    }
  };
  
  // Voiceモーダルを閉じる関数
  const closeVoiceModal = () => {
    console.log("Voiceモーダルを閉じます");
    setVoiceModalOpen(false);
  };
  
  // コンポーネントがマウントされたときに画面の一番上にスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // 星を生成する関数
  const generateStars = () => {
    const stars = [];
    const hero = heroRef.current;
    if (!hero) return [];
    
    const heroWidth = hero.offsetWidth;
    const heroHeight = hero.offsetHeight;
    
    // 通常の星
    for (let i = 0; i <35; i++) {
      // 星のサイズをよりバリエーション豊かに
      const size = Math.random() * 3.5 + 0.5;
      const left = Math.random() * heroWidth;
      const top = Math.random() * heroHeight * 0.8; // 上部80%に配置
      
      stars.push(
        <div
          key={`star-${i}`}
          className={`star ${starsVisible ? 'visible' : ''}`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}px`,
            top: `${top}px`
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
      description: "公式ラインよりお問い合わせください。ご希望のデザインや内容、納期などをお伝えください。",
      image: orderStep1
    },
    {
      number: "2",
      title: "お見積り・ご契約",
      description: "ご要望に基づいてお見積りをご提示します。ご納得いただけましたら、契約内容の確認と入金をお願いします。",
      image: orderStep2
    },
    {
      number: "3",
      title: "デザイン案作成",
      description: "おふたりのイメージに合わせたデザイン案を作成し、ご確認いただきます。",
      image: orderStep3
    },
    {
      number: "4",
      title: "修正・確定",
      description: "デザイン案に対するご要望があれば修正し、最終デザインを確定します。",
      image: orderStep4
    },
    {
      number: "5",
      title: "納品",
      description: "完成したイラストをデータまたは印刷物でお届けします。",
      image: orderStep5
    }
  ];
  
  // FAQデータ
  const faqData = [
    {
      question: "注文から納品までどのくらいの期間がかかりますか？",
      answer: "通常、ご注文確定から3週間程度でデータ納品となります。印刷をご希望の場合は、さらに2~3週間ほどお時間をいただいております。お急ぎの場合はお問い合わせください。"
    },
    {
      question: "支払い方法は何がありますか？",
      answer: "先払いの銀行振込、また、手数料に関しましてはお客様ご負担でお願いしております。"
    },
    {
      question: "キャンセルはできますか？",
      answer: (
        <>
          ご入金前であればキャンセル可能です。詳しくはキャンセルポリシーをご確認ください。
          
          <Link to='/policy' className='policy-link'>→ キャンセルポリシーはこちら</Link>
        </>
      )
    },
    {
      question: "修正は可能ですか？",
      answer: "はい、修正は可能です。完成イラストに対して、色味や細部の調整など、2回までの修正を無料で承っております。大幅な変更や追加の修正については、別途料金が発生する場合があります。"
    },
    {
      question: "前撮りなどをしてなくて、写真がないです・・写真がないと描けないですか？",
      answer: "お写真がなくても大丈夫です！\n\n以下の3点をご準備ください。\n\n・おふたりのお顔が分かるお写真\n（お写真とは違う髪型でのイラストをご希望の場合は、髪型のイメージ画像も併せて送ってください）\n\n・ドレス、タキシードなど服装のイメージ写真\n（拾い画などでもOKです）\n\n・ポーズのイメージ写真\n（過去のイラストから選んでいただいてもOKですし、拾い画のお写真などでもOK）"
    },
    {
      question: "全身のイラストしかダメですか？",
      answer: "全身でなくてもOKです！\n上半身のみでもカワイくまとまるように、ご提案、お話し合い、させていただきます！"
    }
  ];
  
  // Worksデータ
  const worksData = [
    {
      image: illust7,
      title: "お写真のクールな印象を残しつつイラストでかわいさをプラス！",
      description: "前撮りのお写真をそのままイラストにして、ゲストの皆様も「写真のおふたりがイラストになってる！」と思わず愛着が湧いちゃうはず...♡",
      highlightPoints: [
        "お写真のポーズをそのままに再現！イラストになったかわいいおふたりです。",
        "ドレスとタキシードの柄も再現しました。"
      ]
    },
    {
      image: illust9,
      title: "おふたりのかわいらしい雰囲気を大切に…",
      description: "キャラクターぽくなったイラストのおふたりが、おふたりの雰囲気をよりゲストの皆様に伝えてくれます。",
      highlightPoints: [
        "お写真を元に、イラストならではの目線を合わせたちょっぴりお茶目さをプラス！",
        "おふたりのかわいらしいあたたかな雰囲気も残しつつ、愛らしいイラストに仕上げました。"
      ]
    },
    {
      image: illust8,
      title: "セルフ前撮りの楽しい雰囲気をそのままイラストに！",
      description: "ゲストの皆様におふたりの楽しくて明るい雰囲気が伝わるよう、いただいたお写真を見ながら、表情やポーズにこだわって書かせていただきました。",
      highlightPoints: [
        "お写真から溢れるおふたりの雰囲気を大切に、イラストを仕上げました!",
        "前撮りのカワイイ衣装もそのままイラストに再現しています！"
      ]
    }, 
    {
      image: illust11,
      title: "憧れのお姫様抱っこをイラストに！",
      description: "イラストならお姫様抱っこの姿を結婚式後にずっとお家に飾っておいても恥ずかしくありません！ずっとおふたりの仲良しが続きますように！",
      highlightPoints: [
        "前撮りのお姫様抱っこのお写真をもとに、全身が見えるイラストを作成しました。",
        "目線を合わせたりブーケを持たせたり、キャラクターちっくなイラストに仕上げました。"
      ]
    },
     {
      image: illust10,
      title: "試着のお写真から、カワイイイラストに！",
      description: "前撮り写真がなくても「ご希望のポーズ」「試着のお写真」「お顔のわかるお写真」を送っていただき、イラストにできます！",
      highlightPoints: [
        "カメラマンのご主人の手には、カメラを持たせて欲しい！という花嫁さまのカワイイ要望にもお応えさせていただきました！",
      ]
    },
    {
      image: illust1,
      title: "ブラックスタイルもカワイく！",
      description: "ブラックスタイルもキャラクターチックなカワイイイラストに\n\nまた、サングラスの下の表情もしっかりと描き込んでいるので、サングラスから透けて見えるおふたりの目もしっかりと特徴を捉えています",
      highlightPoints: [
        "シックなスタイルもカワイイを忘れないイラストとカラーリング",
        "おふたりの特徴を捉えたイラスト"
      ]
    },
    {
      image: illust2,
      title: "こだわりの前撮り衣装を思い出に残す",
      description: "おふたりのこだわりの前撮り衣装を忠実に描かせていただきました\n\n背景の色味は少し落ち着いた「オトナカワイイ」印象に\n\n前撮りを行われていた遊園地の要素としてメリーゴーランドもポイントで加えました",
      highlightPoints: [
        "こだわった前撮り衣装を忠実に再現",
        "「オトナカワイイ」なカラーリング"
      ]
    },
    {
      image: illust3,
      title: "おふたりの趣味やお気に入りのアイテムを取り入れて...",
      description: "ブーケは前撮りで実際に持たれていた物そっくりに仕上げ、おふたりが野球ファンということで、新郎さまの手にはグローブを描くことで、おふたりらしさがグッとアップしました\n\n春という結婚式の日取りと新婦さまの持つブーケの色味と合わせたカラーリングの背景もこだわりポイントです",
      highlightPoints: [
        "趣味のアイテムを取り入れておふたりらしさをアップ",
        "カラーリングのこだわり"
      ]
    },
    {
      image: illust4,
      title: "愛するペットとのイラストもお任せください",
      description: "お写真をもとに少しだけポーズを変えて、キャラクター感のあるイラストに仕上げました\n\nイラストにするお写真を迷われてる方や、複数の候補がある場合も1番カワイく仕上がるよう、お話し合いをさせていただきます\n\nまた、写真撮影で少し緊張気味に見えるワンちゃんの表情も忠実に再現させていただきました\n\nそして、ドレスの刺繍もこだわって描かせていただきました",
      highlightPoints: [
        "イラストのタッチも活かしつつ、おふたりの叶えたいポーズで",
        "ペットの表情にもこだわって"
      ]
    },
    {
      image: illust5,
      title: "思い出の場所と思い入れのあるドレス…",
      description: "思い出の前撮りロケーションを背景に描き、おふたりが際立つ色味に調整しました\n\nお母様の手作りドレスの思い出もイラストに閉じ込めるように、レース刺繍も丁寧に描き込みました",
      highlightPoints: [
        "背景には思い出の場所を",
        "ドレスの刺繍は妥協のない描き込み"
      ]
    },
    {
      image: illust6,
      title: "お写真では叶えられなかったシチュエーションをイラストで叶える",
      description: "月の上に乗って、こだわって選んだお気に入りのドレスとタキシード\n\nロマンチックなシチュエーションをイラストで叶える",
      highlightPoints: [
        "お写真では叶えられなかったシチュエーションを叶えたイラスト",
        "こだわって選んだ衣装を着たおふたりをカワイイイラストに"
      ]
    }
  ];
  
  // Voiceデータ
  const voiceData = [
    {
      id: "E",
      image: voice9,
      title: "ウェルカムボード&サンキューカード",
      description: "丁寧な打ち合わせとスピード感、あたたかいメッセージの数々に感動でございます。あとはセンスの良さ全てに脱帽でございます。またご縁がありましたら、よろしくお願いします。必ずこの先ももっと忙しくなるでしょうし、もっと売れると断言できます！！今このタイミングでなゆさんと出会えたことに感謝いたします！！プチギフトにサンキューカード入れておしゃれで高見えしていい感じになりました！本当にありがとうございました！",
      images: [voice9, voice10]
    },
    {
      id: "F",
      image: voice11,
      title: "サンキューカード",
      description: "サンキュータグ、友人から大好評でした！ありがとうございました！",
      images: [voice11]
    },
    {
      id: "G",
      image: voice12,
      title: "ウェルカムボード&サンキューカード",
      description: "とても可愛くでゲストから大好評でした！また何か機会がありましたら、お願いさせてください〜！",
      images: [voice12, voice13]
    },
    {
      id: "H",
      image: voice14,
      title: "ウェルカムボード、プロフィールブック＆プロフィールムービー",
      description: "カワイイです！ウェルカムボード、プロフィールブックの裏表紙、プロフィールムービーの途中にも使わせていただきました！",
      images: [voice14, voice15, voice16]
    },

    {
      id: "A",
      image: voice1,
      title: "ウェルカムボード&サンキューカード",
      description: "なゆさん、素敵なイラストを本当にありがとうございました！\nおかげでとっても可愛い結婚式になりました！\nまた機会があればよろしくお願いします！\nこれからも可愛いイラスト投稿楽しみにしてます！",
      images: [voice1, voice2]
    },
    {
      id: "B",
      image: voice3,
      title: "ウェルカムボード&プロフィールブック",
      description: "めちゃくちゃ可愛くて\n2人でテンション上がってました！！\n\nドレスの裾が透けててほんとに可愛くてお気に入りです！\n裾のところめちゃくちゃ個人的に好きだったので、\nしっかり再現されててすごく嬉しいです！！\n\n絶対に同じポーズで写真撮りたいと思って、\n介添えの人にずっとお願いしてました！\n\nプロフィールブックにも使わせていただきました！\nいろんな人からかわいい！って言ってもらえて、\n大好評でした！！！\n本当にありがとうございました！！",
      images: [voice3, voice4, voice5]
    },
    {
      id: "C",
      image: voice6,
      title: "ウェルカムボード&サンキューシール",
      description: "丁寧に対応してくださって感謝でいっぱいです！\n息子も入れたイラストを描いていただくのが夢だったので、\nこういった形で描いていただけて本当に嬉しいです！\n\n無事結婚式終びました！\nサンキューシールとウェルカムボードに使わせていただきました！\n友達だけじゃなくてプランナーさんにまで\n「この絵誰ですね！似顔絵？可愛い！」って言って貰えました！\n\nなゆさんの絵可愛すぎて本当に書いていただけて嬉しかったです！",
      images: [voice6, voice7]
    },
    {
      id: "D",
      image: voice8,
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
        moon.style.transform = 'translateY(-10px)'; // 上に配置
      }, 500);

      // 星を表示
      setTimeout(() => {
        setStarsVisible(true);
      }, 1000);
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
          <div className="about-image">
            <img src={aboutImage} alt="イラストレーターの写真" />
          </div>
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
            </p>
            <p className="concept-text">皆さまの「特別な日」だけでなく「何気ない日々」にも"甘い魔法"をかけるように、
願いを込めて…</p>
            <Link to="/about" className="read-more">Read more</Link>
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
                onClick={() => openWorksModal(work.image, work.title, work.description, work.highlightPoints)}
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
                おふたりだけの特別な結婚証明書をデザインします。思い出に残る一生の宝物になります。
              </p>
              <Link to="/service/marriage-certificate" className="service-read-more">Read more</Link>
            </div>
          </div>
          
          <div className="order-step">
            <h2>HOW TO ORDER</h2>
            <div className="flow-content">
              <div className="flow-steps">
                <div className="flow-step">
                  <div className="step-number">1</div>
                  <div className="step-details">
                    <h3>お問い合わせ</h3>
                    <p><a href="https://lin.ee/lnouLVW" className="line-link" target="_blank" rel="noopener noreferrer">公式ライン</a>よりお問い合わせください。ご希望のデザインや内容、納期などをお伝えください。</p>
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
            <a href="https://lin.ee/lnouLVW" className="line-link" target="_blank" rel="noopener noreferrer">公式ライン</a>よりお問い合わせください！
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
        highlightPoints={worksModalContent.highlightPoints}
      />

      <VoiceModal
        isOpen={voiceModalOpen}
        onClose={closeVoiceModal}
        image={voiceModalContent.image}
        title={voiceModalContent.title}
        description={voiceModalContent.description}
        images={voiceModalContent.images}
      />
    </div>
  );
};

export default Home; 