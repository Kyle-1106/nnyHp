import React, { useEffect } from 'react';
import './About.css';
import aboutImage from '../assets/about/about-profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const About: React.FC = () => {
  // コンポーネントがマウントされたときに画面の一番上にスクロール
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, []);

  return (
    <div className="about-container">
      <h1 className="about-title">About</h1>
      <section className="about-section">
        <div className="about-profile">
          <div className="profile-image">
            <img src={aboutImage} alt="イラストレーターの写真" />
          </div>
          <div className="profile-text">
            <h2>nayu</h2>
            <div className="profile-details">
              <div className="profile-item">
                <h3>▶ 誕生日</h3>
                <p>2000年1月</p>
              </div>
              
              <div className="profile-item">
                <h3>▶ 出身地</h3>
                <p>福岡出身、福岡在住</p>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://www.instagram.com/nny.illustration/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} /> Instagram: @nny.illustration
              </a>
              <a href="https://www.tiktok.com/@nny.illustration" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTiktok} /> TikTok: @nny.illustration
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="concept-section">
        <h2>▶ イラストを始めたキッカケ</h2>
        <div className="concept-content">
          <p>
            家族やお世話になった方、友人などに送るイラストを、色んな場面で描いてきました。
          </p>
          <p>
            そして、私が生み出したモノで誰かが「笑顔」に、「シアワセ」になる瞬間がダイスキでした。
          </p>
          <p>
            だから、もっと多くの方の「シアワセ」に花を添えたい！
          </p>
          <p>
            そんな想いで、改めてイラストを描き始めました。
          </p>
          <p>
            私のイラストを見た人が笑顔になってくれたら、とっても嬉しいです♪
          </p>
        </div>
      </section>
      
      <section className="concept-section">
        <h2>▶ nayuのイラストは…</h2>
        <div className="concept-content">
          <p>
          デフォルメだけどどこか似ているイラストになったアナタに、
          </p>
          <p>
          きっと愛着が湧いちゃう "キャラクターチック" なイラストと、
          </p>
          <p>
          "オトナカワイイ" を意識した、甘すぎず・シックすぎずなカラーリングで、
          </p>
          <p>
          ずっとアナタの側に寄り添い続ける、愛おしいイラストを心を込めてお描きします。
          </p>
          <p>
          描かせていただいたイラストが、皆さまの日々に寄り添う宝物になれば嬉しいです…♡
          </p>
        </div>
      </section>
    </div>
  );
};

export default About; 