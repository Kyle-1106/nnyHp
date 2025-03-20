import React from 'react';
import './About.css';
import aboutImage from '../assets/about/about-profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About</h1>
      <section className="about-section">
        <div className="about-profile">
          <div className="profile-image">
            <img src={aboutImage} alt="イラストレーターの写真" />
          </div>
          <div className="profile-text">
            <h2>nny.illustration</h2>
            <div className="profile-details">
              <div className="profile-item">
                <h3>▶ 誕生日</h3>
                <p>2000年1月</p>
                <p className="profile-detail">早生まれで分からなくなるけど、学年は1999年の代です！</p>
              </div>
              
              <div className="profile-item">
                <h3>▶ 出身地</h3>
                <p>福岡出身、福岡在住</p>
                <p className="profile-detail">無自覚で博多弁が出ます…</p>
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
            だから、もっと多くの方の「シアワセ」に華を添えたい！
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
            『デフォルメだけど、ポップすぎない。
          </p>
          <p>
            デフォルメだけど、なんとなく似てて愛おしい。』
          </p>
          <p>
            そんなイラストをお届けします♡
          </p>
          <p>
            そして、書かせていただいたイラストが、
          </p>
          <p>
            皆さまの思い出の宝物になれば嬉しいです…♡
          </p>
        </div>
      </section>
    </div>
  );
};

export default About; 